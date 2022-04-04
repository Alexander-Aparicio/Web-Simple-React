import { Horario } from "../components/Inicio/HorariosComponents";
import MediosDePago from "../components/Inicio/MediosDePagos";
import { TextTienda, TitleTienda } from "../components/tienda/MyStyledComponents";
import Productos from "../components/tienda/Productos";
import { Page } from "../helpers/Elementos";

const Tienda = ()=>{

    return(
        <Page flex={'flex'} align={'center'} direction={'column'} position={'relative'}>
            
            <TitleTienda>Productos</TitleTienda>

            <Productos />

            <TitleTienda align='left' margin='25px 0px 0px 0px' padding='1.5% 6% 0% 6%'>NOTA:</TitleTienda>

            <TextTienda>
                Por el momento solo se puede comprar vía YAPE y transferencia bancaria
                , para ello primero comunícate por whatsapp o también puedes venir a la academia 
                para realizar la compra en los horarios siguientes.
            </TextTienda>

            <Horario 
            miercoles="4:30 pm - 6:00 pm"
            viernes="4:30 pm - 6:00 pm"
            sabados="11:30 pm - 4:30 pm"
            domingos="11:00 am - 12:30 pm"
            content="center"
            />

            <MediosDePago />

        </Page>
    )

}
export default Tienda