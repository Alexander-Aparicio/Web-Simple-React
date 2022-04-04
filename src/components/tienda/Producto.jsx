import { CardProducto, Cta, Description, Model, Name, Price } from "./MyStyledComponents"


const Producto = ({img, name, price, ponerEnCarrito, id, mod, ...props})=>{

    return(

        <CardProducto>
            <img src={img} alt={name} />
            <figcaption>
                <Description>
                    <Name>{name}</Name>
                    <Price>{price} soles</Price>
                    <Model>{mod}</Model>
                    <Cta onClick={()=> ponerEnCarrito(id)}>Agregar a canasta</Cta>
                </Description>
            </figcaption>
        </CardProducto>

    )
}

export default Producto