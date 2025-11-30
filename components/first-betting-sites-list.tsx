"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"
import { firstListSites, type BettingSite } from "@/data/betting-sites"

function RatingStars({ rating }: { rating: number }) {
  // Convert 10-point rating to 5 stars (each star = 2 points)
  const starRating = (rating / 10) * 5

  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => {
        // Calculate fill percentage for each star (step 0.2 = 20%)
        const diff = starRating - (star - 1)
        let fillPercent = 0
        if (diff >= 1) {
          fillPercent = 100
        } else if (diff > 0) {
          // Round to nearest 0.2 (20%)
          fillPercent = Math.round(diff * 5) * 20
        }

        return (
          <div key={star} className="relative w-4 h-4">
            {/* Empty star background */}
            <Star className="absolute w-4 h-4 text-muted-foreground/30" />
            {/* Filled star with clip */}
            <div className="absolute overflow-hidden" style={{ width: `${fillPercent}%` }}>
              <Star className="w-4 h-4 fill-primary text-primary" />
            </div>
          </div>
        )
      })}
    </div>
  )
}

function RatingStarsMobile({ rating }: { rating: number }) {
  const starRating = (rating / 10) * 5

  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => {
        const diff = starRating - (star - 1)
        let fillPercent = 0
        if (diff >= 1) {
          fillPercent = 100
        } else if (diff > 0) {
          fillPercent = Math.round(diff * 5) * 20
        }

        return (
          <div key={star} className="relative w-3 h-3">
            <Star className="absolute w-3 h-3 text-muted-foreground/30" />
            <div className="absolute overflow-hidden" style={{ width: `${fillPercent}%` }}>
              <Star className="w-3 h-3 fill-primary text-primary" />
            </div>
          </div>
        )
      })}
    </div>
  )
}

export function FirstBettingSitesList() {
  const [sites, setSites] = useState<BettingSite[]>([])

  useEffect(() => {
    setSites(firstListSites)
  }, [])

  const getBadgeConfig = (index: number) => {
    const badges = [
      { text: "NAJBOLJI IZBOR", bgClass: "bg-primary", textClass: "text-primary-foreground" },
      { text: "ODLIČNA PONUDA", bgClass: "bg-secondary", textClass: "text-secondary-foreground" },
      { text: "PREPORUČENO", bgClass: "bg-accent", textClass: "text-accent-foreground" },
      { text: "DOBRA OPCIJA", bgClass: "bg-muted", textClass: "text-foreground" },
    ]
    return badges[index] || null
  }

  return (
    <section className="py-8 w-full">
      <div className="max-w-[1080px] mx-auto px-4">
        <div className="space-y-3">
          {sites.map((site, index) => {
            const badgeConfig = getBadgeConfig(index)

            return (
              <div
                key={site.id}
                className={`relative overflow-hidden rounded-lg transition-all duration-300 hover:scale-[1.01] ${
                  index === 0
                    ? "bg-gradient-to-r from-primary/10 via-card to-card border-2 border-primary/50"
                    : "bg-card border border-border hover:border-primary/30"
                }`}
              >
                <Link href={site.url} target="_blank" rel="noopener noreferrer" className="block">
                  {/* Mobile view */}
                  <div className="flex flex-col sm:hidden p-3">
                    <div className="flex items-center gap-2 mb-3">
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0 ${
                          index === 0 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {index + 1}
                      </div>
                      <div className="p-2 rounded flex-shrink-0 w-[120px] h-[60px] flex items-center justify-center">
                        <Image
                          src={site.logo || "/placeholder.svg"}
                          alt={site.name}
                          width={120}
                          height={60}
                          className="h-[50px] w-auto object-contain"
                        />
                      </div>
                      <div className="flex flex-col ml-auto">
                        <div className="text-xs font-semibold text-foreground truncate">{site.name}</div>
                        <div className="flex items-center gap-1">
                          <RatingStarsMobile rating={site.rating} />
                          <span className="text-primary font-bold text-xs">{site.rating.toFixed(1)}</span>
                        </div>
                      </div>
                    </div>

                    <div
                      className={`rounded-lg p-4 mb-3 text-center ${index === 0 ? "bg-primary/20 border border-primary/30" : "bg-muted/50"}`}
                    >
                      <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1">
                        Bonus dobrodošlice
                      </div>
                      <div className={`text-2xl font-bold ${index === 0 ? "text-primary" : "text-foreground"}`}>
                        {site.bonus}
                      </div>
                      {site.dopBonus && <div className="text-sm text-accent font-semibold mt-1">{site.dopBonus}</div>}
                    </div>

                    <Button
                      className={`w-full py-2.5 rounded-lg font-bold text-xs ${
                        index === 0
                          ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                          : "bg-accent hover:bg-accent/90 text-accent-foreground"
                      }`}
                    >
                      PREUZMI BONUS
                    </Button>
                  </div>

                  {/* Desktop view */}
                  <div className="hidden sm:grid grid-cols-[48px_200px_120px_1fr_100px_140px] items-center p-4 gap-4">
                    {/* Col 1: Rank - 48px */}
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${
                        index === 0 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {index + 1}
                    </div>

                    {/* Col 2: Logo - 200px */}
                    <div className="p-3 rounded-lg w-[200px] h-[80px] flex items-center justify-center">
                      <Image
                        src={site.logo || "/placeholder.svg"}
                        alt={site.name}
                        width={160}
                        height={80}
                        className="h-[60px] w-auto object-contain"
                      />
                    </div>

                    {/* Col 3: Name & Rating - 120px */}
                    <div className="w-[120px]">
                      <div className="font-semibold text-foreground text-sm mb-1 truncate">{site.name}</div>
                      <div className="flex flex-col gap-1">
                        <RatingStars rating={site.rating} />
                        <span className="text-primary font-bold text-sm">{site.rating.toFixed(1)}</span>
                      </div>
                    </div>

                    {/* Col 4: Bonus - flex-1 (largest) */}
                    <div
                      className={`rounded-lg p-4 text-center ${index === 0 ? "bg-primary/15 border border-primary/30" : "bg-muted/30"}`}
                    >
                      <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1">Bonus</div>
                      <div className={`text-2xl font-bold ${index === 0 ? "text-primary" : "text-foreground"}`}>
                        {site.bonus}
                      </div>
                      {site.dopBonus && <div className="text-sm text-accent font-semibold mt-1">{site.dopBonus}</div>}
                    </div>

                    {/* Col 5: Reviews - 100px */}
                    <div className="w-[100px] text-center">
                      <div className="text-xs text-muted-foreground">{site.reviews} recenzija</div>
                      <div className="text-xs text-green-500 mt-1">Licencirano</div>
                    </div>

                    {/* Col 6: CTA - 140px */}
                    <Button
                      className={`w-[140px] py-4 rounded-lg font-bold text-sm ${
                        index === 0
                          ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                          : "bg-accent hover:bg-accent/90 text-accent-foreground"
                      }`}
                    >
                      POSJETI
                    </Button>
                  </div>
                </Link>

                {/* Footer bar - desktop only */}
                <div className="hidden sm:block border-t border-border bg-muted/50 px-4 py-1.5">
                  <p className="text-[10px] text-muted-foreground text-center">
                    18+ | Klađenje može biti štetno | {site.terms}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
