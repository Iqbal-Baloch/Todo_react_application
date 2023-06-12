import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { TodoContenxtProvider } from './TodoContenxt.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TodoContenxtProvider>
      <App />
    </TodoContenxtProvider>
  </React.StrictMode>,
)
