
/* eslint-disable react/prop-types */

import { createContext, useContext, useEffect, useState } from "react"

const apiLink = "http://localhost:9000"

const CitiesContext = createContext()


function CitiesProvider({children}){

    const [cities,setCities] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const [currentCity,setCurrentCity] = useState({})

  
  
    useEffect(function(){
     async function fetchCities()
     {
       try {
        setIsLoading(true)
         const response = await fetch(`${apiLink}/cities`)
         const data = await response.json()
         setCities(()=>data)
                  
       } catch (error) {
         console.log("Not able to fetch any Cities :(")
       }
       finally{
        setIsLoading(false)
       }
      
     }
     fetchCities()
    },[])

  async function getCurrentCity(id){

        try {
            setIsLoading(true)
             const response = await fetch(`${apiLink}/cities/${id}`)
             const data = await response.json()
             setCurrentCity(()=>data)
                          
           } catch (error) {
             console.log("Not able to fetch current city data :(")
           }
           finally{
            setIsLoading(false)
           }

    
  }

  async function createNewCity(newCity)
  {
   try {
    setIsLoading(true)
    
    fetch(" http://localhost:9000/cities",
      {
          method: "POST",
        headers: {
          "Content-Type": "application/json",
                  },
            body: JSON.stringify(
            newCity
                                 ),
      
      }
    )
   } catch (error) {
    console.log("cant create this ")
    
   }
   finally{
    setIsLoading(false)
   }
  }
   

    return <CitiesContext.Provider value={{
        cities, currentCity ,setCurrentCity,getCurrentCity,isLoading,setIsLoading,createNewCity
    }}>
        {children}
    </CitiesContext.Provider>
    


}

function useCities(){
    const context = useContext(CitiesContext)
    if(context === undefined) throw new Error("Context must be used within a CitiesProvider component.")
    return context 
}

// eslint-disable-next-line react-refresh/only-export-components
export { CitiesProvider , useCities } ;
