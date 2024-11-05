
/* eslint-disable react/prop-types */

import styles from './CityList.module.css'
import Spinner from "./Spinner"
import CityItem from './CityItem'
import Message from "./Message"
import { useCities } from '../contexts/CitiesContext'


function CityList() {
    const {cities,isLoading}= useCities()
    

    
    if(isLoading)return <Spinner/>
    if(cities.length == 0) return <Message message={"Add your first City by clicking on the Map 😊👉"}/>


  return (
    <div > 
        <ul className={styles.cityList}>
            {
                cities.map((currentCity)=>{
                    // console.log(currentCity)
                    return <CityItem  city={currentCity} key={currentCity.id}/>

                    
                })
            }


        </ul>
    
    
    </div>
  )
}

export default CityList