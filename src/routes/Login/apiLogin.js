//Ventana exclusiva para ingresar a la aplicacion
import axios  from "axios" ;

const apiUrlLogin = import.meta.env.VITE_API_URL + "usuarios" ;
const apiUrlLoginDepartamentos = import.meta.env.VITE_API_URL + 'administradores' ; 

export const userLogin = async( usuario ) =>{
    try{
        // const response = await axios.post( apiUrlLogin + '/login' , {
        //     [ isEmail ? 'Email' : 'Username' ] : isEmail ? usuario.Email : usuario.Username , 
        //     Password: usuario.Password 
        // } );
        const response = await axios.post( apiUrlLogin + '/login' , {
            Password: usuario.Password , 
            Username: usuario.Username , 
            Email: usuario.Email
        } );
        const userData = response.data ; 
        return userData ; 
    }
    catch( error ){
        console.error( 'No se pudo conectar con el servidor ' + error ) ;
    }
}

