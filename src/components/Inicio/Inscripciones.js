import { useState } from "react";
import { TitleI, Proceso, SectionInscripciones, InformesI, InscriptionBox, Servicio, Servicio2 } from "./InscripcionesComponents"
import FormTalleres from "./formularios/FormTalleres";
import FormAcademia from "./formularios/FormAcademia";

const Inscripciones = ()=>{

    const [servicio , setServicio]= useState('talleres')

    return(
        <SectionInscripciones>

            <Proceso>

                <TitleI>Proceso de Inscripción</TitleI>

                <InformesI >
                Una vez tengas la seguridad de que quieres inscribirte:<br/>
                <br/>
                <strong>1.-</strong> Llena el formulario de inscripción.<br/>
                <br/>
                <strong>2.-</strong> Espera un máx de 6h a que uno de los entrenadores 
                se comunique contigo confirmandote que hay vacante para el horario que solicitas.
                Si deseas acelerar el proceso puedes comunicarte al <strong><a href="https://api.whatsapp.com/send?phone=51957731940" rel="nofollow noreferrer" target="_blank">whatsApp 957731940</a></strong> mencionando
                que llenaste el formulario y deseas tener la confirmación del horario que solicitas.<br/>
                <br/>
                <strong>3.-</strong> Teniendo la confirmación de tu horario realiza el pago y tómale
                una foto al comprobante. Luego de hacer el pagó comunícate con el entrenador que confirmo 
                tu horario, envíale la foto  y listo estás inscrito se te enviará tu recibo de pago.
                </InformesI>

            </Proceso>

            <InscriptionBox>
                <Servicio onClick={()=> setServicio('academia')} background={servicio}>Academia</Servicio>
                <Servicio2 onClick={()=> setServicio('talleres')} background={servicio}>Talleres de Verano</Servicio2>
                { servicio === 'talleres' ? <FormTalleres /> : <FormAcademia/> }
        
            </InscriptionBox>
            
            
        </SectionInscripciones>
    )
}

export default Inscripciones