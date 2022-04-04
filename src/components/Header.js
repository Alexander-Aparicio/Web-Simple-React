import React from "react";
import { Encabezado, Logo, Navegation } from "./HeaderComponents";

const Header = ()=>{

    return(

        <Encabezado>
            <Logo logo='/img/logos/logoPequeno.png' name="Revolution" />
            {window.matchMedia("(min-width: 600px)").matches ? <Navegation home="Home" blog="Blog" tienda="Tienda" /> : null}
            
        </Encabezado>
        
    )

}

export default Header