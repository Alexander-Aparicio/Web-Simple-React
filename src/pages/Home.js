import React from "react";
import Banner from "../components/Inicio/Banner";
import ClaseGratis from "../components/Inicio/ClaseDePrueba";
import Academia from "../components/Inicio/Academia";
// import Inscripciones from "../components/Inicio/Inscripciones";
import MediosDePago from "../components/Inicio/MediosDePagos";
import Metodologia from "../components/Inicio/Metodologia";
import Precios from "../components/Inicio/Precios";
import PreciosTalleresV from "../components/Inicio/PreciosTalleresDeVerano";
import TalleresDeVerano from "../components/Inicio/TalleresDeVerano";
import { Page } from "../helpers/Elementos";
import PreguntasFrecuentes from "../components/Inicio/PreguntasFrecuentes";
import Nosotros from "../components/Inicio/NosotrosComponents";
import Ubicacion from "../components/Inicio/Ubicacion";

//  

const Home = ()=>{

    return(

        <Page padding='0%'>
            <Banner />
            <TalleresDeVerano />
            <PreciosTalleresV />
            <Academia />
            <Metodologia />
            <Precios />
            <ClaseGratis />
            <MediosDePago />
            {/* <Inscripciones /> */}
            <Nosotros />
            <PreguntasFrecuentes />
            <Ubicacion />
        </Page>

    )

}

export default Home