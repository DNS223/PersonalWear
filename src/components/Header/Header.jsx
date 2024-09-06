import Link from "next/link"
import styles from "./Header.module.css"
export default function Header({inicio}){
    return(
    <div className={styles.Header}>
      <Link className={styles.Title} href="/">PersonalWear</Link>
    </div>
    )
}