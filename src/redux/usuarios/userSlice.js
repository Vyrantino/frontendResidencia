import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice( {
    name: 'usersSlice' , 
    initialState: {
        idUsuario: null ,
        Username: null , 
        Role: null 
    },
    reducers: {
        actionLogin: ( state , action ) =>{
            // const { idUsuario, Username, Role } = action.payload;
            // state.idUsuario = idUsuario;
            // state.Username = Username;
            // state.Role = Role;
            console.log( action.payload + "userSlice" ) ;
            state.idUsuario = action.payload.idUsuario ,
            state.Username = action.payload.Username ,
            state.Role = action.payload.Role 
        },
    }
} ) ;

export const { actionLogin } = usersSlice.actions ;

export default usersSlice.reducer ; 