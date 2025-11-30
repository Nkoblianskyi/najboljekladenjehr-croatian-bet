import { FileText, BarChart3, Shield, Zap } from "lucide-react"

export function InfoSection() {
  const features = [
    { icon: FileText, title: "Detaljne Analize", desc: "Svaka kladionica prolazi temeljitu provjeru" },
    { icon: BarChart3, title: "Usporedba Kvota", desc: "Pratimo i uspoređujemo koeficijente" },
    { icon: Shield, title: "Sigurnost", desc: "Samo licencirani operateri" },
    { icon: Zap, title: "Ažurno", desc: "Redovito ažurirane informacije" },
  ]

  return (
    <section className="py-12 w-full">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="font-oswald text-2xl sm:text-3xl font-bold text-foreground uppercase tracking-tight mb-2">
            Kako Radimo
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            NajboljeKladenje HR je nezavisni portal posvećen analizi i usporedbi kladionica na hrvatskom tržištu
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-card border border-border rounded-lg p-4 text-center hover:border-primary/30 transition-colors"
            >
              <feature.icon className="w-8 h-8 text-primary mx-auto mb-2" />
              <h3 className="font-bold text-foreground text-sm mb-1">{feature.title}</h3>
              <p className="text-xs text-muted-foreground">{feature.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-card border border-border rounded-lg p-6 space-y-4">
          <h3 className="font-oswald text-xl font-bold text-foreground uppercase">O Portalu</h3>
          <p className="text-muted-foreground leading-relaxed">
            Portal NajboljeKladenje HR nastao je iz potrebe za pouzdanim, nezavisnim izvorom informacija o kladionicama
            u Hrvatskoj. Naš tim stručnjaka redovito testira i analizira sve aspekte ponude - od kvalitete kvota i
            bonusa do brzine isplata i korisničke podrške.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Cilj nam je pomoći korisnicima da donesu informiranu odluku prilikom odabira kladionice. Sve naše ocjene
            temelje se na stvarnom iskustvu i objektivnim kriterijima. Promičemo odgovorno klađenje i surađujemo
            isključivo s licenciranim operaterima.
          </p>
        </div>
      </div>
    </section>
  )
}
