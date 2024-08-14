import React from 'react'
import {logout} from '../store/authSlice.js'
import { useDispatch } from 'react-redux'
import Button from './Button/Button.jsx';

function LogoutBtn() {
  const dispatch = useDispatch();
  const logoutHandler = () => {

  }
  return (
    <Button buttonText="Logout" widthh='120px' heightt='32px'/>
  )
}

export default LogoutBtn
