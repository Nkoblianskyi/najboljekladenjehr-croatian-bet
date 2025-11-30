"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

interface CookieConsentContextType {
  hasConsented: boolean | null
  acceptCookies: () => void
  declineCookies: () => void
}

const CookieConsentContext = createContext<CookieConsentContextType | undefined>(undefined)

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const [hasConsented, setHasConsented] = useState<boolean | null>(null)

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent")
    setHasConsented(consent === "accepted" ? true : consent === "declined" ? false : null)
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted")
    setHasConsented(true)
  }

  const declineCookies = () => {
    localStorage.setItem("cookieConsent", "declined")
    setHasConsented(false)
  }

  return (
    <CookieConsentContext.Provider value={{ hasConsented, acceptCookies, declineCookies }}>
      {children}
    </CookieConsentContext.Provider>
  )
}

export function useCookieConsent() {
  const context = useContext(CookieConsentContext)
  if (context === undefined) {
    throw new Error("useCookieConsent must be used within a CookieConsentProvider")
  }
  return context
}
