import styled from "styled-components";
import { Div, P, TitleH2 } from "../../helpers/Elementos";

const SectionPreguntasF = styled(Div)`
    flex-direction:column;
    padding-left:5%;
    padding-right:5%;
    background-image: url('./img/fondo/fondo.jpg');
    background-size: cover;
    padding-bottom:40px;
    padding-top:30px;
`
const TitlePF = styled(TitleH2)`
    margin-bottom:0;
`
const BoxP = styled.details`
    width:100%;
    padding-left:3.1%;
    padding-right:3.1%;
    margin-top:15px;
    margin-bottom:15px;
`
const Pregunta = styled.summary`
    width:100%;
    font-size:1.8rem;
    font-family:'Poppins', sans-serif;
    font-weight: bold;
    cursor:pointer;
`
const Respuesta = styled(P)`
    padding:0;
    padding-top:10px;
`

export {SectionPreguntasF, TitlePF, BoxP, Pregunta, Respuesta}