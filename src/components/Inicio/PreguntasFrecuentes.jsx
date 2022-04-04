import {SectionPreguntasF, TitlePF, BoxP, Pregunta, Respuesta} from "./PreguntasFComponents"


const PreguntasFrecuentes = ()=> {

    return(
        <SectionPreguntasF>

            <TitlePF>Preguntas Frecuentes</TitlePF>
            
            <BoxP>
                <Pregunta>¿En cuánto tiempo puedo aprender a jugar?</Pregunta>
                <Respuesta>
                    Sí te refieres a jugar lo puedes hacer 
                    desde el primer día ya que solo debes aprender 
                    las reglas, si te refieres a la técnica eso si te
                    tomará un tiempo dado que se requiere desarrollar
                    coordinación, agilidad y precisión en los movimientos.
                </Respuesta>
            </BoxP>

            <BoxP>
                <Pregunta>¿Participan de campeonatos?</Pregunta>
                <Respuesta>
                    Sí, aunque la academia recién nace en marzo del año 2019 
                    participamos del Open Aelu a fines del mismo año, luego 
                    de ello vino la pandemia, la academia suspendio clases,
                    y a fines del año 2021 reiniciamos las clases, por tal motivo 
                    volveremos a participar de torneos a partir del 2022. 
                </Respuesta>
            </BoxP>

            <BoxP>
                <Pregunta>¿Cuánto duran las clases?</Pregunta>
                <Respuesta>
                    Las clases de academia duran un mínimo de 1h 30 min, las 
                    clases de talleres de verano tienen una duración de 1h.
                </Respuesta>
            </BoxP>

            <BoxP>
                <Pregunta>¿Hay matrícula?</Pregunta>
                <Respuesta>
                    No hay una matrícula solo pagos mensuales que se hacen de manera adelantada.
                </Respuesta>
            </BoxP>

            <BoxP>
                <Pregunta>¿Cuánto se paga por recibir clases?</Pregunta>
                <Respuesta>
                    La academia tiene un costo mensual que depende de la frecuencia
                    semanal con cual asista.<br/>
                    1 vez x semana: S./110.00 <br/>
                    2 veces x semana: S./150.00 <br/>
                    3 veces x semana: S./190.00 <br/> 
                    4 veces x semana: S./230.00  
                </Respuesta>
            </BoxP>

            <BoxP>
                <Pregunta>¿Dan clases particulares?</Pregunta>
                <Respuesta>
                    Sí, ya sean a domicilio o en la misma academia. 
                    El costo por hora es de 40 soles y es partir de 
                    una hora y media.
                </Respuesta>
            </BoxP>

            <BoxP>
                <Pregunta>¿Hay descuentos por inscribirse en grupo?</Pregunta>
                <Respuesta>
                    Sí, tenemos un descuento de 10% para inscripciones de grupos de dos.
                </Respuesta>
            </BoxP>

            <BoxP>
                <Pregunta>¿Para que edades se da clase?</Pregunta>
                <Respuesta>
                    A partir de 7 años en adelante. Puede haber excepciones para niños
                    de 6 años esto depende de una evaluación en una clase de prueba en la academia.
                </Respuesta>
            </BoxP>

            <BoxP>
                <Pregunta>¿Hay edad límite para inscribirse?</Pregunta>
                <Respuesta>
                    No tenemos una edad límite, si se trata de personas 
                    de la tercera edad deben estar en buenas condiciones 
                    para movilizarse ya que la academia se encuentra en un 
                    tercer piso. 
                </Respuesta>
            </BoxP>

            <BoxP>
                <Pregunta>¿Con qué frecuencia inician las clases de academia?</Pregunta>
                <Respuesta>
                    Las clases son libres es decir puedes comenzar en cualquier 
                    momento, la enseñanza en la parte técnica es en función al nivel
                    de cada alumno y en la parte física solo se hace algunas diferencias
                    tomando en cuenta la edad. 
                </Respuesta>
            </BoxP>

        </SectionPreguntasF>
    )

}

export default PreguntasFrecuentes