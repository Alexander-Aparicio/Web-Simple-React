import { Card, Contenido, Horario, InformesH, SectionHorarios, TitleH } from "./AcademiaComponents";

const Academia = () =>{

    return(
        <SectionHorarios>

            <InformesH>

            <TitleH>Academia</TitleH>

            <Contenido>
                Esta enfocado para niños, jovenes y adultos
                que deseen aprender a fondo la técnica de tenis 
                de mesa, lo cuál tiene como objetivo el desarrollo 
                deportivo para un nivel competitivo.<br/>
                La clase lo imparte uno o dos profesores dependiendo
                del número de alumnos y la diferencia de nivel que 
                exista entre ellos.
            </Contenido>

            <TitleH align={'left'}>Horarios:</TitleH>
            <Horario
                martes={"7:00 pm - 8:30 pm"}
                miercoles={"04:30 pm - 6:00 pm"}
                jueves={"7:00 pm - 8:30 pm"}
                viernes={"04:30 pm - 6:00 pm"}
                sabados={"3:00 pm - 4:30 pm  4:30 pm - 6:00 pm"}
                domingos={"10:00 am - 11:30 am"}
            />
            
            </InformesH>

            <Card imagen="/img/varias/revolution-Natalia.png" alt="Alumna-Natalia" />

        </SectionHorarios> 
    )
}

export default Academia