import { Swiper, SwiperSlide } from "swiper/react";
import {MySlide,ContenidoS, MainTitleS, Diapositiva} from '../../helpers/MySlide';
import { BannerBox } from './MyStyledConventional';
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"


// import Swiper core and required modules
import SwiperCore, {
  Autoplay,Pagination,Navigation
} from 'swiper';

// install Swiper modules
SwiperCore.use([Autoplay,Pagination,Navigation]);

const BannerBlog =()=>{

    return(

        <BannerBox>

            <Swiper spaceBetween={30} centeredSlides={true} autoplay={{"delay": 4500,"disableOnInteraction": false}} 
            pagination={{
            "clickable": true
            }} navigation={true} className="mySwiper">
        
                <SwiperSlide>
                    <MySlide 
                    imgSmall='/img/slides/fan-zhendong-m.jpg' 
                    imgBig='/img/slides/fan-zhendong.jpg'
                    alt='Academia Revolution'
                    height='360px'
                    >
                    <Diapositiva>

                    <MainTitleS>¡Jugadores Top del mundo!</MainTitleS>

                    <ContenidoS>
                        Los mejores tenimesistas del mundo.
                    </ContenidoS>

                    </Diapositiva>

                    </MySlide>
                </SwiperSlide>
            
                <SwiperSlide>
                    <MySlide 
                    imgSmall='/img/slides/tenimesistas-m.jpg' 
                    imgBig='/img/slides/tenimesistas.jpg'
                    alt='Academia Revolution'
                    height='360px'
                    >
                    <Diapositiva>

                    <MainTitleS>Academia de Tenis de mesa</MainTitleS>

                    <ContenidoS>
                        Concentración, coordinación, agilidad y velocidad.
                    </ContenidoS>

                    </Diapositiva>

                    </MySlide>
                </SwiperSlide>
            
                <SwiperSlide>
                    <MySlide 
                    imgSmall='/img/slides/historia-tenis-de-mesa-m.jpg' 
                    imgBig='/img/slides/historia-tenis-de-mesa.jpg'
                    alt='Academia Revolution'
                    height='360px'
                    >
                    <Diapositiva>

                    <MainTitleS>Historia del Tenis de mesa</MainTitleS>

                    <ContenidoS>
                        La creación de un juego y su evolución a deporte olimpico.
                    </ContenidoS>

                    </Diapositiva>

                    </MySlide>
                </SwiperSlide>
            
                <SwiperSlide>
                    <MySlide 
                    imgSmall='/img/slides/juez-de-tenis-de-mesa-m.jpg' 
                    imgBig='/img/slides/juez-de-tenis-de-mesa.jpg'
                    alt='Academia Revolution'
                    height='360px'
                    >
                    <Diapositiva>

                    <MainTitleS>Reglamento oficial</MainTitleS>

                    <ContenidoS>
                        Requisitos de los implementos, reglas para el servicio, amonestaciones y mucho más.
                    </ContenidoS>

                    </Diapositiva>

                    </MySlide>
                </SwiperSlide>
        
            </Swiper>

        </BannerBox>

    )
}

export default BannerBlog