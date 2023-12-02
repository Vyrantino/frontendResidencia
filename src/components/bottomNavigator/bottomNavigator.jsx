import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Link, useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';

export default function BottomNavigator() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate() ; 
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
        <BottomNavigationAction LinkComponent={Link} to={ '/' } label="Pagina Principal" icon={<HomeIcon />} />
        <BottomNavigationAction label="Crear Documento" LinkComponent={Link} to={ '/formulario-documento' }  icon={<CreateNewFolderIcon />} />
      </BottomNavigation>
    </Box>
  );
}
