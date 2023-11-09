import axios from 'axios' ; 
require( 'dotenv' ).config() ;

const apiUrlAdministradores = process.env.REACT_APP_API_URL + "administradores"; 
const apiUrlModeradores = process.env.REACT_APP_API_URL + "moderadores"; 
const apiUrlDepartamentos = process.env.REACT_APP_API_URL + "departamentos"; 
const apiUrlUsuarios = process.env.REACT_APP_API_URL + "usuarios"; 

export const getModeradores = async ( idDepartamento ) =>{
    try{
        const response = await axios.get( apiUrlModeradores + 'departamento' + idDepartamento ) ;
        const moderadores = response.data ; 
        return moderadores ; 
    }
    catch( error ){
        console.error( 'No fue posible cargar la lista de Moderadores ' + error ) ;
        return null ; 
    }
}

export const newModerador = async ( moderador ) =>{
    try{
        await axios.post( apiUrlModeradores , {
            idUsuario: moderador.idUsuario , 
            idDepartamento: moderador.idDepartamento ,
        } ) ;
        alert( 'Moderador generado correctamente' ) ;
    }
    catch( error ){
        console.error( 'No fue posible asignar al moderador ' + error ) ;
        return null ; 
    }
}

export const getDepartamentos = async(  ) =>{
    try{
        const response = await axios.get( apiUrlAdministradores + 'departamentos'  ) ;
        const departamentos = response.data ; 
        return departamentos ; 
    }
    catch( error ){
        console.error( 'No fue posible asignar al moderador ' + error ) ;
        return null ; 
    }
}

export const getUsuarios = async() =>{
    try{
        const response = await axios.get( apiUrlUsuarios ) ;
        const usuarios = response.data ; 
        return usuarios ; 
    }
    catch( error ){
        console.error( 'No fue posible cargar la lista de Usuarios ' + error ) ;
        return null ; 
    }
}