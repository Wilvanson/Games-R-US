import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/session';

const LogoutButton = () => {
  const dispatch = useDispatch()
  const onLogout = async (e) => {
    localStorage.clear()
    await dispatch(logout());
  };

  return <button className="button-white" onClick={onLogout}>Logout</button>;
};

export default LogoutButton;
