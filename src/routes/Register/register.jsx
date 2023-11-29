import { Button, Container, TextField } from "@mui/material";
import { newUsuario } from "./apiRegister";
import NewUserDto from "./dto/newUser.dto";
import * as React from 'react' ; 


export default function Register( props ){
    const [ Email , setEmail ] = React.useState( '' ) ; 
    const [ Username , setUsername ] = React.useState( '' ) ; 
    const [ Password , setPassword ] = React.useState( '' ) ; 
    const [ ConfirmPassword , setConfirmPassword ] = React.useState( '' ) ; 

    const handleEmail = ( e ) => setEmail( e.target.value );
    const handleUsername = ( e ) => setUsername( e.target.value );
    const handlePassword = ( e ) => setPassword( e.target.value );
    const handleConfirmPassword = ( e ) => setConfirmPassword( e.target.value );
    const handleRegister = async (  )  => {
       try{
         if( Password === ConfirmPassword ){
            const user = new NewUserDto({
               Email: Email ,
               Username: Username,
               Password: Password  
            }); 
            const registerUser = await newUsuario( user ) ;
            props.toogleRegistrarse( false );
         }
         else{
            alert( 'Las contrasenas no coinciden' ) ;
         }
       }
       catch( error ){
         console.error( error ) ;
       }
       
      
    }
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
                 <TextField
                    sx={{ margin: 3 }}
                    id="filled-basic-ConfirmPassword"
                    label="Confirmar Contraseña"
                    type="password"
                    onChange={ handleConfirmPassword }
                 />
    
                 <Button 
                    onClick={ handleRegister }
                 >
                    Registrarse
                 </Button>
                 <Button 
                   onClick={ () => props.toogleRegistrarse( false ) }
                 >
                    Ingresar
                 </Button>
            </Container>
        );
}