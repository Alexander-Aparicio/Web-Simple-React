import styled from "styled-components";
import { Div, P, TitleH3 } from "../../helpers/Elementos";

const SectionMetodologia = styled(Div)`
    margin: 40px 0px;
    padding: 10px 5% 30px 5%;
    justify-content: space-around;
    @media (min-width:733px){
        flex-direction: row-reverse;
    }
`
const Box = styled(Div)`
max-width: 600px;
align-items: flex-start;
justify-content: flex-start;
`
const TitleM = styled(TitleH3)`
margin:0px;
`
const ContenidoM = styled(P)`
`
const ListaM = styled.ul`
padding-top:0%;
padding-left:8%;
color: #1e1e1e;
font-weight: 300;
font-family: 'Poppins',sans-serif;
font-size: 1.6rem;
margin-bottom:30px;

li{
    text-align:left;
}
`
const BoxVideo = styled.figure`
position:relative;

width:100%;
max-width:560px;
max-height:315px;
padding-right: 0%;
border-radius:7px;
&.reproductor{
    position:absolute;
    top:0;
    left:0;
}
`
export {SectionMetodologia, Box, TitleM, ContenidoM, ListaM, BoxVideo}