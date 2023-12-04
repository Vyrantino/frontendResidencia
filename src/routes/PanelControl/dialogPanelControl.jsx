import * as React from 'react';
import { 
    DialogContent , 
    Dialog, 
    TableContainer, 
    TableHead, 
    TableRow, 
    TableCell, 
    Typography, 
    TableBody, 
    Table, 
    Button, 
    Paper, 
    DialogActions,  
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    RadioGroup,
    Radio,
    FormControlLabel,
    Box
} from '@mui/material';
import { getDepartamentos, getUsuarios, newAdministrador } from './apiPanelControl';

export default function DialogPanelControl( props ) {
    const [ usuarios , setUsuarios ] = React.useState([]) ;
    const [ departamentos , setDepartamentos ] = React.useState([]) ;
    const [ selectedDepartamento , setSelectedDepartamento ] = React.useState('') ;
    const [ selectedUsuario , setSelectedUsuario ] = React.useState([]) ;

    const handleChange = ( e ) =>{
        try {   
            setSelectedDepartamento( e.target.value );
        } catch (error) {
            console.error( error ) ;
        }
    }

    const handleSelectUsuario = ( usuario ) =>{
        try {
            setSelectedUsuario( usuario ) ;
        } catch (error) {
            
        }
    }

    const updateUsuario = async () =>{
        try {
            const administrador = {
                idUsuario: selectedUsuario.idUsuario ,
                idDepartamento: selectedDepartamento
            }
            await newAdministrador( administrador ) ;
        } catch (error) {
            
        }
    }


    const listaDepartamentos = async () =>{
        try {
            const response = await getDepartamentos() ;
            setDepartamentos( response ) ;
        } catch (error) {
            console.error( error ) ;
        }
    }

    const listaUsuarios = async () =>{
        try {
            const response = await getUsuarios() ;
            setUsuarios( response ) ;
        } catch (error) {
            console.error( error ) ;
        }
    }

    React.useEffect(()=>{
        listaUsuarios() ;
        listaDepartamentos() ;
    },[  ]) ;
  return (
    <>
        <Dialog
            fullScreen
            open ={ props.showDialog }
            onClose={ props.closeDialog }
            sx={{ maxWidth: '90%' , maxHeight: '90%' , margin: 'auto' }}
        >
            <DialogContent>
                <RadioGroup>
                <TableContainer component={Paper} elevation={3} sx={{ backgroundColor: '#fbe9e7' }}  >
                    <Table size='medium' >
                        <TableHead sx={{ backgroundColor: '#590d0d' }} >
                            <TableRow>
                                <TableCell>  </TableCell>
                                <TableCell> <Typography variant='h6' color={'lightgrey'} > idUsuario </Typography> </TableCell>
                                <TableCell> <Typography variant='h6' color={'lightgrey'} > Username </Typography> </TableCell>
                                <TableCell> <Typography variant='h6' color={'lightgrey'} > Email </Typography> </TableCell>
                                <TableCell> <Typography variant='h6' color={'lightgrey'} > Rol </Typography> </TableCell>
                            </TableRow>
                        </TableHead>
                            <TableBody>
                                {
                                    usuarios.map( ( usuario ) =>(
                                        <TableRow
                                            key={usuario.idUsuario}
                                        >
                                            <TableCell size='small' >
                                                <Radio 
                                                    value={ usuario.idUsuario } 
                                                    onChange={ () => handleSelectUsuario( usuario ) }
                                                />
                                            </TableCell>
                                            <TableCell> { usuario.idUsuario } </TableCell>
                                            <TableCell> { usuario.Username } </TableCell>
                                            <TableCell> { usuario.Email } </TableCell>
                                            <TableCell> { usuario.Role } </TableCell>
                                        </TableRow>
                                    ) )
                                }
                            </TableBody>
                    </Table>
                </TableContainer>
                </RadioGroup>
       
            </DialogContent>
            <Typography m={2} > Usuario Seleccionado: { selectedUsuario.Username } </Typography>
            <DialogActions>
                <FormControl
                    sx={{ width: '80%' }}
                >
                    <InputLabel >  Elija un Departamento </InputLabel>
                    <Select 
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={selectedDepartamento}
                        label="Departamento"
                        onChange={handleChange}
                        defaultValue={0}
                    >
                        {
                            departamentos.map( ( departamento ) => (
                                <MenuItem 
                                    key={ departamento.idDepartamento } 
                                    value = { departamento.idDepartamento } 
                                >
                                    { departamento.Nombre }
                                </MenuItem>
                            ) )
                        }
                    </ Select>
                </FormControl>
                <Button 
                    variant='contained'  
                    onClick={ updateUsuario }
                > 
                    Hacer Administrador 
                </Button>
            </DialogActions>
        </Dialog>
    </>
  );
}
