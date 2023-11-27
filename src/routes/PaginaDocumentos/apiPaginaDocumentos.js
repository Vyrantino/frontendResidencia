/*
    Esta ventana es para mostrar los documentos que ya se han realizado
    Los muestra en una lista ordenada primeramente por la fecha de elaboracion
    Se puede editar el nombre del documento
    Se puede descargar el documento de nuevo
*/
import axios from 'axios' ; 
require( 'dotenv' ).config() ;

const apiUrlDocumentos = process.env.REACT_APP_API_URL + 'documentos' ; 


export const getDocumentos = async( idUsuario ) => {//Se obtiene la lista de documentos
    try{
        const response = await axios.get( apiUrlDocumentos + idUsuario ) ;
        const documentos = response.data ; 
        return documentos ;  
    }
    catch( error ){
        console.error( 'No fue posible conseguir la lista de Documentos ' + error ) ;
        return null ; 
    }
}

export const descargarDocumento = async( idDocumento ) =>{//Se puede descargar un documento
    try{
        const response = await axios.get( apiUrlDocumentos + idDocumento ) ;
        const documento = response.data ; 
        return documento ; 
    }
    catch( error ){
        console.log( 'No se pudo generar el documento ' + error );
        return null ; 
    }
}

export const updateDocumento = async( documento ) =>{
    try{
        await axios.patch( apiUrlDocumentos + documento.idDocumento , {
            Nombre: documento.Nombre 
        } ) ;
    }
    catch( error ){
        console.log( 'No se pudo actualizar el documento ' + error );
        return null ; 
    }
}
  