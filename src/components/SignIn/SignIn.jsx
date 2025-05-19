import React, {useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './SignIn.css'
function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState('');
  const navigate=useNavigate()

  const handleSignUp = async () => {
    if(!email || !password){
      setErr("Please fill all the fields")
      return
    }
    try {
      await axios.post('https://stocksfolio-backend.onrender.com/signup', { email, password });
      alert("Signup successful. Please log in.");
      navigate('/login')
    } catch (error) {
      setErr(error.response?.data?.error || 'Signup failed');
    }
  };

  return (
    <div className='signPage'>
      <h2 className='signHead'>Sign Up</h2>
      <p style={{color:"red"}}>{err}</p>
      <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" className='inps' />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" className='inps'/>
      <button className='button' onClick={handleSignUp}>Sign Up</button>
    </div>
  );
}

export default SignUp;
