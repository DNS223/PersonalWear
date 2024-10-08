import { useFrame } from "@react-three/fiber"
import { easing } from "maath"
import { useSnapshot } from "valtio"
import state from "@/store"
import { useRef, useState } from "react"

export default function CameraRig ({children}){
    const group = useRef()
    const snap = useSnapshot(state)
    const [isDragging, setIsDragging] = useState(false);
    const handlePointerDown = ()=>{
        setIsDragging(true)
    }
    const handlePointerUp = ()=>{
        setIsDragging(false)
    }
    useFrame((state, delta)=>{
        const isBreakpoint = window.innerWidth <= 1260
        const isMobile = window.innerWidth <=600

        let targetPosition = [0,0,2]

            if(isBreakpoint) targetPosition = [0, 0, 2]
            if(isMobile) targetPosition = [0, 0, 2.5]
        
        easing.damp3(state.camera.position, targetPosition, 0.25, delta)


       isDragging && easing.dampE(
            group.current.rotation,
            [state.pointer.y / 5, -state.pointer.x / 0.3, 0],
            0.25, delta
        )
    })
    
    return(
       <group ref={group}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
       >
        {children}
       </group>
    )
}