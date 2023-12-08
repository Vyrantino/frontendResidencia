import { Box, Button, Container, Grid, Typography, colors } from "@mui/material";
import * as React from 'react' ;
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getDepartamentos, getPlantillas, getTopPlantillas } from "./apiHomepage";
import DepartamentCard from "../../components/cards/departamentCard";
import PlantillaCard from "../../components/cards/plantillaCard";
import { loadDepartamento } from "../../redux/departamentos/departamentosSlice";
import HomepagePlantillaCard from "./homepagePlantillaCard";
import { loadPlantilla } from "../../redux/plantillas/plantillasSlice";

export default function Homepage(){
    const dispatch = useDispatch() ;
    const role = useSelector( ( state ) => state.usersSlice.Role );
    const [ departamentos , setDepartamentos ] = React.useState([]) ;
    const [ plantillas , setPlantillas ] = React.useState([]) ;

    const listaDepartamentos = async () =>{
        const response = await getDepartamentos() ;
        setDepartamentos( response ) ;
    }
    const listaPlantillas = async () =>{
        const response = await getTopPlantillas() ;
        setPlantillas( response ) ;
    }
    React.useEffect( ()=>{
        dispatch( loadDepartamento([]) ) ;
        listaDepartamentos() ;
        listaPlantillas() ;
    },[] );
    return(
        <Box sx={ { display: 'flex' , flexDirection: 'column', alignSelf: 'center' }  }>
            <Typography
                align="center"
                variant="h1"
            >
                Homepage
            </Typography>
            <Typography
                align="center"
                variant="h3"
                component={Link}
                to={'departamento'}
            >
                Departamentos
            </Typography>
            <Grid container spacing={ 1 } alignItems={'center'} justifyItems={'center'}  >
                {
                    departamentos.map( ( departamento ) =>(
                        <Grid 
                            item 
                            key={'gridItemDepartamento'+ departamento.Nombre} 
                            xs={12}
                            sm={12}
                            md= { 5 }
                            xl={ 3 }
                        >
                            <DepartamentCard 
                                key={ 'DepartamentCard' + departamento.Nombre }
                                Nombre = { departamento.Nombre }
                            />   
                        </ Grid>
                    )) 
                }
            </Grid>
            <Typography
                align="center"
                variant="h3"
                component={Link}
                to={'formulario-documento'}
            >
                Plantillas Populares
            </Typography>
            {
                    plantillas.map( ( plantilla ) =>(
                        <Button
                            key={ 'buttonPlantilla' + plantilla.plantilla_idPlantilla }
                            LinkComponent={Link}
                            to = { '/formulario-documento' }
                            onClick = { () => {
                                dispatch( loadPlantilla( plantilla ) ) ;
                            }  }
                        > 
                            <Grid 
                                item 
                                key={'gridItemPlantilla'+ plantilla.plantilla_Nombre} 
                                xs={12}
                                sm={12}
                                md= { 5 }
                                xl={ 3 }
                            >
                                <HomepagePlantillaCard 
                                    key={ 'PlantillaCard' + plantilla.plantilla_Nombre }
                                    Nombre = { plantilla.plantilla_Nombre }
                                />   
                            </ Grid>      
                        </Button>
                    )) 
            }

        </Box >
    );
}