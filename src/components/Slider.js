import SwiperCore,{ Navigation, Pagination,Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import 'swiper/swiper-bundle.min.css'; 
import { BoxMain, Slide1H, Slide2H, Slide3H, Slide4H } from './SliderComponents';
SwiperCore.use([Autoplay,Pagination,Navigation]);

const Slider =({delay, slide1, slide2, slide3, slide4}) => {

    return (
      
      <BoxMain>
          
        <Swiper spaceBetween={30} centeredSlides={true} autoplay={{
        "delay": delay,
        "disableOnInteraction": false
        }} pagination={{
        "clickable": true
        }} navigation={true} className="mySwiper">
    
        <SwiperSlide>
          <Slide1H slide1={slide1} />
        </SwiperSlide>
    
        <SwiperSlide>
          <Slide2H slide2={slide2} />
        </SwiperSlide>
    
        <SwiperSlide>
          <Slide3H slide3={slide3} />
        </SwiperSlide>
    
        <SwiperSlide>
          <Slide4H slide4={slide4} />
        </SwiperSlide>
    
        </Swiper>

      </BoxMain>
  
    );
};

export { Slider }