import styled from "styled-components"
import { Div, P, TitleH2, TitleH3 } from "../../helpers/Elementos"

const SectionProf = styled(Div)`
background-color: #f9f9f9;
padding-bottom:90px;
padding-top:15px;
border:solid 1px #51515130;
`

const TitleProf = styled(TitleH2)``

const BoxCard = styled(Div)`
justify-content:space-evelyn;
`

const CardProf = styled(Div)`
margin:10px;
position:relative;
padding:20px 0px;
background-color:#FDFDFD;
align-items: flex-start;
border-radius:7px;
box-shadow: 0 15px 25px rgb(0 0 0 / 20%);

max-width:85%;
@media (min-width:450px){
    max-width:400px;
};
@media (min-width:650px){
    width:380px;
    height:200px;
}
`
const Foto = styled.div`
width:50%;
border-radius:100%;
background-color:#F4F4F4;
@media (min-width:450px){
    max-width:100px; 
    margin:20px;
}
@media (min-width:650px){
    width:40%;
}
`

const Profesor = styled.img`
width:100%;
border-radius:100%;
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
@media (min-width:450px){
    
}
`

const DescriptionProf = styled(Div)`
padding:10px;
@media (min-width:450px){
    max-width:60%; 
}
@media (min-width:650px){
    max-width:60%; 
}
`

const NameProf = styled(P)`
font-size:1.4rem;
padding: 1% 0%;
text-align:center;
@media (min-width:450px){
    text-align:left;
}
`

const Especialidad = styled(TitleH3)`
font-size:1.6rem;
margin:1px 0px;
color:#1e1e1e;
padding:1.5% 6% 0% 6%;
@media (min-width:450px){
    padding-left:0px;
    text-align:left;
}
`

const SubTitle = styled(P)`
color:#0095D4;
font-weight: bold;
font-size:1.5rem;
padding: 1% 0%;
text-align:center;
@media (min-width:450px){
    text-align:left;
}
`

const Experiencia = styled.ul`
list-style: none;
font-family: 'Poppins',sans-serif;
padding:'1.5% 2%';
& li{
    font-size:1.3rem;
    color:#515151;
    text-align:center;
    @media (min-width:450px){
    text-align:left;
    }
}
`
const ShapeSup = styled.img`
position:absolute;
top:0;
left:0;
width:15%;
`

const ShapeInf = styled.img`
position:absolute;
bottom:-1.5px;
right:0;
width:17%;
`

const Nosotros = ()=>{

    return(

        <SectionProf>

            <TitleProf>Equipo Técnico</TitleProf>

            <BoxCard>

                <CardProf>
                    <Foto>
                        <Profesor src="/img/profes/Alexander-Meza.png" alt="Profesor Alexander" />
                    </Foto>
                    
                    <DescriptionProf>
                        <NameProf>Alexander Meza</NameProf>
                        <Especialidad>Entrenador ITTF N1</Especialidad>
                        
                        <SubTitle>Experiencia:</SubTitle>
                        <Experiencia>
                        <li>Colegio Claretiano</li>
                        <li>Programa social de la Asoc. Mónica Liyau</li>
                        </Experiencia>
                    </DescriptionProf>
                    <ShapeSup className="sup" src='/img/profes/Shape.svg' alt='mancha-adorno' />
                    <ShapeInf className="inf" src='/img/profes/shape2.svg' alt='mancha-adorno' />
                </CardProf>

                <CardProf>
                    <Foto>
                        <Profesor src="/img/profes/Joel-Larico.png" alt="Profesor Joel" />
                    </Foto>
                    
                    <DescriptionProf>
                        <NameProf>Joel Larico</NameProf>
                        <Especialidad>Árbitro ITTF</Especialidad>
                        
                        <SubTitle>Experiencia:</SubTitle>
                        <Experiencia>
                        <li>Oficial Técnico Panamericanos Lima 2019</li>
                        <li>Colegio Santa Margarita</li>
                        </Experiencia>
                    </DescriptionProf>
                    <ShapeSup className="sup" src='/img/profes/Shape.svg' alt='mancha-adorno' />
                    <ShapeInf className="inf" src='/img/profes/shape2.svg' alt='mancha-adorno' />
                </CardProf>

                <CardProf>
                    <Foto>
                        <Profesor src="/img/profes/Miguel-Novoa.png" alt="Profesor Miguel" />
                    </Foto>
                    
                    <DescriptionProf>
                        <NameProf>Miguel Novoa</NameProf>
                        <Especialidad>Entrenador FPTM</Especialidad>
                        
                        <SubTitle>Experiencia:</SubTitle>
                        <Experiencia>
                        <li>Colegio Altair</li>
                        <li>Programa social de la Asoc. Mónica Liyau </li>
                        </Experiencia>
                        <ShapeSup className="sup" src='/img/profes/Shape.svg' alt='mancha-adorno' />
                        <ShapeInf className="inf" src='/img/profes/shape2.svg' alt='mancha-adorno' />
                    </DescriptionProf>
                    
                </CardProf>

            </BoxCard>

        </SectionProf>

    )
}

export default Nosotros