import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import PostCardList from '../PostCardList/PostCardList';
import UserList from '../UserList/UserList'


export default function MainContainer() {
  return (
    <Box container='true'   sx={{  mt: '3rem' }}>
      <Grid container='true'  alignItems={'start'}   justifyContent={'center'}  rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid  >
            <UserList/>
          
        </Grid>
        <Grid 
         container='true'
        alignItems={'center'} 
        justifyContent={'center'} 
        direction='column' 
        size={{ md: 8}}>
            {/* Posts */}
            <PostCardList />
        </Grid>
        
       
       
      </Grid>
    </Box>
  );
}
