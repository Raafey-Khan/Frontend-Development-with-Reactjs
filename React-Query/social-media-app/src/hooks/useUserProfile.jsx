import { useState,useEffect } from "react"
import axios from "axios";
import { useParams } from "react-router-dom";
const useUserProfile = () => {
    
    const [user, setUser] = useState({});
    const {userId} = useParams();

    useEffect(() => {
          axios.get(`https://dummyapi.io/data/v1/user/${userId}`, {
    headers: {
      'app-id': import.meta.env.VITE_APP_ID
    }
  })
  

  .then((response) => {
    setUser({...response.data})
    

    
  })
    }, [])
    return [user];
}

export default useUserProfile;




