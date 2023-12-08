import { Button, Container, Grid, Link as LinkMaterial, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import * as React from 'react' ; 
import { getDepartamento, getDepartamentos } from "./apiDepartamento";
import DepartamentCard from "../../components/cards/departamentCard";
import { useDispatch } from "react-redux";
import DepartamentoCard from "./departamentoCard";
import { loadDepartamento } from "../../redux/departamentos/departamentosSlice";
export default function Departamento(){
    const dispatch = useDispatch() ;

    const [ departamentos , setDepartamentos ] = React.useState([]) ;
    
    const listaDepartamentos = async () =>{
        try {
            const response = await getDepartamentos() ;
            setDepartamentos( response ) ;
        } catch (error) {
            console.error( error ) ;
        }
    }

    React.useEffect(()=> {
        listaDepartamentos() ;
    },[]) ;
    return (
        <Container>
            <Grid container >
                {
                    departamentos.map( ( departamento ) => (
                        <Grid item key={ 'departamento '+ departamento.idDepartamento +'' } >
                            <Button
                                hidden
                                LinkComponent={Link}
                                to = { '/formulario-documento' }
                                onClick={ () => dispatch( loadDepartamento( departamento ) ) }
                            >
                                <DepartamentoCard
                                    Nombre = { departamento.Nombre }
                                />
                            </Button>
                        </ Grid>
                    ))
                }
            </Grid>
        </Container>
    );
}