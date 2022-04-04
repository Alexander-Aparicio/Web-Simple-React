import styled from "styled-components"
import { Div } from "../../helpers/Elementos"
import {Link} from "react-router-dom"

const BoxBlog = styled(Div)`
height:100%;
padding-bottom:50px;
`
const BoxClaster = styled(Div)`
position:relative;
`
const CardTema = styled.figure`
position:relative;
max-width: ${ props => props.width ? props.width : '350px'};
margin:15px;
border-radius:5px;
& img{
    width:100%;
    border-radius:5px;
}
`
const TitleTema = styled.figcaption`
position:absolute;
top:0;
bottom:0;
left:0;
right:0;
display:flex;
justify-content:center;
align-items:center;
font-size:2.4rem;
font-family:'Poppins', sans-serif;
color:#ffff;
font-weight:bold;
background-color: rgba(0,0,0,0.5);
border-radius:5px;
cursor:pointer;
padding:15px;
&:hover{
    font-size:3rem;
}
`
const CardMenu = ({paper})=>{

    return(

        <Link to={paper.URLname} onClick={()=> window.scrollTo(0,0)} >
        <CardTema width={paper.maxWidth}>
            <img src={paper.img} alt={paper.name} />
            <TitleTema>{paper.name}</TitleTema>
        </CardTema>
        </Link>

    )
}

export {BoxBlog, BoxClaster, CardTema, TitleTema, CardMenu as default}