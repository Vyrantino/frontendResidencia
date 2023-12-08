import { Container, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import * as React from 'react' ; 
import { useSelector } from 'react-redux';
import { deleteDocumento, descargarDocumento, getDocumentos } from './apiPaginaDocumentos';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';
export default function PaginaDocumentos(){
    const usuario = useSelector( ( state ) => state.usersSlice.idUsuario );
    const [ documentos , setDocumentos ] = React.useState([]) ;
    const listaDocumentos = async () =>{
        try{
            const response = await getDocumentos( usuario ) ;
            setDocumentos( response ) ;
        }
        catch( error ){
            console.error( error )  ;
        }
    }

    const handleDownload = async ( idDocumento ) =>{
        try{
            const response = await descargarDocumento( idDocumento ) ;
            
        }
        catch( error ) {
            console.error( error ) ;
        }
    }

    const handleDelete = async( idDocumento ) =>{
        try {
            await deleteDocumento( idDocumento ) ;
            listaDocumentos() ;
        } catch (error) {
            console.error( error );
        }
    }

    React.useEffect(() =>{
        listaDocumentos() ;
    },[]);
    return(
        <Container>
            <h1> PaginaDocumentos </h1>
            <TableContainer>
                <Table size='medium' > 
                    <TableHead>
                        <TableRow>
                            <TableCell> <Typography> Nombre </Typography> </TableCell>
                            <TableCell> 
                                <Typography> Fecha de </Typography> 
                                <Typography> Modificacion  </Typography>
                            </TableCell>
                            <TableCell> <Typography> Departamento </Typography> </TableCell>
                            <TableCell> 
                                <Typography> Nombre de </Typography> 
                                <Typography> plantilla </Typography> 
                            </TableCell>
                            <TableCell> 
                                <Typography> Descargar </Typography> 
                                <Typography> Eliminar </Typography> 
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            documentos.map( ( documento ) => (
                                <TableRow
                                    key={ 'rowDocumento' + documento.documentos_idDocumento }
                                >
                                    <TableCell> { documento.documentos_Nombre } </TableCell>
                                    <TableCell> { documento.documentos_FechaModificacion } </TableCell>
                                    <TableCell> { documento.departamento_Nombre } </TableCell>
                                    <TableCell> { documento.plantilla_Nombre } </TableCell>
                                    <IconButton onClick={ () => handleDownload( documento ) } > <SaveIcon /> </IconButton>
                                    <IconButton onClick={ () => handleDelete( documento.documentos_idDocumento ) } > <DeleteIcon /> </IconButton>
                                </TableRow>
                            ) )
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
}