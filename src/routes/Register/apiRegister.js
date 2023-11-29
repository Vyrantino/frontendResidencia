/**
 * Isn't it obvious?
 */
import axios from 'axios' ; 

const apiUrlUsuarios = import.meta.env.VITE_API_URL + 'usuarios' ;

export const newUsuario = async( usuario ) =>{
    try{
        await axios.post( apiUrlUsuarios + "/register" , {
            Username: usuario.Username , 
            Email: usuario.Email , 
            Password: usuario.Password 
        } ) ;
    }
    catch( error ){
        console.error( 'No fue posible registrar al usuario ' + error ) ;
    }
}
