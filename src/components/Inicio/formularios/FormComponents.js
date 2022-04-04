import styled from "styled-components";
import { Article, Div, P } from "../../../helpers/Elementos";

const FormBox = styled(Article)`
    padding: 1.5% 1%;
    margin:auto;
    margin-top:15px;

    @media (min-width:850px){
        width:${props => props.width ? props.width : '100%'};
    }
`
const Form = styled.form`
    position:relative;
    margin:auto;
    max-width: 370px;
    display:flex;
    flex-wrap:wrap;
    align-items:center;
    border:solid 1px rgba(0,0,0,0.3);
    padding: 25px;
    border-radius:10px;

    p{
        margin-top:10px;
        margin-bottom:5px;
    }

    select{
        border: solid 1px rgba(0,0,0,0.3);
        width:100%;
        border-radius: 4px;
        padding:7px;
        margin: 15px 10px;
        background-color:#fff;
        font-family: 'Poppins', sans-serif;
    }
    .ctaForm{
        height:50px;
        font-size:1.8rem;
        background-color: #c83067;
        color:#fff;
    }
`
const TitleForm = styled(P)`
    font-size: 1.8rem;
    color: #c83067; 
    padding:0px;
`
const TextForm = styled(P)``

const TipoInscripcion = styled.div`
    width:100%;
    display:flex;
    justify-content:center;

    div{
        width:97px;

        .radios{
            width:25px;
        }
    }
`
const Check = styled.div`
    position:absolute;
    top:0;
    bottom:0;
    right:0;
    left:0;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color: rgba(121, 182, 242, 0.1);
    border-radius:9px;

    p{
        font-family: 'Poppins', sans-serif;
        font-size: 2.2rem;
        font-weight: bold;
        color:#515151;
    }
` 
const Container = styled(Div)`
    margin:7px;
`
const InputForm = styled.input`
    border:solid 1px rgba(0,0,0,0.3);
    padding:7px;
    border-radius: 7px;
    width:100%;
    text-align:center;
`
const Label = styled.label`
    width: 100%;
    font-size: 1.5rem;
    font-family: "Poppins", sans-serif;
    padding:1.5% 6%;
`

const Checkbox = styled.input`

`

const Input = ({label, ...props})=>{

    return(

        <Container>

            { props.type !== "radio" ? <Label > { label } <InputForm { ...props } /></Label> : null }
            
            { props.type === "radio" ? <Label ><InputForm { ...props } /> { label } </Label> : null }
           
        </Container>

    )
}

export { FormBox, Form, TipoInscripcion, Check, TitleForm, Input, TextForm, Checkbox, Label }