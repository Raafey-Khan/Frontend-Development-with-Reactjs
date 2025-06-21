
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
 


export default function PostCard({authorFirstName,suck, image, content}) {


  return (
    <Card sx={{ maxWidth: 345 }}>
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
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
     
       
      </CardActions>

    </Card>
  );
}
