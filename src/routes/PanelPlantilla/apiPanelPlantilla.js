/**
 * Duplique esta pagina...
 * Quiero que aqui se puedan hacer plantillas del departamento 
 * Modificar las mismas, o sea, entrar a la plantilla y poder modificarla
 * Borrar plantillas
 * 
 */
import axios from 'axios' ; 
require('dotenv').config() ;

const apiUrlPlantillas = process.env.REACT_APP_API_URL + "plantillas" ; 

export const getPlantillas = async( idDepartamento ) =>{
    try{
        const response = await axios.get( apiUrlPlantillas + idDepartamento ) ;
        const plantillas = response.data ; 
        return plantillas ; 
    }
    catch( error ){
        console.error( 'No fue posible crear la lista de plantillas ' + error ) ;
        return null ; 
    }
}

export const newPlantilla = async( plantilla ) =>{
    try{
       await axios.post( apiUrlPlantillas , {
            idDepartamento: plantilla.idDepartamento , 
            Nombre: plantilla.Nombre 
       } ) ;
    }
    catch( error ){
        console.error( 'No fue posible crear la nueva plantilla ' + error ) ;
        return null ; 
    }
}

export const deletePlantilla = async( idPlantilla ) =>{
    try{
       await axios.delete( apiUrlPlantillas + idPlantilla ) ;
       alert( 'Plantilla borrada' ) ;
    }
    catch( error ){
        console.error( 'No fue posible borrar la plantilla ' + error ) ;
        return null ; 
    }
}

