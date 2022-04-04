import { ContenidoCG, InformesCG, SectionClaseGratis, TitleCG } from "./ClaseDePruebaComponents"
import Formulario from "./formularios/ClaseDePruebaF"


const ClaseGratis = ()=>{

    return(
        <SectionClaseGratis>

            <InformesCG>

                <TitleCG>¿Estas en duda o no sabes si es para ti?</TitleCG>
                
                <ContenidoCG> 
                    Te invitamos a una clase sin compromiso de 
                    inscripción, si al finalizar sientes que es lo que búscabas 
                    te inscribes y si no es así no hay problema.
                    <br/> 
                    <br/> 
                    En Revolution nos interesa que estes motivado y 
                    feliz por formar parte de la academia.
                </ContenidoCG>

                <ContenidoCG>
                    <strong>¡No pierdas esta oportunidad!</strong>
                    <br/>Llena el formulario para separar tu clase de muestra. Un entrenador se comunicará para confirmar tu clase.
                </ContenidoCG>

            </InformesCG>

            <Formulario />

        </SectionClaseGratis> 
    )
}

export default ClaseGratis