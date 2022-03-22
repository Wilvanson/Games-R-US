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
    const [errors, setError] = useState([]);

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

    const handlebody = (e)=>{
      setError([])
      if(body.length > 300){
        let er = []
        er.push("this text is mush be less than 300 characters")
        setError(er)
      }
      setBody(e.target.value)
    }
    
    return (
        <div>
      <h1>COMMENT</h1>
      <ul>
            {errors.map((error, idx) => <li key={idx}>{error}</li>)}
          </ul>
      <form onSubmit={handleSubmit}>
      <label>
          YOUR COMMENT:
          <input
            type="text"
            value={body}
            onChange={handlebody}
            required
          />
        </label>
        <button type="submit" className="b" disabled={errors.length === 0 ? false : true}>DONE</button>
        <button onClick={handleStop} className="b">CANCEL</button>
      </form>
    </div>
    )
}

export default CommentFrom;