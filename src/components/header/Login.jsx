import React from "react";
import { LoginStl } from "./header.style";
import { ReactComponent as LoginIcon } from '../../images/header/loginIcon.svg'

export const Login = () => {
  return (
      <LoginStl onClick={()=>{console.log('переход на авторизацию')}}>
        <LoginIcon />
        <p className="login__text">Войти</p>
      </LoginStl>
  );
}
