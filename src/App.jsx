
import {BrowserRouter,Routes,Route, Navigate, } from "react-router-dom"

import './index.css'
import Homepage from "./pages/Homepage"
import NoteFoundPage from "./pages/NoteFoundPage"
import Product from "./pages/Product"
import Pricing from "./pages/Pricing"
import Loging from "./pages/Login"
import AppLayout from "./pages/AppLayout"
import CityList from "./component/CityList"
import CountryList from "./component/CountryList"
import City from "./component/City"
import Form from "./component/Form"
import { CitiesProvider } from "./contexts/CitiesContext"
import ProtectedRoute from "./component/ProtectedRoute"



function App() {
  
  

  return (
    <>
    
   
<CitiesProvider>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/pricing" element={<Pricing/>}/>
      <Route path="/product" element={<Product/>}/>
      <Route path="/login" element={<Loging/>}/> 
     
      <Route path="/app" element={<ProtectedRoute><AppLayout/></ProtectedRoute>}>
            <Route index replace  element={<Navigate to={"cities"}/>}/>
            <Route index element={<CityList />}/>
            <Route path="cities" element={<CityList />}/>
            <Route path="cities/:id" element={<City />}/>
            <Route path="countries" element={<CountryList />}/>
            <Route path="form" element={<Form/>}/>
      </Route> 

      <Route path="*" element={<NoteFoundPage/>}/>
      </Routes>
    
    </BrowserRouter>
    </CitiesProvider>
     
    </>
  )
}

export default App
