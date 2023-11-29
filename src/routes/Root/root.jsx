import * as React from 'react' ; 
import MenuAppBar from "../../components/Navbar/navbar";
import { Box, Container, Typography } from "@mui/material";
import { useDispatch, useSelector  } from "react-redux";
import Login from "../Login/login";
import { redirect, Outlet, useNavigate, Navigate } from "react-router-dom";
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
          <Container>
              <MenuAppBar />
              <Typography > { role } </Typography>
              <Navigate  to={ 'panel-admin' } />
              <Container >
                <Outlet  />
                <BottomNavigator />
              </Container>
              
          </Container>
        );
      case 'Moderador':
        return (
          <Container>
              <MenuAppBar />
              <Typography > { role } </Typography>
              <Navigate  to={ 'panel-moderador' } />
              <Container >
                <Outlet  />
                <BottomNavigator />
              </Container>
          </Container>
        );
      case 'Master':
        return (
          <>
              <MenuAppBar />
              <Typography > { role } </Typography>
              <Navigate  to={ 'panel-control' } />
              <Container >
                <Outlet  />
                <BottomNavigator />
              </Container>
          </>
        );
    }
  }
    
}