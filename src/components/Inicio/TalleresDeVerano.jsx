import { BoxT, ContenidoT, DayV, GalleryT, HorarioTalleresV, HorarioV, HoraV, LayerText, SectionTalleres, TitleT } from "./TalleresDeVeranoComponents"

const TalleresDeVerano = ()=>{

    return(

        <SectionTalleres>

            <BoxT>

                <TitleT className="talleresV">Talleres de Verano 2023</TitleT>

                <ContenidoT align="justify">
                    Orientado a niños y adolescentes, se desarrollará la concentración, coordinación y agilidad. Va adquirir habilidades básicas para desarrollar la técnica del tenis de mesa. Es perfecto para los que por primera vez recibiran clases por un entrenador de la disciplina.
                </ContenidoT>

                <TitleT align="center" className="talleresV">Inicio 04 de enero</TitleT>

                {/* <TitleT align="center" className="talleresV">Horario</TitleT> */}

                <HorarioTalleresV>

                <HorarioV className="h2" type={'500px'}><DayV>Lunes - Miércoles - Viernes</DayV>
                    <HoraV>
                        <strong></strong>9:00 am - 10:00 am<br />10:15 am - 11:15 am 
                    </HoraV>
                </HorarioV>
                    
                </HorarioTalleresV>

            </BoxT>

            <GalleryT>
                <LayerText></LayerText>
                <figure> <img src="img/gallery/clase-taller-de-verano.jpg" alt="clase-taller-de-verano" /></figure>
                <figure> <img src="img/gallery/clase-taller-de-verano-resistencia-fisica.jpg" alt="clase-taller-de-verano-resistencia-fisica" /></figure>
                <figure> <img src="img/gallery/carrusel-taller-de-verano-tenis-de-mesa.jpg" alt="carrusel-taller-de-verano-tenis-de-mesa" /></figure>
                <figure> <img src="img/gallery/foto-grupal-clausura-taller-de-verano-tenis-de-mesa.jpg" alt="foto-grupal-clausura-taller-de-verano-tenis-de-mesa" /></figure>
                <figure> <img src="img/gallery/talleres-de-verano-torneo-de-clausura.jpg" alt="talleres-de-verano-torneo-de-clausura" /></figure>
                <figure> <img src="img/gallery/foto-grupal-clausura-entrega-de-diplomas.jpg" alt="foto-grupal-clausura-entrega-de-diplomas" /></figure>
            </GalleryT>

        </SectionTalleres>

    )

}

export default TalleresDeVerano