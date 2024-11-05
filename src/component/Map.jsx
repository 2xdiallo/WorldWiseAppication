/* eslint-disable react/prop-types */

import { useNavigate, useSearchParams } from 'react-router-dom'
import { MapContainer, TileLayer, Marker,Popup, useMap, useMapEvents } from 'react-leaflet'
import styles from './Map.module.css'
import { useEffect, useState } from 'react'
import {useCities} from "../contexts/CitiesContext"
import Button from "./Button"
import {useGeolocation} from "../hooks/useGeolocation"

function Map() {
  const {getPosition,isLoading: isLoadingGeolocalisation,position:positionGeolocalisation} = useGeolocation()

    const [searchParam,setSearchParam] = useSearchParams()
  const [mapPosition,setMapPosition] = useState([5.3,-4])
const lat = searchParam.get("lat")
const lng = searchParam.get("lng")

useEffect(()=>{
  if(positionGeolocalisation) {
  setMapPosition([positionGeolocalisation.lat,positionGeolocalisation.lng])
}
},[positionGeolocalisation])


useEffect(()=>{
  if(lat  && lng )setMapPosition([lat,lng])

},[lat,lng])

  const {cities} = useCities();
  // console.log(cities)
    return (
        <div className={styles.mapContainer} >
       
       <Button type="position" onClick={getPosition}>{isLoadingGeolocalisation ? "Loading ..." : "Get Your Position"} </Button>

          <MapContainer center={mapPosition} zoom={10} scrollWheelZoom={true} className={styles.map}>
             <TileLayer
             attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
             />
    {
    cities.map((city)=>{
      return <Marker position={[city.position.lat,city.position.lng]} key={city.id}>
      <Popup>
        <span>{city.emoji}</span>
        <span>{city.cityName}</span>

      </Popup>
    </Marker>
    })
  }
  <ZoomCurrentCity position={mapPosition} />
  <DetectClic/>
          </MapContainer>
        </div>
    )


  }



function ZoomCurrentCity({position}){
  const map = useMap()
  map.setView(position)
  return null
}

function DetectClic(){
  const navigate = useNavigate()
  useMapEvents({
    click:(e)=>{
      console.log(e)
      navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`)

    }
  })
}

export default Map
