import { useReducer } from "react";
import { TYPES } from "../../actions/actions";
import { shoppingReducer } from "../../reducers/shoppingReducer";
import BtnShopping from "./BtnCarrito";
import MyCarrito from "./Carrito";
import initialState from "./Data";
import { BoxProductos, Buttons, Carrito, Cerrar, Costo, CostoTotal, Cta, Delete, Name } from "./MyStyledComponents";
import Producto from "./Producto";
import { useState } from "react";


const Productos =()=>{

    const [state, dispatch] = useReducer(shoppingReducer, initialState)

    const {products, carrito} = state

    const [carritoActivo, setCarritoActivo] = useState(false)

    const ponerEnCarrito = (id)=>{

        dispatch({type: TYPES.ADD_TO_CART, payload: id})
    }

    const sacarDelCarrito = (id, all=false)=>{
        if(all){
            dispatch({type: TYPES.REMOVE_ALL_CART, payload: id})
        }else{
            dispatch({type: TYPES.REMOVE_FROM_CART, payload: id})
        }
        
    }

    const eliminarCarrito = ()=>{

        dispatch({type: TYPES.REMOVE_CART})
    }

    const Total = (array)=>{
        
        let total = 0
        array.forEach((el)=>{

            total= total+ Number(`${el.price* el.quantity}`) 
            
        })

        return total
    }

    const Pedido = ()=>{
        let pedido = ''

        let lista = carrito.map((producto) => producto.name + ' '+ producto.quantity)

        pedido = `Deseo comprar: ${lista.join(',')}`

        return pedido

    }

    const CantidadProductos = ()=>{

        let cantidad = 0

        carrito.forEach((producto) => {
            cantidad= cantidad+ Number(`${producto.quantity}`)
        })

        return cantidad
    }

    const onCarrito = ()=>{
        setCarritoActivo(true)
    }

    const offCarrito = ()=>{
        setCarritoActivo(false)
    }


    const url = `https://api.whatsapp.com/send?phone=51957731940&text=${Pedido()}`

    return(
        <>
            <BtnShopping cantidad={CantidadProductos()} on={onCarrito}/>
            <BoxProductos>

                {products.map((producto, index) =>( 
                <Producto 
                    key={index} 
                    img={producto.img} 
                    name={producto.name} 
                    price={producto.price} 
                    ponerEnCarrito={ ponerEnCarrito} 
                    mod={producto.mod}
                    id={producto.id}/>
                ))}

            </BoxProductos> 

            { carritoActivo ? (

                <Carrito id='carrito'>
                    <Cerrar onClick={()=> offCarrito()}>cerrar</Cerrar>
                    {carrito.map((producto, index) => (
                    <MyCarrito key={index} 
                        name={producto.name} 
                        price={producto.price} 
                        sacarDelCarrito={ sacarDelCarrito } 
                        quantity={producto.quantity} 
                        id={producto.id} 
                    />
                    ))}

                    <CostoTotal>
                        <Name>Total</Name>
                        <Costo>{Total(carrito)} soles</Costo>
                    </CostoTotal>

                    <Buttons>
                        <a 
                        href={url} 
                        rel="nofollow noreferrer" 
                        target='_blank'>
                            <Cta>Comprar por whatsApp</Cta>
                        </a>
                        
                        <Delete onClick={()=>eliminarCarrito()} top={'20px'}>Borrar Lista</Delete>
                    </Buttons>

                </Carrito>

            ) : null }

        </>

    )
}

export default Productos
