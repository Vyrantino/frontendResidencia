import * as React from 'react' ; 
import MenuAppBar from "../../components/Navbar/navbar.jsx";
import { Box, Container, Typography } from "@mui/material";
import {  useSelector  } from "react-redux";
import {  Outlet, Navigate } from "react-router-dom";
import BottomNavigator from '../../components/bottomNavigator/bottomNavigator';


export default function Root() {
  const role = useSelector( ( state ) => state.usersSlice.Role );
  if( !role ){
    return(
      <Container  >
        <Navigate to={'login'} />
        <Outlet />
      </ Container >
    );
  }
  else{
    switch( role ){
      case 'Usuario' :
        return (
          <Box sx={{ position: 'relative', paddingBottom: '50px' }}>
              <MenuAppBar />
                <Container sx={ { padding: 15 } } >
                  <Typography > { role } </Typography>
                  <Navigate to={'/'}/>
                  <Outlet  />
                </Container>
              <BottomNavigator/>
          </Box>
        );
      case 'Administrador':
        return (
          <Box sx={{ position: 'relative', paddingBottom: '50px' }}>
              <MenuAppBar />
                <Container sx={ { padding: 15 } } >
                  <Typography > { role } </Typography>
                  <Navigate to={'panel-admin'}/>
                  <Outlet  />
                </Container>
              <BottomNavigator/>
          </Box>
        );
      case 'Moderador':
        return (
          <Box sx={{ position: 'relative', paddingBottom: '50px' }}>
              <MenuAppBar />
                <Container sx={ { padding: 15 } } >
                  <Typography > { role } </Typography>
                  <Navigate to={'panel-moderador'}/>
                  <Outlet  />
                </Container>
              <BottomNavigator/>
          </Box>
        );
      case 'Master':
        return (
          <Box sx={{ position: 'relative', paddingBottom: '50px' }}>
              <MenuAppBar />
                <Container sx={ { padding: 15 } } >
                  <Typography > { role } </Typography>
                  <Navigate to={'panel-control'}/>
                  <Outlet  />
                </Container>
              <BottomNavigator/>
          </Box>
        );
    }
  }
    
}