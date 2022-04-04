import { ContenidoCG, InformesCG, SectionClaseGratis, TitleCG } from "../components/Inicio/ClaseDePruebaComponents";
import Formulario from "../components/Inicio/formularios/ClaseDePruebaF";
import { Page } from "../helpers/Elementos";


const Landing = ()=>{

    return(
        <Page flex={'flex'} align={'center'} direction={'column'} position={'relative'}>
            
            <SectionClaseGratis>

            <InformesCG>

                <TitleCG>¡Regístrate para obtener tu clase gratis!</TitleCG>
                
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
                    <br/>Llena el formulario para separar tu clase de prueba y nos pondremos en contacto contigo.
                    <br/><br/>
                    ¡Nos vemos pronto!😀🏓
                </ContenidoCG>

                <div className="cardL">
                    <img src="/img/fondo/fondo-tenis.png" alt="fondo de academia" />
                </div>
                
            </InformesCG>

            <Formulario />

            </SectionClaseGratis> 

        </Page>
    )

}
export default Landing