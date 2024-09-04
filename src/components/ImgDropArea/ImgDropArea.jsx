import { useRef, useState } from "react";
import styles from "./ImgDropArea.module.css"
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import state from "@/store"
import { useSnapshot } from "valtio";
export default function ImgDropArea (){
    const [file, setFile] = useState()
    const [dropOver, setDropOver] = useState(false)
    const inputRef = useRef(null)
    const snap = useSnapshot(state)
      const handleDragOver = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDropOver(true)
      };
      const handleDragLeave = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDropOver(false)
      };
      const selectFile = (e) =>{
        e.stopPropagation()
        inputRef.current && inputRef.current.click()
      }

      const handleFileChange = (e, input) => {
        setDropOver(false)
        let file
        if(input){
          file=e.target.files[0]
        }else{
          e.preventDefault()
          console.log(e.dataTransfer.items)
          const droppedFiles = e.dataTransfer.files;
          if (droppedFiles.length) {
            file = droppedFiles[0];
          }
        }
        
        if (file){
            const reader =  new FileReader()
            reader.readAsDataURL(file)
            reader.onloadend=() =>{
                state.logoDecal=reader.result
                state.fullDecal=reader.result
            }
        }
      
      };
    return(
        <div >

            <div className={!dropOver ? styles.ModalImg : styles.ModalImgOver} onClick={selectFile} onDrop={handleFileChange} onDragOver={handleDragOver} onDragLeave={handleDragLeave}>
              <InsertPhotoOutlinedIcon/>
              <p className={styles.txtModal}>Arrastra y suelta un archivo aquí, o haz clic para seleccionar uno.</p>
            </div>

          <input type="file" onChange={(e)=>handleFileChange(e, true)} ref={inputRef} onClick={(e) => e.stopPropagation()} style={{display:"none"}}/>
        </div>
    )
}