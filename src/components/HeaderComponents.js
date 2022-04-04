import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Encabezado = styled.header`
    width: 100%;
    max-width:1600px;
    margin:auto;
    height: 10vh;
    max-height:74px;
    display:flex;
    justify-content:space-between;
    background-color:#181818d6;
    border-bottom: solid 1px #f4f4f424;
    padding-left:5%;
    padding-right:5%;
    position:fixed;
    top:0;
    left:0;
    right:0;
    z-index: 99999;
    @media (min-width:415px){
        background-color:#c83067;
    }
`
const Figure = styled.figure`
    display:flex;
    justify-content: center;
    flex-wrap:wrap;
    align-items:center;
    max-height: 9vh;

    img{
        width: 40px;
        margin-right:15px;
    }
    figcaption{
        font-size:1.7rem;
        color: #f4f4f4;
        margin-top: 5px;
        font-family: 'Poppins', cursive;
        font-weight:bold;
    }
`
const Navbar = styled.nav`
    display:none;
    flex-wrap:wrap;
    align-items:center;
    justify-content: space-around;
    width: 50%;
    @media (min-width:600px){
        display: flex;
        flex-wrap:wrap;
        align-items:center;
        justify-content: space-around;
        width: 60%;
    }
    @media (min-width:830px){
        width: 50%;
    }
`
const OptionMenu = styled.p`
    font-size: 1.7rem;
    cursor:pointer;
    color: #f4f4f4;
    font-family: 'Poppins', sans-serif;

    a{
        color: #f4f4f4;
        font-family: 'Poppins', sans-serif;
        &:hover{
            color: yellow;
        }
    }
    & .seleccionado{
        color: #ffe014 !important;
    }

`

const Logo =({ name, logo })=>{

    return(

        <Figure>
            <img src={logo} alt={name} />
            <figcaption>{name}</figcaption>
        </Figure>

    )

}

const Navegation =( {home, blog, tienda, clase} )=>{

    return(

        
        <Navbar>

            {home ? (
                <OptionMenu>
                    <NavLink 
                    to="/"
                    className={({isActive})=> isActive ? "seleccionado" :"noSeleccionado"}
                    >{home}</NavLink>
                </OptionMenu>
            ): null}

            {blog ?  (
                <OptionMenu>
                    <NavLink 
                    to="/blog"
                    className={({isActive})=> isActive ? "seleccionado" :"noSeleccionado"}
                    >{blog}</NavLink>
                </OptionMenu>
            ) : null}
            
            {tienda ? (
                <OptionMenu>
                    <NavLink 
                    to="/tienda"
                    className={({isActive})=> isActive ? "seleccionado" :"noSeleccionado"}
                    >{tienda}</NavLink>
                </OptionMenu>
            ): null}

            {clase ? (
                <OptionMenu>
                    <NavLink 
                    to="/clase-gratis"
                    className={({isActive})=> isActive ? "seleccionado" :"noSeleccionado"}
                    >{clase}</NavLink>
                </OptionMenu>
            ): null}
            
        </Navbar>

    )

}

export { Logo, Navegation, Encabezado }