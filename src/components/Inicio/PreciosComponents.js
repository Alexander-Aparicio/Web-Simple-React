import styled from "styled-components";
import { Div, P, TitleH3 } from "../../helpers/Elementos";

const SectionPrecios = styled.section`
    width:100%;
    background-color:#1e1e1e;
    padding-bottom:50px;
    padding-top:50px;

    & .promo{
        margin-top: 20px;
    }
`
const Precios = styled(Div)`
    padding:10px;
    align-items:start;
`
const Box = styled.div`
    width:210px;
    background-color: #c83067;
    padding: 15px 15px;
    border-radius:7px;
    margin:10px 20px;
    position:relative;

    & img{
        position:absolute;
        top:-9px;
        right:-55px;
        width:95px;
    }
`
const Frecuencia = styled(P)`
    font-size:1.7rem;
    color: #f4f4f4;
    text-align:center;
`
const TitleP = styled(TitleH3)`
    align:center;
    padding:0px 6%;
    margin:0px 0px;
    color:#ffe014;
`
const TextPrice = styled(P)`
text-align:center;

& span{
    font-size:24px;
}
`

const Mensualidades = ({ 
price1,
price2,
price3,
price4,
price5
})=>{

    return(
        <Precios>

            { price1 ? (
                <Box>
                    {price1.dto25 ? <img src={'/img/varias/oferta2.png'} alt='oferta 25% dto' /> : null}
                    {price1.dto20 ? <img src={'/img/varias/oferta.png'} alt='oferta 20% dto' /> : null}
                    {price1.dto10 ? <img src={'/img/varias/oferta3.png'} alt='oferta 10% dto' /> : null}
                    <Frecuencia>{price1.name}</Frecuencia>
                    <TextPrice padding={'5px 0px'} size={'1.8rem'} align={'center'} color={'#FFF'}>{price1.clases}</TextPrice>
                    {price1.precioSinDto ? <TextPrice padding={'0px 0px'} className="priceSD" size={'1.5rem'} align={'center'} color={'#FFF'}>{price1.precioSinDto}</TextPrice> :null}
                    
                    <TextPrice  size={'1.8rem'} align={'center'} color={'#FFD151'}> <strong>{price1.precio}</strong> </TextPrice>
                </Box>
            ) : null }

            { price2 ? (
                <Box>
                    {price2.dto25 ? <img src={'/img/varias/oferta2.png'} alt='oferta 25% dto' /> : null}
                    {price2.dto20 ? <img src={'/img/varias/oferta.png'} alt='oferta 20% dto' /> : null}
                    {price2.dto10 ? <img src={'/img/varias/oferta3.png'} alt='oferta 10% dto' /> : null}
                    <Frecuencia>{price2.name}</Frecuencia>
                    <TextPrice padding={'5px 0px'} size={'1.8rem'} align={'center'} color={'#FFF'}>{price2.clases}</TextPrice>
                    {price2.precioSinDto ? <TextPrice padding={'0px 0px'} className="priceSD" size={'1.5rem'} align={'center'} color={'#FFF'}>{price2.precioSinDto}</TextPrice> :null}
                    
                    <TextPrice size={'1.8rem'} align={'center'} color={'#FFD151'}> <strong>{price2.precio}</strong> </TextPrice>
                </Box>
            ) : null }

            { price3 ? (
                <Box>
                    {price3.dto25 ? <img src={'/img/varias/oferta2.png'} alt='oferta 25% dto' /> : null}
                    {price3.dto20 ? <img src={'/img/varias/oferta.png'} alt='oferta 20% dto' /> : null}
                    {price3.dto10 ? <img src={'/img/varias/oferta3.png'} alt='oferta 10% dto' /> : null}
                    <Frecuencia>{price3.name}</Frecuencia>
                    <TextPrice padding={'5px 0px'} size={'1.8rem'} align={'center'} color={'#FFF'}>{price3.clases}</TextPrice>
                    {price3.precioSinDto ? <TextPrice padding={'0px 0px'} className="priceSD" size={'1.5rem'} align={'center'} color={'#FFF'}>{price3.precioSinDto}</TextPrice> :null}
                    
                    <TextPrice size={'1.8rem'} align={'center'} color={'#FFD151'}> <strong>{price3.precio}</strong> </TextPrice>
                </Box>
            ) : null }

            { price4 ? (
                <Box>
                    {price4.dto25 ? <img src={'/img/varias/oferta2.png'} alt='oferta 25% dto' /> : null}
                    {price4.dto20 ? <img src={'/img/varias/oferta.png'} alt='oferta 20% dto' /> : null}
                    {price4.dto10 ? <img src={'/img/varias/oferta3.png'} alt='oferta 10% dto' /> : null}
                    <Frecuencia>{price4.name}</Frecuencia>
                    <TextPrice padding={'5px 0px'} size={'1.8rem'} align={'center'} color={'#FFF'}>{price4.clases}</TextPrice>
                    {price4.precioSinDto ? <TextPrice padding={'0px 0px'} className="priceSD" size={'1.5rem'} align={'center'} color={'#FFF'}>{price4.precioSinDto}</TextPrice> :null}
                    
                    <TextPrice  size={'1.8rem'} align={'center'} color={'#FFD151'}> <strong>{price4.precio}</strong> </TextPrice>
                </Box>
            ) : null }

            { price5 ? (
                <Box>
                    {price5.dto25 ? <img src={'/img/varias/oferta2.png'} alt='oferta 25% dto' /> : null}
                    {price5.dto20 ? <img src={'/img/varias/oferta.png'} alt='oferta 20% dto' /> : null}
                    {price5.dto10 ? <img src={'/img/varias/oferta3.png'} alt='oferta 10% dto' /> : null}
                    <Frecuencia>{price5.name}</Frecuencia>
                    <TextPrice padding={'5px 0px'} size={'1.8rem'} align={'center'} color={'#FFF'}>{price5.clases}</TextPrice>
                    {price5.precioSinDto ? <TextPrice padding={'0px 0px'} className="priceSD" size={'1.5rem'} align={'center'} color={'#FFF'}>{price5.precioSinDto}</TextPrice> :null}
                    <TextPrice  size={'1.8rem'} align={'center'} color={'#FFD151'}> <strong>{price5.precio}</strong> </TextPrice>
                </Box>
            ) : null }

        </Precios>
    )
}


export { TitleP, Mensualidades, SectionPrecios, Box, Frecuencia, Precios, TextPrice }