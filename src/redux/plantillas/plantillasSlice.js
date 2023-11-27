import { createSlice } from "@reduxjs/toolkit";

export const plantillasSlice = createSlice( {
    name: 'plantillasSlice' , 
    initialState: {
        idPlantilla: null ,
    },
    reducers: {
        loadPlantilla: ( state , action ) =>{
            state.idPlantilla = action.payload 
        },
    }
} ) ;

export const { loadPlantilla } = plantillasSlice.actions ;

export default plantillasSlice.reducer ; 