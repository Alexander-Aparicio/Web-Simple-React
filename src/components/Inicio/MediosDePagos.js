import { SectionMediosPago, TitleM, Bcp, Interbank, Yape, ShapeSup, ShapeInf } from "./MediosDePagosComponents"

const MediosDePago = ()=>{

    return(

        <SectionMediosPago>

            <TitleM >Medios de pago</TitleM>

            <Bcp 
            cb='N° de cuenta: 194 97343462 0 27'
            ci='CI: 002-19419734346202791'
            logo='/svg/bcp.svg'
            alt='logo-bcp'
            />

            <Interbank 
            cb='N° de cuenta: 898 3263828153'
            ci='CI: 003-898-013263828153-46'
            logo='/svg/interbank.svg'
            alt='logo-interbank'
            />

            <Yape 
            cb='Número: +51 957 731 940'
            ci='Titular: Joel Moises Larico P.'
            logo='/img/logos/yape.png'
            alt='logo-yape'
            />

            <ShapeSup className="sup" src='/img/profes/Shape.svg' alt='mancha-adorno' />
            <ShapeInf className="inf" src='/img/profes/shape2.svg' alt='mancha-adorno' />

        </SectionMediosPago>

    )
}

export default MediosDePago