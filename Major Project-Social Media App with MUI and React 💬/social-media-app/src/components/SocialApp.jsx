import Input from './Input/Input';
import MainContainer from './MainContainer/MainContainer'
import Navbar from "./Navbar/Navbar"
function SocialApp() {
   return (
    <div>
        {/* getting the api from dummyapi.io */}
         
         <Navbar/>
         <Input/>
       <MainContainer/>
  
    </div>
   )
}

export default SocialApp;