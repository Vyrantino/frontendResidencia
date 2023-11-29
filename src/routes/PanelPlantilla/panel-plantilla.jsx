import { Box, Link as LinkMaterial } from "@mui/material";
import { Link } from "react-router-dom";
export default function PanelPlantilla(){
    return(
        <Box display={'flex'} flexDirection={'column'} >
            <h1> Panel Plantilla </h1>
            <LinkMaterial m={2} component={Link} to={ '/previsualizar-plantilla' } variant="h1"> Preview Plantilla </LinkMaterial>
            <LinkMaterial m={2} component={Link} to={ '/editor-plantilla' } variant="h1"> Editor Plantilla </LinkMaterial>
        </Box>
    ) ;
}