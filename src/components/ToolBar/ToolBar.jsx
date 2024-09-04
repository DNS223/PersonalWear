import { SketchPicker } from "react-color";
import styles from "./ToolBar.module.css"
import FormatPaintIcon from '@mui/icons-material/FormatPaint';
import state from "@/store"
import { useSnapshot } from "valtio";
import ImgDropArea from "../ImgDropArea/ImgDropArea";
import InputToolBar from "../inputToolBar/InputToolBar";
import ColorPicker from "../colorPicker/ColorPicker";
export default function ToolBar({setPositionX, setPositionY, setGrados}){
    
    
    return(
        <div className={styles.ToolBarContainer}>
            <div className={styles.ToolContainer}>
                <ColorPicker/>
            </div>
            <div className={styles.ToolContainer}>
                <ImgDropArea/>
            </div>

            <div className={styles.ToolContainer} style={{display:"flex", flexDirection:"column", height:"180px", justifyContent:"center"}}>
                <InputToolBar setPositionX={setPositionX} setPositionY={setPositionY} setGrados={setGrados}/>
            </div>
        </div>
    )
}