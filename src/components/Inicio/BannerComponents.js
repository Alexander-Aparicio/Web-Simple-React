import styled,{keyframes} from "styled-components";
import { Article, P, TitleH1, TitleH2 } from "../../helpers/Elementos";

const MainBox = styled.div`
    width:100%;
    max-width: 1450px;
    position:relative;
    margin:auto;
    margin-bottom: 40px;
    @media (min-width:415px){
        max-height:90vh;
    }
`
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
        max-height:400px;
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
const MainTitleD = styled(TitleH1)`
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
        margin-bottom: 20px;
    }
    @media (min-width: 1025px){
        font-size:4.2rem;
    }
`
const TitleD = styled(TitleH2)`
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
        margin-bottom: 10px;
    }
    @media (min-width: 1025px){
        font-size:4.2rem;
    }
`
const ContenidoD = styled(P)`
    padding-right:10%;
    text-shadow: ${props => props.shadow ? props.shadow : '0px 0px 30px #000'};
    font-size: ${props => props.size ? props.size : '2rem'};
    color: ${props => props.color ? props.color : '#fff'};
    font-family: ${props => props.font ? props.font : "'Poppins',sans-serif"};
    animation: ${openOpacity} 1.5s linear;
    @media (min-width:415px){
        padding-right:15%;
        font-size:1.5rem;
    }
    @media (min-width:560px){
        font-size: ${props => props.size ? props.size : '2rem'};
    }
`

const BoxCta = styled.div`
    width:100%;
    position:absolute;
    bottom: 13.5%;
    z-index:9;
    display:flex;
    justify-content:center;
`
const btnAnim1 = keyframes`
0% {
    left: -100%;
  }
  50%,100% {
    left: 100%;
  }
`
const btnAnim2 = keyframes`
0% {
    top: -100%;
  }
  50%,100% {
    top: 100%;
  }
`
const btnAnim3 = keyframes`
0% {
    right: -100%;
  }
  50%,100% {
    right: 100%;
  }
`
const btnAnim4 = keyframes`
0% {
    bottom: -100%;
  }
  50%,100% {
    bottom: 100%;
  }
`
  
const CtaButton = styled.button`
    position: relative;
    display: inline-block;
    overflow: hidden;
    transition: .5s;
    padding: 13px 25px;
    background-color: #c83067;
    font-size: 1.7rem;
    color:#fff;
    font-family: 'Poppins', sans-serif;
    border-radius:3px;
    animation: ${openOpacity} 1s linear;
    @media (min-width:415px){
        display:none;
    }
    &:hover{
        border: solid 1px transparent;
    }
    span{
        position: absolute;
        display: block;
    }
    span:nth-child(1){
        top: 0;
        left: -100%;
        width: 100%;
        height: 2px;
        background: linear-gradient(90deg, transparent, #f4f4f4);
        animation: ${btnAnim1} 1s linear infinite;
    }
    span:nth-child(2) {
        top: -100%;
        right: 0;
        width: 2px;
        height: 100%;
        background: linear-gradient(180deg, transparent, #f4f4f4);
        animation: ${btnAnim2} 1s linear infinite;
        animation-delay: .25s
      }

    span:nth-child(3) {
        bottom: 0;
        right: -100%;
        width: 100%;
        height: 2px;
        background: linear-gradient(270deg, transparent, #f4f4f4);
        animation: ${btnAnim3} 1s linear infinite;
        animation-delay: .5s
      }
    span:nth-child(4) {
        bottom: -100%;
        left: 0;
        width: 2px;
        height: 100%;
        background: linear-gradient(360deg, transparent, #f4f4f4);
        animation: ${btnAnim4} 1s linear infinite;
        animation-delay: .75s
      }
`

const MySlide = ({children, ...props})=>{

    return(

        <BoxSlide>
            { window.matchMedia("(min-width: 415px)").matches
            ? <img src={props.imgBig} alt={props.alt} />
            : <img src={props.imgSmall} alt={props.alt} />
            } 
            <figcaption>{children}</figcaption>
        </BoxSlide> 

    )
}


export { MainBox , Diapositiva, MainTitleD, TitleD, ContenidoD, MySlide, CtaButton, BoxCta}