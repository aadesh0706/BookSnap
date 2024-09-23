import { SignedIn, SignedOut, SignInButton, useClerk, UserButton } from '@clerk/clerk-react';

import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import LogoImg from '../../../public/assets/images/logo.png';
import './Navbar.css';

function Navbar() {
  const authStatus = useSelector((state) => state.auth.status); // Redux auth status
  const { openSignIn } = useClerk(); // Clerk sign-in handler
  const navigate = useNavigate();

  const navItems1 = [
    { name: "Home", path: '/', active: true },
    { name: "Notes", path: 'notes', active: true },
    { name: "Shop", path: 'shop', active: true },
    { name: "Community", path: 'community', active: true },
    { name: "AboutUs", path: 'aboutus', active: true },
    { name: "ContactUs", path: 'contactus', active: true },
  ];

  const navItems2 = [
    { name: "Login", path: 'login', active: !authStatus },
    { name: "SignUp", path: 'signup', active: !authStatus },
  ];

  return (
    <header>
      <nav>
        <div className='logo'>
          <img src={LogoImg} alt="BookSnap Logo" />
          <h1 style={{ fontFamily: 'Inter', letterSpacing: 0.2 }}>BOOKSNAP</h1>
        </div>

        <div>
          <ul>
            {navItems1.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <NavLink className='navbar-navlink' to={item.path}>{item.name}</NavLink>
                </li>
              ) : null
            )}
          </ul>
        </div>

        <div className='login'>
          {/* When signed out, show the SignInButton */}
          <SignedOut>
            <SignInButton mode='modal'>
              <button className='login-btn'>Login</button>
            </SignInButton>
          </SignedOut>

          {/* When signed in, show the UserButton */}
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>

        {/* <div className='login'>
          {/* Conditionally render login and signup buttons */}
          {/* <SignedOut>
            {navItems2.map((item) =>
              item.active ? (
                <button 
                  key={item.name} 
                  className='login-btn' 
                  onClick={() => openSignIn({ publishableKey: import.meta.env.VITE_CLERK_PUBLISHABLE_KEY })}
                >
                  {item.name}
                </button>
              ) : null
            )}
          </SignedOut> 

          Show Logout button if signed in 
          <SignedIn>
            <LogoutBtn />
          </SignedIn>
        </div> */}
      </nav>
    </header>
  );
}

export default Navbar;
