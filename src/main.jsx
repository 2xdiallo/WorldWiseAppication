import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { UserProviderContext } from './contexts/UserProviderContext.jsx'

import './i18n.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProviderContext>

    <App />
    </UserProviderContext>
  </React.StrictMode>,
)
