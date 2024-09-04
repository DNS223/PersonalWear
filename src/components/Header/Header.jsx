import Link from "next/link"
import styles from "./Header.module.css"
export default function Header(){
    return(
    <div className={styles.Header}>
      <Link className={styles.Title} href="/">PersonalWear</Link>
      <div className={styles.linksContainer}>
      <Link href="/" className={styles.LinkLogin}>Ingresar</Link>
      <Link href="/" className={styles.LinkGetStarted}>Comenzar</Link>
      </div>
    </div>
    )
}