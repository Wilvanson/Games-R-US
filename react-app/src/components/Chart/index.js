import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, NavLink} from 'react-router-dom';
import { getChart,  deleteFromChart, buyChart} from '../../store/chart';


const ChartPage = () => {
    const userId = useSelector((state) => state.session.user.id);
    const items = useSelector((state) => state.chartReducer.items)
    const dispatch = useDispatch(); 
    const id = parseInt(userId)
    const [value, setvalue] = useState(0)
    let inputs = {}

    items.map((ite) =>{
      inputs[ite.name] = 1
    })
    useEffect(() => {
        (async() => {
            await dispatch(getChart(userId));
          })();
      }, [dispatch]);
    

      const removecharts = async(item) =>{

        await dispatch(deleteFromChart(item, id))
      }

      const handleChange = async(e) => {
        inputs[e.target.name] = parseInt(e.target.value)
      }
      
      const buying = async()=> {
        console.log(inputs)
        await dispatch(buyChart(id, inputs))
        // history
      }
      let total = 0
      // setvalue(total)
    return (
      <div className='your-chart'>
        <div>
          <h1>YOUR CHART</h1>
          <button onClick={buying}>Checkout</button>
          <p>TOTAL: {value}</p>
        </div>
          {items.map((item) =>
          <div className='chart'>
            <div>
              {total += item.cost}
              <img src={`${item.image}`}/>
            </div>
            <div className='chart-detail'>
              <div>
                <NavLink to={`/items/${item.id}`} key={item.id} >
                  <h1 className="links">{item.name}</h1>
                </NavLink>
              </div>
              <div className='chart-button'>
                <input type='number' name={item.name} onChange={handleChange} min={1} max={item.in_stock} />
                <button onClick={(e) => {
                    // setvalue(item)
                    return removecharts(item)
                }}>REMOVE FROM CHART</button>
              </div>
            </div>
          </div>
          )}
      </div>
    );
  };
  
  export default ChartPage;