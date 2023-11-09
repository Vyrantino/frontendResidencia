import axios from 'axios' ; 
require('dotenv').config();

const apiUrlDatosUsuario = process.env.REACT_APP_API_URL + "datos-usuarios/"; 
const apiUrlDatos = process.env.REACT_APP_API_URL + "datos/"; 


export const getDatosFaltantesUsuario = async ( idUsuario ) =>{
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

export const getDatos = async () =>{
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

export const newDatoUsuario = async ( datoUsuario ) => {
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