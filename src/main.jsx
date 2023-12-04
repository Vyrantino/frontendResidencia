import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from "./routes/Root/root.jsx";
import ErrorPage from "./errorPage.jsx";
import Homepage from './routes/Homepage/homepage.jsx';
import Departamento from './routes/Departamento/departamento.jsx';
import EditorPlantilla from './routes/EditorPlantilla/editor-plantilla.jsx';
import EditorTexto from './routes/EditorTexto/editor-texto.jsx';
import PaginaDocumentos from './routes/PaginaDocumentos/pagina-documentos.jsx';
import PanelAdmin from './routes/PanelAdmin/panel-admin.jsx';
import PanelControl from './routes/PanelControl/panel-control.jsx' ; 
import PanelDepartamentos from './routes/PanelDepartamentos/panel-departamentos.jsx' ;
import PerfilDatos from './routes/PerfilDatos/perfil-datos.jsx' ; 
import SelectorPlantilla from './routes/SelectorPlantillas/selector-plantillas.jsx' ;
import FormularioDatos from './routes/FormularioDatos/formularioDatos.jsx';
import FormularioDocumento from './routes/FormularioDocumento/formulario-documento.jsx';
import PrevisualizarPlantilla from './routes/PrevisualizarPlantilla/previsualizar-plantilla.jsx';
import Register  from './routes/Register/register.jsx';
import { Provider } from 'react-redux' ; 
import store from './redux/store.js';
import { ThemeProvider , colors, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Login from './routes/Login/login.jsx';
import PanelModerador from './routes/PanelModerador/panel-moderador.jsx';
import PanelPlantilla from './routes/PanelPlantilla/panel-plantilla.jsx';
import PanelDatos from './routes/PanelDatos/panel-datos.jsx';
import PanelUsuarios from './routes/PanelUsuarios/panel-usuarios.jsx';
import { grey, orange, red } from '@mui/material/colors';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: < ErrorPage /> , 
    children: [
      {
        path: '/' ,
        element: <Homepage />
      },
      {
        path: 'departamento' ,
        element: < Departamento />
      },
      {
        path: 'editor-plantilla' ,
        element: < EditorPlantilla />
      },
      {
        path: 'editor-texto' ,
        element: < EditorTexto />
      },
      {
        path: 'formulario-datos' ,
        element: < FormularioDatos />
      },
      {
        path: 'pagina-documentos' ,
        element: < PaginaDocumentos />
      },
      {
        path: 'panel-admin' ,
        element: < PanelAdmin />
      },
      {
        path: 'panel-control' ,
        element: < PanelControl />
      },
      {
        path: 'panel-departamentos' ,
        element: < PanelDepartamentos />
      },
      {
        path: 'perfil-datos' ,
        element: < PerfilDatos />
      },
      {
        path: 'selector-plantilla' ,
        element: < SelectorPlantilla />
      },
      {
        path: 'formulario-documento' ,
        element: < FormularioDocumento />
      },
      {
        path: 'previsualizar-plantilla' ,
        element: < PrevisualizarPlantilla />
      },
      {
        path: 'login' ,
        element: < Login />
      },
      {
        path: 'panel-moderador' ,
        element: < PanelModerador />
      },
      {
        path: 'panel-plantilla' ,
        element: < PanelPlantilla />
      },
      {
        path: 'panel-datos' ,
        element: < PanelDatos />
      },
      {
        path: 'panel-usuarios' ,
        element: < PanelUsuarios />
      },
    ],
  },
]);

const theme = createTheme({
  palette: {
    primary:{
      main: '#590d0d',
    },
    secondary:{
      main: '#ab5810',
    },
    background:{
      paper: grey[300],
      default: grey[300]
    },
    text:{
      primary: red[700],
      secondary: red[600]
    },
    
  },
  status: {
    danger: orange[500],
  },
  
});


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme = { theme } >
      <CssBaseline />
      <Provider store={store}>
          <RouterProvider router={router} />
      </Provider>
    </ThemeProvider>
     
  </React.StrictMode>,
)
