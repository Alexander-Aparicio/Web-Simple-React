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


const Formulario = ()=>{

    const {form, handleChange, handleBlur, errores, handleSubmit, loading, response} = useForm(initial, validations, validationsSubmit)

    return(

        <FormBox width={'50%'}>

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
            {form.estado ==="ParaMi" && form.edad && errores.edadMayor ?<TextForm color={'red'}>{errores.edadMayor}</TextForm> : null}
            {form.estado ==="MiHijo" && form.edad && errores.edadMenor ?<TextForm color={'red'}>{errores.edadMenor}</TextForm> : null}
            {form.estado ==="MiHijo"| form.estado ==="ParaMi" && form.edad && errores.edadF ?<TextForm color={'red'}>{errores.edadF}</TextForm> : null}

            <select value={form.select} name="select" onChange={handleChange} onBlur={handleBlur}>
                <option value="">Horarios</option>
                <option value="Domingo">Domingo de 11:00am a 12:30pm</option>
                <option value="Sábado">Sábado de 3:00pm a 4:30pm</option>
                <option value="Viernes">Viernes de 4:30pm a 6:00pm</option>
                <option value="Miércoles">Miércoles de 4:30pm a 6:00pm</option>
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

export default Formulario