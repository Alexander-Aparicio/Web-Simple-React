import{ SectionPrecios, Mensualidades, TitleP } from "./PreciosComponents";

const Precios = ()=>{

    return(

        <SectionPrecios>

            <TitleP>Precios Mensuales De Academia</TitleP>

            <Mensualidades 
            price1={{name:"1 vez x semana",precio:"S./110.00"}}
            price2={{name:"2 veces x semana",precio:"S./150.00"}}
            price3={{name:"3 veces x semana", precio:"S./190.00"}}
            price4={{name:"4 veces x semana", precio:"S./230.00"}}
            />

        </SectionPrecios>

    )
}

export default Precios
