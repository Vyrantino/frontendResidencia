import { createSlice } from "@reduxjs/toolkit";

export const departamentosSlice = createSlice( {
    name: 'departamentosSlice' , 
    initialState: {
        departamentos: [] ,
    },
    reducers: {
        loadDepartamento: ( state , action ) =>{
            state.departamentos = action.payload 
        },
    }
} ) ;

export const { loadDepartamento } = departamentosSlice.actions ;

export default departamentosSlice.reducer ; 