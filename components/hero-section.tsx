"use client"

import { Calendar, Shield, Award, TrendingUp } from "lucide-react"
import Image from "next/image"

interface HeroSectionProps {
  onTopOffersClick: () => void
  onAdvertiserInfoClick: () => void
  onAgeRestrictionClick: () => void
}

export function HeroSection({ onTopOffersClick, onAdvertiserInfoClick, onAgeRestrictionClick }: HeroSectionProps) {
  const currentDate = new Date()
  const formattedDate = `${currentDate.getDate()}.${currentDate.getMonth() + 1}.${currentDate.getFullYear()}`

  return (
    <section className="relative h-[180px] sm:h-[200px] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/croatian-national-football-team-on-stadium-field-p.jpg"
          alt="Hrvatska nogometna reprezentacija"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80" />
      </div>

      <div className="relative h-full container mx-auto px-4 flex items-center">
        <div className="max-w-[1080px] mx-auto w-full">
          {/* Main hero content - compact layout */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-3">
            {/* Left: Title area */}
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <div className="flex items-center gap-1.5 bg-primary/90 text-background px-2 py-0.5 rounded text-xs font-bold">
                  <Calendar className="w-3 h-3" />
                  {formattedDate}
                </div>
                <div className="flex items-center gap-1.5 bg-green-500 text-white px-2 py-0.5 rounded text-xs font-bold">
                  <TrendingUp className="w-3 h-3" />
                  LIVE
                </div>
              </div>

              <h1 className="font-oswald text-xl sm:text-2xl md:text-3xl font-bold text-white uppercase tracking-tight mb-1 drop-shadow-lg">
                Rang Lista Kladionica
              </h1>
              <p className="text-xs sm:text-sm text-gray-200 max-w-md drop-shadow">
                Nezavisne ocjene i usporedbe najboljih hrvatskih kladionica
              </p>
            </div>

            {/* Right: Stats badges */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/20 px-2 sm:px-3 py-1.5 rounded-lg">
                <Image src="/flag.png" alt="flag" width={24} height={24} />
                <span className="text-xs font-semibold text-white">Licencirano</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/20 px-2 sm:px-3 py-1.5 rounded-lg">
                <Award className="w-3 sm:w-4 h-3 sm:h-4 text-primary" />
                <span className="text-xs font-semibold text-white">Testirano</span>
              </div>
            </div>
          </div>

          {/* Bottom info bar */}
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-gray-300 border-t border-white/20 pt-2">
            <span>18+ Odgovorno klađenje</span>
            <span className="hidden sm:inline">|</span>
            <button
              type="button"
              onClick={onAdvertiserInfoClick}
              className="hover:text-primary transition-colors underline underline-offset-2"
            >
              O projektu
            </button>
            <span className="hidden sm:inline">|</span>
            <button
              type="button"
              onClick={onAgeRestrictionClick}
              className="hover:text-primary transition-colors underline underline-offset-2"
            >
              Pravila
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
