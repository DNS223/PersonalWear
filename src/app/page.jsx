"use client"
import React, { useRef, useEffect, Suspense } from 'react';
import styles from "./page.module.css"
import Link from 'next/link';
import Header from '@/components/Header/Header';
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';
import { AnimatePresence } from 'framer-motion';
import CanvasModel from '@/components/canvas';

function App() {
  return (
    <>
      <Header inicio={true}/>

      <div className={styles.body}>
        <div className={styles.fstSection}>
          <div className={styles.infoFstContainer}>

            <p className={styles.Slogan}>Transformando <span>ropa</span>  en una  <span>expresión única</span>  y especial de <span>estilo.</span></p>
            <p className={styles.msjSlogan}>Personaliza tu prenda con stickers, elige tú color favorito, y recoge en tienda o !pídelo hasta tu hogar!</p>

            <div className={styles.bntsContainer}>
                <Link href="/edit" className={styles.btnComenzar}>Comenzar Ahora<ArrowRightAltOutlinedIcon/></Link>
            </div>

          </div>

          <div className={styles.ShirtContainer}>
            <p className={styles.txtMoveMe}><img src="./arrow.png" className={styles.arrow}/>Move Me!</p>
            <AnimatePresence>
            <CanvasModel positionX={0} positionY={0} grados={0}/>
            </AnimatePresence>
          </div>

          {/* <div className={styles.nextSectionBtnContainer}>
            <img src="./down-arrow.png" className={styles.nextSectionBtn} />
          </div> */}
        </div>
       
      </div>
    </>
  );
}

export default App;
