import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Shimmer from '../Shimmer/Shimmer';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import fetchUser from '../../helpers/fetchUser';



export default function UserDetails() {
  const { userId } = useParams();
  const { data: user, isLoading } = useQuery({queryKey: ['user', userId], queryFn: fetchUser});
  

  if (isLoading) {
    return <div>Loading</div>;
  } 

  return (
    <Card sx={{ display: 'flex', mt: '2rem' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {`${user.firstName} ${user.lastName}`}
          </Typography>
          <Typography variant="subtitle1" component="div" sx={{ color: 'text.secondary' }}>
            {user.email}
          </Typography>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={user.picture}
        alt="User profile picture"
      />
    </Card>
  );
}


