import { BoxT, ContenidoT, DayV, GalleryT, HorarioTalleresV, HorarioV, HoraV, LayerText, SectionTalleres, TitleT } from "./TalleresDeVeranoComponents"

const TalleresDeVerano = ()=>{

    return(

        <SectionTalleres>

            <BoxT>

                <TitleT className="talleresV">Talleres de Verano 2022</TitleT>

                <ContenidoT align="justify">
                    El niño desarrollará sus habilidades de concentración 
                    , coordinación y agilidad. Va adquirir habilidades básicas 
                    del tenis de mesa para el desarrollo de la técnica.
                </ContenidoT>

                <TitleT align="center" className="talleresV">Inicio 11 de enero</TitleT>

                <TitleT align="center" className="talleresV">Horario</TitleT>

                <HorarioTalleresV>

                <HorarioV className="h2"><DayV>Martes-Jueves</DayV>
                    <HoraV>
                        <strong></strong>10:30 am - 11:30 am<br /> 
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