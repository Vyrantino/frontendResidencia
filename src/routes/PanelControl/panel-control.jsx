import { Box, Link as LinkMaterial } from "@mui/material";
import { Link } from "react-router-dom";

export default function PanelControl(){
    return (
        <Box display={'flex'} flexDirection={ 'column' } >
            <h1> PanelControl </h1>
            <LinkMaterial m={2} component={Link} to={'/panel-datos'} variant="h1"> Panel Datos </LinkMaterial>
            <LinkMaterial m={2} component={Link} to={'/panel-departamentos'} variant="h1"> Panel Departamentos </LinkMaterial>
            <LinkMaterial m={2} component={Link} to={'/panel-usuarios'} variant="h1" > Panel Usuarios </LinkMaterial>
        </Box>
    );
}