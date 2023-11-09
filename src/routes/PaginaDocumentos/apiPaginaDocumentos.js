import axios from 'axios' ; 
require( 'dotenv' ).config() ;

const apiUrlDocumentos = process.env.REACT_APP_API_URL + 'documentos' ; 


export const getDocumentos = async( idUsuario ) => {
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

export const descargarDocumento = async( idDocumento ) =>{
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
