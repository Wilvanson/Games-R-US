import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, NavLink} from 'react-router-dom';
import { getChart,  deleteFromChart, buyChart} from '../../store/chart';

const ChartItemPage = ({item}) => {
    const userId = useSelector((state) => state.session.user.id);
    const items = useSelector((state) => state.chartReducer.items)
    const dispatch = useDispatch(); 
    const id = parseInt(userId)
    
    const [amount, setamount] = useState(localStorage.getItem(item.name) || 1)
    
    useEffect(() => {
        (async() => {
            await dispatch(getChart(userId));
            setamount(localStorage.getItem(item.name))
            if(!localStorage.getItem(item.name)){
              localStorage.setItem(item.name, 1)
          }
          })();
      }, [dispatch]);
    
      const removecharts = async() =>{
        localStorage.removeItem(item.name)
        await dispatch(deleteFromChart(item, id))
      }

      const handleChange = async(e) => {
        setamount(e.target.value)
        localStorage.setItem(item.name, parseInt(e.target.value))
      }
      
    

      const press = async(e)=> {
        e.preventDefault()
        return false
      }
    return (
        <div className='chart'>
        <div>
          <img src={`${item.image}`}/>
        </div>
        <div className='chart-detail'>
          <div>
            <NavLink className='links' to={`/items/${item.id}`} key={item.id} >
              <h1 >{item.name}</h1>
            </NavLink>
          </div>
          <div className='chart-button'>
            <label >
              # Of Items:    
            <input 
            type='number'
            name={item.name} 
            onChange={handleChange}
            onKeyPress={press} 
            value={localStorage.getItem(item.name) || 1}
            placeholder={1}
            min={1} 
            max={item.in_stock} />
            </label>
            <button onClick={(e) => {
                return removecharts()
            }}>REMOVE FROM CART</button>
            <p>Only {item.in_stock} are in stock</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default ChartItemPage;