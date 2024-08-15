import React from 'react'
import {logout} from '../store/authSlice.js'
import { useDispatch } from 'react-redux'
import Button from './Button/Button.jsx';
import { useNavigate } from 'react-router-dom';

// const navigate= useNavigate();

function LogoutBtn() {
  // const dispatch = useDispatch();

  const logoutHandler = () => {
    console.log("RRRR");
    useDispatch(logout());
    useNavigate('/login');
  }
  return (
    <div>
      <button onClick={logoutHandler} style={{height:'32px' , width:'120px',backgroundColor:'#1e1f25', borderRadius:'10px', cursor:'pointer',}}>Logout</button>
      {/* <Button buttonText="Logout" widthh='120px' heightt='32px' /> */}
    </div>
  )
}

export default LogoutBtn;
