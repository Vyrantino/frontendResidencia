import axios from 'axios' ; 
require('dotenv').config();

const apiUrl = process.env.REACT_APP_API_URL + "departamentos/"; 


export const newDepartamento = async ( departamento ) => {
    await axios.post( apiUrl , {
        Nombre: departamento.Nombre 
    } )
    alert( 'El nuevo departamento ha sido dado de alta' ) ;
}

export const getDepartamentos = async (  ) =>{
   try{
        const response  = await axios.get( apiUrl ) ; 
        const allDepartamentos = response.data ; 
        return allDepartamentos ;     
   }
   catch( error ){
        console.error( 'Error al obtener los departamentos:' , error ) ; 
        return null ; 
   }
}

export const getDepartamento = async ( idDepartamento ) => {
    try{
        const response = await axios.get( apiUrl + idDepartamento ) ; 
        const departamento = response.data ; 
        return departamento ;    
    }
    catch( error ){
        console.error( 'Error al obtener el departamento' , error ) ;
        return null ; 
    }
}

export const updateDepartamento = async ( departamento ) =>{
   try{
        const response = await axios.patch( apiUrl + departamento.idDepartamento , {
            Nombre: departamento.Nombre
        }  ) ; 
        const updatedDepartamento = response.data ; 
        alert( 'El departamento ha sido actualizado' ) ;
        return updatedDepartamento ; 
   }
   catch( error ){
        console.error( 'El departamento no se pudo actualizar ' + error ) ;
        alert( 'El Departamento no se pudo actualizar' ) ;
   }
}

export const deleteDepartamento = async (departamento) => {
    if (confirm("¿Está seguro de borrar el siguiente departamento: " + departamento.Nombre + "?")) {
      try {
        await axios.delete(apiUrl + departamento.idDepartamento);
        const departamentos = getDepartamentos; 
        return departamentos;
      } catch (error) {
        console.error('Error al borrar el departamento:', error);
      }
    }
  }
  