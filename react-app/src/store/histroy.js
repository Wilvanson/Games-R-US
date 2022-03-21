const LOAD_HISTORY = 'history/loadHistory';

const loadHistory = items => {
    return {
      type: LOAD_HISTORY,
      items
    }
}

export const getHistory = (id) => async dispatch => {
    const response = await fetch(`/api/users/${id}/history`);
  
    if (response.ok) {
      const list = await response.json();
      dispatch(loadHistory(list));
    }
  };


  const initialState = {
    items: []
  };

export default function historyReducer(state = initialState, action) {
    let newState
    switch (action.type) {
        case LOAD_HISTORY:
            newState = {...state}
            newState.items = []
            action.items.items.map((item) => {
                newState.items.push(item)
            })
            return newState
        default:
      return state;
  }
}