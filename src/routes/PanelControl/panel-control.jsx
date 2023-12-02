import { Card, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material";
import ITDlogo from '../../assets/itd.png' ;
import { Link } from "react-router-dom";
export default function PanelControl(){
    return (
        <Container>
            <Grid container >
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
        </Container>
    );
}