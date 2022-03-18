const LOAD_CHART = 'chart/loadChart';
const ADD_CHART = 'chart/addChart';
const REMOVE_CHART = 'chart/removeChart';

const addChart = item => {
    return {
      type: ADD_CHART,
      item
    };
  };

  const loadChart = items => {
    return {
      type: LOAD_CHART,
      items
    };
};

const removeChart = id => {
    return {
      type: REMOVE_CHART,
      id
    };
};

  export const getChart = (id) => async dispatch => {
    const response = await fetch(`/api/users/${id}/chart`);
  
    if (response.ok) {
      const list = await response.json();
      dispatch(loadChart(list));
    }
  };

  export const addToChart = (newitem) => async dispatch => {
    const response = await fetch(`/api/users/${newitem.user_id}/chart`,{
      method:"POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({newitem})
    });
  
    if (response.ok) {
      const item = await response.json();
      console.log(item)
    //   dispatch(addChart(item));
      return item;
    }
  };


  export const deleteFromChart = (comment) => async dispatch => {
      const id = comment.id;
      const idd = comment.item_id
    const response = await fetch(`/api/users/${comment.user_id}/chart/delete`,{
      method:"POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({id})
    });
  
    if (response.ok) {
      const ids = await response.json();
      
      dispatch(removeChart(ids.id));
      return idd
    }
  };

  const initialState = {
    items: []
  };

  export default function chartReducer(state = initialState, action) {
    let newState
    switch (action.type) {
        case LOAD_CHART:
            newState = {...state}
            newState.items = []
            action.items.items.map((item) => {
                newState.items.push(item)
            })
            return newState
        case ADD_CHART:
            newState = {...state}
            newState.items.push(action.item)
            return newState
        case REMOVE_CHART:
            newState = {...state}
            let li = newState.items.filter(item => item.id !== action.id)
            newState.items = li
            return newState
    default:
      return state;
  }
}