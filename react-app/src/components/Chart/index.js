import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, NavLink} from 'react-router-dom';
import { getChart } from '../../store/chart';


const ChartPage = () => {
    const userId = useSelector((state) => state.session.user.id);
    const items = useSelector((state) => state.chartReducer.items)
    const dispatch = useDispatch(); 
    useEffect(() => {
        (async() => {
            await dispatch(getChart(userId));
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
  
  export default ChartPage;