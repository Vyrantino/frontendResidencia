/**
 * En esta pagina quiero que el panel sirva para dar de alta moderadores
 * Es necesario ver la lista de los mismos
 * Ver una lista de usuarios
 * con la capacidad de modificar los roles
 * Tambien es importante ver una lista de moderadores que pueda ser modificada 
 * Otra cosa que vale la pena mencionar es que los moderadores que seran dados de alta
 * seran siempre del mismo departamento en donde se encuentre el administrador
 * por lo que sera necesario cargar previamente el departamento disponible del administrador
 */
import axios from 'axios' ; 
require( 'dotenv' ).config() ;

const apiUrlAdministradores = process.env.REACT_APP_API_URL + "administradores"; 
const apiUrlModeradores = process.env.REACT_APP_API_URL + "moderadores"; 
const apiUrlPlantillas = process.env.REACT_APP_API_URL + "plantillas"; 
const apiUrlUsuarios = process.env.REACT_APP_API_URL + "usuarios"; 

export const getModeradores = async ( idDepartamento ) =>{ //Lista de moderadores segun el departamento
    try{
        const response = await axios.get( apiUrlModeradores + 'departamento' + idDepartamento ) ;
        const moderadores = response.data ; 
        return moderadores ; 
    }
    catch( error ){
        console.error( 'No fue posible cargar la lista de Moderadores ' + error ) ;
        return null ; 
    }
}

export const newModerador = async ( moderador ) =>{ //Se crea a un nuevo moderador
    try{
        await axios.post( apiUrlModeradores , {
            idUsuario: moderador.idUsuario , 
            idDepartamento: moderador.idDepartamento ,
        } ) ;
        alert( 'Moderador generado correctamente' ) ;
    }
    catch( error ){
        console.error( 'No fue posible asignar al moderador ' + error ) ;
        return null ; 
    }
}

export const getAdminDepartamentos = async( idUsuario ) =>{ 
    // se obtiene una lista de los departamentos que le corresponden a determinado admin
    try{
        const response = await axios.get( apiUrlAdministradores + 'departamentos/' + idUsuario  ) ;
        const departamentos = response.data ; 
        return departamentos ; 
    }
    catch( error ){
        console.error( 'No fue posible cargar la lista de Departamentos que le corresponden al Administrador ' + error ) ;
        return null ; 
    }
}

export const getUsuarios = async() =>{//La lista de usuarios a modificar... 
    try{
        const response = await axios.get( apiUrlUsuarios ) ;
        const usuarios = response.data ; 
        return usuarios ; 
    }
    catch( error ){
        console.error( 'No fue posible cargar la lista de Usuarios ' + error ) ;
        return null ; 
    }
}
