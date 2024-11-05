/* eslint-disable react/prop-types */


import { useUserContext } from "../contexts/UserProviderContext"
import { Navigate } from "react-router-dom"

function ProtectedRoute({children}) {

 const {isAuthenticated} = useUserContext()
 

    return (<>
        {
            !isAuthenticated ?  <Navigate to={"/login"}/> :children 
        }
    
        </>
    )
}

export default ProtectedRoute
