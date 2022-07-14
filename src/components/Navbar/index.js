import React from 'react'
import { NavLink } from 'react-router-dom';
import './NavbarElement.css';

const Navbar = () => {
  return (
    <div>
        <Navbar>
            <NavLink to="/">
                <h1>Trang chủ</h1>
            </NavLink>
            <NavLink to="/gioi-thieu">
                <h1>Về VNUK</h1>
            </NavLink>
        </Navbar>
    </div>
  )
}

export default Navbar;