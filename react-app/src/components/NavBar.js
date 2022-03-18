
import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import {useSelector} from 'react-redux';

const NavBar = () => {
  const {user} = useSelector((state) => state.session)
  return (
    <nav>
      <ul className='navbar'>
        <li>
          <NavLink to='/' exact={true} activeClassName='active'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/history' exact={true} activeClassName='active'>
            History
          </NavLink>
        </li>
        <li>
          <NavLink to='/chart' exact={true} activeClassName='active'>
            Chart
          </NavLink>
        </li>
        {user && <li>
          <LogoutButton />
        </li>}
      </ul>
    </nav>
  );
}

export default NavBar;
