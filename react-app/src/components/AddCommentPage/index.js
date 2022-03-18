import React, { useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { addComment } from "../../store/comments";
import { useHistory, useParams } from "react-router-dom";

function CommentFrom({ hide}){
    const userId = useSelector((state) => state.session.user.id)
    const { itemId } = useParams(); 
    const dispatch = useDispatch();
    const history = useHistory();
    const [body, setBody] = useState('');

    const handleSubmit = async(e) => {
        e.preventDefault();

        const obj = {
            user_id: userId,
            item_id: itemId,
            description: body
        }
        
        await dispatch(addComment(obj))
        hide();
      }

    const handleStop=(e)=>{
        hide();
    }
    
    return (
        <div>
      <h1>COMMENT</h1>
      <form onSubmit={handleSubmit}>
      <label>
          YOUR COMMENT:
          <input
            type="text"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          />
        </label>
        <button type="submit" className="b">DONE</button>
        <button onClick={handleStop} className="b">CANCEL</button>
      </form>
    </div>
    )
}

export default CommentFrom;