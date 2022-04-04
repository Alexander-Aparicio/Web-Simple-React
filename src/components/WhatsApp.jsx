import styled from "styled-components"

const Contact = styled.div`
    width:70px;
    position:fixed;
    bottom:24%;
    right:3%;
    z-index:991;
    @media (min-width:600px){
        display:none;
    }

    img{
        width:100%;
        filter: drop-shadow(0 0 0.55rem #000)
    }
`

const WhatsApp = ()=>{

    return(

        <div>

            <Contact>
                <a href="https://api.whatsapp.com/send?phone=51957731940" rel="nofollow noreferrer" target="_blank" >
                    <img src="/svg/whatsApp.svg" alt="Botón de whatsapp" />
                </a> 
            </Contact>

        </div>
    )

}

export  default WhatsApp