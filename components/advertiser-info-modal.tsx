"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Info, Check } from "lucide-react"

interface AdvertiserInfoModalProps {
  isOpen: boolean
  onClose: () => void
}

export function AdvertiserInfoModal({ isOpen, onClose }: AdvertiserInfoModalProps) {
  const principles = [
    "Nezavisne ocjene temeljene na testiranju",
    "Suradnja samo s licenciranim operaterima",
    "Transparentna metodologija evaluacije",
    "Promicanje odgovornog klađenja",
  ]

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-card border border-border">
        <DialogHeader>
          <DialogTitle className="text-lg font-bold text-foreground flex items-center gap-2">
            <Info className="w-5 h-5 text-primary" />O Projektu NajboljeKladenje HR
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground leading-relaxed">
            <strong className="text-foreground">NajboljeKladenje HR</strong> je nezavisni portal za analizu i usporedbu
            kladionica u Hrvatskoj. Pružamo objektivne informacije za donošenje informiranih odluka.
          </p>

          <div>
            <h3 className="text-sm font-semibold text-foreground mb-2">Načela rada:</h3>
            <ul className="space-y-2">
              {principles.map((principle) => (
                <li key={principle} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  {principle}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-muted rounded-lg p-3">
            <p className="text-xs text-muted-foreground">
              Portal ostvaruje prihod putem partnerskih suradnji. To ne utječe na objektivnost naših ocjena.
            </p>
          </div>

          <Button
            onClick={onClose}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
          >
            Razumijem
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
