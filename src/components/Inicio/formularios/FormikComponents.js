import { useField } from "formik";
import styled from "styled-components";
import { Article, Div, P } from "../../../helpers/Elementos";

const FormBox = styled(Article)`
`
const Formulario = styled(Div)`
    position:relative;
    margin:auto;
    max-width: 370px;
    border:solid 1px rgba(0,0,0,0.3);
    padding: 25px;
    border-radius:10px;
    form{
        width:100%;
        padding:7px;
    }
`
const TitleForm = styled(P)`
    color: #c83067; 
    padding:0px;
    font-weight:bold;
    text-align:center;
`
const TextFormik = styled(P)``

const Container = styled(Div)`
    padding-top:10px;
    padding-bottom:10px;
`
const Label = styled.label`
    width: 100%;
    font-size: 1.6rem;
    font-family: "Poppins", sans-serif;
    color: #c83067; 
    padding:0px;
    font-weight: bold;
    text-align:left;
    padding-left:5px;
`
const InputTexto = styled.input`
    border:solid 1px rgba(0,0,0,0.3);
    padding:5px;
    border-radius: 7px;
    width:100%;
    text-align:center;
    font-size: 1.5rem;
    font-family: "Poppins", sans-serif;
`
const InputCheck = styled.input``

const InputRadioF = styled.input``

const InputSelectF = styled.select`
    border: solid 1px rgba(0,0,0,0.3);
    width:100%;
    border-radius: 4px;
    padding:7px;
    margin: 15px 10px;
    background-color:#fff;
    font-family: 'Poppins', sans-serif;

    & option{
        width:100%;
        border-radius: 4px;
        padding:7px;
        margin: 15px 10px;
        background-color:#fff;
        font-family: 'Poppins', sans-serif;
    }
`
const InputButton = styled.input`
    border:solid 1px rgba(0,0,0,0.3);
    padding:7px;
    font-size:1.8rem;
    height:50px;
    border-radius: 7px;
    width:100%;
    text-align:center;
    background-color: #c83067;
    color:#fff;
`
const InputText = ({label, ...props})=>{

    const [field, meta] = useField(props)

    return (

        <Container>

            <Label htmlFor={props.id || props.name} >{ label }</Label>
            <InputTexto {...field} {...props} />
            { meta.touched && meta.error ? <TextFormik>{ meta.error }</TextFormik> : null}

        </Container>

    )

}

const InputCheckbox = ({children, ...props}) =>{

    const [field, meta] = useField({...props, type:'checkbox'})

    return (

        <Container>

        <Label>
            <InputCheck {...field} {...props} />
            {children}
        </Label>
        { meta.touched && meta.error ? <TextFormik>{ meta.error }</TextFormik> : null }

        </Container>

    )

}

const InputRadio = ({ label, ...props})=>{

    const [field] = useField({...props, type:'radio'})

    return(

        <Container>

            <InputRadioF type='radio' {...field} {...props} />
            {label}
        </Container>

    )

}

const InputSelect = ({label, ...props})=>{

    const [field, meta] = useField(props)

    return(

        <Container>
            <Label>{ label }</Label>

        <InputSelectF {...field} {...props} />
        { meta.touched && meta.error ? <TextFormik>{ meta.error }</TextFormik> : null }

        </Container>
    )
}

const ButtonSubmit = ({...props})=>{

    const [field] = useField({type:'submit',...props})
    return(
        <InputButton type="submit" {...field} {...props} />
    )

}

export { TitleForm,FormBox ,Formulario ,InputText, InputCheckbox, InputRadio, InputSelect, ButtonSubmit }