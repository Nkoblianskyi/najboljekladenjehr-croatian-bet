import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ShieldCheck } from "lucide-react"

export const metadata: Metadata = {
  title: "Politika Privatnosti | NajboljeKladenje HR",
  description: "Politika privatnosti NajboljeKladenje HR - kako prikupljamo i štitimo vaše podatke.",
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen flex flex-col bg-background">
      <SiteHeader />

      <div className="flex-1">
        <div className="border-b border-border bg-card py-8">
          <div className="max-w-3xl mx-auto px-4">
            <div className="flex items-center gap-3 mb-2">
              <ShieldCheck className="w-6 h-6 text-primary" />
              <h1 className="font-oswald text-2xl sm:text-3xl font-bold text-foreground uppercase">
                Politika Privatnosti
              </h1>
            </div>
            <p className="text-sm text-muted-foreground">Posljednje ažuriranje: Siječanj 2025</p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto py-10 px-4">
          <div className="space-y-6">
            <section className="bg-card border border-border rounded-lg p-5">
              <h2 className="text-lg font-bold text-foreground mb-3">Prikupljanje Podataka</h2>
              <p className="text-muted-foreground text-sm mb-3">Portal NajboljeKladenje HR prikuplja:</p>
              <ul className="list-disc pl-5 text-muted-foreground text-sm space-y-1.5">
                <li>Kontakt informacije pri pretplati</li>
                <li>Preferencije sadržaja</li>
                <li>Podatke o korištenju platforme</li>
                <li>Potvrdu dobi (18+ godina)</li>
                <li>Tehničke podatke o uređaju</li>
              </ul>
            </section>

            <section className="bg-card border border-border rounded-lg p-5">
              <h2 className="text-lg font-bold text-foreground mb-3">Korištenje Podataka</h2>
              <ul className="list-disc pl-5 text-muted-foreground text-sm space-y-1.5">
                <li>Pružanje analiza i recenzija</li>
                <li>Personalizacija sadržaja</li>
                <li>Poboljšanje kvalitete platforme</li>
                <li>Osiguranje sigurnosti</li>
                <li>Promicanje odgovornog klađenja</li>
              </ul>
            </section>

            <section className="bg-card border border-border rounded-lg p-5">
              <h2 className="text-lg font-bold text-foreground mb-3">Dijeljenje Informacija</h2>
              <p className="text-muted-foreground text-sm mb-3">Ograničeno dijeljenje moguće je s:</p>
              <ul className="list-disc pl-5 text-muted-foreground text-sm space-y-1.5">
                <li>Licenciranim operaterima kada izrazite interes</li>
                <li>Pružateljima tehničkih usluga</li>
                <li>Regulatornim tijelima kada je zakonski obvezno</li>
              </ul>
              <p className="text-primary text-sm font-semibold mt-3">Nikada ne prodajemo vaše osobne podatke.</p>
            </section>

            <section className="bg-card border border-border rounded-lg p-5">
              <h2 className="text-lg font-bold text-foreground mb-3">Sigurnost</h2>
              <ul className="list-disc pl-5 text-muted-foreground text-sm space-y-1.5">
                <li>SSL/TLS enkripcija</li>
                <li>Serveri u Europskoj uniji</li>
                <li>Ograničen pristup podacima</li>
                <li>GDPR usklađenost</li>
              </ul>
            </section>

            <section className="bg-card border border-border rounded-lg p-5">
              <h2 className="text-lg font-bold text-foreground mb-3">Vaša Prava (GDPR)</h2>
              <ul className="text-muted-foreground text-sm space-y-2">
                <li>
                  <strong className="text-foreground">Pristup</strong> - Zatražiti kopiju podataka
                </li>
                <li>
                  <strong className="text-foreground">Ispravak</strong> - Korigirati netočne podatke
                </li>
                <li>
                  <strong className="text-foreground">Brisanje</strong> - Pravo na zaborav
                </li>
                <li>
                  <strong className="text-foreground">Prenosivost</strong> - Prenijeti podatke
                </li>
                <li>
                  <strong className="text-foreground">Prigovor</strong> - Usprotiviti se obradi
                </li>
              </ul>
            </section>

            <section className="bg-card border border-border rounded-lg p-5">
              <h2 className="text-lg font-bold text-foreground mb-3">Kontakt</h2>
              <p className="text-muted-foreground text-sm">
                Email: <span className="text-primary">privatnost@najboljekladenjehr.com</span>
              </p>
            </section>
          </div>
        </div>
      </div>

      <SiteFooter />
    </main>
  )
}
