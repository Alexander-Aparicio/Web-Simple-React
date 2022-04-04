import {Formik, Form} from "formik";
import Loading from "../../../helpers/Loader";
import RequestF from "../../../helpers/RequestApiRest";
import { TextForm } from "./FormComponents";
import { TitleForm, FormBox , ButtonSubmit, Formulario, InputSelect, InputText} from "./FormikComponents"
import { validationFormik} from "./ValidateForm";

const handleSubmit = async (values,{setStatus, resetForm})=>{
    
    const { Post } = RequestF()

    await Post('https://formsubmit.co/ajax/alexdel2019@gmail.com', {
        body:values,
        headers:{
            "Content-Type":"application/json",
            Accept:"application/json"
        }
    }).then((response)=>{

        console.log(response)
        if(response.state){

            resetForm()
            setStatus({respuesta: 'Enviado con ÉXITO!'})

        }else{
            
            resetForm()
            setStatus({respuesta: 'FALLÓ el envío' })

        } 
    })

    setTimeout(() => {
        setStatus({respuesta:''})
    }, 2500);
    

}

const FormInscripciones = ()=>{

    return(

        <FormBox>
            <TitleForm></TitleForm>
            <Formulario>

            <Formik 
            initialValues={{ name:'', lastname:'', age:'',cell:'', email:'', schedule:'' }}
            validate={validationFormik}
            onSubmit={handleSubmit}
            >
            {({status, isSubmitting})=> (

                <Form>

                <TitleForm size={'1.8rem'}>Datos del apoderado</TitleForm>

                <InputText  placeholder="Nombre" name="name" />

                <InputText  placeholder="Apellidos" name="lastname" />

                <InputText  placeholder="Celular" name="cell" />

                <InputText  placeholder="Correo" name="email" />

                <TitleForm size={'1.6rem'}>Edad del niño o adolescente:</TitleForm>
                <InputText  placeholder="Edad" name="age" />

                <InputSelect name="schedule" label="Selecciona un Horario">
                    <option value="">Horarios</option>
                    <option value="Martes y Jueves 9 am - 10 am">Martes y Jueves 9 am - 10 am</option>
                    <option value="Miércoles y Viernes 9 am - 10 am">Miércoles y Viernes 9 am - 10 am</option>
                    <option value="Miércoles y Viernes 11 am - 12 pm">Miércoles y Viernes 11 am - 12 pm</option>
                    <option value="Miércoles y Viernes 3 pm - 4 pm">Miércoles y Viernes 3 pm - 4 pm</option>
                </InputSelect> 

                { status && status.respuesta !== '' ? <TextForm>{status.respuesta}</TextForm> : null }
                { isSubmitting ? <Loading /> : null}
                <ButtonSubmit name="button" value="SEPARAR MI VACANTE"/>

                </Form>

            )}

            </Formik>

        </Formulario>

        </FormBox>
        
    )

}

export default FormInscripciones

