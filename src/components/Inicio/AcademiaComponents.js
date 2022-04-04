import styled from "styled-components";
import { Div, P, TitleH3 } from "../../helpers/Elementos";


const SectionHorarios = styled(Div)`
    margin:30px 0px; 
    padding:30px 5%; 
    justify-content:space-around;

    @media (min-width: 698px){
        margin-top:70px;
    };
    @media (min-width: 945px){
        flex-wrap: wrap;
    };
`
const InformesH = styled(Div)`
    width:100%;
    max-width:650px;
`
const TitleH = styled(TitleH3)`
    align: left;
    padding: 0px 6%;
    margin: 0px 0px;
`
const Contenido = styled(P)`
    margin-bottom: 10px;
    text-align:justify;
`
const Horarios = styled(Div)`
    margin-top:25px;
    margin-bottom:25px;
    display: grid;
    grid-template-columns: repeat(auto-fit, 205px); 
    grid-gap: 20px;
    padding: 1% 0%;
    padding-top: 3.5%;
    align-items:start;
    @media (min-width: 733px){
        grid-template-columns: repeat(auto-fit, 210px); 
        margin-top:revert;
        margin-bottom:revert;
        padding: 1.5% 6%;
    }
    @media (min-width:1297px){
        justify-content: revert;
    }
`
const Box = styled(Div)`
    flex-direction: column;
    background-color: #FFD151;
    padding: 10px 15px;
    border-radius:7px;
`
const Day = styled(P)`
    font-size: 1.8rem;
    font-weight: bold;
    height: 35px;
    @media (min-width: 733px){
        font-size: 2.5rem;
    }
`
const Hora = styled(P)`
text-align:left;
padding:1.5% 6%;
font-size:1.55rem;

@media (min-width:733px){
    font-size:1.6rem;
}
`
const Figure = styled.figure`
    max-width:400px;
    min-width:270px;
    border-radius:5px;
    @media (min-width:715px){
        margin-left: 20px;
    }

    img{
        width:100%;
        border-radius:5px;
    }
    @media (min-width: 1500px){
        max-width:500px;
    }
`

const Horario = ({
    lunes,
    martes,
    miercoles,
    jueves,
    viernes,
    sabados,
    domingos
})=>{

    return(
        
        <Horarios>

            { lunes ? (
            <Box>
                <Day>Lunes</Day>
                <Hora align={"left"} padding={'1.5% 0%'}> 
                { lunes }
                </Hora>
            </Box>
            ) : null }

            { martes ? (
            <Box>
                <Day>Martes</Day>
                <Hora align={"left"} padding={'1.5% 0%'}> 
                { martes }
                </Hora>
            </Box>
            ) : null }

            { miercoles ? (
            <Box>
                <Day>Miércoles</Day>
                <Hora align={"left"} padding={'1.5% 0%'}> 
                { miercoles }
                </Hora>
            </Box>
            ) : null }

            { jueves ? (
            <Box>
                <Day>Jueves</Day>
                <Hora align={"left"} padding={'1.5% 0%'}> 
                { jueves }
                </Hora>
            </Box>
            ) : null }

            { viernes ? (
            <Box>
                <Day>Viernes</Day>
                <Hora align={"left"} padding={'1.5% 0%'}> 
                { viernes }
                </Hora>
            </Box>
            ) : null }

            { sabados ? (
            <Box>
                <Day>Sábados</Day>
                <Hora align={"left"} padding={'1.5% 0%'}> 
                { sabados }
                </Hora>
            </Box>
            ) : null }

            { domingos ? (
            <Box>
                <Day>Domingos</Day>
                <Hora align={"left"} padding={'1.5% 0%'}> 
                { domingos }
                </Hora>
            </Box>
            ) : null }

        </Horarios>
    )
}

const Card = ({imagen, alt})=>{

    return(

        <Figure>
            <img src={imagen} alt={alt} />
        </Figure>

    )
}

export { TitleH, Horario, Card, InformesH, Contenido, SectionHorarios }