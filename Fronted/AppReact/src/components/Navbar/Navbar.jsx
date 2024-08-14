import React from 'react'
import './Navbar.css'
import LogoImg from '../../../public/assets/images/logo.png';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import LogoutBtn from '../LogoutBtn';

// function Navbar() {
//   return (
//     <>
//       <nav>
//         <div className='logo'>
//           <img src={LogoImg} alt="" />
//           <h1>BOOKSNAP</h1>
//         </div>
//         <div>
//           <ul>
//             <NavLink className='navbar-navlink' to='/'>Home</NavLink>
//             <NavLink className='navbar-navlink' to='/notes'>Notes</NavLink>
//           </ul>
//         </div>
//         <div className='login'>
//           <Link to='/login'>
//             <button className='login-btn'>Login</button>
//           </Link>
//           <Link to='/signup'>
//             <button className='login-btn'>Sign Up</button>
//           </Link>
          
//         </div>
//       </nav>
//     </>
//   )
// }

function Navbar() {
  const authStatus = useSelector((state) => (state.auth.status))
  const navigate = useNavigate()

  const navItems1 = [
    {
      name : "Home",
      path : '/',
      active : true
    },
    { 
      name : "Notes",
      path : 'notes',
      // active : authStatus
      active : true
    },
    { 
      name : "AboutUs",
      path : 'aboutus',
      // active : authStatus
      active : true
    },
    { 
      name : "ContactUs",
      path : 'contactus',
      // active : authStatus
      active : true
    },
  ]

  const navItems2 = [
    {
      name : "Login",
      path : 'login',
      active : !authStatus
    },
    {
      name : "SignUp",
      path : 'signup',
      active : !authStatus
    },
    // {
    //   name : "Logout",
    //   path : 'login',
    //   active : authStatus
    // },
  ]
  return(
    <header>
      <nav>
      <div className='logo'>
        <img src={LogoImg} alt="" />
        <h1>BOOKSNAP</h1>
      </div>

      <div>
        <ul>
          {
            navItems1.map((item) => (
              item.active ? (
                <li><NavLink className='navbar-navlink' to={item.path}>{item.name}</NavLink></li>
              ) : (null)
            ))
          }
        </ul>
      </div>

      <div className='login'>
        {
        navItems2.map((item) => (
          item.active ? (
            <Link to={item.path}>
              <button className='login-btn'>{item.name}</button>
            </Link>
          ) : (null)
        ))
        } 
        {authStatus && (
          <LogoutBtn/>
        )} 
      </div>

      </nav>
    </header>
  )
}

export default Navbar
