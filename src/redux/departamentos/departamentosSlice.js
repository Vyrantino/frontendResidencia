import { createSlice } from "@reduxjs/toolkit";

export const departamentosSlice = createSlice( {
    name: 'departamentosSlice' , 
    initialState: {
        idDepartamento: null ,
    },
    reducers: {
        loadDepartamento: ( state , action ) =>{
            state.idDepartamento = action.payload 
        },
    }
} ) ;

export const { loadDepartamento } = departamentosSlice.actions ;

export default departamentosSlice.reducer ; 