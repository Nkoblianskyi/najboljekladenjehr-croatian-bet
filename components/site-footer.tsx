import Link from "next/link"
import Image from "next/image"


export function SiteFooter() {
  return (
    <footer className="bg-card border-t border-border py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image src="/favicon.ico" alt="NajboljeKladenjeHR" width={32} height={32} />
                <span className="font-oswald text-lg font-bold text-foreground uppercase">ajboljeKladenjeHR</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Nezavisni portal za usporedbu i analizu kladionica u Hrvatskoj. Promičemo odgovorno klađenje.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-foreground mb-3 text-sm">Navigacija</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                    Početna
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                    O Nama
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors">
                    Privatnost
                  </Link>
                </li>
                <li>
                  <Link href="/cookie-policy" className="text-muted-foreground hover:text-primary transition-colors">
                    Kolačići
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-3 text-sm">Odgovorno Klađenje</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Samo 18+</li>
                <li>Postavi limit</li>
                <li>Kladi odgovorno</li>
                <li>Potraži pomoć</li>
              </ul>
            </div>
          </div>

          {/* Help orgs */}
          <div className="border-t border-white/10 pt-8 pb-8">
            <h4 className="font-serif text-base font-bold text-white mb-5 text-center">Organizacije za pomoć</h4>
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
              <Link
                href="https://www.gamcare.org.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-105"
              >
                <div className="relative w-[80px] h-[32px] md:w-[100px] md:h-[40px] p-2 rounded bg-white shadow-sm">
                  <Image src="/gamecare.svg" alt="GamCare" fill className="object-contain" />
                </div>
              </Link>
              <Link
                href="https://www.gambleaware.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-105"
              >
                <div className="relative w-[80px] h-[32px] md:w-[100px] md:h-[40px] p-2 rounded bg-white shadow-sm">
                  <Image src="/gamble-aware.webp" alt="GambleAware" fill className="object-contain" />
                </div>
              </Link>
              <Link
                href="https://www.hupis.hr/klok"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-105"
              >
                <div className="relative w-[80px] h-[32px] md:w-[100px] md:h-[40px] p-2 rounded bg-white shadow-sm">
                  <Image src="/hupis.png" alt="HUPIS" fill className="object-contain" />
                </div>
              </Link>
              <Link
                href="https://www.gamstop.co.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-105"
              >
                <div className="relative w-[80px] h-[32px] md:w-[100px] md:h-[40px] p-2 rounded bg-white shadow-sm">
                  <Image src="/gamstop.svg" alt="GamStop" fill className="object-contain" />
                </div>
              </Link>
              <Link
                href="https://www.pbsvi.hr/strucni-programi-i-klub/kocka-terapijsko-rehabilitacijski-program-za-ovisnost-o-kockanju/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-105"
              >
                <div className="relative w-[80px] h-[32px] md:w-[100px] md:h-[40px] p-2 rounded bg-white shadow-sm">
                  <Image src="/pbsvi.svg" alt="PBSVI" fill className="object-contain" />
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-6">
          <p className="text-xs text-muted-foreground text-center mb-4">
            Ova stranica sadrži partnerske linkove. Klađenje može biti štetno. Igrajte odgovorno. 18+
          </p>
          <p className="text-xs text-muted-foreground text-center">
            © 2025 najboljekladenjehr.com - Sva prava pridržana
          </p>
        </div>
      </div>
    </footer>
  )
}
