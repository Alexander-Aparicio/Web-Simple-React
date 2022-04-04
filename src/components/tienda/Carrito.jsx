import { Cantidad, Costo, Delete, PorComprar, ProductoAComprar } from "./MyStyledComponents"

const MyCarrito = ({quantity, name, price, sacarDelCarrito, id})=>{

    return(

        <PorComprar>
            <Cantidad>{quantity}</Cantidad>
            <ProductoAComprar><p>{name}</p></ProductoAComprar>
            <Costo>{Number(price)*Number(quantity)} soles</Costo>
            <Delete onClick={()=> sacarDelCarrito(id)} padding={'5px 10px'}>-</Delete>
        </PorComprar>

    )
}

export default MyCarrito