import { Link as LinkMaterial } from "@mui/material";
import { Link } from "react-router-dom";

export default function PanelAdmin(){
    return (
        <>
            <h1> PanelAdmin </h1>
            <LinkMaterial component={Link} to={'/panel-plantilla'} variant="h1" > Panel Plantilla </LinkMaterial>
        </>
    );
}