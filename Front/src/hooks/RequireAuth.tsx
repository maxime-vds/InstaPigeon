import { useAuthStore } from "../context/authStore"
import React, { ReactNode } from "react"
import { Navigate } from "react-router-dom"
import { useLocation } from "react-router-dom"

export function RequireAuth({ children }: { children: ReactNode }): any {
  const location = useLocation()
  const { authed } = useAuthStore()

  console.log(authed)

  // the problem is with passing the authed value here
  // why is it undefined here ?

  // when I put authed on true originally it works fine

  return authed ? (
    children
  ) : (
    <Navigate to="/" replace state={{ path: location.pathname }} />
  )
}

// dno 100% how the navigate state prop works
