/**
 * En este panel se supone que se daran de alta los tipos de dato
 * Esto se hara a traves de la cuenta maestro 
 * Se debe de cargar una lista de los datos actuales
 * Asi como poder crearlos o actualizarlos
 * Borrarlos y asi 
 * Basicamente el CRUD de datos aqui
 */
import axios from 'axios' ; 

const apiUrlDatos = import.meta.env.VITE_API_URL + "datos" ; 

export const getDatos = async() =>{
    try{
        const response = await axios.get( apiUrlDatos ) ;
        const datos = response.data ; 
        return datos ; 
    }
    catch( error ){
        console.error( 'No se pudo cargar la lista de Datos ' + error ) ;
        return null ;
    }
}

export const updateDato = async( dato , nombre ) =>{
    try{
        await axios.patch( apiUrlDatos + '/' + dato.idDato , {
            Nombre: nombre 
        } );
        alert( 'El dato fue actualizado satisfactoriamente' ) ;
    }
    catch( error ){
        console.error( 'No se pudo actualizar el Dato ' + error ) ;
        return null ;
    }
}

export const newDato = async( dato ) =>{
    try{
        await axios.post( apiUrlDatos , {
            Nombre: dato.Nombre 
        } );
        alert( 'El dato fue creado satisfactoriamente' ) ;
    }
    catch( error ){
        console.error( 'No se pudo crear el Dato ' + error ) ;
        return null ;
    }
}

export const deleteDato = async( idDato ) =>{
    try{
        await axios.delete( apiUrlDatos + '/' + idDato );
        alert( 'El dato fue borrado satisfactoriamente' ) ;
    }
    catch( error ){
        console.error( 'No se pudo borrar el Dato ' + error ) ;
        return null ;
    }
}