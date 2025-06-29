import { useContext } from "react";
import PostCard from "../PostCard";
import Shimmer from "../Shimmer/Shimmer";
import PostsContext from "../../providers/PostsProvider";

function PostCardList() {

     const {posts} = useContext(PostsContext)


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