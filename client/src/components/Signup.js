import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

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
      <div>
        <div className='loginDiv' id='signinDiv'>
          <h1>Please Sign Up </h1>
          <form className='loginDivForm' onSubmit={handleClick}>
            <input
              className='inputFields'
              type='text'
              id='username'
              name='username'
              placeholder='Username'
            ></input>
            <br></br>
            <input
              className='inputFields'
              type='text'
              id='name'
              name='name'
              placeholder='Name'
            ></input>
            <br></br>
            <input
              className='inputFields'
              type='text'
              id='email'
              name='email'
              placeholder='Email'
            ></input>
            <br></br>
            <input
              className='inputFields'
              type='password'
              id='password'
              name='password'
              placeholder='Password'
            ></input>
            <br></br>
            <input
              className='loginDivBtn'
              type='submit'
              value='Sign Up'
            ></input>
          </form>

          <Link to='/' id='newAccBtn'>
            Go back to Login
          </Link>
        </div>
      </div>
    );
};

export default Signup;
