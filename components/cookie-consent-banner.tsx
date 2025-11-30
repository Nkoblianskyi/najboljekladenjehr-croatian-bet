"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Cookie, X } from "lucide-react"
import Link from "next/link"

export default function CookieConsentBanner() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const hasConsented = localStorage.getItem("cookieConsent")
    if (!hasConsented) {
      setShowBanner(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted")
    setShowBanner(false)
  }

  const declineCookies = () => {
    localStorage.setItem("cookieConsent", "declined")
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-primary/50 shadow-2xl z-50 p-4">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex items-start gap-3 flex-1">
            <Cookie className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-sm text-foreground mb-1">Kolačići</h3>
              <p className="text-xs text-muted-foreground">
                Koristimo kolačiće za poboljšanje iskustva.{" "}
                <Link href="/cookie-policy" className="text-primary hover:underline">
                  Saznaj više
                </Link>
              </p>
            </div>
          </div>
          <div className="flex gap-2 w-full sm:w-auto">
            <Button
              variant="outline"
              size="sm"
              onClick={declineCookies}
              className="flex-1 sm:flex-none text-xs border-border hover:bg-muted bg-transparent"
            >
              Odbij
            </Button>
            <Button
              onClick={acceptCookies}
              size="sm"
              className="flex-1 sm:flex-none bg-primary hover:bg-primary/90 text-primary-foreground text-xs"
            >
              Prihvati
            </Button>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowBanner(false)}
            className="absolute top-2 right-2 sm:relative sm:top-auto sm:right-auto p-1 h-auto"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
