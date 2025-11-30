import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Cookie } from "lucide-react"

export const metadata: Metadata = {
  title: "Politika Kolačića | NajboljeKladenje HR",
  description: "Saznajte kako koristimo kolačiće na stranici najboljekladenjehr.com.",
}

export default function CookiePage() {
  return (
    <main className="min-h-screen flex flex-col bg-background">
      <SiteHeader />

      <div className="flex-1">
        <div className="border-b border-border bg-card py-8">
          <div className="max-w-3xl mx-auto px-4">
            <div className="flex items-center gap-3 mb-2">
              <Cookie className="w-6 h-6 text-primary" />
              <h1 className="font-oswald text-2xl sm:text-3xl font-bold text-foreground uppercase">
                Politika Kolačića
              </h1>
            </div>
            <p className="text-sm text-muted-foreground">Posljednje ažuriranje: Siječanj 2025</p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto py-10 px-4">
          <div className="prose prose-invert max-w-none space-y-6">
            <section className="bg-card border border-border rounded-lg p-5">
              <h2 className="text-lg font-bold text-foreground mb-3">Što su Kolačići?</h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Kolačići su male tekstualne datoteke koje se pohranjuju na vaš uređaj prilikom posjete stranici
                najboljekladenjehr.com. Omogućuju prepoznavanje preferencija i poboljšanje korisničkog iskustva.
              </p>
            </section>

            <section className="bg-card border border-border rounded-lg p-5">
              <h2 className="text-lg font-bold text-foreground mb-3">Svrha Korištenja</h2>
              <ul className="list-disc pl-5 text-muted-foreground text-sm space-y-1.5 leading-relaxed">
                <li>Održavanje sigurne sesije pregledavanja</li>
                <li>Pamćenje vaših preferencija i postavki</li>
                <li>Analiza performansi i poboljšanje iskustva</li>
                <li>Personalizacija sadržaja i preporuka</li>
                <li>Osiguranje usklađenosti s regulativama</li>
              </ul>
            </section>

            <section className="bg-card border border-border rounded-lg p-5">
              <h2 className="text-lg font-bold text-foreground mb-3">Vrste Kolačića</h2>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-semibold text-foreground">Nužni Kolačići</p>
                  <p className="text-muted-foreground">Neophodni za funkcioniranje stranice i sigurnost.</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Analitički Kolačići</p>
                  <p className="text-muted-foreground">Pomažu razumjeti korištenje platforme.</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Funkcionalni Kolačići</p>
                  <p className="text-muted-foreground">Spremaju osobne postavke i preferencije.</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Marketinški Kolačići</p>
                  <p className="text-muted-foreground">Prikazuju relevantne ponude partnera.</p>
                </div>
              </div>
            </section>

            <section className="bg-card border border-border rounded-lg p-5">
              <h2 className="text-lg font-bold text-foreground mb-3">Upravljanje Kolačićima</h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Možete kontrolirati kolačiće putem postavki preglednika. Onemogućavanje može utjecati na funkcionalnost
                stranice.
              </p>
            </section>

            <section className="bg-card border border-border rounded-lg p-5">
              <h2 className="text-lg font-bold text-foreground mb-3">Kontakt</h2>
              <p className="text-muted-foreground text-sm">
                Email: <span className="text-primary">info@najboljekladenjehr.com</span>
              </p>
            </section>
          </div>
        </div>
      </div>

      <SiteFooter />
    </main>
  )
}
