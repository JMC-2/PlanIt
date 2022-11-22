import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../styles/Signup.scss"

const Signup = ({setUsername, setUserId}) => {
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();

    const body = {
      username: e.target.username.value,
      password: e.target.password.value,
      email: e.target.email.value,
      name: e.target.name.value,
    };
    if (!body.username || !body.password) {
      return alert('Need both username and password input');
    }
    try {
      const res = await fetch('/user/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json, text/plain',
        },
        body: JSON.stringify(body),
      });
      const receivedBack = await res.json();
      console.log('receivedBack: ', receivedBack)
      localStorage.setItem('jwtHeaderKey', receivedBack.jwt);
      if (receivedBack.isSuccess === true) {
        setUsername(receivedBack.username);
        setUserId(receivedBack.user_id);
        navigate('/home');
      } else {
        alert('Unable to add');
      }
    } catch (error) {
      console.log(error.message);
    }
  }

    return (
      <div class='user'>
      <header class='userheader'>
          <h1 class='usertitle'>PlanIt</h1>
      </header>
      <form class='form' onSubmit={handleClick}>
          <div class='formgroup'>
            <input type='text'
            id='username'
            name='username'
            placeholder='Username'
            class='forminput' />
          </div>
          <div class='formgroup'>
            <input  type='text'
            id='name'
            name='name'
            placeholder='Name' 
            class='forminput' />
          </div>
          <div class='formgroup'>
          <input type='text'
          id='email'
          name='email'
          placeholder='Email'
            class='forminput' />
          </div>
          <div class='formgroup'>
            <input type='password'
            id='password'
            name='password'
            placeholder='Password'
            class='forminput' />
          </div>
          <button class='btn' type='submit' value='Sign Up'>Register</button>
      </form>
      <Link to='/' className='signupbtn' id='newAccBtn'>
            Back to Login
          </Link>
  </div>
    );
};

export default Signup;
