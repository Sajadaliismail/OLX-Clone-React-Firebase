import React,{useState,createContext} from 'react'

export const PostContext = createContext(null)

export default function Post({children}){
const [postData,setPostData] = useState(null)
    return (
        <PostContext.Provider value={{postData,setPostData}}>
            {children}
        </PostContext.Provider>
        )
}       