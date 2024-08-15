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
import { login} from '../../store/authSlice.js'
import {useDispatch} from "react-redux"
import {useForm} from "react-hook-form"
import Logo from '../../components/Logo/Logo.jsx'
import InputBox from '../../components/InputBox/InputBox.jsx'
import Button from '../../components/Button/Button.jsx'
import './Login.css';
import { BASE_URL } from "../../context/constants.js";


// import { signin } from '../../controllers/auth.js'
// import signin from '../../controllers/auth.js'; 


function Login() {
  // const signin = require('../../controller/auth.js');

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {register, handleSubmit} = useForm();
    // const [error, setError] = useState("");

    // const handleForgetPassword = async () => {
    //     try {
    //       const email = prompt("Please enter your email address:");
    //       if (email) {
    //         const response = await fetch("http://localhost:3000/api/forget-password", { email });
    //         alert(response.data.message);
    //         console.log(response.data.message);
            
    //       }
    //     } catch (error) {
    //       console.error("Error in forget password request:", error);
    //       alert("There was an issue with your request. Please try again.");
    //     }
    //   };
    
      const dontHaveAccount = () => {
        navigate('/signup')
      }

    const loginn = async(data) => {

      const email = data.email;
      const password = data.password;
      try {
        const response = await fetch('${BASE_URL}/api/signin', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });

        if (response.ok) {

          const data = await response.json(); // Expecting JSON response
          console.log('Sign in successful:', data);

          dispatch(login(data));

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
    };

    const handleForgetPassword = async () => {
      try {
        const email = prompt("Please enter your email address:");
        if (email) {
          const response = await fetch(`${BASE_URL}/api/forget-password`, { email });
          alert(response.data.message);
          console.log(response.data.message);
          
        }
      } catch (error) {
        console.error("Error in forget password request:", error);
        alert("There was an issue with your request. Please try again.");
      }
    };


  // const loginn = (async(data) => {
  //   // setError('');
  //   console.log(data);
  //   const email = data.email;
  //   const password = data.password;
  //   try {
  //     const response = await fetch(`${BASE_URL}/api/signin`, {
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
  //       navigate('/'); // Redirect to the dashboard or another page
  //     } else {
  //       const errorData = await response.json();
  //       alert('Sign in failed: ' + (errorData.error || 'Unknown error'));
  //     }
  //   } catch (error) {
  //     console.error('Error during sign in:', error);
  //     alert('An error occurred. Please try again.');
  //   }
  // });

  return (

      <div className='login-signup'>
        <div className='login-signup-left'>
            <Logo/>
            <h1 style={{padding: "20px 0px",fontFamily: "Inter" , fontWeight:"400"}}>Log In</h1>
            <form onSubmit={handleSubmit(loginn)} className='login-signup-form'>
                <div className='login-signup-inputBox'>
                  <InputBox heightt="42px" widthh="411px" placeholderr="Your email" imgSource="/assets/images/inputBoxEmail.png"
                    {...register("email" , {required:true})}
                  />
                </div>
                <div className='login-signup-inputBox'>
                  <InputBox heightt="42px" widthh="411px" placeholderr="Your password" imgSource="/assets/images/inputBoxPass.png"
                    {...register("password",{required:true})}
                  />
                </div>
                <div className='login-signup-inputBox' ><Button heightt="42px" widthh="411px" typee="submit" buttonText="Login"/></div>

                <div className='checksOnClick' style={{display:'flex',justifyContent:'space-between',fontFamily:'Inter'}}>
                  <p className='forgetpassword' onClick={handleForgetPassword}>
                    Forget Password?
                  </p>
                  <p className='forgetpassword' onClick={dontHaveAccount}>
                    Don't Have an Account?
                  </p>

                </div>
                

            </form>
        </div>
        <div className='login-signup-right'>
            <img src="/assets/images/Login.png" alt="" />
        </div>
      </div>



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
