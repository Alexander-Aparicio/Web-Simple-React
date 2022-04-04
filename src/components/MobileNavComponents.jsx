import styled  from "styled-components";
import { TitleH2 } from "../helpers/Elementos";

const MenuTitle = styled(TitleH2)``

const UiMenu = styled.section`
    display: ${ props => props.visible ? 'flex' : 'none'};
    position:fixed;
    top:0;
    bottom:0;
    left:0;
    right:0;
    background-color:#9b1546e8; 
    z-index:9999;
    flex-direction:column;
    justify-content: center;
    align-items:center;
    height:100%;
    width:100%; 

    & a{
        color: #fff;
        font-size:2rem;
        font-family: 'Poppins', sans-serif;
        margin: 20px 15px;
        border-bottom: solid 1px transparent;
    }
    & .seleccionado{
        border-bottom: solid 1px #ffff;
    }
`

export {UiMenu, MenuTitle}