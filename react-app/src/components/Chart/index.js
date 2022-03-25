import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, NavLink} from 'react-router-dom';
import { getChart,  deleteFromChart, buyChart} from '../../store/chart';
import ChartItemPage from '../Chart-Item';

const ChartPage = () => {
    const userId = useSelector((state) => state.session.user.id);
    const items = useSelector((state) => state.chartReducer.items)
    const dispatch = useDispatch(); 
    const history = useHistory();
    const id = parseInt(userId)
    let len = items.length
    
    
    useEffect(() => {
      (async() => {
        await dispatch(getChart(userId));
      })();
    }, [dispatch]);
    
    
    const buying = async()=> {
        let inputs = {}
        items.map((ite) =>{
          inputs[ite.name] = parseInt(localStorage.getItem(ite.name))
        })
        localStorage.clear()
        // console.log(inputs)
        await dispatch(buyChart(id, inputs))
        history.push('/history')
      }

    return (
      <div className='your-chart'>
        <div className='first-chart'>
          {len === 0 && <h1>YOUR CART IS EMPTY</h1>}
          {len !== 0 && <h1>YOUR CART</h1>}
          {len !== 0 && <button  onClick={buying}>Checkout</button>}
          {/* <p>TOTAL: {}</p> */}
        </div>
          {items.map((item) =>
            <ChartItemPage item={item} />
          )}
      </div>
    );
  };
  
  export default ChartPage;