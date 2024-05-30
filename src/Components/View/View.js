import React, { useContext, useEffect, useState } from 'react';

import './View.css';
import { PostContext } from '../../Store/PostContext';
import { FirebaseContext } from '../../Store/Context';
function View() {
  const [userDetails,setUserDetails] = useState(null)
  const {postData} = useContext(PostContext)
  const {firebase} = useContext(FirebaseContext)
  useEffect(()=>{
    console.log(postData);
    const {userId} = postData
    firebase.firestore().collection('users').where('id','==',userId).get().then((res)=>{
      res.forEach(element=>{
        console.log(element.data());
        setUserDetails(element.data())
      })
    })
  },[])
  return (
    <div className="viewParentDiv">
      {postData && (<>
      <div className="imageShowDiv">
        <img style={{width:'500px'}}
          src={postData.url}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postData.price} </p>
          <span>{postData.name}</span>
          <p>{postData.category}</p>
          <span>{postData.createdAt}</span>
        </div>
        <div className="contactDetails">
          {userDetails && (<>
          <p>{userDetails.username}</p>
          <p>No name</p>
          <p>{userDetails.phoneNumber}</p></>)}
        </div>
      </div>
      </>)}
    </div>
  );
}
export default View;
