import React, { useContext } from 'react';
import { AuthContext, FirebaseContext } from '../../Store/Context';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import SellButton from '../../assets/SellButton';
import { Link, useNavigate } from 'react-router-dom';



function Header() {
  const {user} = useContext(AuthContext)
  const {firebase} = useContext(FirebaseContext)
  const navigate = useNavigate()
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
         <Link to={'/'}><OlxLogo  /></Link> 
        </div>
        <div className="placeSearch">
        <i class="bi bi-search fs-5"></i>
          <input type="text" />
          <i class="bi bi-chevron-down fs-4"></i>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction d-flex justify-content-center">
          <i class="bi bi-search text-white fs-3"></i>
           
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <i class="bi bi-chevron-down  fs-4"></i>
        </div>
        <div className="loginPage">

          {user ?
            <>
          <DropdownButton variant='white' id="dropdown-basic-button" title={user.displayName}>
      <Dropdown.Item >Profile</Dropdown.Item>
      <Dropdown.Item onClick={()=>{
        firebase.auth().signOut();
        navigate('/login')
      }} >Logout</Dropdown.Item>
    </DropdownButton>
          </> : <>
          <button className='btn btn-rounded btn-white' onClick={()=>{
            navigate('/login')
          }}>Login</button>
          </>
        } 
          <hr />
        </div>

        <div className="sellMenu">
          <SellButton />
          <div className="sellMenuContent">
          <i class="bi bi-plus-lg"></i>            
            <span onClick={()=>{
              navigate('/create')
            }}>SELL</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
