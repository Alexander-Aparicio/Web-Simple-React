import Loading from "../../../helpers/Loader"
import useForm from "../../Hooks/HookFormulario"
import { Check, Form, FormBox, Input, TextForm, TitleForm } from "./FormComponents"
import { validations, validationsSubmit } from "./ValidateForm"


const initial = {
    estado:"MiHijo",
    nombre:"",
    dni:"",
    celular:"",
    edad:"",
    select:"",
}


const FormTalleres  = ()=>{

    const {form, handleChange, handleBlur, errores, handleSubmit, loading, response} = useForm(initial, validations, validationsSubmit)

    return(

        <FormBox>

            <Form onSubmit={handleSubmit} >

            <TitleForm><strong>Datos del apoderado</strong></TitleForm>
        
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

            <TextForm color={'#c83067'}><strong>Edad del menor</strong></TextForm>

            <Input 
            name="edad"
            onChange={handleChange}
            onBlur={handleBlur}
            type="text"
            value={form.edad}
            placeholder={"Edad del niño(a)"}
            />
            {errores.edadMenor ?<TextForm color={'red'}>{errores.edadMenor}</TextForm> : null}
            {form.estado ==="MiHijo" && form.edad && errores.edadF ?<TextForm color={'red'}>{errores.edadF}</TextForm> : null}
            <select value={form.select} name="select" onChange={handleChange}>
            <option value="">Horarios por edad</option>
                {form.edad && form.edad <= 10 ? (
                    <>
                    <option value="mie-vie: 9am-10am">Miércoles-Viernes: 09:00 am - 10:00 am</option>
                    <option value="mar-jue: 9am-10am">Martes-Jueves: 09:00 am - 10:00 am</option>
                    </>
                ): (form.edad && form.edad > 10 ?
                    <>
                    <option value="mie-vie: 9am-10am">Miércoles-Viernes: 10:30 am - 11:30 am</option>
                    <option value="mar-jue: 9am-10am">Miércoles-Viernes: 3:00 pm - 4:00 pm</option>
                    </>: null
                )}
            </select>
            {errores.select ?<TextForm color={'red'}>{errores.select}</TextForm> : null}
            
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

export default FormTalleres 