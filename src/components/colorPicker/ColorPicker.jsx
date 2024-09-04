import state from "@/store"
import {  SketchPicker } from "react-color"
import { useSnapshot } from "valtio"
import styles from "./ColorPicker.module.css"
export default function (){
    const snap = useSnapshot(state)
    return(
        <SketchPicker
        color={snap.color}
        disableAlpha
        onChange={(color)=> state.color=color.hex}
        className={styles.ColorPicker}
        />
    )
}