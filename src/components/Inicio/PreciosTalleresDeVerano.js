import{ SectionPrecios, Mensualidades, TitleP} from "./PreciosComponents";


const PreciosTalleresV = ()=>{

    return (
      <SectionPrecios>
        <TitleP>Precio de Talleres de Verano</TitleP>

        <Mensualidades
          price2={{
            name: "Pago único",
            precio: "S./250",
            clases: "Por dos meses",
            dto25: false,
            dto20: true,
            dto10: false,
            precioSinDto: "S./320",
          }}
          price1={{
            name: "Pago por mes",
            precio: "S./160.00",
            clases: "",
            dto20: false,
            dto25: false,
            dto10: false,
          }}
        />

        {/* <TitleP className="promo">Promo DUO: 10% y 20% dto</TitleP>
        <TextPrice color={"#fff"}>
          Accede a un <span>20%</span> y <span>25%</span> descuento
          inscribiendote junto a un familiar.
        </TextPrice>
        <Mensualidades
          price2={{
            name: "Pago Duo único",
            precio: "S./400",
            clases: "Por dos meses",
            dto25: false,
            dto10: false,
            dto20: true,
            precioSinDto: "S./500",
          }}
          price1={{
            name: "Pago Duo por mes",
            precio: "S./288.00",
            clases: "8 clases",
            dto20: false,
            dto25: false,
            dto10:true,
            precioSinDto: "S./320",
          }}
        /> */}
      </SectionPrecios>
    );
}

export default PreciosTalleresV
