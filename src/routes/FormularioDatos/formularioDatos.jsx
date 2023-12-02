import * as React from 'react' ; 
import { useSelector } from 'react-redux';
import { getDatosFaltantesUsuario, newDatoUsuario } from './apiFormularioDatos';
import { 
    Container,  
    IconButton, 
    Paper, 
    Table, 
    TableBody, 
    TableCell, 
    TableContainer, 
    TableHead, 
    TableRow, 
    Typography } from '@mui/material';
import PublishIcon from '@mui/icons-material/Publish';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import DialogFormularioDatos from '../../components/dialogs/dialogFormularioDatos';

export default function FormularioDatos(){
    const usuario = useSelector( ( state ) => state.usersSlice.idUsuario ) ;
    const [ datosFaltantes , setDatosFaltantes ] = React.useState([]) ;
    const [ promise , setPromise ] = React.useState(false) ;
    const [ nuevoDato , setNuevoDato ] = React.useState([]) ;
    const [ showDialog , setShowDialog ] = React.useState( false ) ;
    const [ contenido , setContenido ] = React.useState('') ;
    const listaDatosFaltantes = async() =>{
        const response = await getDatosFaltantesUsuario( usuario ) ;
        setDatosFaltantes( response ) 
        setPromise( true );
    }
    const closeDialog = () => setShowDialog( false ) ;
    const submitDato = async () =>{  
        try{
            if( contenido ){
                const newDato = {
                    contenido: contenido , 
                    idUsuario: usuario ,
                    idDato: nuevoDato.datos_idDato 
                }
                await newDatoUsuario( newDato ) ;
                closeDialog() ;
                listaDatosFaltantes() ;
                setContenido('') ;
            }
            else{
                alert( 'El contenido no debe quedar vacio' );
                closeDialog() ;
            }
        }
        catch( error ){
            console.log( error ) ;
        }
    }

    const handleNewDato = ( dato ) =>{
        try{
            setNuevoDato ( dato ) ;
            setShowDialog( true ) ;
        }
        catch( error ){
            console.error( error ) ;
        }
    }
    React.useEffect(() =>{ 
        listaDatosFaltantes() ;
    },[ datosFaltantes ]);
    return(
        <Container>
            {
                
                datosFaltantes.length != 0 ? 
                <TableContainer component={Paper} elevation={3} sx={{ backgroundColor: '#fbe9e7' }} >
                <Table
                    size='medium'
                >
                    <TableHead>
                        <TableRow
                             sx={{ backgroundColor: '#590d0d' }}
                        >
                                <TableCell> <Typography variant='h6' color={'lightgrey'}  > Nombre del Dato que Falta </Typography> </TableCell>
                                <TableCell> <Typography variant='h6' color={'lightgrey'}  > Ingresarlo </Typography>  </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            datosFaltantes.map( ( datoFaltante ) => (
                                <TableRow
                                    key={ datoFaltante.datos_idDato }
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell align='left'  >
                                        { datoFaltante.datos_Nombre }
                                    </TableCell>
                                    <TableCell> <IconButton color='success' onClick={ () => handleNewDato( datoFaltante ) } > <PublishIcon />  </IconButton> </TableCell>
                                </TableRow>
                            ) )
                        }
                    </TableBody>
                </Table>
            </TableContainer>
            :
            promise &&
            <Typography
                variant='h1'
            >
                    Haz llenado todos los tipos de datos disponibles (hurra!)
            </Typography>
            }
            <DialogFormularioDatos 
                setContenido = { setContenido }
                showDialog = { showDialog }
                closeDialog = { closeDialog }
                dato = { nuevoDato }
                submitDato = { submitDato }
            />
        </Container>
    );
}