import * as React from 'react' ; 
import { deleteDatoUsuario, getDatosUsuario, getEmptyData, newDatoUsuario, updateDatoUsuario } from './apiPerfilDatos';
import { useSelector } from 'react-redux';
import { 
    Box, 
    Button, 
    ButtonGroup, 
    Container, 
    FormGroup, 
    IconButton, 
    Paper, Table, 
    TableBody, 
    TableCell, 
    TableContainer, 
    TableHead, 
    TableRow, 
    TextField, 
    Typography,   
 } from '@mui/material';
 import DeleteIcon from '@mui/icons-material/Delete';
 import EditIcon from '@mui/icons-material/Edit';
import DialogDatosUsuario from '../../components/dialogs/dialogDatosUsuario';

export default function PerfilDatos(){
    const usuario = useSelector( ( state ) => state.usersSlice.idUsuario ) ;
    const [ datosUsuario , setDatosUsuario ] = React.useState([]) ;
    const [ datosFaltantes , setDatosFaltantes ] = React.useState([]) ;
    const [ datoFaltanteAleatorio , setDatoFaltanteAleatorio ] = React.useState([]) ;
    const [ start , setStart ] = React.useState(false) ;
    const [ input , setInput ] = React.useState('') ;
    const [ dialogInput , setDialogInput ] = React.useState('') ;
    const [ showDialog , setShowDialog ] = React.useState(false) ;
    const [ datoUsuarioSeleccionado , setDatoUsuarioSeleccionado ] = React.useState( [] ) ;
    const handleInput = ( e ) => setInput( e.target.value ) ;
    const handleDialogInput = ( e ) => setDialogInput( e.target.value ) ;

    const listaDatosUsuario = async () =>{
        const response = await getDatosUsuario( usuario ) ;
        setDatosUsuario( response );
    }
    const listaDatosFaltantes = async() =>{
        const response = await getEmptyData( usuario ) ;
        setDatosFaltantes( response ) ;
    }
    const getDatoFaltanteAleatorio =  () =>{
        if( !start )
            setStart( true ) ;
        
        const indiceAleatorio = Math.floor(Math.random() * datosFaltantes.length); 
        const preguntaAleatoria = datosFaltantes[ indiceAleatorio ];
        setDatoFaltanteAleatorio( preguntaAleatoria );
    }
    const ingresarDato = async () =>{    
        const dato = { 
            idUsuario: usuario,
            contenido: input ,
            idDato: datoFaltanteAleatorio.datos_idDato 
        };
        try{
            const post = await newDatoUsuario( dato ) ;
        }
        catch( error ){
            console.error( error ) ;
        }
    }
    const handleShowDialog = ( editingDatoUsuario ) =>{
        setDatoUsuarioSeleccionado( editingDatoUsuario );
        setShowDialog( true ) ;
    }
    const handleDelete = async ( datoUsuario ) =>{
        try{
            const confirmDelete = confirm( 'Esta seguro que quiere borrar el siguiente dato? ' + datoUsuario.datos_Nombre ) ;
            if( confirmDelete ){
                await deleteDatoUsuario( datoUsuario ) ;
                listaDatosFaltantes() ;
            }
            else{
                console.log( 'no se borro el dato' ) ;
                closeDialog() ;
            }
        }
        catch( error ){
            console.error( error ) ;
        }
    }
    const updateDato = async ( ) =>{
        try{
            if( dialogInput ){
                const dato = { 
                    idUsuario: usuario,
                    contenido: dialogInput ,
                    idDato: datoUsuarioSeleccionado.datos_idDato ,
                    idDatosUsuario: datoUsuarioSeleccionado.datos_usuario_idDatosUsuario 
                };
                await updateDatoUsuario( dato ) ;
                setDialogInput('') ;
            }
            else{
                alert( 'el dato no debe quedar vacio' ) ;
                closeDialog() ;
                return null ; 
            }        
        }
        catch( error ){
            console.error( error ) ;
        }
    }
    const closeDialog = () => setShowDialog( false ) ;
    
    React.useEffect(() =>{
        listaDatosUsuario() ;
        listaDatosFaltantes() ;
    },[ datosFaltantes , datoFaltanteAleatorio ]);
    return (
        <Container>
            <TableContainer component={Paper} elevation={3} sx={{ backgroundColor: '#fbe9e7' }} >
                <Table
                    size='medium'
                >
                    <TableHead>
                        <TableRow
                            sx={{ backgroundColor: '#590d0d' }}
                        >
                            <TableCell  > <Typography variant='h6' color={'lightgrey'}  > Tipo </Typography> </TableCell>
                            <TableCell> <Typography variant='h6' color={'lightgrey'} > Dato </Typography> </TableCell>
                            <TableCell> <Typography variant='h6' color={'lightgrey'}  > Editarlo </Typography>  </TableCell>
                            <TableCell> <Typography variant='h6' color={'lightgrey'}  > Borrarlo </Typography>  </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            datosUsuario.map( ( datoUsuario ) => (
                                <TableRow
                                    key={ ' datoUsuario ' + datoUsuario.datos_idDato }
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell align='left'  >
                                        { datoUsuario.datos_Nombre }
                                    </TableCell>
                                    <TableCell align='left' >
                                        { datoUsuario.datos_usuario_contenido }
                                    </TableCell>
                                    <TableCell align='left' > 
                                        <IconButton color='warning' onClick={ () => handleShowDialog( datoUsuario ) } > 
                                            <EditIcon />  
                                        </IconButton> 
                                    </TableCell>
                                    <TableCell align='left' > 
                                        <IconButton color='error' onClick={ () => handleDelete( datoUsuario ) } > 
                                            <DeleteIcon />  
                                        </IconButton> 
                                    </TableCell>
                                </TableRow>
                            ) )
                        }
                    </TableBody>
                </Table>
            </TableContainer>
            <Box width={'100%'} component={Paper} height={'7vh'} sx={{ bgcolor: 'primary.main' , '&:hover': { bgcolor: 'primary.dark' } }} >
                <Typography align='center' color={'lightgray'} variant='h2' > ITD  </Typography>
            </Box>
            <Box
                display={'flex'}
                bgcolor={ 'lightgrey' }
            >
                {
                    datoFaltanteAleatorio &&
                    <Typography 
                        sx={{ 
                            flex: .3 ,
                            m: 1 , 
                            alignSelf: 'center' ,
                            textAlign: 'center'
                        }} 
                    > 
                        { datoFaltanteAleatorio.datos_Nombre  } 
                    </Typography>
                }
                <TextField  sx={{ flex: 1 , m: 1 , alignSelf: 'center' }} onChange={ handleInput } ></TextField>
                <ButtonGroup
                    sx={{  flexDirection: 'column' , flex: .6  , m: 1 }}
                >
                    <Button
                        variant='contained'
                        color='secondary'
                        onClick={ getDatoFaltanteAleatorio }
                    >
                        { start ? 'Otro Dato' : 'Comienza' }
                    </Button>
                    <Button
                        variant='contained'
                        color='success' 
                        onClick={  ingresarDato }                  
                    >
                        Ingresar dato
                    </Button>                        
                </ButtonGroup>  
            </Box>
                <DialogDatosUsuario 
                    open = { showDialog }
                    idDato = { datoUsuarioSeleccionado.datos_idDato }
                    nombreDato = { datoUsuarioSeleccionado.datos_Nombre }
                    closeDialog = { closeDialog }
                    updateDato = { updateDato }
                    setDialogInput = { setDialogInput }
                />
        </Container>
    ) ;
}