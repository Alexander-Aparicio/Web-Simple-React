import styled,{keyframes} from "styled-components";
import { Article, P, TitleH1, TitleH2 } from "./Elementos";

const openOpacity = keyframes`
from {
    opacity:0%;
  }

  to {
    opacity:100%;
  }
`

const BoxSlide = styled.figure`
    width:100%;
    margin:auto;
    margin-top:0;
    display flex;
    justify-content:center;
    align-items:center;

    @media (min-width:415px){
        width:90%;
    }
    
    position:relative;
    @media (min-width: 800px){
        margin:auto;
        max-height: ${props => props.height ? props.height : '400px'};
    }
    & img{
        width:100%;
        object-fit:cover;
        object-position: center bottom;
    }

    & figcaption{
        position: absolute;
        top:0;
        right:0;
        left:0;
        bottom:0;
        width:100%;
        display:flex;
        align-items:center;
        flex-wrap:wrap;
        align-content: flex-start;
    }
`
const Diapositiva = styled(Article)`
    height:100%;
    padding:10px;
    padding-top:100px;
    padding-left:24px;
    background: rgba(0,0,0,0.3);
    align-content: start;
    padding-right:15%;

    @media (min-width:415px){
        padding-top: 0px;
    }
    @media (min-width:760px){
        padding-top: 10px;
        width:40%;
        padding-top: 10px;
        padding-right:5%;
    }
    @media (min-width:1300px){
        padding-top: 10px;
        width:35%;
        padding-top: 10px;
        padding-right:5%;
    }
`
const MainTitleS = styled(TitleH1)`
    text-align:left;
    color:#fff;
    font-size:3.4rem;
    color:#ffc31e;
    color:#ffe014;
    animation: ${openOpacity} 1s linear;
    @media (min-width:415px){
        margin-bottom: 10px;
    }
    @media (min-width: 795px){
        font-size:3.5rem;
        margin-bottom: 25px;
    }
    @media (min-width: 1025px){
        font-size:4.2rem;
    }
`
const TitleS = styled(TitleH2)`
    text-align:left;
    color:#fff;
    font-size:3.4rem;
    color:#ffc31e;
    color:#ffe014;
    animation: ${openOpacity} 1s linear;
    @media (min-width:415px){
        margin-bottom: 10px;
    }

    @media (min-width: 795px){
        font-size:3.5rem;
        margin-bottom: 25px;
    }
    @media (min-width: 1025px){
        font-size:4.2rem;
    }
`
const ContenidoS = styled(P)`
    padding-right:18%;
    text-shadow: ${props => props.shadow ? props.shadow : '0px 0px 30px #000'};
    font-size: ${props => props.size ? props.size : '2rem'};
    color: ${props => props.color ? props.color : '#fff'};
    font-family: ${props => props.font ? props.font : "'Poppins',sans-serif"};
    animation: ${openOpacity} 1.5s linear;
    @media (min-width:415px){
        font-size:1.5rem;
    }
    @media (min-width:560px){
        font-size: ${props => props.size ? props.size : '2rem'};
    }
`

const MySlide = ({children, ...props})=>{

    return(

        <BoxSlide height={props.height} >
            { window.matchMedia("(min-width: 415px)").matches
            ? <img src={props.imgBig} alt={props.alt} />
            : <img src={props.imgSmall} alt={props.alt} />
            } 
            <figcaption>{children}</figcaption>
        </BoxSlide> 

    )
}

export {MySlide, ContenidoS, TitleS, MainTitleS, Diapositiva}