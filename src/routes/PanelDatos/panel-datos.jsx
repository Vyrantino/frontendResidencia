import { Button, Container, Grid, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material";
import * as React from 'react' ; 
import { deleteDato, getDatos, updateDato } from "./apiPanelDatos";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import DialogDatos from "../../components/dialogs/dialogDatos";

export default function PanelDatos(){
    const [ datos , setDatos ] = React.useState([]) ;
    const [ selectedDato , setSelectedDato ] = React.useState([]) ;
    const [ nombre , setNombre ] = React.useState([]) ;
    const [ showDialog , setShowDialog ] = React.useState( false ) ;
    const closeDialog = () => setShowDialog ( false ) ;
    const listaDatos = async () =>{
        try{
            const response = await getDatos() ;
            setDatos( response ) ;
        }
        catch( error ){
            console.log( error ) ;
        }
    }

    const handleEdit = ( dato ) =>{
        try{
            setSelectedDato( dato ) ;
            setShowDialog( true ) ;
        }
        catch( error ) {
            console.log( error ) ;
        }
    }

    const handleDelete = async ( dato ) =>{
        try{
            const confirmDelete = confirm ( 'Esta seguro que desea Borrar el siguiente dato? ' + dato.Nombre  ) ;
            if( confirmDelete ){
                const confirmDelete2 = confirm( 
                    'Borrar un dato afectara a todas las plantillas relacionadas a el ' + 
                    'Esta realmente seguro de tomar esta decision?' 
                ) ;
                if( confirmDelete2 ){
                    await deleteDato( dato.idDato ) ;
                    listaDatos() ;
                }
                else{
                    return null ; 
                }
            }
            else{
                return null ;
            }
        }
        catch( error ) {
            console.log( error ) ;
        }
    }

    const handleUpdateDato = async () =>{
       try {
         if( nombre ){
            await updateDato( selectedDato , nombre ) ;
            listaDatos() ;
            setNombre('') ;
            closeDialog() ;
         }
       } 
       catch (error) {
         console.error( error ) ;
       }
    }

    React.useEffect( () =>{
        listaDatos() ;
    },[] ) ;

    return(
        <Container>
            <Grid container spacing={ 1 }  marginBottom={2}>
                <Grid item xs={ 12 } md={ 8 }  >
                    <TextField 
                        label = 'Nombre del dato'
                        fullWidth
                        variant="filled"
                        color="primary"
                        sx={{ 
                            backgroundColor:'secondary.light' , 
                            input: { color: 'primary.dark' } ,
                            label: { color: 'primary.dark' }
                         }}
                    > 
                        Nombre del Dato
                    </TextField>
                </Grid>
                <Grid item xs={ 12 } md={ 4 } >
                    <Button sx={{ height: '100%' , width: '100%' }} variant="contained" color="warning"  > Agregar Dato </Button>
                </Grid>
            </Grid>
            <TableContainer component={Paper} elevation={3} sx={{ backgroundColor: '#fbe9e7' }} >
                <Table size="medium" >
                    <TableHead sx={{ backgroundColor: '#590d0d' }} >
                        <TableRow>
                            <TableCell> <Typography variant='h6' color={'lightgrey'} > idDato </Typography> </TableCell>
                            <TableCell> <Typography variant='h6' color={'lightgrey'} > Nombre </Typography> </TableCell>
                            <TableCell> <Typography variant='h6' color={'lightgrey'} > Modificar </Typography> </TableCell>
                            <TableCell> <Typography variant='h6' color={'lightgrey'} > Borrar </Typography> </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            datos.map( ( dato ) => (
                                <TableRow> 
                                    <TableCell> { dato.idDato } </TableCell>    
                                    <TableCell> { dato.Nombre } </TableCell>  
                                    <TableCell> 
                                        <IconButton onClick = { () => handleEdit( dato ) } >
                                             <EditIcon /> 
                                        </IconButton> 
                                    </TableCell>
                                    <TableCell> 
                                        <IconButton onClick = { () => handleDelete( dato ) } >
                                             <DeleteIcon />
                                        </IconButton> 
                                    </TableCell>  
                                </TableRow> 
                            ) )
                        }
                    </TableBody>
                </Table>
            </TableContainer>
            <DialogDatos 
                dato = { selectedDato }
                setDialogInput = { setNombre }
                open = { showDialog }
                updateDato = { handleUpdateDato }
                closeDialog = { closeDialog }
            />
        </Container>
    ) ;
}