/**
 * Esto es como un editor de texto, el cual no se como funciona todavia...
 * pero supongo que solo necesito darle la informacion de la plantilla y sha
 */
import axios from 'axios' ; 
require( 'dotenv' ).config() ;

const apiUrlPlantillas = process.env.REACT_APP_API_URL + 'plantillas' ;   

export const getPlantilla = async ( idPlantilla ) => {
    try{
        const response = await axios.get( apiUrlPlantillas + idPlantilla ) ;
        const plantilla = response.data ; 
        return plantilla ; 
    }
    catch( error ){
        console.error( 'No fue posible cargar la plantilla ' + error ) ; 
        return null ; 
    }
}

export const updatePlantilla = async( idPlantilla  , plantilla ) =>{
    try{
        await axios.patch( apiUrlDatosUsuario + idPlantilla , {
            Nombre: plantilla.Nombre 
        } ) ;
        alert( 'plantilla actualizada correctamente' ) ;
    }
    catch( error ){
        console.error( 'No fue posible actualizar la plantilla ' + error ) ;
    }
}