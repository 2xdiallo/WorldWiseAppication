/* eslint-disable react/prop-types */
import styles from './CityItem.module.css'
import { Link } from 'react-router-dom';

import { useCities } from '../contexts/CitiesContext';
import Button from './Button';
const formatDate = (date) =>
    new Intl.DateTimeFormat("en", {
      day: "numeric",
      month: "long",
      year: "numeric",
      weekday: "long",
    }).format(new Date(date));

function CityItem({city}) {
  const {cities,setCities} = useCities()
  
  
  const {cityName , emoji, date,id,position} = city 
  const {lat,lng} = position
  
  function handleRemoveCity(){
    // e.preventDefa
    const newCities = cities.filter((city)=>  city.id !== id)
    // setCities(newCities)
    console.log(useCities)
// console.log(id)
}


  return (
    <div ><li>

   
<Link className={styles.cityItem} to={`${id}?lat=${lat}&lng=${lng}`} onClick={()=>console.log("hiii")}>

    <span className={styles.emoji}>{emoji}</span>
    <h2 className={styles.name}>{cityName}</h2>
    <time className={styles.date}>{formatDate(date) }</time>
    <button className={styles.deleteBtn} onClick={handleRemoveCity}>&times;</button>
    {/* <Button className={styles.deleteBtn}>&times;</Button> */}
    

</Link>
</li>
   

    </div>
  )
}

export default CityItem