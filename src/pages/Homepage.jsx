 import PageNav from "../component/PageNav";
import styles from "./Homepage.module.css";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { useState } from "react";


///this functionality is Not fully implemented yet ....

export default function Homepage() {
  const { t, i18n } = useTranslation()
// const [isLangEnglish,setisLangEnglish] = useState(true)
// const [currLang,setCurrLang] = useState('en')

  return (
    <main className={styles.homepage}>
      <PageNav/>
      <section>
        <h1>
          {t("title")}
          <br />
          {t("subTitle")}
        </h1>
        <h2>
          {t("welcome")}
          
        </h2>
        <Link to={"/login"} className="cta">{t("title")}</Link>
      </section>
<button style={{

     backgroundColor: '#4CAF50',      
     color: 'white',                  
     padding: '5px 21px',            
     fontSize: '16px',                
     border: 'none',                  
     borderRadius: '5px',             
     cursor:"grab",               
     transition: 'background-color 0.3s',



}} type="button" onClick={(e)=>{
           e.preventDefault();
           console.log("language changing ...")
          //  if(isLangEnglish){

          //    setCurrLang("fr")
          //   }
          //   else{
          //     setCurrLang("en")
          //   }
            
           i18n.changeLanguage("fr");

           
          //  setIsLangEnglish(isLangEnglish=>!isLangEnglish)

}}>French / Francais</button>
    </main>
  );
}
