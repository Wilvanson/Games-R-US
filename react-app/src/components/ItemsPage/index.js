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
      <div>
          <h2>List</h2>
          {items.map((item) =>
          <div>
          <NavLink to={`/items/${item.id}`} key={item.id} >
            <h2 className="links">{item.name}</h2>
          </NavLink>
            <img src={`${item.image}`}/>
          </div>
          )}
      </div>
    );
  };
  
  export default ItemPage;