"use client"

import { firstListSites } from "@/data/betting-sites"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Star, Trophy, ExternalLink } from "lucide-react"

export function OurChoiceSection() {
  const topSite = firstListSites[0]

  const renderStars = (rating: number) => {
    const starRating = rating / 2
    return Array.from({ length: 5 }, (_, i) => {
      const fillPercentage = Math.max(0, Math.min(100, (starRating - i) * 100))
      const uniqueId = `our-choice-star-${i}`

      return (
        <div key={i} className="relative w-4 h-4">
          <Star className="w-4 h-4 text-muted-foreground/30 absolute" />
          <div style={{ width: `${fillPercentage}%` }} className="overflow-hidden absolute">
            <Star className="w-4 h-4 fill-primary text-primary" />
          </div>
        </div>
      )
    })
  }

  return (
    <section className="py-12 w-full">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-1.5 rounded-full text-sm font-bold mb-3">
            <Trophy className="w-4 h-4" />
            Izbor Redakcije
          </div>
          <h2 className="font-oswald text-2xl sm:text-3xl font-bold text-foreground uppercase tracking-tight">
            Naša Preporuka
          </h2>
        </div>

        <div className="bg-gradient-to-br from-primary/10 via-card to-card border-2 border-primary rounded-xl overflow-hidden">
          <Link href={topSite.url} target="_blank" rel="noopener noreferrer" className="block">
            <div className="p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <div className=" p-4 rounded-xl shadow-lg">
                  <Image
                    src={topSite.logo || "/placeholder.svg"}
                    alt={topSite.name}
                    width={140}
                    height={80}
                    className="h-16 w-auto object-contain"
                  />
                </div>

                <div className="flex-1 text-center sm:text-left">
                  <h3 className="font-bold text-xl text-foreground mb-2">{topSite.name}</h3>
                  <div className="flex items-center justify-center sm:justify-start gap-2 mb-3">
                    <div className="flex gap-0.5">{renderStars(topSite.rating)}</div>
                    <span className="text-2xl font-bold text-primary">{topSite.rating.toFixed(1)}</span>
                  </div>
                  <div className="text-muted-foreground text-sm">{topSite.reviews} recenzija</div>
                </div>

                <div className="text-center sm:text-right">
                  <div className="text-sm text-muted-foreground mb-1">Bonus dobrodošlice</div>
                  <div className="text-2xl font-bold text-foreground mb-1">{topSite.bonus}</div>
                  {topSite.dopBonus && <div className="text-primary font-semibold">{topSite.dopBonus}</div>}
                </div>
              </div>

              <div className="mt-6 flex justify-center">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 rounded-lg font-bold text-base">
                  PREUZMI BONUS
                  <ExternalLink className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
          </Link>

          <div className="bg-muted/50 border-t border-border px-6 py-3 text-center">
            <p className="text-xs text-muted-foreground">18+ | Vrijede uvjeti i pravila | {topSite.terms}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
