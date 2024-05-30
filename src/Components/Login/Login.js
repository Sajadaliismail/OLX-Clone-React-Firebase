import React, { useContext, useState } from 'react';
import { FirebaseContext } from '../../Store/Context';
import Logo from '../../olx-logo.png';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const {firebase} = useContext(FirebaseContext)
  const history = useNavigate()

  function handleLogin(e){
    e.preventDefault()
    firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
     history('/')
    }).catch((error)=>{
      console.log(error);
      alert(error.message)
    })
  }
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={(e)=>handleLogin(e)
        }>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
           onChange={(e)=>{setEmail(e.target.value)}}
            value={email}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
           onChange={(e)=>{setPassword(e.target.value)}}
            name="password"
            value={password}
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <Link to={'/signup'}>Signup</Link>
      </div>
    </div>
  );
}

export default Login;
