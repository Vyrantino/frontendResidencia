/**
 * Por ahora no tengo idea de por que pense en esta pagina...
 * Supongo que cuando intente implementar al editor de texto, va a necesitar
 * de su propia seccion... en fin...
 */
import axios from 'axios' ; 
require('dotenv').config();

const apiUrl = process.env.REACT_APP_API_URL + "plantillas/";

export const getPlantilla = async ( idPlantilla ) =>{ // ????
    try{
        const response = await axios.get( apiUrl + idPlantilla ) ;
        const plantilla = response.data ; 
        return plantilla ; 
    }
    catch( error ){
        console.error( 'No se pudo cargar la plantilla ' + error ) ;
        return null ; 
    }
}

