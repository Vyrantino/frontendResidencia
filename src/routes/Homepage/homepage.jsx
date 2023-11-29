import { Box, Container, Grid, Typography, colors } from "@mui/material";
import * as React from 'react' ;
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getDepartamentos, getPlantillas, getTopPlantillas } from "./apiHomepage";
import DepartamentCard from "../../components/cards/departamentCard";

export default function Homepage(){
    const role = useSelector( ( state ) => state.usersSlice.Role );
    const [ departamentos , setDepartamentos ] = React.useState([]) ;
    const [ plantillas , setPlantillas ] = React.useState([]) ;

    const listaDepartamentos = async () =>{
        const response = await getDepartamentos() ;
        setDepartamentos( response ) ;
    }
    const listaPlantillas = async () =>{
        const response = await getTopPlantillas() ;
        console.log( response ) ;
        setPlantillas( response ) ;
    }
    React.useEffect( ()=>{
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
                            key={'gridItem'+ departamento.Nombre} 
                            xs={12}
                            sm={12}
                            md= { 5 }
                            xl={ 3 }
                        >
                            <DepartamentCard 
                                key={ departamento.Nombre }
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
                        <Grid 
                            item 
                            key={'gridItem'+ plantilla.Nombre} 
                            xs={12}
                            sm={12}
                            md= { 5 }
                            xl={ 3 }
                        >
                            <DepartamentCard 
                                key={ plantilla.Nombre }
                                Nombre = { plantilla.Nombre }
                            />   
                        </ Grid>
                    )) 
            }

        </Box >
    );
}