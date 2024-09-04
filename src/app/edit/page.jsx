"use client"
import { useSnapshot } from "valtio"
import styles from "./Edit.module.css"
import { AnimatePresence, motion } from "framer-motion"
import { slideAnimation,
    fadeAnimation, 
    headTextAnimation, 
    headContentAnimation,
    headContainerAnimation  } from "@/config/motion"
import CanvasModel from "@/components/canvas"
import { SketchPicker } from "react-color"
import ToolBar from "@/components/ToolBar/ToolBar"
import { useState } from "react"
import Header from "@/components/Header/Header"



export default function Edit(){
    
    const [positionX, setPositionX] = useState(0)
    const [positionY, setPositionY] = useState(0)
    const [grados, setGrados] = useState(0)
    return(
        <div style={{position:"absolute",top:"100px", left:"0", display:"flex", justifyContent:"center", alignItems:"center", width:"100vw", height:"calc(100vh - 100px)"}}>
        <Header/>
        <AnimatePresence>
        <CanvasModel positionX={positionX} positionY={positionY} grados={grados}/>
        </AnimatePresence>
        
        

        {/* <input type="file" onChange={handleChangeFile}/> */}
        <ToolBar setPositionX={setPositionX} setPositionY={setPositionY} setGrados={setGrados}/>
        </div>
       
    )
}
