import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, NavLink} from 'react-router-dom';
import { getChart,  deleteFromChart, buyChart} from '../../store/chart';


const ChartPage = () => {
    const userId = useSelector((state) => state.session.user.id);
    const items = useSelector((state) => state.chartReducer.items)
    const dispatch = useDispatch(); 
    const history = useHistory();
    const id = parseInt(userId)
    const [amount, setamount] = useState(1)
    let inputs = {}
    let len = items.length
    
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
        inputs[e.target.name] += (parseInt(e.target.value)- inputs[e.target.name])
      }
      
      const minis = (e) => {
        inputs[e.target.name]--
        
      }

      const plus = (e) => {
        inputs[e.target.name]++
        
      }
      const buying = async()=> {
        await dispatch(buyChart(id, inputs))
        history.push('/history')
      }

      const press = async(e)=> {
        e.preventDefault()
        return false
        // history
      }
      let total = 0
      // setvalue(total)
    return (
      <div className='your-chart'>
        <div className='first-chart'>
          {len === 0 && <h1>YOUR CART IS EMPTY</h1>}
          {len !== 0 && <h1>YOUR CART</h1>}
          {len !== 0 && <button  onClick={buying}>Checkout</button>}
          {/* <p>TOTAL: {}</p> */}
        </div>
          {items.map((item) =>
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
          )}
      </div>
    );
  };
  
  export default ChartPage;