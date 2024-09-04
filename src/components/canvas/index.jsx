import { Canvas } from "@react-three/fiber"
import { Environment, Center } from "@react-three/drei"
import Shirt from "./Shirt"
import CameraRig from "./CameraRig"
import { useState } from "react"

export default function CanvasModel({positionX, positionY, grados}){
    const [grab, setGrab] = useState(false)
    return(
        <Canvas
        camera={{position:[0,0,0], fov:25}}
        style= {grab ? {height:"500px", width:"500px", cursor:"grabbing" } : {height:"500px", width:"500px", cursor:"grab" }}
        onMouseDown={()=>setGrab(true)}
        onMouseUp={()=>setGrab(false)}
        >
            <Environment preset="city" />
            <CameraRig>
                <Center >
                    <Shirt positionX={positionX} positionY={positionY} grados={grados}/>
                </Center>
            </CameraRig>
        </Canvas>
    )
}