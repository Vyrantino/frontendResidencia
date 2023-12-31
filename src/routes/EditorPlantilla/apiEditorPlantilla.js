/**
 * Editor plantilla va a ser una parte de la aplicacion donde el Administrador y el Moderador
 * Puedan editar la plantilla que acaban de crear
 * Va a necesitar cargar la informacion de la plantilla, hacerle modificaciones
 * Acceder a la lista de Datos disponibles
 * Debe Acceder a la lista de datos que ya tiene la plantilla
 * Asi como crear y borrar los datos plantilla tambien 
 */

import axios from 'axios' ; 
require('dotenv').config();

const apiPlantilla = process.env.REACT_APP_API_URL + "plantillas/"; 
const apiDatos = process.env.REACT_APP_API_URL + "datos/"; 
const apiDatosPlantilla = process.env.REACT_APP_API_URL + "datos-plantilla/"; 

export const getPlantilla = async ( idPlantilla ) =>{ //Obtiene la plantilla recien creada
    try{
        const response = await axios.get( apiPlantilla + idPlantilla ) ;
        const plantilla = response.data ; 
        return plantilla ; 
    }
    catch( error ){
        console.error( 'Hubo un error cargando la plantilla' ) ;
    }
}

export const updatePlantilla = async ( plantilla ) =>{ // Actualiza a la plantilla con que se esta trabajando
    try{
        const response = await axios.patch( apiPlantilla + plantilla.idPlantilla , {
            Nombre: plantilla.Nombre 
        } ) ;
        const updatedPlantilla = response.data ; 
        alert( 'La plantilla se ha actualizado' ) ;
        return updatedPlantilla ; 
    }
    catch( error ){
        console.error( 'El nombre de la plantilla no se pudo actualizar: ' + error ) ;
        return null ; 
    }
}


export const getDatos = async (  ) =>{ //Obtiene la lista de Datos disponibles
    try{
        const response = await axios.get( apiDatos );
        const datos = response.data ; 
        return datos ; 
    }
    catch( error ) {
        console.error( 'No se pudieron cargar la lista de los Datos ' + error  ) ;
        return null ;
    }
}

export const getDatosPlantilla = async ( idPlantilla ) =>{ // Obtiene la lista de datos que ya estan relacionados a la plantilla
    try{
        const response = await axios.get( apiDatosPlantilla + 'plantilla/' + idPlantilla );
        const datosPlantilla = response.data ; 
        return datosPlantilla ; 
    }
    catch( error ) {
        console.error( 'No se pudieron cargar los datos de la plantilla ' + error  ) ;
        return null ;
    }
}

export const newDatoPlantilla = async ( datoPlantilla ) =>{ // Crear nuevo DatoPlantilla
    try{
        await axios.post( apiDatosPlantilla , {
            idPlantilla: datoPlantilla.idDatoPlantilla , 
            idDato: datoPlantilla.idDato
        } )
        const datosPlantilla = await getDatosPlantilla( datoPlantilla.idPlantilla ) ; 
        alert( 'Nuevo dato plantilla dado de alta ' ) ;
        return datosPlantilla ; 
    }
    catch( error ){
        console.error( 'Fue imposible crear el nuevo dato plantilla: ' + error ) ;
    }
}

export const deleteDatoPlantilla = async ( datoPlantilla ) => { //Borra DatoPlantilla
    try{
        await axios.delete( apiDatosPlantilla + datoPlantilla.idDatoPlantilla ) ;
        const datosPlantilla = await getDatosPlantilla( datoPlantilla.idPlantilla ) ; 
        alert( 'Se ha removido el dato de la plantilla satisfactoriamente' ) ;
        return datosPlantilla ; 
    }
    catch( error ){
        console.error( 'No se pudo borrar el dato relacionado a la plantilla ' + error );
    }
}



