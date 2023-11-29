import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useNavigate } from 'react-router-dom';

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
        <BottomNavigationAction onClick={ ()=> navigate(-1) } label="Recents" icon={<ArrowBackIosNewIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
      </BottomNavigation>
    </Box>
  );
}
