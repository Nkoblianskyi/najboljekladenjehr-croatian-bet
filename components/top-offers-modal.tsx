"use client"

import { X, Trophy, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { firstListSites } from "@/data/betting-sites"
import { useEffect } from "react"

interface TopOffersModalProps {
  isOpen: boolean
  onClose: () => void
}

function StarRating({ rating }: { rating: number }) {
  const starRating = rating / 2

  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }, (_, i) => {
        const fillPercentage = Math.min(Math.max((starRating - i) * 100, 0), 100)
        return (
          <div key={i} className="relative w-5 h-5">
            <svg className="w-5 h-5 text-muted-foreground/30" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <div className="absolute inset-0 overflow-hidden" style={{ width: `${fillPercentage}%` }}>
              <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export function TopOffersModal({ isOpen, onClose }: TopOffersModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  if (!isOpen) return null

  const topSite = firstListSites[0]

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="relative w-full max-w-sm bg-[#1a1a2e] rounded-xl overflow-hidden border border-primary/50 animate-slide-up">
        <Button
          variant="ghost"
          size="sm"
          onClick={onClose}
          className="absolute top-3 right-3 text-muted-foreground hover:text-foreground z-10 w-8 h-8 p-0 rounded-full"
        >
          <X className="w-4 h-4" />
        </Button>

        {/* Header */}
        <div className="bg-[#0f0f1a] border-b border-primary/30 p-4 text-center">
          <div className="inline-flex items-center gap-2 text-primary mb-1">
            <Trophy className="w-5 h-5" />
            <span className="font-oswald text-lg font-bold uppercase">Preporuka Dana</span>
          </div>
        </div>

        <div className="bg-[#252540] p-6 flex justify-center">
          <img src={topSite.logo || "/placeholder.svg"} alt={topSite.name} className="h-20 w-auto object-contain" />
        </div>

        {/* Content */}
        <div className="p-5 bg-[#1a1a2e]">
          <div className="text-center mb-4">
            <div className="text-sm text-muted-foreground mb-1">Bonus dobrodošlice</div>
            <div className="text-2xl font-bold text-foreground">{topSite.bonus}</div>
          </div>

          <div className="flex items-center justify-center gap-3 mb-5">
            <StarRating rating={topSite.rating} />
            <span className="text-lg font-bold text-primary">{topSite.rating.toFixed(1)}</span>
          </div>

          <Button
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-5 rounded-lg"
            onClick={() => window.open(topSite.url, "_blank")}
          >
            PREUZMI BONUS
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>

          <p className="text-[10px] text-muted-foreground text-center mt-3">18+ | Vrijede uvjeti | Kladi odgovorno</p>
        </div>
      </div>
    </div>
  )
}

export default TopOffersModal
