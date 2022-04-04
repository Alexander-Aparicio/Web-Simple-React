import{ SectionPrecios, Mensualidades, TitleP, TextPrice } from "./PreciosComponents";


const PreciosTalleresV = ()=>{

    return(

        <SectionPrecios>
            <TitleP>Precio de Talleres de Verano</TitleP>

            <Mensualidades 
            price2={{name:"Pago único",precio:"S./225", clases:"16 clases", dto25:false, dto20:false, dto10:true, precioSinDto:"S./250"}}
            price1={{name:"Pago por mes",precio:"S./125.00", clases:"8 clases", dto20:false, dto25:false, dto10:false}}
            />

            <TitleP className='promo'>Promo DUO: 20% y 25% dto</TitleP>
            <TextPrice color={'#fff'}>Accede a un <span>20%</span> y <span>25%</span> descuento inscribiendote junto a un amigo o familiar.</TextPrice>
            <Mensualidades 
            price2={{name:"Pago Duo único",precio:"S./375", clases:"16 clases", dto25:true, dto20:false, precioSinDto:"S./500"}}
            price1={{name:"Pago Duo por mes",precio:"S./200.00", clases:"8 clases", dto20:true, dto25:false, precioSinDto:"S./250"}}
            />

        </SectionPrecios>

    )
}

export default PreciosTalleresV
