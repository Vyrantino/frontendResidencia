import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Link, useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import { useSelector } from 'react-redux';

export default function BottomNavigator() {
  const rol = useSelector( ( state ) => state.usersSlice.Role ) ;
  const [value, setValue] = React.useState(0);
  const [ homeLink , setHomeLink ] = React.useState('/') ;
  const navigate = useNavigate() ; 
  const bringHomeLink = () =>{
    switch( rol ){
      case 'Usuario':  setHomeLink( '/' ) ; break ; 
      case 'Moderador':  setHomeLink( '/panel-moderador' ) ; break ; 
      case 'Administrador':  setHomeLink( '/panel-admin' ) ; break ; 
      case 'Master':  setHomeLink( '/panel-control' ) ; break ; 
      default :  setHomeLink( '/' ) ;
    }
  }
  React.useEffect(() =>{
    bringHomeLink() ;
  },[]) ;

  return (
    <Box sx={{ position: 'fixed', bottom: 0, width: '100%'  }} >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{ justifyContent: 'space-evenly'  }}
      >
        <BottomNavigationAction onClick={ ()=> navigate(-1) } label="Atrás" icon={<ArrowBackIosNewIcon />} />
        <BottomNavigationAction LinkComponent={Link} to={ homeLink } label="Pagina Principal" icon={<HomeIcon />} />
        <BottomNavigationAction label="Crear Documento" LinkComponent={Link} to={ '/formulario-documento' }  icon={<CreateNewFolderIcon />} />
      </BottomNavigation>
    </Box>
  );
}
