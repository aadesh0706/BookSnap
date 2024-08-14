import React from 'react'
import InputBox from '../InputBox/InputBox'
import Button from '../Button/Button'

function LoginComp() {
  return (
    <form >
        <InputBox heightt="42px" widthh="411px" placeHolderr="Your email" imgSource="../../../public/assets/images/inputBoxEmail.png"/>
        <InputBox heightt="42px" widthh="411px" placeHolderr="Your password" imgSource="../../../public/assets/images/inputBoxPass.png"/>
        <Button heightt="42px" widthh="411px" typee="submit" buttonText="Sign Up"/>
    </form>
  )
}

export default LoginComp
