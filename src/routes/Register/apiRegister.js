/**
 * Isn't it obvious?
 */
import axios from 'axios' ; 
require( 'dotenv' ).config() ;

const apiUrlUsuarios = process.env.REACT_APP_API_URL + 'usuarios' ;

export const newUsuario = async( usuario ) =>{
    try{
        await axios.post( apiUrlUsuarios , {
            Username: usuario.Username , 
            Email: usuario.Email , 
            Password: usuario.Password 
        } ) ;
    }
    catch( error ){
        console.error( 'No fue posible registrar al usuario ' + error ) ;
    }
}
