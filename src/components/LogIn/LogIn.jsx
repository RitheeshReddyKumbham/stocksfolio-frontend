import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './LogIn.css'
function LogIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState('');
  const navigate = useNavigate();

  const handleLogIn = async () => {
    if(!email || !password){
      setErr("Please fill all the fields")
      return
    }
    try {
      const trimmedEmail = email.trim();
      const trimmedPassword = password.trim();
  
      const response = await axios.post('https://stocksfolio-backend.onrender.com/login', {
        email: trimmedEmail,
        password: trimmedPassword
      });
  
      if (response.data.message === 'Login successful') {
        navigate('/home'); 
      } else {
      
        setErr('Login failed');
      }
    } catch (error) {
      setErr(error.response?.data?.error || 'Login failed');
    }
  };
  
  

  return (
    <div className='loginPage'>
      <h2 className='logHead'>Log In</h2>
      <p style={{color:'red'}}>{err}</p>
      <input className='inps' value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
      <input className="inps" type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
      <button className='button' onClick={handleLogIn}>Log In</button>
    </div>
  );
}

export default LogIn;
