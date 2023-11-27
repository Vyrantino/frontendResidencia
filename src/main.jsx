import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from "./routes/Root/root.jsx";
import ErrorPage from "./errorPage.jsx";
import Homepage from './routes/Homepage/homepage';
import Departamento from './routes/Departamento/departamento';
import EditorPlantilla from './routes/EditorPlantilla/editor-plantilla';
import EditorTexto from './routes/EditorTexto/editor-texto';
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
import { ThemeProvider , createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Login from './routes/Login/login.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: < ErrorPage /> , 
    children: [
      {
        path: 'homepage' ,
        Component: < Homepage />
      },
      {
        path: 'departamento' ,
        Component: < Departamento />
      },
      {
        path: 'editor-plantilla' ,
        Component: < EditorPlantilla />
      },
      {
        path: 'editor-texto' ,
        Component: < EditorTexto />
      },
      {
        path: 'formulario-datos' ,
        Component: < FormularioDatos />
      },
      {
        path: 'pagina-documentos' ,
        Component: < PaginaDocumentos />
      },
      {
        path: 'panel-admin' ,
        Component: < PanelAdmin />
      },
      {
        path: 'panel-control' ,
        Component: < PanelControl />
      },
      {
        path: 'panel-departamentos' ,
        Component: < PanelDepartamentos />
      },
      {
        path: 'perfil-datos' ,
        Component: < PerfilDatos />
      },
      {
        path: 'selector-plantilla' ,
        Component: < SelectorPlantilla />
      },
      {
        path: 'formulario-documento' ,
        Component: < FormularioDocumento />
      },
      {
        path: 'previsualizar-plantilla' ,
        Component: < PrevisualizarPlantilla />
      },
      {
        path: 'login' ,
        Component: < Login />
      },
    ],
  },
]);

const theme = createTheme({
  palette: {
    mode: 'dark'
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
