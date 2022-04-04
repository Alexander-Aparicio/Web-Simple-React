import styled from "styled-components";
import {Article, Page, TitleH1, TitleH2, P, TitleH3, Div} from "../../helpers/Elementos"

const BannerBox = styled.div`
    width:100%;
    max-width: 1450px;
    position:relative;
    margin:auto;
    margin-bottom: 80px;
    @media (min-width:415px){
        max-height:90vh;
    }
`
const BoxArticle = styled(Page)`
padding-top:30px;
@media screen and (min-width:415px){
    padding-top:0px;
}
`
const BoxMenu = styled(Div)``

const Articulo = styled(Article)`
& .nodo{
    font-size:2.8rem; 
    color: #c83067;
}
`
const TitleMain = styled(TitleH1)`
margin-bottom:0;
`
const SubTitle = styled(TitleH2)`
text-align: left;
margin-bottom:0;
padding-bottom:0;
font-size:3rem;
`
const SubTitleInf = styled(TitleH3)`
text-align: left;
margin-bottom:0;
padding-bottom:0;
font-size:2.8rem;
`
const Figure = styled.figure`
max-width: ${props => props.maxWidth ? props.maxWidth : '260px'};
& figcaption{
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
}
img{
    width:100%;
}
`
const TextBlog = styled(P)``
const Listado = styled.ul`
padding: 1.5% 6%;
& li{
    font-family: 'Poppins', sans-serif;
    text-align: justify;
    color:#1e1e1e;
    font-size: 1.6rem;
}
`
const Enlace = styled.a`
`
const CardBlog = ({img, name, ...props})=>{

    return(

        <Figure {...props} >
            <img src={img} alt={name} />
            <figcaption>{name}</figcaption>
        </Figure>

    )

}


export { 
    BoxArticle, 
    Articulo, 
    TitleMain, 
    SubTitle, 
    Listado,
    Enlace,
    TextBlog,
    SubTitleInf,
    BoxMenu,
    BannerBox,
    CardBlog 
}