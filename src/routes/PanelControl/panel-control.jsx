import { Box, Button, Card, CardContent, CardMedia, Container, Grid, Paper, Typography } from "@mui/material";
import ITDlogo from '../../assets/itd.png' ;
import { Link } from "react-router-dom";
import PanelControlAdministradoresTable from "./panel-controlAdministradoresTable";
import DialogPanelControl from "./dialogPanelControl";
import * as React from 'react' ;
export default function PanelControl(){
    const [ showDialog , setShowDialog ] = React.useState(false) ;
    const closeDialog = () => setShowDialog( false ) ;
    return (
        <Container  >
            <PanelControlAdministradoresTable />
            <Button
                variant = 'contained'
                sx = {{ width: '100%' , justifySelf: 'center' , marginTop: 4}}
                onClick = { () => setShowDialog( true ) }
            >
                Agregar a un Administrador
            </Button>
            <Grid container marginTop={4} >
                <Grid item xs={ 12 } sm={ 6 } md={ 4 }  >
                    <Link to="/panel-usuarios" style={{ textDecoration: 'none' }}>
                        <Card sx={{ maxWidth: 345 }} >
                            <CardMedia
                                component="img"
                                height="194"
                                image= { ITDlogo }
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    Entrar al panel de Usuarios
                                </Typography>
                            </CardContent>
                        </Card>
                    </ Link>
                </Grid>
                <Grid item xs={ 12 } sm={ 6 } md={ 4 }  >
                    <Link to="/panel-departamentos" style={{ textDecoration: 'none' }}>
                        <Card sx={{ maxWidth: 345 }} >
                            <CardMedia
                                component="img"
                                height="194"
                                image= { ITDlogo }
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    Entrar al panel de Departamentos
                                </Typography>
                            </CardContent>
                        </Card>
                    </ Link>
                </Grid>
                <Grid item xs={ 12 } sm={ 6 } md={ 4 }  >
                    <Link to="/panel-datos" style={{ textDecoration: 'none' }}>
                        <Card sx={{ maxWidth: 345 }} >
                            <CardMedia
                                component="img"
                                height="194"
                                image= { ITDlogo }
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    Entrar al panel de Datos
                                </Typography>
                            </CardContent>
                        </Card>
                    </ Link>
                </Grid>
            </Grid>
                <DialogPanelControl 
                    showDialog={ showDialog }
                    closeDialog={ closeDialog }
                />
        </Container>
    );
}