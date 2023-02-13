import React from 'react'
import "./Navbar.css"
import { GiHamburgerMenu } from 'react-icons/gi';
import { BiSearchAlt } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logoutApi } from '../../Store/Login/useApi';

function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout =()=> {
    dispatch(logoutApi(navigate))
  }

  return (
    <div className='navbar-main'>
        <h3>Edisonvalley</h3>
        <span><GiHamburgerMenu/></span>
        <form action="">
           <label htmlFor=""> <BiSearchAlt/></label>
            <input type="search" placeholder={'Search...'}/>
            <button type='button' onClick={()=>handleLogout()}>Log out</button>
        </form>
    </div>
  )
}

export default Navbar