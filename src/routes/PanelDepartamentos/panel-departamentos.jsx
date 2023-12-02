import { Button, Container, Grid, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material";
import * as React from 'react' ;
import { deleteDepartamento, getDepartamentos, newDepartamento, updateDepartamento } from "./apiPanelDepartamentos";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import DialogDepartamentos from "../../components/dialogs/dialogPanelDepartamentos";


export default function PanelDepartamentos(){
    const [ departamentos , setDepartamentos ] = React.useState([]) ;
    const [ selectedDepartamento , setSelectedDepartamento ] = React.useState( [] );
    const [ showDialog , setShowDialog ] = React.useState( false ) ;
    const [ nombre , setNombre ] = React.useState('');
    const [ nombreNewDepartamento , setNombreNewDepartamento ] = React.useState('') ; 
    const handleNombreNewDepartamento = ( e ) => setNombreNewDepartamento( e.target.value ) ;
    const listaDepartamentos = async () =>{
        try{
            const response = await getDepartamentos() ;
            setDepartamentos( response ) ;
        }   
        catch( error ){
            console.error( error ) ;
        }
    }

    const closeDialog = () => setShowDialog( false ) ;

    const handleEdit = ( departamento ) =>{
        setSelectedDepartamento( departamento ) ;
        setShowDialog( true ) ;
    }

    const handleUpdateDepartamento = async () =>{
        try{
            if( nombre ){
                const editedDepartamento = {
                    idDepartamento: selectedDepartamento.idDepartamento , 
                    Nombre: nombre 
                }
                console.log( editedDepartamento ) ;
                await updateDepartamento( editedDepartamento ) ;
                listaDepartamentos() ; 
                closeDialog() ;
            }
            else{
                console.log( 'no se actualizo el departamento' ) ;
            }    
        }
        catch( error ){
            console.error( error ) ;
        }
    }

    const handleDelete = async ( departamento ) =>{
        try{
            const confirmDelete = confirm( 'Esta seguro de que quiere borrar el siguiente departamento: ' + departamento.Nombre ) ;
            await deleteDepartamento( departamento.idDepartamento ) ;
            listaDepartamentos() ;
        }
        catch( error ){
            console.error( error ) ;
        }
    }

    const handleCreateNewDepartamento = async () =>{
        try{
            await newDepartamento( nombreNewDepartamento ) ;
            listaDepartamentos() ;
        }
        catch( error ){
            console.error( error );
        }
    }

    React.useEffect(() => {
        listaDepartamentos() ;
    },[ departamentos ]) ;

    return (
        <Container>
            <TableContainer component={Paper} elevation={3} sx={{ backgroundColor: '#fbe9e7' }} >
                <Table size="medium" >
                    <TableHead>
                        <TableRow sx={{ backgroundColor: '#590d0d' }} >
                            <TableCell  > <Typography variant='h6' color={'lightgrey'}  > idDepartamento </Typography> </TableCell>
                            <TableCell  > <Typography variant='h6' color={'lightgrey'}  > Nombre </Typography> </TableCell>
                            <TableCell  > <Typography variant='h6' color={'lightgrey'}  > Modificar </Typography> </TableCell>
                            <TableCell  > <Typography variant='h6' color={'lightgrey'}  > Borrar </Typography> </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            departamentos.map( ( departamento ) =>(
                                <TableRow
                                    key={departamento.idDepartamento}
                                >   
                                    <TableCell> { departamento.idDepartamento } </TableCell>
                                    <TableCell> { departamento.Nombre } </TableCell>
                                    <TableCell> 
                                        <IconButton onClick = { () => handleEdit( departamento ) } >
                                             <EditIcon /> 
                                        </IconButton> 
                                    </TableCell>
                                    <TableCell> 
                                        <IconButton onClick = { () => handleDelete( departamento ) } >
                                             <DeleteIcon />
                                        </IconButton> 
                                    </TableCell>
                                </TableRow>
                            ) )
                        }
                    </TableBody>
                </Table>
            </TableContainer>
            <DialogDepartamentos 
                showDialog = { showDialog }
                closeDialog = { closeDialog }
                departamento = { selectedDepartamento }
                handleUpdateDepartamento = { handleUpdateDepartamento }
                setNombre = { setNombre }
            />
            <Grid container spacing={2} justifyContent={'center'} >
                <Grid item marginTop={3} > <Typography variant="h3"  > Agregue un Nuevo Departamento </Typography>  </Grid>
                <Grid item xs={ 10 } > <TextField sx={{ width: '100%' }} label='Nombre' onChange={ handleNombreNewDepartamento } /> </Grid>
                <Grid item xs={ 7 }  > 
                    <Button sx={{ width: '100%' }} color="warning" onClick={ handleCreateNewDepartamento } variant="contained" >
                        Agregar
                    </Button> 
                </Grid>
            </Grid>
        </Container>
    );
}