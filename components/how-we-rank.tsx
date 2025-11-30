import { Target, Smartphone, CreditCard, Headphones, Shield, Gift } from "lucide-react"

const rankingCriteria = [
  { id: 1, title: "Kvote", desc: "Analiza margina i konkurentnosti koeficijenata", icon: Target },
  { id: 2, title: "Platforma", desc: "Korisničko iskustvo i mobilna aplikacija", icon: Smartphone },
  { id: 3, title: "Isplate", desc: "Brzina i pouzdanost povlačenja sredstava", icon: CreditCard },
  { id: 4, title: "Podrška", desc: "Dostupnost i kvaliteta korisničke službe", icon: Headphones },
  { id: 5, title: "Sigurnost", desc: "Licence, enkripcija i zaštita podataka", icon: Shield },
  { id: 6, title: "Bonusi", desc: "Realnost uvjeta promotivnih ponuda", icon: Gift },
]

export default function HowWeRank() {
  return (
    <section className="py-12 w-full">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="font-oswald text-2xl sm:text-3xl font-bold text-foreground uppercase tracking-tight mb-2">
            Metodologija Ocjenjivanja
          </h2>
          <p className="text-muted-foreground">
            Svaka kladionica prolazi detaljnu evaluaciju prema 6 ključnih kriterija
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {rankingCriteria.map((criterion, index) => {
            const Icon = criterion.icon
            return (
              <div
                key={criterion.id}
                className="bg-card border border-border rounded-lg p-5 hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2.5 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold text-primary">{String(index + 1).padStart(2, "0")}</span>
                      <h3 className="font-bold text-foreground">{criterion.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">{criterion.desc}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-8 bg-muted/50 border border-border rounded-lg p-5">
          <p className="text-sm text-muted-foreground text-center">
            Konačna ocjena je prosjek svih kriterija. Testirajimo svaku kladionicu minimalno 30 dana prije objave
            recenzije, koristeći stvarne račune i uloge.
          </p>
        </div>
      </div>
    </section>
  )
}
