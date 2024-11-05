/* eslint-disable react/prop-types */

import { createContext, useContext, useReducer } from "react"


const UserContext  = createContext();

const initialState = {
    // userEmail:null,
    // userPassword:null,
    user:null,
    isAuthenticated:false,
}

function reducerFunction(state,action){
    switch(action.type){

        case "login":
            return {...state,user:action.payload,isAuthenticated:true}

        case "logout" :
            return initialState

         default:
            console.log("Choose the right case . ")  
            return state
    }
   
           
}
const FAKE_USER = {
    name: "Diallo",
    email: "diallo@example.com",
    password: "qwerty",
    avatar: "https://avatars.githubusercontent.com/u/54323271?v=4"
  };

  
  
  function UserProviderContext({children}) {
      const [{user,isAuthenticated},dispatch] = useReducer(reducerFunction,initialState)
      
function login(email,password){
          if( email == FAKE_USER.email && password == FAKE_USER.password ){
              dispatch({type:"login",payload:FAKE_USER})
          }
      }
function logout(){
    dispatch({type:"logout"})
}


    return (
        <UserContext.Provider value={{user,isAuthenticated,login,logout,dispatch}}>
            {children}
        </UserContext.Provider>
    )
}

function useUserContext(){
    const context  = useContext(UserContext)
    if(!context ){
        throw new Error("useUserContext must be used within UserProviderContext..")
    }
    return context 
}

export {UserProviderContext,useUserContext }
