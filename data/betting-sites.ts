export interface BettingSite {
  id: number
  name: string
  logo: string
  bonus: string
  dopBonus?: string
  url: string
  rating: number
  stars: number
  reviews: number
  badges: string[]
  terms: string
  isTopRating?: boolean
  isTopLine?: boolean
  isPopular?: boolean
  isTrending?: boolean
}

export interface FirstListSite {
  id: number
  name: string
  logo: string
  bonus: string
  dopBonus?: string
  url: string
  rating: number
  stars: number
  reviews: number
  badges: string[]
  terms: string
  isTopRating?: boolean
  isTopLine?: boolean
  isPopular?: boolean
  isTrending?: boolean
}

export interface SecondListSite {
  id: number
  name: string
  logo: string
  bonus: string
  dopBonus?: string
  url: string
  rating: number
  stars: number
  reviews: number
  badges: string[]
  terms: string
  isTopRating?: boolean
  isTopLine?: boolean
  isPopular?: boolean
  isTrending?: boolean
}

export const bettingSites: BettingSite[] = [
  {
    id: 1,
    name: "Favbet",
    logo: "/favbet.svg",
    bonus: "Do 300€",
    dopBonus: "+ 30€ Oklade Bez Rizika",
    url: "https://www.favbet.hr/",
    rating: 9.6,
    stars: 5,
    reviews: 3841,
    badges: ["NAJBOLJA OCJENA", "VRHUNSKI IZBOR"],
    terms: "18+ • Odgovorno klađenje • Licencirano • Primjenjuju se T&C",
    isTopRating: true,
    isTopLine: true,
  },
  {
    id: 2,
    name: "Germania Sport",
    logo: "/germania.svg",
    bonus: "Cash Out na Klađenju Uživo",
    url: "https://www.germaniasport.hr/",
    rating: 9.5,
    stars: 5,
    reviews: 2864,
    badges: ["POPULARNO", "TREND"],
    terms: "18+ • Sigurna igra • Provjereno • Primjenjuju se uvjeti",
    isPopular: true,
    isTrending: true,
  },
  {
    id: 3,
    name: "PSK",
    logo: "/psk.webp",
    bonus: "Dvaput Je Dvaput 2x100€",
    dopBonus: "",
    url: "https://www.psk.hr/",
    rating: 9.4,
    stars: 5,
    reviews: 3152,
    badges: ["TREND"],
    terms: "18+ • Odgovorno klađenje • Licencirano • Vrijede T&C",
    isTrending: true,
  },
  {
    id: 4,
    name: "SuperSport",
    logo: "/supersport.png",
    bonus: "Do 100€",
    url: "https://www.supersport.hr/",
    rating: 9.2,
    stars: 5,
    reviews: 3972,
    badges: ["POPULARNO"],
    terms: "18+ • Bezpečna platforma • Provjereno • Igrajte odgovorno",
    isPopular: true,
  },
]

export const firstListSites: FirstListSite[] = [
   {
    id: 1,
    name: "Favbet",
    logo: "/favbet.svg",
    bonus: "Do 300€",
    dopBonus: "+ 30€ Oklade Bez Rizika",
    url: "https://www.favbet.hr/",
    rating: 9.6,
    stars: 5,
    reviews: 3841,
    badges: ["NAJBOLJA OCJENA", "VRHUNSKI IZBOR"],
    terms: "18+ • Odgovorno klađenje • Licencirano • Primjenjuju se T&C",
    isTopRating: true,
    isTopLine: true,
  },
  {
    id: 2,
    name: "Germania Sport",
    logo: "/germania.svg",
    bonus: "Cash Out na Klađenju Uživo",
    url: "https://www.germaniasport.hr/",
    rating: 9.5,
    stars: 5,
    reviews: 2864,
    badges: ["POPULARNO", "TREND"],
    terms: "18+ • Sigurna igra • Provjereno • Primjenjuju se uvjeti",
    isPopular: true,
    isTrending: true,
  },
  {
    id: 3,
    name: "PSK",
    logo: "/psk.webp",
    bonus: "Dvaput Je Dvaput 2x100€",
    dopBonus: "",
    url: "https://www.psk.hr/",
    rating: 9.4,
    stars: 5,
    reviews: 3152,
    badges: ["TREND"],
    terms: "18+ • Odgovorno klađenje • Licencirano • Vrijede T&C",
    isTrending: true,
  },
  {
    id: 4,
    name: "SuperSport",
    logo: "/supersport.png",
    bonus: "Do 100€",
    url: "https://www.supersport.hr/",
    rating: 9.2,
    stars: 5,
    reviews: 3972,
    badges: ["POPULARNO"],
    terms: "18+ • Bezpečna platforma • Provjereno • Igrajte odgovorno",
    isPopular: true,
  },
]
