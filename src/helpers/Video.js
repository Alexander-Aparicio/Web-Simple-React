import ReactPlayer from "react-player";

const Video = ({url, width, height, myClass,volumen})=>{

    return(

        <ReactPlayer 
        url={url}
        width={width}
        height={height}
        className={myClass}
        controls  
        volume={volumen}      
        />
    )

}

export default Video