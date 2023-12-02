import { Container, Dialog, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import * as React from 'react' ;  
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import DialogPanelUsuario from "../../components/dialogs/dialogPanelUsuario";
import { deleteUsuario, getUsuarios, updateUsuario } from "./apiPanelUsuarios";

export default function PanelUsuarios(){
    const [ usuarios , setUsuarios ] = React.useState([]) ;
    const [ selectedUsuario , setSelectedUsuario ] = React.useState([]) ;
    const [ showDialog , setShowDialog ] = React.useState( false ) ;
    const [ username , setUsername ] = React.useState('') ;
    const [ email , setEmail ] = React.useState('') ;
    const [ password , setPassword ] = React.useState('') ;

    const closeDialog = () => setShowDialog( false ) ;

    const listaUsuarios = async () =>{
        try{
            const response = await getUsuarios() ;
            const usuarios = response ; 
            setUsuarios( usuarios ) ;
        }
        catch( error ) {
            console.error( error ) ;
        }
    }
    const handleEdit = async ( usuario ) =>{
        setSelectedUsuario( usuario ) ;
        setShowDialog( true ) ;
    }

    const handleDelete = async ( usuario ) =>{
        try{
            const deleteConfirm = confirm( 'Desea Eliminar al siguiente usuario? ' + `${ usuario.Username }` ) ;
            if( deleteConfirm ){
                await deleteUsuario( usuario.idUsuario ) ;
                listaUsuarios(  ) ;
            }
            else{
                return null ;
            }
        }
        catch( error ){
            console.error( error ) ;
        }
    }
    const handleUpdateUsuario = async () =>{
        try{
            const updatedUsuario = {
                Username: username ? username : selectedUsuario.Username , 
                Email: email ? email : selectedUsuario.Email , 
                Password: password ? password : undefined
            }
            await updateUsuario( selectedUsuario , updatedUsuario ) ;
            setEmail('') ;
            setPassword('') ;
            setUsername('') ;
        }
        catch( error ){
            console.error( error ) ;
        }
    }
    React.useEffect( () =>{
        listaUsuarios() ;
    },[ showDialog , usuarios ] );
    return (
        <Container>
            <TableContainer component={Paper} elevation={3} sx={{ backgroundColor: '#fbe9e7' }} >
                <Table size="medium"  >
                    <TableHead>
                        <TableRow sx={{ backgroundColor: '#590d0d' }} >
                            <TableCell  > <Typography variant='h6' color={'lightgrey'}  > idUsuario </Typography> </TableCell>
                            <TableCell  > <Typography variant='h6' color={'lightgrey'}  > Username </Typography> </TableCell>
                            <TableCell  > <Typography variant='h6' color={'lightgrey'}  > Email </Typography> </TableCell>
                            <TableCell  > <Typography variant='h6' color={'lightgrey'}  > Rol </Typography> </TableCell>
                            <TableCell  > <Typography variant='h6' color={'lightgrey'}  > Modificar </Typography> </TableCell>
                            <TableCell  > <Typography variant='h6' color={'lightgrey'}  > Borrar </Typography> </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            usuarios.map( ( usuario ) => (
                                <TableRow
                                    key={usuario.idUsuario}
                                >
                                    <TableCell> { usuario.idUsuario } </TableCell>
                                    <TableCell> { usuario.Username } </TableCell>
                                    <TableCell> { usuario.Email } </TableCell>
                                    <TableCell> { usuario.Role } </TableCell>
                                    <TableCell> 
                                        <IconButton onClick = { () => handleEdit( usuario ) } >
                                             <EditIcon /> 
                                        </IconButton> 
                                    </TableCell>
                                    <TableCell> 
                                        <IconButton onClick = { () => handleDelete( usuario ) } >
                                             <DeleteIcon />
                                        </IconButton> 
                                    </TableCell>
                                </TableRow>
                            ) )
                        }
                    </TableBody>
                </Table>
            </TableContainer>
            <DialogPanelUsuario 
                setUsername = { setUsername }
                setEmail = { setEmail }
                setPassword = { setPassword }
                updateUsuario = { handleUpdateUsuario }
                showDialog = { showDialog }
                usuario = { selectedUsuario }
                closeDialog = { closeDialog }
            />
        </Container>
    );
}