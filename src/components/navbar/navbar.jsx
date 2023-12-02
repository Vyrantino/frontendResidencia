import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';



const links = [
  {
    name: "Home",
    NavLink: "/",
    varant:"h5"
  },
  {
    name: "Perfil",
    NavLink: "perfil-datos",
    varant:"h5"
  },
  {
    name: "Ingresa tu informacion",
    NavLink: "formulario-datos",
    varant:"h6"
  },
  {
    name: "Crear un Documento",
    NavLink: "formulario-documento",
    varant:"h6"
  },
] ;

export default function MenuAppBar() {
  const [theme, setTheme] = React.useState('light');
  const [checked, setChecked] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleChange = (event) => {
    setChecked(event.target.checked) ; 
    if( theme == 'light' )
      setTheme('dark');
    else
      setTheme('light');
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = ( ) => {
    setAnchorEl(null);
  };

  return (
    <Box position={'fixed'} sx={{ flexGrow: 1 , width: '100%'  }}>
      <AppBar position="static" sx={{  }} >
        <Toolbar >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          {
            links.map( ( item ) =>(
              <MenuItem 
                key={'mi'+item.NavLink + item.name} 
                component={ Link }
                to = { item.NavLink }
                sx={{ flex: 1 }}
              > 
                <Typography
                   flex={1} 
                   m={1} 
                   variant={ item.varant } 
                   key={item.NavLink + item.name}
                >  
                  { item.name }
                </Typography> 
              </MenuItem>
             ) ) 
          }
            <Box  sx={{ flex: .4 , alignSelf: 'center' }} >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={ handleClose } component = { Link } to = {'pagina-documentos'} >  Mis Documentos </MenuItem>
                <MenuItem onClick={ handleClose } component = { Link } to = {'departamento'} > Departamentos </MenuItem>
              </Menu>
            </Box>
            <FormControlLabel
              control={
                <Switch
                  color='success'
                  checked={checked}
                  onChange={handleChange}
                  aria-label="login switch"
                />
              }
              label={theme}
            />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
