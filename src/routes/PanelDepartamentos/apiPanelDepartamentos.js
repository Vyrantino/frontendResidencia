/**
 * En este panel planeo que se hagan todas las transacciones de departamentos, el crud ps
 * Se necesita cargar la lista de los departamentos
 * poder eliminar, actualizar y crear
 */
import axios from 'axios' ; 

const apiUrlDepartamentos = import.meta.env.VITE_API_URL + "departamentos" ; 

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
        await axios.delete( apiUrlDepartamentos + '/' + idDepartamento ) ;
        alert( "Departamento Eliminado Exitosamente" ) ;
    }
    catch( error ){
        console.error( "No fue posible Eliminar al Departamento " + error );
        return null ;
    }
}

export const updateDepartamento = async( departamento ) =>{ //Actualiza los departamentos 
    try{
        await axios.patch( apiUrlDepartamentos + '/' + departamento.idDepartamento, {
            Nombre: departamento.Nombre , 
        } ) ;
        alert( "Departamento modificado Exitosamente" ) ;
    }
    catch( error ){
        console.error( "No fue posible modificar al departamento " + error );
        return null ;
    }
}

export const newDepartamento = async ( newDepartamento ) => {//Crea un nuevo departamento
    await axios.post( apiUrlDepartamentos , {
        Nombre: newDepartamento
    } )
    alert( 'El nuevo departamento ha sido dado de alta' ) ;
}