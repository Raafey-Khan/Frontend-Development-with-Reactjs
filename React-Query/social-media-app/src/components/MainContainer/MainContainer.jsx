import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import PostCardList from '../PostCardList/PostCardList';
import UserList from '../UserList/UserList';

export default function MainContainer() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <Box sx={{ mt: '3rem', position: 'relative' }}>
      <Grid
        container
        flexWrap="nowrap"
        alignItems="flex-start"
        justifyContent="center"
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        {/* Sidebar for desktop */}
        {!isMobile && (
          <Grid item>
            <UserList />
          </Grid>
        )}

        {/* Hamburger menu for mobile */}
        {isMobile && (
          <>
            <IconButton
              onClick={toggleDrawer(true)}
              sx={{ position: 'absolute', top: 0, left: 0, m: 1 }}
            >
              <MenuIcon />
            </IconButton>

            <Drawer
              anchor="left"
              open={drawerOpen}
              onClose={toggleDrawer(false)}
            >
              <Box sx={{ width: 250, p: 2 }}>
                <UserList />
              </Box>
            </Drawer>
          </>
        )}

        {/* Main content */}
        <Grid item xs={12} md={8}>
          <PostCardList />
        </Grid>
      </Grid>
    </Box>
  );
}
