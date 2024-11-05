import SideBar from "../component/SideBar";
import styles from "./AppLayout.module.css";
import Map from "../component/Map";
import User from "../component/User";
function AppLayout() {
  return (
    <div className={styles.app}>
      <User />
      <SideBar />
      <Map />
    </div>
  );
}

export default AppLayout;
