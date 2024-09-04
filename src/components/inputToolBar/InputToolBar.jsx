import state from "@/store"
import { useSnapshot } from "valtio"
import styles from "./InputToolBar.module.css"
export default function InputToolBar ({setPositionX, setPositionY, setGrados}){
    const snap = useSnapshot(state)

    const establecerPositionX = (e, R)=>{
        const valNum = parseInt(e.target.value)
        console.log(valNum  )
        if(valNum>9){
                    setPositionX(`0.${e.target.value}`)
                }else{
                    setPositionX(`0.0${e.target.value}`)
                }
            if(valNum<0 && valNum>=-9){
                setPositionX(`-0.0${e.target.value *-1}`)
            }else if(valNum<-9){
                setPositionX(`-0.${e.target.value *-1}`)
            }
    }

    

    const establecerPositionY = (e)=>{
        const valNum = parseInt(e.target.value)
        if(valNum>9){
            setPositionY(`0.${e.target.value}`)
        }else{
            setPositionY(`0.0${e.target.value}`)
        }
        if(valNum<0 && valNum>=-9){
            setPositionY(`-0.0${e.target.value *-1}`)
        }else if(valNum<-9){
            setPositionY(`-0.${e.target.value *-1}`)
        }

    }
     const establecerGrados = (e)=>{
        setGrados(`${e.target.value * (Math.PI / 180)}`)
        
    }
    return(
        <div>
            <p style={{color:"white"}}> Posición de Imagen</p>
                <div style={{display:"flex", justifyContent:"space-between"}}>
                    <div style={{color:"white"}}>X: <input type="number"  onChange={(e)=>establecerPositionX(e,true)} className={styles.inputPosition} defaultValue={0} /></div>
                    <div style={{color:"white"}}>Y: <input type="number" onChange={establecerPositionY} className={styles.inputPosition} defaultValue={0}/></div>
                
                </div>

                <p style={{color:"white"}}> Rotación de Imagen</p>
                <div style={{display:"flex", justifyContent:"space-between"}}>
                <div style={{color:"white"}}>°: <input type="number"  onChange={establecerGrados} className={styles.inputPosition} defaultValue={0} /></div>
                
                </div>
        </div>
    )
}