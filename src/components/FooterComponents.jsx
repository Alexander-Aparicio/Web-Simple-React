import styled from "styled-components";
import { P } from "../helpers/Elementos";

const BoxFooter = styled.footer`
width:100%;
display:flex;
justify-content:center;
align-items:center;
background-color: #1e1e1e;
@media screen and (min-width:500px){
    height:10vh;
}
`
const Desarrollador = styled.a`
color:#c83067;
`
const TextFooter = styled(P)`
color:#f4f4f4;
text-align:center;
`

export {BoxFooter, Desarrollador, TextFooter}