import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, useParams } from 'react-router-dom';
import { get_item } from '../../store/item';

function SingleItemPage(){
    const { itemId } = useParams();
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const item = useSelector(state => state.itemreducer.currentItem);
  const dispatch = useDispatch();
  
  
  
  useEffect(() => {
      (async() => {
          await dispatch(get_item(itemId));
        })();
    }, [dispatch]);
    

  return (
    <h2>{item.name}</h2>
  );
};

export default SingleItemPage;