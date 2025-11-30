import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Shield, Users, Target, Award, Clock, CheckCircle2, Trophy, Mail } from "lucide-react"

export const metadata: Metadata = {
  title: "O Nama | NajboljeKladenje HR",
  description: "Nezavisni portal za analizu i usporedbu kladionica u Hrvatskoj.",
}

export default function AboutPage() {
  const criteria = [
    { title: "Sigurnost i Licence", icon: Shield },
    { title: "Kvaliteta Kvota", icon: Target },
    { title: "Korisnička Podrška", icon: Users },
    { title: "Brzina Isplata", icon: Clock },
    { title: "Mobilna Platforma", icon: CheckCircle2 },
    { title: "Transparentnost", icon: Award },
  ]

  return (
    <main className="min-h-screen flex flex-col bg-background">
      <SiteHeader />

      <div className="flex-1">
        {/* Hero */}
        <div className="border-b border-border bg-card py-10">
          <div className="max-w-4xl mx-auto px-4">
            <div className="flex items-center gap-3 mb-4">
              <Trophy className="w-8 h-8 text-primary" />
              <h1 className="font-oswald text-3xl sm:text-4xl font-bold text-foreground uppercase">O Nama</h1>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Nezavisni portal posvećen analizi i usporedbi kladionica na hrvatskom tržištu
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto py-10 px-4 space-y-8">
          {/* Mission */}
          <section className="bg-card border border-border rounded-xl p-6">
            <h2 className="font-oswald text-xl font-bold text-foreground uppercase mb-4">Naša Misija</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Na portalu <strong className="text-foreground">najboljekladenjehr.com</strong> pružamo nepristrane,
              profesionalne analize i ocjene kladionica dostupnih u Hrvatskoj. Temelji se na transparentnim kriterijima,
              detaljnom testiranju i opsežnom istraživanju tržišta.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Promičemo odgovorno klađenje i educiramo korisnike kroz kvalitetne analitičke članke i usporedbe.
            </p>
          </section>

          {/* Team */}
          <section className="bg-card border border-border rounded-xl p-6">
            <h2 className="font-oswald text-xl font-bold text-foreground uppercase mb-4">Tko Smo Mi?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Naš tim čine iskusni analitičari i stručnjaci za sportsko klađenje s dugogodišnjim iskustvom u praćenju
              industrije. Svaki član tima donosi jedinstvenu perspektivu iz različitih sportova.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Redakcija djeluje potpuno nezavisno. Naše ocjene temelje se isključivo na objektivnim kriterijima i
              stvarnom iskustvu testiranja.
            </p>
          </section>

          {/* Methodology */}
          <section className="bg-card border border-border rounded-xl p-6">
            <h2 className="font-oswald text-xl font-bold text-foreground uppercase mb-4">Metodologija</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Svaka kladionica prolazi detaljnu višestupanjsku analizu prema ključnim kriterijima:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {criteria.map((item) => (
                <div key={item.title} className="bg-muted rounded-lg p-3 flex items-center gap-2">
                  <item.icon className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">{item.title}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Responsible gambling */}
          <section className="bg-primary/10 border border-primary/30 rounded-xl p-6">
            <h2 className="font-oswald text-xl font-bold text-foreground uppercase mb-4">Odgovorno Klađenje</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              NajboljeKladenje HR snažno podržava principe odgovornog klađenja. Preporučujemo isključivo licencirane
              operatore koji nude alate za kontrolu i zaštitu igrača.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Klađenje treba biti zabava, nikada financijsko opterećenje. Postavite limite i potražite pomoć ako
              primijetite znakove problematičnog ponašanja.
            </p>
          </section>

          {/* Contact */}
          <section className="bg-card border border-border rounded-xl p-6 text-center">
            <h2 className="font-oswald text-xl font-bold text-foreground uppercase mb-4">Kontakt</h2>
            <p className="text-muted-foreground mb-4">Imate pitanja ili prijedloge? Javite nam se:</p>
            <div className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-lg">
              <Mail className="w-4 h-4" />
              info@najboljekladenjehr.com
            </div>
          </section>
        </div>
      </div>

      <SiteFooter />
    </main>
  )
}
