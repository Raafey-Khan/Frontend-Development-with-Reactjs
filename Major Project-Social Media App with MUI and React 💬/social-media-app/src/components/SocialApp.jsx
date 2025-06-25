
import Input from './Input/Input';
import MainContainer from './MainContainer/MainContainer'
import Navbar from "./Navbar/Navbar"
import PostsContext from '../providers/PostsProvider';
import { useEffect, useState } from 'react';
import axios from 'axios';
function SocialApp() {
   const [posts, setPosts] = useState([])
   useEffect(() => {
      axios.get("https://dummyapi.io/data/v1/post", {
         headers: {'app-id': import.meta.env.VITE_APP_ID}
      })
      .then(response => {
         const responseObject = response.data;
         console.log(responseObject);
         setPosts([...responseObject.data])
      })
   },[])
   return (
    <div>
        {/* getting the api from dummyapi.io */}

        <PostsContext.Provider value={{posts, setPosts}}> 
         <Navbar/>
         <Input/>
       <MainContainer />
        </PostsContext.Provider>
  
    </div>
   )
}

export default SocialApp;