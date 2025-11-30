"use client"

import Link from "next/link"
import Image from "next/image"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full bg-card/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-14 px-4">
        <Link href="/" className="flex items-center gap-2 group">
          <Image src="/favicon.ico" alt="NajboljeKladenjeHR" width={32} height={32} />
            <span className="font-oswald text-lg font-bold text-foreground uppercase tracking-wide leading-tight">
              ajboljeKladenjeHR
            </span>
        </Link>

        <nav className="flex items-center gap-4">
          <Link
            href="/about"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            O Nama
          </Link>
          <div className="hidden sm:flex items-center gap-1 text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span>Ažurirano</span>
          </div>
        </nav>
      </div>
    </header>
  )
}
