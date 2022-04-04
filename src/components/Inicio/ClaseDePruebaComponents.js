import styled from "styled-components";
import { P, TitleH3 } from "../../helpers/Elementos";

const SectionClaseGratis = styled.div`
    width:100%;
    padding: 50px 5%;
    @media (min-width: 698px){
        margin-top:0px;
    }

    @media (min-width:900px){
        display:flex;
        justify-content:center;
    }
`
const InformesCG = styled.article`
    width:100%;

    & .cardL{
        width:100%;
        display:flex;
        justify-content:center;
    }     
    & .cardL img{
        width:70%;
    }

    @media (min-width:900px){
        width:50%
    }
`
const TitleCG = styled(TitleH3)`
    text-align: left;
    padding:1.5% 6%;
    @media (min-width:900px){
        font-size:2.9rem;
    }
`
const ContenidoCG = styled(P)`
    @media (min-width:900px){
        font-size:2rem;
    }
`

export { SectionClaseGratis, InformesCG, TitleCG, ContenidoCG }
