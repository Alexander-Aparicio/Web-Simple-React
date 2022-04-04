import styled from "styled-components";
import { Article, Div, P, TitleH1, TitleH2 } from "../../helpers/Elementos";


const BoxProductos = styled(Div)`
display:grid;
grid-template-columns: repeat( auto-fit, minmax(230px, 280px));
grid-gap:35px;
`
const TitleTienda = styled(TitleH1)`
padding-top:8.5vh;
width:100%;
@media (min-width:415px){
    padding-top:1vh;
}
`

const CardProducto = styled.figure`
display:flex;
width:100%;
flex-direction:column;
& figcaption{
    display:flex;
    width:100%;
    align-items:center;
}
& img{
    width:100%;
}
`
const Price = styled(P)`
text-align:center;
padding-top:0;
font-weight:bold;
`
const Name = styled(TitleH2)`
font-size:1.8rem;
margin-bottom:0;
margin-top:0;
`
const Description = styled(Article)`
font-family: 'Poppins',sans-serif;
`

const Delete = styled.button`
padding:${ props => props.padding ? props.padding : '15px'};
font-size:1.8rem;
color:#fff;
background-color: #1e1e1e;
border-radius:4px;
margin-left:10px;
margin-top:${ props => props.top ? props.top : '0px'};
:hover{
    background-color: #212121;
}
`
const Carrito = styled(Article)`
display:flex;
flex-wrap:wrap;
width: 100%;
max-width:450px;
padding:50px 1.6%;
background-color: #ffffff;
border-top-left-radius: 7px;
border-bottom-left-radius: 7px;
position:fixed;
top:0;
left:0;
right:0;
margin:auto;
margin-top: 100px;
z-index: 9992;
`
const PorComprar = styled(Div)`
justify-content: flex-start;
font-family: 'Inter',sans-serif;
margin-top:20px;
`
const Cantidad = styled(Div)`
width:35px;
font-size:1.5rem;
font-weight:bold;
@media (min-width:475px){
    font-size:2rem;
}
`
const ProductoAComprar =styled(Div)`
max-width:150px;
font-size:1.5rem;
justify-content:flex-start;
@media (min-width:475px){
    font-size:1.9rem;
    max-width:215px;
}
& p{
    padding-left: 0px;
}
`
const Costo = styled(Div)`
max-width:100px;
font-size:1.5rem;
@media (min-width:475px){
    font-size:1.8rem;
}

`
const Cta = styled.button`
padding:15px;
display:flex;
justify-content:center;
align-items:center;
background-color: #c83067;
color:#fff;
border-radius:5px;
margin-top: 20px;
font-size:1.8rem;
:hover{
    background-color: #dc105a;
}
`
const Buttons = styled(Div)``

const CostoTotal = styled(Div)`
display:flex;
flex-wrap:nowrap;
width:100%;
margin-top:20px;
padding-right:35px;
font-family: 'Inter',sans-serif;
& h2{
    font-size:2.5rem;
    text-align:right;
}
& div{
    font-weight:bold;
    font-size:2.3rem;
    max-width:150px;
}
`
const Cerrar = styled(Delete)`
padding: 8px 12px;
font-size:1.6rem;
`
const TextTienda = styled(P)``

const Model = styled(P)`
text-align:center;
`
export {
    Model,
    Cerrar,
    TextTienda,
    Buttons,
    CostoTotal,
    Costo,
    ProductoAComprar,
    Cantidad,
    BoxProductos, 
    CardProducto, 
    Price, 
    Name, 
    Description, 
    Carrito, 
    PorComprar, 
    Cta, 
    TitleTienda, 
    Delete
}