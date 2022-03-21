import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, NavLink} from 'react-router-dom';
import { getHistory } from '../../store/histroy';


const HistoryPage = () => {
    const userId = useSelector((state) => state.session.user.id);
    const items = useSelector((state) => state.historyReducer.items)
    const dispatch = useDispatch(); 
    const id = parseInt(userId)
    const [value, setvalue] = useState(0)
    

    
    useEffect(() => {
        (async() => {
            await dispatch(getHistory(userId));
          })();
      }, [dispatch]);
    

      let total = 0
      // setvalue(total)
      return (
        <div className='your-chart'>
        <div>
          <h1>YOUR ORDER HISTORY</h1>
        </div>
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
            </div>
          </div>
          )}
      </div>
    );
  };
  
  export default HistoryPage;