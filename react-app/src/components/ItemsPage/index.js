import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, NavLink} from 'react-router-dom';
import { all_item } from '../../store/item';


const ItemPage = () => {
    const items = useSelector(state => state.itemreducer.items);
    const dispatch = useDispatch(); 
    useEffect(() => {
        (async() => {
            await dispatch(all_item());
          })();
      }, [dispatch]);
    

    return (
      <div  className='pages'>
          {items.map((item) =>
          <div className='items'>
            <img src={`${item.image}`}/>
          <NavLink className='links' to={`/items/${item.id}`} key={item.id} >
            <h2>{item.name}</h2>
          </NavLink>
          </div>
          )}
      </div>
    );
  };
  
  export default ItemPage;