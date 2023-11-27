/**
 * FormularioDatos va a preguntar al usuario los datos que le hacen falta
 * Necesita saber que datos existen
 * 
 * Que datos le faltan al usuario
 * Crear los nuevos DatosUsuario
 * 
 */
import axios from 'axios' ; 
require('dotenv').config();

const apiUrlDatosUsuario = process.env.REACT_APP_API_URL + "datos-usuarios/"; 
const apiUrlDatos = process.env.REACT_APP_API_URL + "datos/"; 


export const getDatosFaltantesUsuario = async ( idUsuario ) =>{ // Obtiene una lista de datos faltantes
    try{
        const response = await axios.get( apiUrlDatosUsuario + 'datosFaltantes/' +idUsuario ) ;
        const datosUsuario = response.data ; 
        return datosUsuario ; 
    }
    catch( error ){
        console.error( 'Hubo un error al cargar los datos ' + error ) ;
        return null ; 
    }
}

export const getDatos = async () =>{ //Obtiene una lista de datos en la tabla Datos
    try{
        const response = await axios.get( apiUrlDatos + 'datos' ) ;
        const datos = response.data ; 
        return datos ;
    }
    catch( error ){
        console.error( 'Ocurrio un error intentando acceder a los nombres de los datos ' + error ) ;
        return null ; 
    }
}

export const newDatoUsuario = async ( datoUsuario ) => { //Crea un nuevo dato para el usuario
    try{
        await axios.post( apiUrlDatosUsuario , {
            contenido: datoUsuario.contenido ,
            idUsuario: datoUsuario.idUsuario , 
            idDato: datoUsuario.idDato 
        } );
        alert( 'El dato ha sido ingresado correctamente' ) ;
    }
    catch( error ){
        console.error( 'No se pudo crear el nuevo dato para el Usuario' ) ;
    }
} 