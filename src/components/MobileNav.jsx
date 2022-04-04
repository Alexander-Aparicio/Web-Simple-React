import { NavLink } from "react-router-dom";
import { MenuTitle, UiMenu } from "./MobileNavComponents";


const MobileNav = (props)=>{

    return(
        <UiMenu visible={props.visible}>
      
            <MenuTitle color={"#fbc330"}>Menú</MenuTitle>

            <NavLink 
            onClick={ ()=> props.handleMenu() & window.scrollTo(0,0) } 
            to="/" 
            className={({isActive})=> isActive ? "seleccionado" :"noSeleccionado"}
            >Home</NavLink>

            <NavLink 
            onClick={ ()=> props.handleMenu() & window.scrollTo(0,0) } 
            to="/blog" 
            className={({isActive})=> isActive ? "seleccionado" :"noSeleccionado"}
            >Blog</NavLink>
            
            <NavLink 
            onClick={ ()=> props.handleMenu() & window.scrollTo(0,0) } 
            to="/tienda" 
            className={({isActive})=> isActive ? "seleccionado" :"noSeleccionado"}
            >Tienda</NavLink>

            {/* <NavLink 
            onClick={ ()=> props.handleMenu() & window.scrollTo(0,0) } 
            to="/clase-gratis" 
            className={({isActive})=> isActive ? "seleccionado" :"noSeleccionado"}
            >Clase Gratis</NavLink> */}

        </UiMenu>
    )

} 

export default MobileNav