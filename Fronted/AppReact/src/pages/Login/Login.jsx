// import React from 'react'
// import './Login.css'

// import InputBox from '../../components/InputBox/InputBox'
// import Button from '../../components/Button/Button'
// import Logo from '../../components/Logo/Logo'

// function Login() {
//   return (
//     <div className='login-signup'>
//         <div className='login-signup-left'>
//             <Logo/>
//             <h1 style={{padding: "10px 0px",font: "poppins"}}>Log In</h1>

//             <form className='login-signup-form'>
//                 <div className='login-signup-inputBox'><InputBox heightt="42px" widthh="411px" placeholderr="Your email" imgSource="../../../public/assets/images/inputBoxEmail.png"/></div>
//                 <div className='login-signup-inputBox'><InputBox heightt="42px" widthh="411px" placeholderr="Your password" imgSource="../../../public/assets/images/inputBoxPass.png"/></div>
//                 <div className='login-signup-inputBox' ><Button heightt="42px" widthh="411px" typee="submit" buttonText="Login"/></div>
//             </form>
//         </div>
//         <div>
//             <img src="../../../public/assets/images/Login.png" alt="" />
//         </div>
//     </div>
    
    
//   )
// }

// export default Login


import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { login as authLogin } from '../../store/authSlice.js'
import {useDispatch} from "react-redux"
import {useForm} from "react-hook-form"
import Logo from '../../components/Logo/Logo.jsx'
import InputBox from '../../components/InputBox/InputBox.jsx'
import Button from '../../components/Button/Button.jsx'
import './Login.css';

// import { signin } from '../../controllers/auth.js'
// import signin from '../../controllers/auth.js'; 


function Login() {
  // const signin = require('../../controller/auth.js');

    const navigate = useNavigate();
    // const dispatch = useDispatch();
    const {register, handleSubmit} = useForm();
    // const [error, setError] = useState("");

    const handleForgetPassword = async () => {
        try {
          const email = prompt("Please enter your email address:");
          if (email) {
            const response = await fetch("https://booksnap-backend.vercel.app/api/forget-password", { email });
            alert(response.data.message);
            console.log(response.data.message);
            
          }
        } catch (error) {
          console.error("Error in forget password request:", error);
          alert("There was an issue with your request. Please try again.");
        }
      };


    const login = (async(data) => {
      // setError('');
      console.log(data);
      const email = data.email;
      const password = data.password;
      try {
        const response = await fetch('https://booksnap-backend.vercel.app/api/signin', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });
    
        if (response.ok) {
          console.log(email,password);
          const data = await response.json(); // Expecting JSON response
          console.log('Sign in successful:', data);
          navigate('/'); // Redirect to the dashboard or another page
        } else {
          const errorData = await response.json();
          alert('Sign in failed: ' + (errorData.error || 'Unknown error'));
        }
      } catch (error) {
        console.error('Error during sign in:', error);
        alert('An error occurred. Please try again.');
      }
      // try {
      //   const res = await signin(data);
      //   console.log(res);
      //   // Handle navigation or state update based on response
      // } catch (error) {
      //   console.log(error);
      //   setError(error.message);
      // }
    });


  return (
    // <form onSubmit={handleSubmit(login)}>

      <div className='login-signup'>
        <div className='login-signup-left'>
            <Logo/>
            <h1 style={{padding: "10px 0px",font: "poppins"}}>Log In</h1>
            <form onSubmit={handleSubmit(login)} className='login-signup-form'>
                <div className='login-signup-inputBox'>
                  <InputBox heightt="42px" widthh="411px" placeholderr="Your email" imgSource="../../../public/assets/images/inputBoxEmail.png"
                    {...register("email" , {required:true})}
                  />
                </div>
                <div className='login-signup-inputBox'>
                  <InputBox heightt="42px" widthh="411px" placeholderr="Your password" imgSource="../../../public/assets/images/inputBoxPass.png"
                    {...register("password",{required:true})}
                  />
                </div>
                <div className='login-signup-inputBox' ><Button heightt="42px" widthh="411px" typee="submit" buttonText="Login"/></div>
                <a href="" onClick={handleForgetPassword}>Forget Password</a>
            </form>
        </div>
        <div>
            <img src="../../../public/assets/images/Login.png" alt="" />
        </div>
      </div>

    // </form>


// {/* <div className="flex flex-col md:flex-row h-screen">
//     // <div className='login-signup'>
//     <div className='login-signup-left'>
//         <Logo/>
//         <h1 style={{padding: "10px 0px",font: "poppins"}}>Log In</h1>
//         <form onSubmit={handleSubmit(login)} className='login-signup-form'>
//             <div className='login-signup-inputBox'>
//               <InputBox heightt="42px" widthh="411px" placeholderr="Your email" imgSource="../../../public/assets/images/inputBoxEmail.png"
//                 {...register("email" , {required:true})}
//               />
//             </div>
//             <div className='login-signup-inputBox'>
//               <InputBox heightt="42px" widthh="411px" placeholderr="Your password" imgSource="../../../public/assets/images/inputBoxPass.png"
//                 {...register("password",{required:true})}
//               />
//             </div>
//             <div className='login-signup-inputBox' ><Button heightt="42px" widthh="411px" typee="submit" buttonText="Login"/></div>
//             <a href="" onClick={handleForgetPassword}>Forget Password</a>
//         </form>
//     </div>
//     <div>
//         <img src="../../../public/assets/images/Login.png" alt="" />
//     </div>
//   </div>
//   </div> */}
       
  )
}

export default Login






  //this function is the method used to call os send the email,password to firebase on form submit 

  //   const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  
  // const handleForgetPassword = async () => {
  //   try {
  //     const email = prompt("Please enter your email address:");
  //     if (email) {
  //       const response = await fetch("http://localhost:3000/api/forgetPassword", { email });
  //       alert(response.data.message);
  //       console.log(response.data.message);
        
  //     }
  //   } catch (error) {
  //     console.error("Error in forget password request:", error);
  //     alert("There was an issue with your request. Please try again.");
  //   }
  // };


  // const handleSignIn = async (e) => {
  //   e.preventDefault();
  
  //   try {
  //     const response = await fetch('http://localhost:3000/api/signin', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ email, password }),
  //     });
  
  //     if (response.ok) {
  //       console.log(email,password);
  //       const data = await response.json(); // Expecting JSON response
  //       console.log('Sign in successful:', data);
  //       navigate('/Notes'); // Redirect to the dashboard or another page
  //     } else {
  //       const errorData = await response.json();
  //       alert('Sign in failed: ' + (errorData.error || 'Unknown error'));
  //     }
  //   } catch (error) {
  //     console.error('Error during sign in:', error);
  //     alert('An error occurred. Please try again.');
  //   }
  // };
