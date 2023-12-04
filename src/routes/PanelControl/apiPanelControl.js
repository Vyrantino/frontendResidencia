/**
 * En esta ventana quiero que solo se puedan dar de alta los administradores
 * Las demas operaciones en sus respectivas ventanas
 * Es necesario entonces mostrar una lista de los usuarios
 * Poder modificarles el rol
 * Escoger los departamentos disponibles
 * Y tambien cargar una lista de administradores segun el departamento
 */
import axios from 'axios' ; 

const apiUrlAdministradores = import.meta.env.VITE_API_URL + "administradores/" ; 
const apiUrlUsuarios = import.meta.env.VITE_API_URL + "usuarios/" ; 
const apiUrlDepartamentos = import.meta.env.VITE_API_URL + "departamentos" ; 

export const getAdministradores = async( idDepartamento ) =>{//Lista de administradores por departamento
    try{
        const response = await axios.get( apiUrlAdministradores + "departament-administrators/" + idDepartamento ) ;
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
            idDepartamento: administrador.idDepartamento, 
            Role: 'Administrador'
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
        const response = await axios.get( apiUrlUsuarios + 'master' ) ;
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

export const getUserDepartaments = async( idUsuario ) =>{//Carga la lista de departamentos
    try{
        const response = await axios.get( apiUrlAdministradores + 'user-departaments/' + idUsuario ) ;
        const departamentos = response.data ; 
        return departamentos ;
    }
    catch( error ){
        console.error( 'Hubo un error intentando conseguir la lista de los departamentos del Usuario ' + error ) ;
        return null ; 
    }
}

export const deleteAdministrador = async ( administrador ) =>{
    try {
        const confirmDelete = confirm( 'Esta seguro de revocar derecho de administrador? ' );
        if( confirmDelete ){
            await axios.post( apiUrlAdministradores + 'eliminar-admin', {
                idAdministrador: administrador.idAdministrador ,
                idUsuario: administrador.idUsuario
            } ) ;
        }
        else{
            console.log( 'No se pudo borrar al administrador' ) ;
            return null ; 
        }

    } catch (error) {
        console.error( error );
    }
}

