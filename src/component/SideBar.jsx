import styles from "./SideBar.module.css"
import Logo from './Logo'
import { Outlet } from 'react-router-dom'
import AppNav from './AppNav'
function SideBar() {
  return (
    <div className={styles.sidebar}>
    
    <Logo/>
    <AppNav/>
    <Outlet/>
   
    <footer className={styles.footer}><span className={styles.copyright}></span>@copyright 2xDiallo {new Date().getFullYear()} </footer>
    </div>
  )
}

export default SideBar