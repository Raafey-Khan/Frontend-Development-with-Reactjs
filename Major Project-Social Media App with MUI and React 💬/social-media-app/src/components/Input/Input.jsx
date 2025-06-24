import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import axios from "axios";

function Input() {
    const [postText, setPostText] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [loading, setLoading] = useState("")
    const [OwnerName, setOwnerName] = useState("")


    async function createPost() {
        setLoading(true)
        
        axios.post("https://dummyapi.io/data/v1/post/create",
            {
                owner: "60d0fe4f5311236168a109ca",
                text: postText,
                image: imageUrl,
                likes: 0,
                publishDate: new Date(),
                firstName: OwnerName,
                lastName: OwnerName

            }
            , {
            headers: {'app-id': import.meta.env.VITE_APP_ID}
        })
        .then(response => {
            console.log(response.data);
            setLoading(false);
            setPostText("");
            setImageUrl("");
            setOwnerName("")
        })
       
    }

   



    return(
        <Box sx={{mt: '2rem'}}>

             <TextField 
         fullWidth 
         id="outlined-basic" 
         label="Your name" 
         sx={{mb: '1rem'}}
         value={OwnerName}
         onChange={(e) => setOwnerName(e.target.value)}
         
         variant="outlined" />


         <TextField 
         fullWidth 
         id="outlined-basic" 
         label="Your next post..." 
         value={postText}
         onChange={(e) => setPostText(e.target.value)}
         
         variant="outlined" />

         <TextField 
         sx={{mt: '1rem', mb: '1rem'}} 
         fullWidth 
         id="outlined-basic" 
         label="Image for your post..." 
         value={imageUrl}
         onChange={(e) => setImageUrl(e.target.value)}
         variant="outlined" />

         {
            (!loading) ?   
            <Button 
            disabled={postText.trim() === "" || imageUrl.trim() === "" || OwnerName.trim() === ""}
            variant="contained" 
            onClick={createPost}>
                Submit
            </Button> : 
            
            <Button 
                 loading 
            variant="contained" 
            onClick={createPost}>
            Submit
            </Button>
         }
        

        
        </Box>
    )
}

export default Input;