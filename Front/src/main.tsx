import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root')!)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)



// this didn't work with the new way of working apparement,
// delete  this when you understand why

// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import { BrowserRouter, Route, Router } from 'react-router-dom'
// import App from './App'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
//   <BrowserRouter>
//       <App/>
//   </BrowserRouter>
// )
