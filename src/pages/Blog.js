import BannerBlog from "../components/blog/Banner"
import ClasterMenu from "../components/blog/ClasterMenu"
import { Page } from "../helpers/Elementos"
import Loading from "../helpers/Loader"
import { useState } from "react"
import { BoxClaster } from "../components/blog/ClasterMenuComponents"

const Blog = ()=>{

    const [banner, setBanner] = useState(false)

    const handleLoader = ()=>{
        setTimeout(() => { setBanner(true) }, 450)
    }

    return(

        <Page>
            <BannerBlog />
            {handleLoader()}
            <BoxClaster>
                { !banner ? <Loading/> : null }
                { banner ? <ClasterMenu /> : null}
            </BoxClaster>
        </Page>

    )
}

export default Blog