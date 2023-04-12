import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import { AuthProvider } from "./context/authContext"
import { useAuthStore } from "./context/authStore"

const root = ReactDOM.createRoot(document.getElementById("root")!)





root.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
)
