/**
 * En este panel planeo que se hagan todas las transacciones de departamentos, el crud ps
 * Se necesita cargar la lista de los departamentos
 * poder eliminar, actualizar y crear
 */
import axios from 'axios' ; 
require( 'dotenv' ).config() ;

const apiUrlDepartamentos = process.env.REACT_APP_API_URL + "departamentos" ; 

export const getDepartamentos = async() =>{ // Consigue la lista de departamentos
    try{
        const response = await axios.get( apiUrlDepartamentos ) ;
        const departamentos = response.data ; 
        return departamentos ; 
    }
    catch( error ){
        console.error( 'No fue posible cargar la lista de Departamentos ' + error ) ;
        return null ;
    }
}

export const deleteDepartamento = async( idDepartamento ) =>{ //Borra algun departamento
    try{
        await axios.delete( apiUrlDepartamentos + idDepartamento ) ;
        alert( "Administrador Eliminado Exitosamente" ) ;
    }
    catch( error ){
        console.error( "No fue posible Eliminar al Departamento " + error );
        return null ;
    }
}

export const updateDepartamento = async( departamento ) =>{ //Actualiza los departamentos 
    try{
        await axios.patch( apiUrlDepartamentos , {
            Nombre: departamento.Nombre , 
        } ) ;
        alert( "Administrador modificado Exitosamente" ) ;
    }
    catch( error ){
        console.error( "No fue posible modificar al departamento " + error );
        return null ;
    }
}

export const newDepartamento = async ( departamento ) => {//Crea un nuevo departamento
    await axios.post( apiUrlDepartamentos , {
        Nombre: departamento.Nombre 
    } )
    alert( 'El nuevo departamento ha sido dado de alta' ) ;
}