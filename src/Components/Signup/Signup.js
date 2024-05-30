import React, { useContext, useState } from 'react';

import Logo from '../../olx-logo.png';
import './Signup.css';
import { Link, useNavigate } from 'react-router-dom';
import { FirebaseContext } from '../../Store/Context';

export default function Signup() {
  const history = useNavigate()
  const [userName,setUserName] = useState('')
  const [email,setEmail] = useState('')
  const [phone,setPhone] = useState('')
  const [password,setPassword] = useState('')
  const {firebase} = useContext(FirebaseContext)

  function handleSubmit(e){
    e.preventDefault()
   firebase.auth().createUserWithEmailAndPassword(email,password).then((result)=>{
    result.user.updateProfile({displayName:userName}).then(()=>{
      firebase.firestore().collection('users').add({
        id:result.user.uid,
        username:userName,
        phoneNumber:phone
      }).then(()=>{
        history('/login')
      })
    })
   })
  }
  return (
    <>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="signupParentDiv text-center">
            <div style={{textAlign:'center'}}>
            <img  width="200px" height="200px" src={Logo} alt="Logo" />
            </div>
            <form onSubmit={(e)=>handleSubmit(e)}>
              <div className="mb-3 text-start">
                <label htmlFor="username" className="form-label">Username</label>
                <input
                  type="text"
                  className="form-control"
                  value={userName}
                  onChange={(e)=>setUserName(e.target.value)}
                  name="username"
                />
              </div>
              <div className="mb-3 text-start">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  onChange={(e)=>setEmail(e.target.value)}
                  value={email}
                />
              </div>
              <div className="mb-3 text-start">
                <label htmlFor="phone" className="form-label">Phone</label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  name="phone"
                  onChange={(e)=>setPhone(e.target.value)}
                 value={phone}
                />
              </div>
              <div className="mb-3 text-start">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  onChange={(e)=>setPassword(e.target.value)}
                  value={password}
                />
              </div>
              <div className="mb-3 align-items-center text-center">
                <button type="submit" className="btn btn-primary">Signup</button>
              </div>
            </form>
            <Link className='text-center' to='/login'>Login</Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
