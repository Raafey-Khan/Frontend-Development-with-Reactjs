import { useEffect, useState } from "react";
import PostCard from "../PostCard";
import axios from "axios";
import Shimmer from "../Shimmer/Shimmer";


function PostCardList() {

    const [posts, setPosts] = useState([]);

    

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
        image={post.image}
        authorFirstName={post.owner.firstName}
        suck={fullName}

        />
    )
   })
)
}

export default PostCardList;