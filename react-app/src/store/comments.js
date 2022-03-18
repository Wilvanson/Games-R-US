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

  
  export default function commentReducer(state = initialState, action) {
    let newState
    switch (action.type) {
      case LOAD_COMMENT:
          newState = {...state}
          newState.list = []
          action.list.comments.map((comment) => {
              newState.list.unshift(comment)
          })
          return newState
        case ADD_COMMENT:
          newState = {...state}
          newState.list.unshift(action.list)
          return newState
        case EDIT_COMMENT:
          newState = {...state}
          let lii = newState.list.filter(comment => comment.id !== action.list.id);
          lii.unshift(action.list)
          return newState
        case REMOVE_COMMENT:
          newState = {...state}
          let li = newState.list.filter(comment => comment.id !== action.id);
          newState.list = li;
          return newState
    default:
      return state;
  }
}