import React, { useContext, useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom'
import './Post.css';
import { FirebaseContext } from '../../Store/Context';
import  { ThemeContext } from '../../Store/ThemeContext';
import { PostContext } from '../../Store/PostContext';


function Posts() {
  const navigate = useNavigate()
  const {postData,setPostData} = useContext(PostContext)
  const {theme,setTheme} = useContext(ThemeContext)
  const [products,setProducts] = useState([])
  const {firebase} = useContext(FirebaseContext)
useEffect(()=>{
  firebase.firestore().collection('products').get().then((snapshot)=>{
    const allProducts = snapshot.docs.map((products)=>{
      return {...products.data(),id:products.id}
    })
    console.log(allProducts);
    setProducts(allProducts)
  })
},[])
  return (
    <div style={{backgroundColor : theme?'White':'Gray'}}  className="postParentDiv">
     <button onClick={()=>setTheme(!theme)}>Gray mode</button>
      <div className="moreView">
        <div className="heading">
        </div>
        <div className="cards">
        {products && products.map((product)=>(
          <>
           <div key={product.id}
            className="card"
          >
            <div className="favorite">
              <i class="bi bi-suit-heart fs-4"></i>
            </div>
            <div className="image">
              <img onClick={()=>{
                setPostData(product)
                navigate('/view')}} src={product.url} alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; {product.price}</p>
              <span className="kilometer">{product.category}</span>
              <p className="name">{product.name} </p>
            </div>
            <div className="date">
              <span>{product.createdAt}</span>
            </div>
          </div>
          </>
        ))}
         
        </div>
      </div>
    </div>
  );
}

export default Posts;
