import { Outlet } from "react-router-dom";
import MenuAppBar from "../../components/Navbar/navbar";
import { Box, Container, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Login from "../Login/login";


export default function Root() {
  const role = useSelector( ( state ) => state.usersSlice.Role );
  if( role == null ){
    return(
      <Container  >
        <Login />
      </ Container >
    );
  }
  else{
    return (
      <>
          <MenuAppBar />
          <Typography > { role } </Typography>
          <Container >
            <Outlet  />
          </Container>
      </>
    );
  }
    
}