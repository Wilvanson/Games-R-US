const ALL_ITEMS = 'item/ALL_ITEMS';
const GET_ITEM = 'item/GET_ITEM';

const allItem = (items) => ({
  type: ALL_ITEMS,
  items
});

const getItem = (item) => ({
  type: GET_ITEM,
  item
})


export const all_item = () => async (dispatch) => {
    const response = await fetch('/api/items/', {
        headers: {
            'Content-Type': 'application/json'
    }
});
if (response.ok) {
    const data = await response.json();
    dispatch(allItem(data));
}
}

export const get_item = (id) => async (dispatch) => {
    const response = await fetch(`/api/items/${id}`, {
        headers: { "Content-Type": "application/json" }
});
if (response.ok) {
    const data = await response.json();
    console.log(data)
    dispatch(getItem(data));
}
}





const initialState = {items:[], currentItem: {}};

export default function itemreducer(state = initialState, action) {
    let newState
    switch (action.type) {
        case ALL_ITEMS:
            newState = {...state}
            newState.items = []
            action.items.items.map((item) => {
                newState.items.push(item)
            })
            return newState
        case GET_ITEM:
            newState = {...state}
            if(action.item !== 0){
                newState.currentItem = action.item
            }else{
                newState.currentItem = 0
            }
            return newState
    default:
      return state;
  }
}
