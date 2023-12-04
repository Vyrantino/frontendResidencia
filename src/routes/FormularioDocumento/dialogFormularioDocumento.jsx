import { Button, Dialog, DialogActions, DialogContent, DialogTitle, InputLabel, TextField } from '@mui/material';
import * as React from 'react' ; 
import { newDatoUsuario } from './apiFormularioDocumento';

export default function DialogFormularioDocumento( props ) {
    const [ contenido , setContenido ] = React.useState('') ;
    const handleChange = ( e ) => setContenido( e.target.value ) ;

    const submitInfo = async () =>{
        try {
            const datoUsuario = {
                contenido: contenido , 
                idDato: props.idDato , 
                idUsuario: props.usuario
            }
            await newDatoUsuario( datoUsuario ) ;
            props.listaDatosFaltante() ;
        } catch (error) {
            console.error( error ) ;
        }
    }
    return(
        <Dialog
            open = { props.showDialog } onClose={ props.closeDialog }
        >
            <DialogTitle>
                <InputLabel> Ingrese la informacion del dato: { props.NombreDato } </InputLabel>
            </DialogTitle>
            <DialogContent>
                <TextField label='contenido' variant='outlined' onChange={ handleChange } /> 
            </DialogContent>
            <DialogActions>
                <Button variant='contained' color='success' onClick={ submitInfo } > Aceptar </Button>
                <Button variant='contained' color='error' onClick={ props.closeDialog } > Cancelar </Button>
            </DialogActions>
        </Dialog>
    ) ;
}