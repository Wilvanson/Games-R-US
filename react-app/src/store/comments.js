const LOAD_COMMENT = 'item/loadComment';
const ADD_COMMENT = 'item/addComment';
const EDIT_COMMENT = 'item/editComment';
const REMOVE_COMMENT = 'item/removeComment';

const addComments = list => {
    return {
      type: ADD_COMMENT,
      list
    };
  };

  const loadComment = list => {
    return {
      type: LOAD_COMMENT,
      list
    };
};

const removeComment = id => {
    return {
      type: REMOVE_COMMENT,
      id
    };
};

const edit_Comment = list => {
    return {
      type: EDIT_COMMENT,
      list
    };
};

  export const getComments = (id) => async dispatch => {
    const response = await fetch(`/api/items/${id}/comments`);
  
    if (response.ok) {
      const list = await response.json();
      dispatch(loadComment(list));
    }
  };

  export const addComment = (newComment) => async dispatch => {
    const response = await fetch(`/api/items/${newComment.item_id}/comments`,{
      method:"POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({newComment})
    });
  
    if (response.ok) {
      const comment = await response.json();

      dispatch(addComments(comment));
      return comment;
    }
  };

  export const editComment = (comment) => async dispatch => {
      const body = comment.description
    const response = await fetch(`/api/items/${comment.item_id}/comments/${comment.id}/edit`,{
      method:"POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({body})
    });
  
    if (response.ok) {
      const comment = await response.json();
    
      dispatch(edit_Comment(comment));
      return comment;
    }
  };

  export const deleteComment = (comment) => async dispatch => {
      const id = comment.id;
      const idd = comment.item_id
    const response = await fetch(`/api/items/${comment.item_id}/comments/${comment.id}/delete`,{
      method:"POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({id})
    });
  
    if (response.ok) {
      const ids = await response.json();
      
      dispatch(removeComment(ids.id));
      return idd
    }
  };

  const initialState = {
    list: []
  };

  const commentReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_COMMENT:
            let newState = {...state}
            newState.list = []
            action.list.comments.map((comment) => {
                newState.list.push(comment)
            })
            return newState
        case ADD_COMMENT:
            let newStat = {...state}
            newStat.list.push(action.list)
            return newStat
        case EDIT_COMMENT:
            let newStatt = {...state}
            let lii = newStatt.list.filter(comment => comment.id !== action.list.id);
            lii.push(action.list)
            return newStatt
        case REMOVE_COMMENT:
            let newStates = {...state}
            let li = newStates.list.filter(comment => comment.id !== action.id);
            newStates.list = li;
          return newStates
      default:
        return state;
    }
  };
  
  export default commentReducer;