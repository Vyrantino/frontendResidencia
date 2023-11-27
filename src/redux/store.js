import { configureStore } from '@reduxjs/toolkit' ;
import { usersSlice } from './usuarios/userSlice';
import { plantillasSlice } from './plantillas/plantillasSlice';
import { departamentosSlice } from './departamentos/departamentosSlice';

const store = configureStore({
  reducer: {
    usersSlice: usersSlice.reducer , 
    plantillasSlice: plantillasSlice.reducer , 
    departamentosSlice: departamentosSlice.reducer , 
    
  }
}) ; 

export default store ; 