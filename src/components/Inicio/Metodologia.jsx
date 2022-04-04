import Video from "../../helpers/Video"
import {SectionMetodologia, Box, TitleM, ContenidoM, ListaM, BoxVideo } from "./MetodologiaComponents"

const Metodologia = ()=>{

    return(

        <SectionMetodologia>

            <Box>
                <TitleM>Metodología</TitleM>

                <ContenidoM>
                    Las clases se realizan de la siguiente manera: 
                </ContenidoM>

                <ListaM>
                    <li>Calentamiento físico general, focalizado y dinámico..</li>
                    <li>Ejercicios de velocidad , reacción y coordinación.</li>
                    <li>Ejercicios en mesa para el desarrollo de la técnica.</li>
                    <li>Multibolas para corregir o fortalecer detalles técnicos.</li>
                    <li>Actividades lúdicas para fomentar la integración y la sana
                        competencia.</li>
                    <li>Juego de sets o partidos para poner en práctica lo aprendido.</li>
                    <li>Charla final de retroalimentación (Feedback).</li>
                </ListaM>
            </Box>
            {/* Utilizaré un video mp4 el link de you tube  es para no hacer más pesado el repositorio*/}
            <BoxVideo>
                <Video 
                url='/videos/Academia-tenis-de-mesa.mp4'
                width='100%'
                height='100%'
                myClass='reproductor'
                volumen={0.25}
                />
            </BoxVideo>

        </SectionMetodologia>

    )
}

export default Metodologia