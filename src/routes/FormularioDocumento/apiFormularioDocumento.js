import axios from 'axios' ; 
require('dotenv').config();

const apiUrlDepartamentos = process.env.REACT_APP_API_URL + "departamentos/"; 
const apiUrlPlantillas = process.env.REACT_APP_API_URL + "plantillas/"; 
const apiUrlDatosUsuario = process.env.REACT_APP_API_URL + "datos-usuario/"; 
const apiUrlDocumentos = process.env.REACT_APP_API_URL + "documentos" ; 

export const getDepartamentos = async() =>{
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

export const getPlantillas = async ( idDepartamento ) =>{
    try{
        const response = await axios.get( apiUrlPlantillas + 'idDepartamento/' + idDepartamento ) ;
        const plantillas = response.data ; 
        return plantillas ; 
    }
    catch( error ){
        console.error( 'No fue posible conseguir la lista de plantillas del departamento ' + error ) ; 
        return null ; 
    }
}

export const getDatosFaltantesUsuario = async ( idUsuario ) =>{
    try{
        const response = await axios.get( apiUrlDatosUsuario + 'datosFaltantes/' + idUsuario ) ;
        const datosFaltantes = response.data ; 
        return datosFaltantes ; 
    }   
    catch( error ) {
        console.log( 'No fue posible conseguir los datos faltantes ' + error ) ;
        return null  ;
    }
}

export const newDocumento = async ( documento ) =>{
    try{
        await axios.post( apiUrlDocumentos , {
            Nombre: documento.Nombre , 
            idPlantilla: documento.idPlantilla ,
            idUsuario: documento.idUsuario
        } ) ;
        alert( 'Documento generado correctamente' ) ;
    }
    catch( error ){
        console.error( 'No fue posible generar el documento ' + error ) ;
    }
}
