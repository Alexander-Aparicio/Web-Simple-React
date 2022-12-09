import styled from "styled-components";
import { Div, P, TitleH3 } from "../../helpers/Elementos";

const SectionTalleres = styled(Div)`
margin: 0px 0px;
padding: 10px 5% 40px 5%;
justify-content: space-around;
`
const BoxT = styled(Div)`
max-width: 600px;
align-items: flex-start;
justify-content: flex-start;
`
const TitleT = styled(TitleH3)`
margin:0px;
@media (min-width:733px){
    text-align:left;
}
`
const ContenidoT = styled(P)`
@media (min-width:733px){
    text-align:revert; 
}
`
const HorarioTalleresV = styled(Div)`
display:grid;
grid-template-columns: repeat(auto-fit, 350px);
grid-gap:20px;
margin-top:25px;
margin-bottom:25px;
align-items:start;
@media (min-width: 733px){
    grid-template-columns: repeat(auto-fit, 350px); 
    margin-top:revert;
    margin-bottom:revert;
    padding: 1.5% 6%;
};
@media (min-width:1297px){
    
};
& .h2{
    align-self:start;
};
`
const HorarioV = styled(Div)`
background-color:#FFD151;
border-radius:7px;
padding-top: 10px;
padding-bottom:10px;
max-width: ${props => props.type ? props.type : ''};
justify-content:center;
`
const DayV = styled(P)`
font-weight: bold;
font-size: 2rem;
text-align:center;
`
const HoraV = styled(P)`
line-height:35px;
text-align:center;
`
const GalleryT = styled(Div)`
width:100%;
padding-bottom:3%;
position:relative;
max-width:560px;
padding-right: 0%;
border-radius:7px;
display: grid;

grid-template-columns: repeat(auto-fit, 150px); 
grid-gap: 20px;
padding-top: 3%;

@media (min-width: 733px){
    grid-template-columns: repeat(auto-fit, 230px); 
    margin-top:revert;
    margin-bottom:revert;
}
@media (min-width:1297px){
    
}
figure{
    width:100%;
    border-radius:5px;

    img{
        width:100%;
        border-radius:5px;
        box-shadow: 0 15px 25px rgba(0,0,0,.6);
    }
}
`
const LayerText = styled(P)`
display:none;
text-align:center;
position:absolute;
top:0;
bottom:0;
left:0;
right:0;
color:#fff;
font-size: 2.5rem;
display: flex;
align-items: center;
color: #fff;
justify-content: center;
font-size: 3.5rem;
font-weight: bold;
text-shadow: 0px 0px 30px #000;
`

export {
    SectionTalleres,
    BoxT,
    TitleT,
    ContenidoT,
    HorarioTalleresV,
    HorarioV,
    DayV,
    HoraV,
    GalleryT,
    LayerText
}