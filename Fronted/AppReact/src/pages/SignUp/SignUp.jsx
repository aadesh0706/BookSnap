// import React from 'react'
// import '../Login/Login.css'

// import InputBox from '../../components/InputBox/InputBox'
// import Button from '../../components/Button/Button'
// import Logo from '../../components/Logo/Logo'

// function Login() {
//   return (
//     <div className='login-signup'>
//         <div className='login-signup-left'>
//             <Logo/>
//             <h1 style={{padding: "10px 0px",font: "poppins"}}>Sign Up</h1>

//             <form className='login-signup-form'>
//                 <div className='login-signup-inputBox'><InputBox heightt="42px" widthh="411px" placeholderr="Your email" imgSource="../../../public/assets/images/inputBoxEmail.png"/></div>
//                 <div className='login-signup-inputBox'><InputBox heightt="42px" widthh="411px" placeholderr="Your password" imgSource="../../../public/assets/images/inputBoxPass.png"/></div>
//                 <div className='login-signup-inputBox'><InputBox heightt="42px" widthh="411px" placeholderr="Repeat password" imgSource="../../../public/assets/images/inputBoxPass.png"/></div>
//                 <div className='login-signup-inputBox' ><Button heightt="42px" widthh="411px" typee="submit" buttonText="Sign Up"/></div>
//             </form>
//         </div>
//         <div>
//             <img src="../../../public/assets/images/Login.png" alt="" />
//         </div>
//     </div>
    

//   )
// }

// export default Login




// const handleSignIn = async (e) => {
//   e.preventDefault();

//   try {
//     const response = await fetch('http://localhost:3000/api/signin', { // Adjust the URL to match your backend
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ email, password }),
//     });

//     if (response.ok) {
//       const data = await response.text(); // or .json() if you're expecting JSON
//       console.log('Sign in successful:', data);
//       Navigate('/Notes');
//       // You can redirect to another page or do something else upon successful login
//     } else {
//       const errorData = await response.json();
//       alert('Sign in failed: ' + (errorData.error || 'Unknown error'));
//     }
//   } catch (error) {
//     console.error('Error during sign in:', error);
//     alert('An error occurred. Please try again.');
//   }
// };





import React, {useState} from 'react'
import '../Login/Login.css'
import {Link, useNavigate} from 'react-router-dom'
import { login as authLogin } from '../../store/authSlice.js'
import {useDispatch} from "react-redux"
import {useForm} from "react-hook-form"
import Logo from '../../components/Logo/Logo.jsx'
import InputBox from '../../components/InputBox/InputBox.jsx'
import Button from '../../components/Button/Button.jsx'
import { BASE_URL } from '../../context/constants.js'


function SignUp() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()
    const [error, setError] = useState("")

    const alreadyHaveAccount = () => {
      navigate('/login')
    }
    //this function is the method used to call os send the email,password to firebase on form submit 
    const login = (async(data) => {
      // setError('');
      console.log(data);
      const email = data.email;
      const password = data.password;
     
      try {
        const response = await fetch('${BASE_URL}/api/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });
  
        if (response.ok) {
          const data = await response.json();
          console.log('Signup successful:', data);
          navigate('/Login'); // Redirect to dashboard or another page
        } else {
          const errorData = await response.json();
          alert('Signup failed: ' + (errorData.error || 'Unknown error'));
        }
      } catch (error) {
        console.error('Error during signup:', error);
        alert('An error occurred. Please try again.');
      }
      
    });
    


  return (
    // <form onSubmit={handleSubmit(login)}>

      <div className='login-signup'>
        <div className='login-signup-left'>
            <Logo/>
            <h1 style={{padding: "20px 0px",fontFamily: "Inter" , fontWeight:"400"}}>Sign Up</h1>
          <form onSubmit={handleSubmit(login)} className='login-signup-form'>
                <div className='login-signup-inputBox'>
                  <InputBox heightt="42px" widthh="411px" placeholderr="Your email" imgSource="/assets/images/inputBoxEmail.png"
                    {...register("email" , {required:true})}
                  />
                </div>
                <div className='login-signup-inputBox'>
                  <InputBox heightt="42px" widthh="411px" placeholderr="Create password" imgSource="/assets/images/inputBoxPass.png"
                    {...register("password",{required:true})}
                  />
                </div>
                {/* <div className='login-signup-inputBox'>
                  <InputBox heightt="42px" widthh="411px" placeholderr="Repeat password" imgSource="../../../public/assets/images/inputBoxPass.png"
                    {...register("password",{required:true})}
                  />
                </div> */}
                <div className='login-signup-inputBox' ><Button heightt="42px" widthh="411px" typee="submit" buttonText="SignUp"/></div>

                <div className='checksOnClick' style={{display:'flex',justifyContent:'space-between',fontFamily:'Inter'}}>
                  <p className='forgetpassword' onClick={alreadyHaveAccount}>
                    Already Have an Account?
                  </p>
                </div>
            </form>
        </div>
        <div className='login-signup-right'>
            <img src="/assets/images/Login.png" alt="" />
        </div>
      </div>

    // </form>

    

       
  )
}

export default SignUp
