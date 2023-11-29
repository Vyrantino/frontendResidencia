import { Link as LinkMaterial } from "@mui/material";
import { Link } from "react-router-dom";

export default function Departamento(){
    return (
        <>
            <h1> Departamento </h1>
            <LinkMaterial component={Link} to={ '/formulario-documento' } variant="h1"> Plantilla </LinkMaterial>
        </>
    );
}