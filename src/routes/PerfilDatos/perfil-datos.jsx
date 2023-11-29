import * as React from 'react' ; 
import { getDatosUsuario, getEmptyData, newDatoUsuario } from './apiPerfilDatos';
import { useSelector } from 'react-redux';
import { 
    Box, 
    Button, 
    ButtonGroup, 
    Container, 
    FormGroup, 
    Paper, Table, 
    TableBody, 
    TableCell, 
    TableContainer, 
    TableHead, 
    TableRow, 
    TextField, 
    Typography,   
 } from '@mui/material';
export default function PerfilDatos(){
    const usuario = useSelector( ( state ) => state.usersSlice.idUsuario ) ;
    const [ datosUsuario , setDatosUsuario ] = React.useState([]) ;
    const [ datosFaltantes , setDatosFaltantes ] = React.useState([]) ;
    const [ datoFaltanteAleatorio , setDatoFaltanteAleatorio ] = React.useState([]) ;
    const [ input , setInput ] = React.useState('') ;
    const listaDatosUsuario = async () =>{
        const response = await getDatosUsuario( usuario ) ;
        setDatosUsuario( response );
    }
    const listaDatosFaltantes = async() =>{
        const response = await getEmptyData( usuario ) ;
        setDatosFaltantes( response ) ;
    }
    const getDatoFaltanteAleatorio =  () =>{
        const indiceAleatorio = Math.floor(Math.random() * datosFaltantes.length); 
        const preguntaAleatoria = datosFaltantes[ indiceAleatorio ];
        setDatoFaltanteAleatorio( preguntaAleatoria );
    }
    const handleInput = ( e ) => setInput( e.target.value ) ;
    const ingresarDato = async () =>{    
        const dato = { 
            idUsuario: usuario,
            contenido: input ,
            idDato: datoFaltanteAleatorio.datos_idDato 
        };
        console.log( dato ) ;
        try{
            const post = await newDatoUsuario( dato ) ;
            console.log( post.data ) ;
        }
        catch( error ){
            console.error( error ) ;
        }
    }
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
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            datosUsuario.map( ( datoUsuario ) => (
                                <TableRow
                                    key={ datoUsuario.idDatoUsuario }
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell align='left'  >
                                        { datoUsuario.datos_Nombre }
                                    </TableCell>
                                    <TableCell align='left' >
                                        { datoUsuario.datos_usuario_contenido }
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
                        Otro dato
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
        </Container>
    ) ;
}