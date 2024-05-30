import React, { Fragment, useContext, useState } from 'react';
import './Create.css';


import { AuthContext,FirebaseContext } from '../../Store/Context'; 
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const {user} = useContext(AuthContext)
  const {firebase} = useContext(FirebaseContext)
  const [name,setName] = useState('')
  const [category,setCategory] = useState('')
  const [price,setPrice] = useState('')
  const [image,setImage] = useState(null)
  const navigate = useNavigate()
  const date = new Date()

  const handleSubmit=()=>{
  firebase.storage().ref(`/image/${image.name}`).put(image).then(({ref})=>{
    ref.getDownloadURL().then((url)=>{
      console.log(url);
      firebase.firestore().collection('products').add({
        name,
        category,
        price,
        url,
        userId:user.uid,
        createdAt:date.toDateString()
      }).then(()=>{
        navigate('/')
      })
    })
  })
  }
  return (
    <Fragment>
      <h3 className='text-center'>Post your ad</h3>
      <card>
        <div className="centerDiv w-50 ">
      
        <div className="container ">
        <h2>Categories</h2>
        <ul className="list-group">
            <li className="list-group-item d-flex align-items-center justify-content-between">
               <span>
               <i className="bi bi-car-front-fill me-2"> </i>Cars
                </span> 
           <i className="bi bi-chevron-right"></i>
            </li>
            <li className="list-group-item d-flex align-items-center justify-content-between">
            <span>  <i className="bi bi-house-door-fill me-2"></i>  Properties </span>
           <i className="bi bi-chevron-right"></i>
            </li>
            <li className="list-group-item d-flex align-items-center justify-content-between">
             <span>   <i className="bi bi-phone-fill me-2"></i>  Mobiles </span>
           <i className="bi bi-chevron-right"></i>
            </li>
            <li className="list-group-item d-flex align-items-center justify-content-between">
             <span>   <i className="bi bi-briefcase-fill me-2"></i>  Jobs </span>
           <i className="bi bi-chevron-right"></i>
            </li>
            <li className="list-group-item d-flex align-items-center justify-content-between">
             <span>   <i className="bi bi-bicycle me-2"></i>  Bikes </span>
           <i className="bi bi-chevron-right"></i>
            </li>
            <li className="list-group-item d-flex align-items-center justify-content-between">
             <span>   <i className="bi bi-laptop me-2"></i>  Electronics & Appliances </span>
           <i className="bi bi-chevron-right"></i>
            </li>
            <li className="list-group-item d-flex align-items-center justify-content-between">
             <span>   <i className="bi bi-truck me-2"></i>  Commercial Vehicles & Spares </span>
           <i className="bi bi-chevron-right"></i>
            </li>
            <li className="list-group-item d-flex align-items-center justify-content-between">
             <span>   <i className="bi bi-bag-check me-2"></i>  Fashion </span>
           <i className="bi bi-chevron-right"></i>
            </li>
            <li className="list-group-item d-flex align-items-center justify-content-between">
             <span>   <i className="bi bi-book-fill me-2"></i>  Books, Sports & Hobbies </span>
           <i className="bi bi-chevron-right"></i>
            </li>
            <li className="list-group-item d-flex align-items-center justify-content-between">
             <span>   <i className="bi bi-gear-fill me-2"></i>  Services </span>
           <i className="bi bi-chevron-right"></i>
            </li>
        </ul>
    </div>
  
          <div>
            <h5>Fill details</h5>
        <div className="mb-3">
          <label htmlFor="fname" className="form-label">Product name</label>
          <input
            className="form-control"
            type="text"
            id="fname"
            name="Name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">Category</label>
          <input
            className="form-control"
            type="text"
            id="category"
            name="category"
            value={category}
            onChange={(e)=>setCategory(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">Price</label>
          <input
            className="form-control"
            type="number"
            id="price"
            name="Price"
            value={price}
            onChange={(e)=>setPrice(e.target.value)}
          />
        </div>
      <br />
      <img
        alt="Posts"
        width="200"
        height="200"
        src={image ? URL.createObjectURL(image) : ''}
        className="img-thumbnail"
      />
        <div className="mb-3">
          <input onChange={(e)=>setImage(e.target.files[0])} type="file" className="form-control" />
        </div>
        <button onClick={handleSubmit} className="btn btn-primary">Upload and Submit</button>
          </div>
          
        </div>
        </card>
    </Fragment>
  );
};

export default Create;
