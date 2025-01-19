"use client";
import * as React from "react"

const SessionProvider =dynamic(
  ()=>import('next-auth/react').then((e)=>e.SessionProvider),
  {
    ssr:false
  }
) 
import dynamic from "next/dynamic";


export function AuthProvider({ children, ...props }) {
  return <SessionProvider {...props}>{children}</SessionProvider>
}

