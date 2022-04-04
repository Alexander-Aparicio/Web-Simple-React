import styled from "styled-components";
import { Div, P, TitleH3 } from "../../helpers/Elementos";


const SectionHorarios = styled(Div)`
    margin:30px 0px; 
    padding:10px 5%; 
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
`
const Horarios = styled(Div)`
    margin-top:25px;
    margin-bottom:25px;
    display: grid;
    grid-template-columns: repeat(auto-fit, 200px); 
    grid-gap: 20px;
    padding: 1.5% 6%;
    padding-top: 3.5%;

    @media (min-width: 733px){
        grid-template-columns: repeat(auto-fit, 210px); 
        margin-top:revert;
        margin-bottom:revert;
    }
    @media (min-width:1297px){
        justify-content:${props => props.content ? props.content : 'revert'};
    }
`
const Box = styled(Div)`
    flex-direction: column;
    background-color: #FFD151;
    padding: 10px 15px;
    border-radius:7px;
    align-self: flex-start !important;
`
const Day = styled(P)`
    font-size: 2rem;
    font-weight: bold;
    height: 40px;
    text-align:center;
    @media (min-width: 733px){
        font-size: 2.5rem;
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
    domingos,
    ...props
})=>{

    return(
        
        <Horarios content={props.content}>

            { lunes ? (
            <Box>
                <Day>Lunes</Day>
                <Contenido align={"center"} padding={'1.5% 0%'}> 
                { lunes }
                </Contenido>
            </Box>
            ) : null }

            { martes ? (
            <Box>
                <Day>Martes</Day>
                <Contenido align={"center"} padding={'1.5% 0%'}> 
                { martes }
                </Contenido>
            </Box>
            ) : null }

            { miercoles ? (
            <Box>
                <Day>Miércoles</Day>
                <Contenido align={"center"} padding={'1.5% 0%'}> 
                { miercoles }
                </Contenido>
            </Box>
            ) : null }

            { jueves ? (
            <Box>
                <Day>Jueves</Day>
                <Contenido align={"center"} padding={'1.5% 0%'}> 
                { jueves }
                </Contenido>
            </Box>
            ) : null }

            { viernes ? (
            <Box>
                <Day>Viernes</Day>
                <Contenido align={"center"} padding={'1.5% 0%'}> 
                { viernes }
                </Contenido>
            </Box>
            ) : null }

            { sabados ? (
            <Box>
                <Day>Sábados</Day>
                <Contenido align={"center"} padding={'1.5% 0%'}> 
                { sabados }
                </Contenido>
            </Box>
            ) : null }

            { domingos ? (
            <Box>
                <Day>Domingos</Day>
                <Contenido align={"center"} padding={'1.5% 0%'}> 
                { domingos }
                </Contenido>
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