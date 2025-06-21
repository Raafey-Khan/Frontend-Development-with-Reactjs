import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import PostCardList from '../PostCardList/PostCardList';
import UserList from '../UserList/UserList'
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

export default function RowAndColumnSpacing() {
  return (
    <Box display='flex' justifyContent='space-around' sx={{ width: '100%', mt: '3rem' }}>
      <Grid container justifyContent={'center'} alignItems={'start'}  rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid size={{ md: 6}}>
            <UserList/>
          
        </Grid>
        <Grid 
        container 
        alignItems={'center'} 
        justifyContent={'center'} 
        direction={'column'} 
        size={{ md: 6}}>
            {/* Posts */}
            <PostCardList/>
        </Grid>
        
       
       
      </Grid>
    </Box>
  );
}
