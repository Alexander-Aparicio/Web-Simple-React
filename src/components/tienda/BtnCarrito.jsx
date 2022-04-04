import styled from "styled-components"

const Shopping = styled.div`
    width:55px;
    position:fixed;
    bottom:50%;
    right:6%;
    z-index:991;
    cursor:pointer;
    @media (min-width:600px){
        top:12vh;
        bottom:revert;
    }
    @media (min-width:1800px){
        right:10%;
    }
    img{
        width:100%;
        filter: drop-shadow(0 0 0.55rem #000)
    }
    figcaption{
        background-color:#c83067;
        color:#fff;
        font-size:1.5rem;
        width:30px;
        heigth:28px;
        border-radius:100%;
        display:flex;
        justify-content:center;
        align-items:center;
        margin:0px 0px 0px 20px;
    }
`

const BtnShopping = ({cantidad, on})=>{

    return(

        <div>
        
            <Shopping onClick={on}>
                <figcaption>{cantidad}</figcaption>
                <img src="/svg/shopping.svg" alt="Botón carrito" />
            </Shopping>
           
        </div>
    )
}

export  default BtnShopping