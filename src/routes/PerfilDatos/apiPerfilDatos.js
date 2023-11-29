/**
 * Perfil datos sera un espacio donde el usuario podra ver la informacion que ya ha
 * ingresado, ademas de que me gustaria que ahi mismo pueda contestar
 * no de una manera tan organizada o vistoza, campos de informacion
 * que aun no ha llenado. No creo que haga falta que se vea tan aca
 * Porque pues no es el lugar designado para hacerlo...Pero no veo
 * razon para no poner ahi la opcion
 */
import axios from 'axios' ; 
const apiUrlDatosUsuario = import.meta.env.VITE_API_URL + 'datos-usuario' ; 

export const getDatosUsuario = async ( idUsuario ) =>{ //Obtiene la lista de los datos del usuario
    try{
        const response = await axios.get( apiUrlDatosUsuario + '/idUsuario/' + idUsuario ) ;
        const datosUsuario = response.data ; 
        return datosUsuario ; 
    }
    catch( error ){
        console.error( 'No fue posible cargar la lista de los datos del usuario ' + error ) ;
        return null ;
    }
}

export const newDatoUsuario = async ( datoUsuario ) =>{//Crea un nuevo dato del usuario
    try{
        await axios.post( apiUrlDatosUsuario , {
            contenido: datoUsuario.contenido , 
            idDato: datoUsuario.idDato ,
            idUsuario: datoUsuario.idUsuario
        } ) ;
        alert( 'Dato del usuario agregado correctamente' ) ;
    }
    catch( error ){
        console.error( 'No fue posible agregar el dato del usuario ' + error ) ;
    }
}


export const deleteDatoUsuario = async( idDatoUsuario ) =>{ //La opcion de borrar dicho dato
    try{
        await axios.delete( apiUrlDatosUsuario + idDatoUsuario ) ;
        alert( "Dato del usuario Eliminado Exitosamente" ) ;
    }
    catch( error ){
        console.error( "No fue posible Eliminar el dato del usuario " + error );
        return null ;
    }
}

export const updateDatoUsuario = async ( datoUsuario ) =>{ //Asi como actualizar un dato
    try{
        await axios.patch( apiUrlDatosUsuario , {
            contenido: datoUsuario.contenido , 
            idDato: datoUsuario.idDato ,
            idUsuario: datoUsuario.idUsuario
        } ) ;
        alert( 'Dato del usuario actualizado correctamente' ) ;
    }
    catch( error ){
        console.error( 'No fue posible agregar el dato del usuario ' + error ) ;
    }
}

export const getEmptyData = async( idUsuario ) => {
    try{
        const response = await axios.get( apiUrlDatosUsuario + '/datosFaltantes/' + idUsuario ) ;
        const datosFaltantes = response.data ; 
        return datosFaltantes ; 
    }
    catch( error ){
        console.error( 'No fue posible conseguir la lista de datos faltantes ' + error ) ;
    }
}