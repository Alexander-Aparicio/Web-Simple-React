import { TYPES } from "../actions/actions";
import initialState from "../components/tienda/Data";


export const shoppingReducer = ( state, action )=>{

    switch (action.type) {
        case TYPES.ADD_TO_CART:{
            // creamos una varaible a la cual le damos el valor del objeto del producto que cumple con
            // que su id sea igual al valor de la propiedad payload de action
            let addProduct = state.products.find( (product)=> product.id === action.payload)

            // Ahora buscamos en el objeto carrito si existe un prudcuto con el id del objeto addProduct
            let productCart = state.carrito.find( (product) => product.id === addProduct.id)
            // Luego retornamos un objeto el cual contiene como uno de sus propiedades al arreglo carrito
            // para retornar el objeto agregando al carro el producto correctamente usamos un ternario
            // el cual verifica primero si ya existe el producto que queremos agregar en el carrito
            // si exite lo que se hace es aumentar la cantidad de este producto en el carrito
            // Si no existe se agrega en el carrito.
            return productCart ? {
                ...state,
                carrito: state.carrito.map((product) => product.id === addProduct.id ? {...product, quantity: product.quantity +1} : product)
            }  : {
                ...state,
                carrito: [...state.carrito, {...addProduct, quantity: 1}]
            }
        }
        case TYPES.REMOVE_FROM_CART:{

            let productToBeRemoved = state.carrito.find((product)=> product.id === action.payload)
    
            return productToBeRemoved.quantity > 1 ? {
                ...state,
                carrito: state.carrito.map((product)=> product.id === productToBeRemoved.id ? {...product, quantity: productToBeRemoved.quantity -1}: product)
            }: {
                ...state,
                carrito: state.carrito.filter((product)=> product.id !== action.payload)
            }

        }

        case TYPES.REMOVE_ALL_CART:{

            return {
                ...state,
                carrito: state.carrito.filter((product)=> product.id !== action.payload)
            } 
        }

        case TYPES.REMOVE_CART:
             return initialState

        default:
            return state;
    }

}