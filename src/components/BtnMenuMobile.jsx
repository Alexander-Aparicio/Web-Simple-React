import styled from "styled-components"
import {useState} from "react"
import MobileNav from "./MobileNav"

const Hamburger = styled.div`
    width:50px;
    position:fixed;
    top:1%;
    right:3%;
    z-index:9999991;
    @media (min-width:600px){
        display:none;
    }

    img{
        width:100%;
        filter: drop-shadow(0 0 0.75rem #000)
    };
`

const MenuMobile = ()=>{

    const [openMenu, setOpenMenu] = useState(false)

    const handleMenu = ()=>{

        setOpenMenu(!openMenu)
      
    }

    return(

        <div>

            <Hamburger onClick={ handleMenu }>
                { openMenu === false 
                    ? <img className="open" src="/svg/open.svg" alt="Botón de menú" />
                    : <img className="close" src="/svg/close.svg" alt="Botón de menú" />
                }  
            </Hamburger>

            <MobileNav visible={openMenu} handleMenu={handleMenu}/>

        </div>
    )

}

export  default MenuMobile