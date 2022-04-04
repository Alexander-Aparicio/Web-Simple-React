import { BoxArticle, Articulo, TitleMain, SubTitle, SubTitleInf, Listado,TextBlog } from "./MyStyledConventional"

const Reglamento = ()=>{

    return(

        <BoxArticle>

            <Articulo>

                <TitleMain>Reglamento del Tenis de mesa</TitleMain>

                <TextBlog>
                En esta sección conocerás el reglamento oficial de la 
                Federación Internacional de Tenis de Mesa (ITTF, por 
                sus siglas en inglés), para que empieces a jugar con 
                tus amigos o a participar en campeonatos en donde se 
                basan en las reglas oficiales del tenis de mesa.
                </TextBlog>

                <SubTitle>Reglas básicas</SubTitle>

                <TextBlog>
                Para comenzar debes saber sobre algunas definiciones 
                respecto al equipamiento y al juego.<br/><br/>
                
                <strong className='nodo'>Definiciones respecto al equipamiento:</strong>

                </TextBlog>

                <SubTitleInf>Superficie de Juego:</SubTitleInf>

                <Listado>
    
                    <li>La superficie de la mesa se le denomina superficie 
                        de juego.</li>

                    <li>La superficie de juego no incluye los laterales de 
                        la parte superior de la mesa.</li>

                    <li>Para dobles, cada campo está dividido en dos medios 
                        campos iguales por una línea central blanca y 
                        paralela a las líneas laterales.</li>

                    <li>Línea de fondo, es la línea que está en ambos extremos 
                        de la mesa y es paralela a la red. Esta línea se 
                        prolonga imaginariamente hacia la derecha e izquierda.</li>

                </Listado>

                <SubTitleInf>El conjunto de red:</SubTitleInf>

                <TextBlog>
                El conjunto de la red consiste en la red, su suspensión 
                y los soportes, incluyendo las fijaciones que lo sujetan 
                a la mesa.
                </TextBlog>
      
                <SubTitle>Definiciones respecto al juego:</SubTitle>

                <TextBlog>
                El objetivo principal de estas definiciones es el de explicar 
                el significado de los principales términos técnicos usados en 
                las reglas.
                </TextBlog>

                <SubTitleInf>Una jugada:</SubTitleInf>

                <TextBlog>
                Es el período durante el cual está en juego la pelota.
                La pelota está en juego desde el último momento en que 
                permanece inmóvil en la palma de la mano libre antes de 
                ser puesta en servicio intencionadamente hasta que la 
                jugada se decide como tanto o anulación.
                </TextBlog>

                <SubTitleInf>Una anulación:</SubTitleInf>

                <TextBlog>
                Es una jugada cuyo resultado no es anotado. Suele ocurrir 
                cuando una pelotita de otro encuentro ingresa al área de 
                juego, esto se da debido a que puede distraer a uno de los 
                jugadores para seguir la jugada.
                </TextBlog>

                <SubTitleInf>Un tanto, o punto:</SubTitleInf>

                <TextBlog>
                Es el resultado éxtitoso de una jugada que es anotado por el 
                árbitro en el marcador y contribuye al objetivo de lograr 
                los 11 puntos con una diferencia mínima de 2 puntos para ganar 
                un encuentro.
                </TextBlog>

                <SubTitleInf>La mano libre:</SubTitleInf>

                <TextBlog>
                Es la mano que no empuña la raqueta cuando se encuentra jugando, 
                el jugador puede cambiar de mano para ejecutar los golpes cuando 
                lo desee.
                </TextBlog>

                <SubTitleInf>Una obstrucción:</SubTitleInf>

                <TextBlog>
                Un jugador obstruye la pelota si él, o cualquier cosa que vista o lleve, 
                la toca en juego cuando está por encima de la superficie de juego o se 
                está dirigiendo hacia esta, no habiendo tocado su campo desde la última 
                vez que fue golpeada por su oponente.
                </TextBlog>

            </Articulo>

        </BoxArticle>

    )

}

export default Reglamento