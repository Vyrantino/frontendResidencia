/**
 * Este formulario debe recopilar la siguiente informacion:
 * Debe de saber en que departamento se quiere generar el documento
 * Y sobre que plantilla de dicho departamento
 * Tambien, antes de generar el documento, debe de preguntarle al usuario
 * Los datos que le faltan, para que los llene ahi mismo y
 * Consecuentemente generar el documento y descargarlo en la computadora del usuario
 * Por lo que se necesita una lista de Deptos y de sus plantillas
 * Una lista de datos que le faltan al usuario
 */
import axios from 'axios' ; 
require('dotenv').config();

const apiUrlDepartamentos = process.env.REACT_APP_API_URL + "departamentos/"; 
const apiUrlPlantillas = process.env.REACT_APP_API_URL + "plantillas/";  
const apiUrlDocumentos = process.env.REACT_APP_API_URL + "documentos" ; 
const apiUrlDatosPlantilla = process.env.REACT_APP_API_URL + "datos-plantilla";
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

export const getPlantillas = async ( idDepartamento ) =>{//Carga la lista de plantillas en funcion al departamento que se ha elegido
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

export const getNeededData = async( idPlantilla , idUsuario ) =>{//carga una lista de datos que faltan del usuario para completar los
    //necesarios para la plantilla
    try{
        const response = await axios.get( apiUrlDatosPlantilla + idPlantilla + "/usuario/" + idUsuario ) ;
        const datosFaltantes = response.data ; 
        return datosFaltantes ; 
    }
    catch( error ){
        console.error( "No fue posible conseguir la lista de datos de la plantilla " + error ) ;
    }
}

// export const getDatosFaltantesUsuario = async ( idUsuario ) =>{//Cuando se seleccione la plantilla, al usuario se le debe de preguntar
//     //Una lista de datos faltantes en comparacion a los que datosPlantilla tiene...
//     try{
//         const response = await axios.get( apiUrlDatosUsuario + 'datosFaltantes/' + idUsuario ) ;
//         const datosFaltantes = response.data ; 
//         return datosFaltantes ; 
//     }   
//     catch( error ) {
//         console.log( 'No fue posible conseguir los datos faltantes ' + error ) ;
//         return null  ;
//     }
// }

export const newDocumento = async ( documento ) =>{//Crea un nuevo documento
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
