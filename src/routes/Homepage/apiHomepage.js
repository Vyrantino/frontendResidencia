import axios from 'axios' ; 
require('dotenv').config();

const apiUrlDepartamentos = process.env.REACT_APP_API_URL + "departamentos/"; 
const apiUrlDocumentos = process.env.REACT_APP_API_URL + "documentos/"; 
const apiUrlPlantillas = process.env.REACT_APP_API_URL + "plantillas/" ; 


export const getDepartamentos = async () =>{
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

export const getTopPlantillas = async() =>{
    try{
        const response = await axios.get( apiUrlDocumentos + 'top' ) ;
        const topPlantillas = response.data ; 
        return topPlantillas ; 
    }
    catch( error ){
        console.error( 'No se pudo cargar la lista de las mejores plantillas ' + error ) ; 
        return null ; 
    }
}

export const getPlantillas = async( idDepartamento ) =>{
    try{
        const response = await axios.get( apiUrlPlantillas + idDepartamento ) ;
        const plantillas = response.data ; 
        return plantillas ; 
    }
    catch( error ){
        console.error( 'No se pudo conseguir la lista de plantillas ' + error ) ;
        return null ;
    }
}
