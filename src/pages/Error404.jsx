import { MsjError, Title404 } from "../components/Error404/stylesError404"
import { Page } from "../helpers/Elementos"

const Error404 = ()=>{
    
    return(
        <Page>
            <Title404>ERROR 404</Title404>
            <MsjError>
                No se halló contenido en esta dirección
                de URL, intententa revisar nuestro menú
                para encontrar lo que buscas.
            </MsjError>
        </Page>
    )

}

export default Error404