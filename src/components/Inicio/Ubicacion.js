import styled from "styled-components";
import { Div, P, TitleH2 } from "../../helpers/Elementos";
import MyMap from "./GoogleMaps";

const BoxUbicacion = styled(Div)`
flex-direction:column;
padding-left:5%;
padding-right:5%;
background-size: cover;
padding-bottom:30px;
padding-top:30px;
border:solid 1px #51515130;
`
const TitleUb = styled(TitleH2)`
    margin-bottom:10px;
`
const RedesSociales = styled(Div)`
& .instagram{
    max-width:81px;
}
`
const LinkRedSocial = styled.a`
max-width:70px;
margin: 10px 30px;
`

const LogoRedSocial = styled.img`
width:100%;
`
const ContactoDirect = styled(Div)`
padding-top:20px;
flex-wrap:wrap;
justify-content: space-evelyn;
`

const Celular = styled(Div)`
width:auto;
`

const Direccion = styled(Div)`
width:auto;
`

const Icons = styled.img`
max-width:40px;
margin-bottom:14px;
margin-top:20px;
`

const TextUb = styled(P)`
text-align:center;
`

const Mapa = styled(Div)`
margin-top:30px;
border:solid 2px #51515120;
`

const Ubicacion = ()=>{

    return(

        <BoxUbicacion>

            <TitleUb>Contáctanos y visítanos</TitleUb>

            <RedesSociales>
                <LinkRedSocial href="https://www.facebook.com/tenisdemesa.rs/" rel="nofollow noreferrer" target="_blank"><LogoRedSocial src="/svg/facebook.svg" alt="icon-facebook" /></LinkRedSocial>
                <LinkRedSocial className="instagram" href="https://www.instagram.com/revolution_tenisdemesa/" rel="nofollow noreferrer" target="_blank"><LogoRedSocial src="/svg/instagram.svg" alt="icon-instagram" /></LinkRedSocial>
            </RedesSociales>

            <ContactoDirect>

                <Celular>
                    <Icons src="/svg/celular.svg" alt="icon-mobile" />
                    <TextUb>+51 957 731 940</TextUb>
                    <TextUb>+51 997 019 692</TextUb>
                </Celular>

                <Direccion>
                    <Icons src="/svg/ubicacion.svg" alt="icon-ubicacion" />
                    <TextUb>Calle 1 s/N, Urb. Antares - San Martin de Porres.</TextUb>
                </Direccion>
                <TextUb><strong>Referencia:</strong> A la espalda del colegio Monserrat de Gamarra a 1 cdra de la Av Universitaria cruce con Av. Angélica Gamarra. <br />
                <a href="https://maps.app.goo.gl/C2BFN" rel="nofollow noreferrer" target="_blank"> Ver en Google Maps</a>
                </TextUb>
            </ContactoDirect>

            <Mapa>
                <MyMap />                
            </Mapa>

        </BoxUbicacion>

    )

}

export default Ubicacion