import React, { useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { editComment } from "../../store/comments";

function EditFrom({comment, hide}){

    const userId = useSelector((state) => state.session.user.id);
    const { itemId } = useParams(); 
    const [body, setBody]= useState(comment.description);
    const [errors, setError] = useState([]);
    
    const dispatch = useDispatch();
    const history = useHistory();
    let form = 'EDIT';
    

    const handleSubmit = async(e) => {
        e.preventDefault();
          const obj = {
              ...comment,
              description: body
          }
        await dispatch(editComment(obj))
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
        <h1>{form}</h1>
        <form onSubmit={handleSubmit}>
          <ul>
            {errors.map((error, idx) => <li key={idx}>{error}</li>)}
          </ul>
          <p  className="ladd">Body:</p>
            <textarea
              id='body'
              type="text"
              value={body}
              onChange={handlebody}
              required
            />
          
          <button type="submit" className="b" disabled={errors.length === 0 ? false : true}>Done</button>
          <button onClick={handleStop} className="b">Cancel</button>
        </form>
    </div>
    )
}

export default EditFrom;