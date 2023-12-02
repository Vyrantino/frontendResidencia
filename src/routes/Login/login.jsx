import { Box, Button, Container, FormControl, FormGroup, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import userSlice, { actionLogin } from "../../redux/usuarios/userSlice";
import * as React from 'react' ; 
import { userLogin } from "./apiLogin";
import UserLoginDto from "./dto/userLogin.dto";
import Register from "../Register/register";
import userLoginDto from "./dto/userLogin.dto";


export default function Login(){
   // const emailRegEx = /\S+@(itDurango\.edu\.mx|durango\.tecnm\.mx)\b/ ;
    const emailRegEx = /\S+@\S+\.\S+/ ;
    const [ Registrarse , toogleRegistrarse ] = React.useState( false ) ;
    const [ Email , setEmail ] = React.useState( '' ) ; 
    const [ Username , setUsername ] = React.useState( '' ) ; 
    const [ Password , setPassword ] = React.useState( '' ) ; 
    const ROLE = useSelector( ( state ) => state.usersSlice.Role );
    const dispatch = useDispatch() ;

    const handleEmail = ( e ) => setEmail( e.target.value );
    const handleUsername = ( e ) => setUsername( e.target.value );
    const handlePassword = ( e ) => setPassword( e.target.value );
    const handleLogin = async (  )  => {
       const isEmail = emailRegEx.test( Email ) ;
       const user = {
            Password: Password , 
            [ isEmail ? 'Email' : 'Username' ] : Email
       };
       const loginUser = await userLogin( user , isEmail ) ;
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
                   onClick={ () => toogleRegistrarse( true ) }
                 >
                    Registrarse
                 </Button>
            </Container>
        );
    }
    
}