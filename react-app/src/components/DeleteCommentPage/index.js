import React, { useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteComment } from "../../store/comments";
import { useHistory, useParams } from "react-router-dom";


function DeleteCommentFrom({comment, hide}){
    const userId = useSelector((state) => state.session.user.id); 
    const dispatch = useDispatch();
    const history = useHistory();
    
    const handleSubmit = async(e) => {
        e.preventDefault();
        let id = await dispatch(deleteComment(comment))
        hide()
      }

    const handleStop=(e)=>{
        hide();
    }
    
    return (
        <div>
      <h1>DELETE</h1>
      <form onSubmit={handleSubmit} className="delete">
        <button type="submit">YES</button>
        <button onClick={handleStop}>NO</button>
      </form>
    </div>
    )
}

export default DeleteCommentFrom;