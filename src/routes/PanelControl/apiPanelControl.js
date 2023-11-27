/**
 * En esta ventana quiero que solo se puedan dar de alta los administradores
 * Las demas operaciones en sus respectivas ventanas
 * Es necesario entonces mostrar una lista de los usuarios
 * Poder modificarles el rol
 * Escoger los departamentos disponibles
 * Y tambien cargar una lista de administradores segun el departamento
 */
import axios from 'axios' ; 
require( 'dotenv' ).config() ;

const apiUrlAdministradores = process.env.REACT_APP_API_URL + "administradores" ; 
const apiUrlUsuarios = process.env.REACT_APP_API_URL + "usuarios" ; 
const apiUrlDepartamentos = process.env.REACT_APP_API_URL + "departamentos" ; 

export const getAdministradores = async( idDepartamento ) =>{//Lista de administradores por departamento
    try{
        const response = await axios.get( apiUrlAdministradores + "departamentos" + idDepartamento ) ;
        const administradoresDepartamento = response.data ; 
        return administradoresDepartamento ; 
    }
    catch( error ){
        console.error( 'No fue posible cargar los administradores de dicho departamento ' + error ) ;
        return null ;
    }
}

export const newAdministrador = async( administrador ) =>{//Crea nuevo administrador
    try{
        await axios.post( apiUrlAdministradores , {
            idUsuario: administrador.idUsuario , 
            idDepartamento: administrador.idDepartamento
        } ) ;
        alert( "Administrador Creado Exitosamente" ) ;
    }
    catch( error ){
        console.error( "No fue posible crear al nuevo administrador " + error );
        return null ;
    }
}

export const getUsuarios = async(  ) =>{//Obtiene la lista de usuarios 
    try{
        const response = await axios.get( apiUrlUsuarios  ) ;
        const usuarios = response.data ; 
        return usuarios ; 
    }
    catch( error ){
        console.error( 'No fue posible cargar la lista de usuarios ' + error ) ;
        return null ;
    }
}

export const getDepartamentos = async() =>{//Carga la lista de departamentos
    try{
        const response = await axios.get( apiUrlDepartamentos ) ;
        const departamentos = response.data ; 
        return departamentos ;
    }
    catch( error ){
        console.error( 'Hubo un error intentando conseguir la lista de los departamentos ' + error ) ;
        return null ; 
    }
}

