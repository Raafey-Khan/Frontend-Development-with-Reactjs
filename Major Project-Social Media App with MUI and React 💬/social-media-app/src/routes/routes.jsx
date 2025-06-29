import {Routes, Route} from 'react-router-dom';
import UserProfileDetails from '../components/UserDetails/UserProfileDetails';
import SocialApp from '../components/SocialApp'
export default function CustomRoutes() {
    return(
       <Routes>

        <Route path='/' element={<SocialApp/>} />
        <Route path='/user/:id' element={<UserProfileDetails/>} />
       </Routes>
    )
}