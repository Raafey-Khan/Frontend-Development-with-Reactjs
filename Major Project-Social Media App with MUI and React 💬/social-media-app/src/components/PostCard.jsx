
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import React, {useState } from 'react';



function PostCard({authorFirstName,suck, image, content, likes}) {
  const [isLiked, setIsLiked] = useState(false)
  const [likecount, setlikecount] = useState(likes);
  return (
    <Card sx={{ maxWidth: 345, mb: '3rem' }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {authorFirstName.substring(0,1)}
          </Avatar>
        }
        
        title={suck}
        subheader="September 14, 2016"
      />
      {(image.length > 0) ?
        (<CardMedia
        component="img"
        height="194"
        image={image}
        alt="Paella dish"
      /> )
      : null
      
    }

    
      <CardContent>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
         {content}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={() => 
        {
          setIsLiked(!isLiked),
          setlikecount(likes)

        } }>
          {
            (isLiked) ? <FavoriteIcon sx={{color: red[500]}}   /> : <FavoriteBorderIcon  />
            // sx prop is used for custom styling just like inline styling css using with
          }
          {
            (isLiked) ? (likecount+1) : (likecount)
          }
        </IconButton>
     
       
      </CardActions>

    </Card>
  );
}

export default React.memo(PostCard);