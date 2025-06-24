import { useEffect, useState } from "react";
import PostCard from "../PostCard";
import axios from "axios";
import Shimmer from "../Shimmer/Shimmer";


function PostCardList() {

    const [posts, setPosts] = useState([]);
    const fallbackimage = 'https://avatars.githubusercontent.com/u/113880768?v=4'

    // whenever in the url you see a : colon it means its variable quantity

    
    useEffect(() => {
       // we will download the content from dummyapi.io
       
       axios.get('https://dummyapi.io/data/v1/post',{
        headers: {'app-id': import.meta.env.VITE_APP_ID }

       })
       .then(response => {
         const responseObject = response.data;
        console.log(responseObject.data);
        

        //   console.log(import.meta.env.VITE_APP_ID)

         setPosts([...responseObject.data])
       
         
       })

    }, [])



   return (
    (posts.length == 0) ? <Shimmer/> : posts.map((post) => {
    const fullName = `${post.owner.firstName} ${post.owner.lastName}`
    return(

        <PostCard
        key={post.id}
        content={post.text}
        image={(post.image)}
        authorFirstName={post.owner.firstName}
        likes={post.likes}
        suck={fullName}

        />
    )
   })
)
}



export default PostCardList;