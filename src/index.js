import * as React from "react";
import * as ReactDOM from "react-dom";
import { HashRouter , Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from './reportWebVitals';
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Reglamento from "./components/blog/Reglamento";
import Historia from "./components/blog/Historia";
import China from "./components/blog/China";
import LeyendaSueca from "./components/blog/LeyendaSueca";
import Tienda from "./pages/Tienda";
import {Helmet} from "react-helmet";
import Error404 from "./pages/Error404";
import Landing from "./pages/Landing";

const Index = ()=>{

  return(
    <>
      <Helmet>
        <title>Revolution | Tenis de mesa</title>
      </Helmet>
      <React.StrictMode>
        <HashRouter>
        
          <Routes> 
          
            <Route  path='/' element={<App />} >
              <Route index element={<Home/>} />
              <Route path='blog' element={<Blog/> } />
              <Route path='blog/reglas-de-tenis-de-mesa' element={<Reglamento />} />
              <Route path='blog/historia-del-tenis-de-mesa' element={ <Historia /> } />
              <Route path='blog/tenis-de-mesa-en-china' element={ <China /> } />
              <Route path='blog/la-leyenda-sueca' element={ <LeyendaSueca /> } />
              <Route path='tienda' element={ <Tienda /> } />
              <Route path='clase-gratis' element={ <Landing /> } />
              <Route path='*' element={ <Error404 /> } />
            </Route>
            
          </Routes>
          
        </HashRouter>
      </React.StrictMode>
    </>
  )
}

ReactDOM.render( <Index /> ,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

