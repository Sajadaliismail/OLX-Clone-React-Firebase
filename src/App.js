import React, { useContext, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';

import Home from './Pages/Home';
import SignupPage from './Pages/Signup';
import LoginPage from './Pages/Login'; 
import ViewPost from './Pages/ViewPost';
import CreatePage from './Pages/Create';
import { AuthContext, FirebaseContext } from './Store/Context';
import Post from './Store/PostContext';

function App() {
  const {firebase} = useContext(FirebaseContext)
  const {setUser} = useContext(AuthContext)

  useEffect(()=>{
    firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)
      console.log(user);
    })
  })
  return (
    <div>
      <Post>
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/view" element={<ViewPost />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </Router>
    </Post>
    </div>

  );
}

export default App;
