
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
          <NavLink className='links' to='/' exact={true} activeClassName='active'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className='links' to='/history' exact={true} activeClassName='active'>
            History
          </NavLink>
        </li>
        <li>
          <NavLink className='links' to='/chart' exact={true} activeClassName='active'>
            Cart
          </NavLink>
        </li>
        <li>
        <a className='links' href="https://github.com/Wilvanson" target="_blank">
          GitHub
        </a>
      </li>
      <li>
        <a className='links' href="https://www.linkedin.com/in/wilvanson-dutervil-509a2b174/" target="_blank">
          Linkedin
        </a>
      </li>
        {user && <li>
          <LogoutButton />
        </li>}
      </ul>
    </nav>
  );
}

export default NavBar;
