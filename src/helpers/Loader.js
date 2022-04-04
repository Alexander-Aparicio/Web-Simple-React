import styled,{keyframes} from "styled-components";

const Container = styled.div`
    position:absolute;
    top: ${props=>props.top ? props.top : 0};
    bottom:0;
    left:0;
    right:0;
    display: flex;
    justify-content:center;
    align-items:center;
    background-color: ${props=>props.fondo ? props.fondo : 'rgba(121, 182, 242, 0.2)'};
    border-radius:9px;
    z-index: 9999;
`

const loader = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`
const Loader = styled.div`
    display: inline-block;
    width: 80px;
    height: 80px;

    :after{
        content: " ";
        display: block;
        width: 64px;
        height: 64px;
        margin: 8px;
        border-radius: 50%;
        border: 6px solid #c83067;
        border-color: #c83067 transparent #1e1e1e transparent;
        animation: ${loader} 1.2s linear infinite;
    }
`

const Loading = ({...props})=>{

    return(

        <Container fondo={props.fondo} top={props.top}>

            <Loader></Loader>

        </Container>

    )

}

export default Loading