"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { AlertTriangle, ShieldCheck } from "lucide-react"

interface AgeRestrictionModalProps {
  isOpen: boolean
  onClose: () => void
}

export function AgeRestrictionModal({ isOpen, onClose }: AgeRestrictionModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-sm bg-card border border-border">
        <DialogHeader>
          <DialogTitle className="text-center text-lg font-bold text-foreground flex items-center justify-center gap-2">
            <AlertTriangle className="w-5 h-5 text-primary" />
            Pravila Korištenja
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="bg-primary/10 border border-primary/30 rounded-lg p-4 text-center">
            <div className="text-4xl font-bold text-primary mb-1">18+</div>
            <p className="text-sm text-muted-foreground">Samo za punoljetne osobe</p>
          </div>

          <div className="space-y-3 text-sm text-muted-foreground">
            <p>Sadržaj portala NajboljeKladenje HR namijenjen je isključivo osobama starijim od 18 godina.</p>
            <p>Klađenje može uzrokovati ovisnost. Kladite se odgovorno i u granicama svojih mogućnosti.</p>
          </div>

          <div className="bg-muted rounded-lg p-3 flex items-start gap-2">
            <ShieldCheck className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
            <p className="text-xs text-muted-foreground">
              Ako imate problema s klađenjem, potražite pomoć na PBSVI.hr ili Hupis.hr
            </p>
          </div>

          <Button
            onClick={onClose}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
          >
            Potvrđujem da imam 18+ godina
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
