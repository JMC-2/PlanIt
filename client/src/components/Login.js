import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../styles/Login.scss"

const Login = ({setUsername,setUserId}) => {
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    const body = { username: e.target[0].value, password: e.target[1].value };
    console.log(body);
    try {
      const res = await fetch('/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json, text/plain',
        },
        body: JSON.stringify(body),
      });
      const receivedBack = await res.json();

      //receivedBack will be an object with two properties: username, password
      //username will be true if username exists, password will be true if password matches

      //both username and password are true, means route them to mainPage, preserving the username in state
      if (receivedBack.isSuccess === true) {
        setUsername(receivedBack.username);
        setUserId(receivedBack.user_id);
        navigate('/home');

        //if either false, then let them know login information is invalid/incorrect
      } else {
        alert('Wrong Information');
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div class="container">
  <div class="top"></div>
  <div class="bottom"></div>
  <div class="center">
    <h2>Please Sign In</h2>
    <form onSubmit={handleClick}>
    <input type="text" placeholder="username"/>
    <input type="password" placeholder="password"/>
    <input class="login" type='submit' value='Login'></input>
    </form>
    <div class="footer">
    <span to='/signup' id='newAccBtn'>
    <Link to='/signup' className='signup' id='newAccBtn'>Sign Up</Link>
    </span>
  <div class="footer">
  </div>
    </div>
  </div>
</div>
  );
}
export default Login;