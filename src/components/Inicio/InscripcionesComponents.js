import styled from "styled-components";
import { Div, TitleH3, P } from "../../helpers/Elementos";

const SectionInscripciones = styled(Div)`
padding: 10px 5%;
@media (min-width:450px){
    padding: 50px 5%;
}
@media (min-width: 698px){
    margin-top:0px;
}

@media (min-width:900px){
    display:flex;
    justify-content:center;
    align-items: flex-start;
}
`
const Proceso = styled.article`
    width:100%;

    @media (min-width:900px){
        width:50%
    }
`
const TitleI = styled(TitleH3)``

const InformesI = styled(P)`` 

const InscriptionBox = styled(Div)`
justify-content:center;
padding: 1.5% 1%;
margin:auto;
margin-top:15px;

@media (min-width:420px){
    padding: 1.5% 6%;
}
@media (min-width:900px){
    width:50%;
}
`

const Servicio = styled.button`
margin:15px 10px;
padding: 10px 18px;
border: solid 0.5px #51515170;
border-radius: 6px;
background-color: ${ props => props.background === 'academia' ? '#c83067' : '#fff'};
color: ${ props => props.background === 'academia' ? '#fff' : '#51515180'};
font-size:1.6rem;
@media (min-width:650px){
    font-size:2rem;
}
`
const Servicio2 = styled.button`
margin:0px 10px;
padding: 10px 18px;
border: solid 0.5px #51515170;
border-radius: 6px;
background-color: ${ props => props.background === 'talleres' ? '#c83067' : '#fff'};
color: ${ props => props.background === 'talleres' ? '#fff' : '#51515180'};
font-size:1.6rem;
@media (min-width:650px){
    font-size:2rem;
}
`


export { SectionInscripciones, Proceso, TitleI, InformesI, InscriptionBox, Servicio, Servicio2 }