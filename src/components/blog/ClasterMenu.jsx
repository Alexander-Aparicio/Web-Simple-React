import CardMenu,{ BoxBlog } from "./ClasterMenuComponents"
import { TitleMain } from "./MyStyledConventional"

const ClasterMenu = ()=>{

    return(

        <>
            <TitleMain>Artículos</TitleMain>
            <BoxBlog>
           
                <CardMenu
                paper={{
                    name:'Historia',
                    URLname:'/blog/historia-del-tenis-de-mesa',
                    img:'/img/gallery/historia.jpg'
                }}
                />

                <CardMenu 
                paper={{
                    name:'Reglamento',
                    URLname:'/blog/reglas-de-tenis-de-mesa',
                    img:'/img/gallery/reglas.jpg'
                }}
                />

                <CardMenu 
                paper={{
                    name:'Llegada del tenis de mesa a China',
                    URLname:'/blog/tenis-de-mesa-en-china',
                    img:'/img/gallery/china-tenis-de-mesa.jpg'
                }}
                />

                <CardMenu 
                paper={{
                    name:'La leyenda Sueca',
                    URLname:'/blog/la-leyenda-sueca',
                    img:'/img/gallery/jan-ove-waldner.jpg'
                }}
                />

                <CardMenu 
                paper={{
                    name:'Mejores Deportistas (En Desarrollo)',
                    URLname:'/blog/',
                    img:'/img/gallery/mima-ito.jpg'
                }}
                />

            </BoxBlog>
        </>
    )
}

export default ClasterMenu 