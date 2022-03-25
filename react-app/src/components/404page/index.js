import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, NavLink} from 'react-router-dom';
import { getChart,  deleteFromChart, buyChart} from '../../store/chart';


const CrashPage = () => {

    return (
        <div className='lost'>
        <h1>The Page you are looking for is not found</h1>
        <img src='https://media.istockphoto.com/photos/error-page-not-found-picture-id1153372686?b=1&k=20&m=1153372686&s=170667a&w=0&h=4veHHEjI5rq2qpYWMXcHSzXfrp22SMwa79DsqqiYfAw='/>
        </div>
    )
};
  
export default CrashPage;