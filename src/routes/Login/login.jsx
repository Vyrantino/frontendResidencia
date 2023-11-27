import { Box, Button, Container, FormControl, FormGroup, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import userSlice, { actionLogin } from "../../redux/usuarios/userSlice";
import * as React from 'react' ; 
import { Form, Link } from "react-router-dom";
import { userLogin } from "./apiLogin";
import userLoginDto from "./dto/userLogin.dto";
import Register from "../Register/register";
import { newUsuario } from "../Register/apiRegister";


export default function Login(){
    const [ Email , setEmail ] = React.useState( '' ) ; 
    const [ Username , setUsername ] = React.useState( '' ) ; 
    const [ Password , setPassword ] = React.useState( '' ) ; 
    const ROLE = useSelector( ( state ) => state.usersSlice.Role );
    const dispatch = useDispatch() ;

    const handleEmail = ( e ) => setEmail( e.target.value );
    const handleUsername = ( e ) => setUsername( e.target.value );
    const handlePassword = ( e ) => setPassword( e.target.value );
    const handleLogin = async (  )  => {
       const user = new userLoginDto({
            Email: Email ,
            Username: Username,
            Password: Password  
       }); 
       const loginUser = await newUsuario( user ) ;
       dispatch( actionLogin( loginUser ) ) ;
    }

    if( Registrarse ){
        return(
            <Register
                toogleRegistrarse = { toogleRegistrarse }
            />
        );
    }
    else{
        return(
            <Container 
                sx={{ 
                    flex: 1, 
                    display: 'flex', 
                    justifyContent: 'center' ,
                    m: 10 ,
                    flexDirection: 'column'
                }} 
            >
                 <TextField
                    sx={{ margin: 3 }}
                    id="filled-basic-Email"
                    label="Email"
                    inputMode="email"
                    onChange={ handleEmail }
                 />
                 <TextField
                    sx={{ margin: 3 }}
                    id="filled-basic-Username"
                    label="Username"
                    inputMode="none"
                    onChange={ handleUsername }
                 />
                 <TextField
                    sx={{ margin: 3 }}
                    id="filled-basic-Password"
                    label="Contraseña"
                    type="password"
                    onChange={ handlePassword }
                 />
    
                 <Button 
                    onClick={ handleLogin }
                 >
                    Ingresar
                 </Button>
                 <Button 
                   onClick={ () => props.toogleRegistrarse( true ) }
                 >
                    Registrarse
                 </Button>
            </Container>
        );
    }
    
}