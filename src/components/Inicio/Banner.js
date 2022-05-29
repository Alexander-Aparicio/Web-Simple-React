import { Swiper, SwiperSlide } from "swiper/react";
import { MainBox,CtaButton, BoxCta, MySlide, MainTitleD, ContenidoD, Diapositiva} from './BannerComponents';
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"


// import Swiper core and required modules
import SwiperCore, {
  Autoplay,Pagination,Navigation
} from 'swiper';

// install Swiper modules
SwiperCore.use([Autoplay,Pagination,Navigation]);


const Banner = ()=>{
    
    return(

        <MainBox>
            
            <Swiper spaceBetween={30} centeredSlides={true} autoplay={{"delay": 4500,"disableOnInteraction": false}} 
            pagination={{
            "clickable": true
            }} navigation={true} className="mySwiper">
        
            <SwiperSlide>
                <MySlide 
                imgSmall='/img/slides/academia-revolution-sport-rs.jpg' 
                imgBig='/img/slides/academia-revolution.jpg'
                alt='Academia Revolution'>

                    <Diapositiva>

                        <MainTitleD>Academia de Tenis de mesa</MainTitleD>

                        <ContenidoD>
                            Desarrolla tu concentración, coordinación y agilidad.
                        </ContenidoD>

                    </Diapositiva>

                </MySlide>
            </SwiperSlide>
        
            <SwiperSlide>
                <MySlide  
                imgSmall='/img/slides/golpe-de-reves-girl-rs.jpg' 
                imgBig='/img/slides/golpe-de-reves.jpg'
                alt='Golpre de revés'>

                    <Diapositiva>

                        <MainTitleD>¡Horarios nocturnos!</MainTitleD>

                        <ContenidoD>
                            Martes y jueves de 7:00 pm a 8:30 pm.
                        </ContenidoD>

                    </Diapositiva>

                </MySlide>
            </SwiperSlide>
        
            <SwiperSlide>
                <MySlide    
                imgSmall='/img/slides/Casio-tenimesista-rs.jpg' 
                imgBig='/img/slides/Casio.jpg'
                alt='Alumno Casio'>

                    <Diapositiva>

                        <MainTitleD>¿Estas en duda si es para ti?</MainTitleD>

                        <ContenidoD>
                        Te invitamos a una clase sin compromiso de inscripción.
                        </ContenidoD>

                    </Diapositiva>

                </MySlide>
            </SwiperSlide>
        
            <SwiperSlide>
                <MySlide   
                imgSmall='/img/slides/torneo-tenis-de-mesa-rs.jpg' 
                imgBig='/img/slides/torneo.jpg'
                alt='Mini torneos'>

                    <Diapositiva>

                        <MainTitleD>¡Promociones: 10% y 20% dto!</MainTitleD>

                        <ContenidoD>
                            Inscribete junto a un amigo o familiar y ahorra un 10% y 20%.<br/>
                        </ContenidoD>

                    </Diapositiva>

                </MySlide>
            </SwiperSlide>
        
            </Swiper>

            <BoxCta>
                <CtaButton onClick={()=> window.scrollTo(0,650)} >
                    <span /><span />
                    <span /><span />
                    Más Info
                </CtaButton>
            </BoxCta>
            
        </MainBox>
    )
}

export default Banner