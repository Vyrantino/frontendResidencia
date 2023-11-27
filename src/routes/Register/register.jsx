import { Button } from "@mui/material";

export default function Register( props ){
    return(
        <>
            <h1> Register </h1>
            <Button 
                   onClick={ () => props.toogleRegistrarse( false ) }
            >
                Ingresar
            </Button>
        </>
    );
}