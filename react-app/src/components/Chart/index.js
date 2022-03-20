import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, NavLink} from 'react-router-dom';
import { getChart,  deleteFromChart} from '../../store/chart';


const ChartPage = () => {
    const userId = useSelector((state) => state.session.user.id);
    const items = useSelector((state) => state.chartReducer.items)
    const dispatch = useDispatch(); 
    const id = parseInt(userId)
    const [value, setvalue] = useState()


    useEffect(() => {
        (async() => {
            await dispatch(getChart(userId));
          })();
      }, [dispatch]);
    

      const removecharts = async(item) =>{

        await dispatch(deleteFromChart(item, id))
      }

    return (
      <div className='your-chart'>
        <h1>YOUR CHART</h1>
          {items.map((item) =>
          <div className='chart'>
            <div>
              <img src={`${item.image}`}/>
            </div>
            <div className='chart-detail'>
              <div>
                <NavLink to={`/items/${item.id}`} key={item.id} >
                  <h1 className="links">{item.name}</h1>
                </NavLink>
              </div>
              <div className='chart-button'>
                <input type='number' name='ranges' min={1} max={item.in_stock} />
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