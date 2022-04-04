import Loading from "../../../helpers/Loader"
import useForm from "../../Hooks/HookFormulario"
import { Check, Form, FormBox, Input, TextForm, TipoInscripcion, TitleForm } from "./FormComponents"
import { validations, validationsSubmit } from "./ValidateForm"


const initial = {
    estado:"ParaMi",
    nombre:"",
    dni:"",
    celular:"",
    edad:"",
    select:"",
}


const FormularioAcademia = ()=>{

    const {form, handleChange, handleBlur, errores, handleSubmit, loading, response} = useForm(initial, validations, validationsSubmit)

    return(

        <FormBox>

            <Form onSubmit={handleSubmit} >
            <TitleForm>
                <strong>¿Para quién es la clase?</strong> 
            </TitleForm>

            <TipoInscripcion>
            <Input 
            className="radios"
            label="Adulto"
            type="radio"
            value="ParaMi"
            onChange={handleChange}
            name="estado"
            checked={form.estado === "ParaMi"}
            />
            
            <Input 
            className="radios"
            label="Menor"
            type="radio"
            value="MiHijo"
            onChange={handleChange}
            name="estado"
            checked={form.estado === "MiHijo"}
            />
            </TipoInscripcion>
            
            <TextForm size={"1.8rem"} color={"#c83067"} padding={"0px"}>
                <strong>{form.estado === "ParaMi" ? "Mis datos" : "Datos del apoderado"}</strong> 
            </TextForm>
        
            <Input 
            name="nombre"
            onChange={handleChange}
            onBlur={handleBlur}
            type="text"
            value={form.nombre}
            placeholder="Nombre"
            />
            {errores.nombre ?<TextForm>{errores.nombre}</TextForm> : null}
            
            <Input 
            name="dni"
            onChange={handleChange}
            onBlur={handleBlur}
            type="text"
            value={form.dni}
            placeholder="DNI"
            />
            {errores.dni ?<TextForm>{errores.dni}</TextForm> : null}
            <Input 
            name="celular"
            onChange={handleChange}
            onBlur={handleBlur}
            type="text"
            value={form.celular}
            placeholder="Celular"
            />
            {errores.celular ?<TextForm>{errores.celular}</TextForm> : null}

            <Input 
            name="edad"
            onChange={handleChange}
            onBlur={handleBlur}
            type="text"
            value={form.edad}
            placeholder={form.estado === "ParaMi" ? "Edad" : "Edad del niño(a)"}
            />
            {errores.edad ?<TextForm>{errores.edad}</TextForm> : null}

            <select value={form.select} name="select" onChange={handleChange}>
                <option value="">Horarios</option>
                <option value=""></option>
                <option value=""></option>
            </select>
            {errores.select ?<TextForm>{errores.select}</TextForm> : null}
            
            {loading ? <Loading /> : null}
            {response ===true ? <Check><p>¡Envío exitoso!</p></Check> : null}
            {response ===false ? <Check><p>¡Falló el envío!</p></Check> : null}
    
            <Input 
            className="ctaForm"
            type="submit"
            value="Separar mi Clase"
            />
            </Form>

        </FormBox>

    )
}

export default FormularioAcademia