import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, NavLink} from 'react-router-dom';
import { getChart,  deleteFromChart, buyChart} from '../../store/chart';

const ChartItemPage = ({item}) => {
    const userId = useSelector((state) => state.session.user.id);
    const items = useSelector((state) => state.chartReducer.items)
    const dispatch = useDispatch(); 
    const id = parseInt(userId)
    if(!localStorage.getItem(item.name)){
        localStorage.setItem(item.name, 1)
    }
    const [amount, setamount] = useState(localStorage.getItem(item.name))
    
    useEffect(() => {
        (async() => {
            await dispatch(getChart(userId));
          })();
      }, [dispatch]);
    
      const removecharts = async(item) =>{

        await dispatch(deleteFromChart(item, id))
      }

      const handleChange = async(e) => {
        setamount(e.target.value)
        localStorage.setItem(e.target.name, parseInt(e.target.value))
      }
      
    //   const minis = (e) => {
    //     inputs[e.target.name]--
        
    //   }

    //   const plus = (e) => {
    //     inputs[e.target.name]++
        
    //   }

      const press = async(e)=> {
        e.preventDefault()
        return false
        // history
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
            <input 
            type='number'
            name={item.name} 
            onChange={handleChange}
            onKeyPress={press} 
            value={amount}
            placeholder={1}
            min={1} 
            max={item.in_stock} />
            <button onClick={(e) => {
                // setvalue(item)
                return removecharts(item)
            }}>REMOVE FROM CART</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default ChartItemPage;