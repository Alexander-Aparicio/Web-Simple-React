import Loading from "../../../helpers/Loader"
import useForm from "../../Hooks/HookFormulario"
import { Check, Checkbox, Form, FormBox, Input, Label, TextForm, TipoInscripcion, TitleForm } from "./FormComponents"
import { validations, validationsSubmit } from "./ValidateForm"
import { useState,useEffect } from "react"

const initial = {
    estado:"ParaMi",
    nombre:"",
    dni:"",
    celular:"",
    edad:"",
    select:"",
    check1:false,
    check2:false,
    check3:false,
    check4:false,
}

const FormAcademia  = ()=>{

    const [horarios, setHorarios] = useState(0)

    const {form, handleChange, handleBlur, errores, handleSubmit, loading, response} = useForm(initial, validations, validationsSubmit)

    useEffect(()=>{

        const horario = [form.check1, form.check2, form.check3, form.check4]
        const Elegidos = []
        horario.forEach((el)=>{

            if(el === true){

                Elegidos.push(el)

            }
        })

        setHorarios(Elegidos.length)

    },[form.check1, form.check2, form.check3, form.check4])

    return(

        <FormBox>

            <Form onSubmit={handleSubmit} >

            <TitleForm><strong>¿Para quién serán las clases?</strong></TitleForm>
        
            <TipoInscripcion>
            <Input 
            className="radios"
            label="Adulto"
            type="radio"
            value="ParaMi"
            onChange={handleChange}
            name="estado"
            checked={form.estado === "ParaMi"}
            onBlur={handleBlur}
            />
            
            <Input 
            className="radios"
            label="Menor"
            type="radio"
            value="MiHijo"
            onChange={handleChange}
            name="estado"
            checked={form.estado === "MiHijo"}
            onBlur={handleBlur}
            />
            </TipoInscripcion>

            <TextForm size={"1.8rem"} color={"#c83067"} padding={"0px"}>
                <strong>{form.estado === "ParaMi" ? "Datos del adulto" : "Datos del apoderado"}</strong> 
            </TextForm>

            <Input 
            name="nombre"
            onChange={handleChange}
            onBlur={handleBlur}
            type="text"
            value={form.nombre}
            placeholder="Nombre"
            />
            {errores.nombre ?<TextForm color={'red'}>{errores.nombre}</TextForm> : null}
            
            <Input 
            name="dni"
            onChange={handleChange}
            onBlur={handleBlur}
            type="text"
            value={form.dni}
            placeholder="DNI"
            />
            {errores.dni ?<TextForm color={'red'}>{errores.dni}</TextForm> : null}

            <Input 
            name="celular"
            onChange={handleChange}
            onBlur={handleBlur}
            type="text"
            value={form.celular}
            placeholder="Celular"
            />
            {errores.celular ?<TextForm color={'red'}>{errores.celular}</TextForm> : null}

            <Input 
            name="edad"
            onChange={handleChange} color={'red'}
            onBlur={handleBlur}
            type="text"
            value={form.edad}
            placeholder={form.estado === "ParaMi" ? "Edad" : "Edad del niño(a)"}
            />
            {form.estado ==="ParaMi" && form.edad && errores.edadMayor ?<TextForm color={'red'}>{errores.edadMayor}</TextForm> : null}
            {form.estado ==="MiHijo" && form.edad && errores.edadMenor ?<TextForm color={'red'}>{errores.edadMenor}</TextForm> : null}
            {form.estado ==="MiHijo"| form.estado ==="ParaMi" && form.edad && errores.edadF ?<TextForm color={'red'}>{errores.edadF}</TextForm> : null}

            <select value={form.select} name="select" onChange={handleChange} onBlur={handleBlur}>
                <option value="">Frecuencia semanal</option>
                <option value='1'>Una vez por semana</option>
                <option value='2'>Dos veces por semana</option>
                <option value='3'>Tres veces por semana</option>
                <option value='4'>Cuatro veces por semana</option>
            </select>
            {errores.select ?<TextForm color={'red'}>{errores.select}</TextForm> : null}
            
            {form.select !== "" ? (
             <>
             {horarios>form.select ? <TextForm color={'red'}>Está marcando demasiados horarios</TextForm>: ( horarios === Number(form.select) ?<TextForm color={'#007aff'}><strong>Listo!</strong></TextForm> : <TextForm color={'#007aff'}><strong>Elija sus horarios</strong></TextForm>) }
             <Label>
                 <Checkbox onBlur={handleBlur} type={'checkbox'} onChange={handleChange} checked={form.check1} name='check1' /> Miércoles 5:00pm - 6:30pm
             </Label>
          
             <Label>
                 <Checkbox  onBlur={handleBlur} type={'checkbox'} onChange={handleChange} checked={form.check2} name='check2' /> Viernes 5:00pm - 6:30pm
             </Label>
        
             <Label>
                 <Checkbox onBlur={handleBlur} type={'checkbox'} onChange={handleChange} checked={form.check3} name='check3' /> Sábados 3:00pm - 4:30pm
             </Label>
    
             <Label>
                 <Checkbox type={'checkbox'} onChange={handleChange} checked={form.check4} name='check4' /> Domingos 11:00am - 12:30pm
             </Label>
            </>

            ): null}


            {errores.check ?<TextForm>{errores.check}</TextForm>: null}
            
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

export default FormAcademia 