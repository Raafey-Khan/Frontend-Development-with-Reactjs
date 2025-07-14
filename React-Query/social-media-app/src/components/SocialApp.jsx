
import Input from './Input/Input';
import MainContainer from './MainContainer/MainContainer'
import PostsContext from '../providers/PostsProvider';
import usePosts from '../hooks/usePosts';
function SocialApp() {
   const [posts, setPosts] = usePosts();
   
   return (
    <div>
      
        {/* getting the api from dummyapi.io */}

        <PostsContext.Provider value={{posts, setPosts}}> 
        
         <Input/>
       <MainContainer postsList={posts}/>
        </PostsContext.Provider>
  
    </div>
   )
}

export default SocialApp;