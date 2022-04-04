import { useState } from "react";
import RequestF from "../../helpers/RequestApiRest";

const useForm = ( initial,validations, validationsSubmit )=>{

    const [form , setForm] = useState(initial)

    const [ loading, setLoading ] = useState(false)

    const [ errores, setErrores ] = useState({})

    const [ response, setResponse ] = useState(null)

    const handleChange = (e)=>{

        setForm({
            ...form,
            [e.target.name]: e.target.type === 'checkbox'
            ? e.target.checked 
            : e.target.value
        })

    }

    const handleBlur = ()=>{

        setErrores(validations(form))
    }

    const reset = ()=>{

        setForm(initial)
        setLoading(false)

    }
    // && Object.keys(validationsSubmit(form,x)).length === 0
    const handleSubmit = (e)=>{

        e.preventDefault()
        setErrores(validations(form))
        setErrores(validationsSubmit(form))
        console.log(form)
        console.log(errores)
       
        
        if( Object.keys(errores).length === 0 && Object.keys(validationsSubmit(form)).length === 0 ){

            setLoading(true)

            const { Post } = RequestF()

            Post('https://formsubmit.co/ajax/revolutiontenisdem@gmail.com', {
                body:form,
                headers:{
                    "Content-Type":"application/json",
                    Accept:"application/json"
                }
            } ).then((res)=>{
                console.log(res.state)
                if(res.state){
                    setLoading(false)
                    setResponse(true)
                    reset()
                    setTimeout(() => {
                        setResponse(null)
                    }, 1500);
                }else{
                    setLoading(false)
                    setResponse(false)
                    reset()
                    setTimeout(() => {
                        setResponse(null)
                    }, 1500);
                }
            })
        }else{
            console.log('NO SE ESTÁ CUMPLIENDO EL CONDICIONAL PARA EL SUBMIT')
            
        }
    }

    return({
        form,
        loading,
        errores,
        response,
        handleChange,
        handleSubmit,
        handleBlur,
        reset
    })

}

export default useForm