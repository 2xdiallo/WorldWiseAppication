// "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=0&longitude=0"
import { useContext, useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";


import { useCities } from "../contexts/CitiesContext";
import styles from "./Form.module.css";
import Button from "./Button";
import { useNavigate, useSearchParams } from "react-router-dom";
import BackButton from "./BackButton";
import DatePicker from "react-datepicker";

const reverseGeoLocationUrl = "https://api.bigdatacloud.net/data/reverse-geocode-client" ;


export function convertToEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

function Form() {
  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState("");
  const [emoji,setEmoji] =  useState(null)
  const [searchParam , setSearchParam]=  useSearchParams()
  const navigate = useNavigate()
  const {cities, setCities,isLoading,setIsLoading,createNewCity} = useCities()
// console.log(cities)
  const  lat = searchParam.get("lat")
const lng = searchParam.get("lng")
console.log(lat,lng)
  useEffect(()=>{
  async function getCityName() {
    try {// "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=0&longitude=0"
      // https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=18.963280318819674&longitude=771.5259183276304
      if(!lat || !lng ) return console.log("no lat and lng ")
      if(lat>90 && lat <-90 ) return 
      if(lng > 189 || lng <-180 ) return  
      const response = await fetch(`${reverseGeoLocationUrl}?latitude=${lat}&longitude=${lng}`)
      const data = await response.json()
      // console.log(data)
      setCityName(data.city)
      setCountry(data.countryName)
      setEmoji(convertToEmoji(data.countryCode))
    } catch (error) {
      console.log("Failled to fecth the city name ... ")
    }
    
  }
  getCityName();

},[cityName,lat,lng])

function handleAdd(e){
  e.preventDefault()

  const newCity = {
    "cityName": cityName,
    "country": country,
    "emoji": emoji,
    "date": date,
    "notes": notes,
    "position": {
      lat,
      lng
     
    },

  }
  createNewCity(newCity)

  navigate("/app/cities")
}

  return (
    <form className={styles.form}>
      <div className={styles.row}>
        <label htmlFor="cityName">City name</label>
        <input
          id="cityName"
          onChange={(e) => setCityName(e.target.value)}
          value={cityName}
        />
        <span className={styles.flag}>{emoji}</span>
      </div>

      <div className={styles.row}>
        <label htmlFor="date">When did you go to {cityName}?</label>
        {/* <input
          id="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        /> */}
        <DatePicker id="date"  selected={date}
  onSelect={(date)=>setDate(date)} //when day is clicked
  onChange={(date)=>setDate(date)} />
      </div>

      <div className={styles.row}>
        <label htmlFor="notes">Notes about your trip to {cityName}</label>
        <textarea
          id="notes"
          onChange={(e) => setNotes(e.target.value)}
          value={notes}
        />
      </div>

      <div className={styles.buttons}>
        
        <Button type="primary" onClick={handleAdd}> Add</Button>
      <BackButton/>

      </div>
    </form>
  );
}

export default Form;
