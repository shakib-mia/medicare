export type Doctor = {
  slug: string;
  name: string;
  role: string;
  img: string;
  reviews: number;
  featured?: boolean;
  degree?: string;
  chamber?: string;
  location?: string;
  address?: string;
  specialities?: string[];
  issues?: string[];
  qualification?: string;
  experienceYears?: number;
  priceRange?: string;
  traits?: string[];
  about?: string;
};

export const doctors: Doctor[] = [
  {
    slug: "travis-oman",
    name: "Dr. Travis Oman",
    role: "Opthalmologist",
    img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=400&auto=format&fit=crop",
    reviews: 120,
  },
  {
    slug: "annah-ray",
    name: "Dr. Annah Ray",
    role: "Senior Dentist",
    img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=400&auto=format&fit=crop",
    reviews: 120,
    featured: true,
    degree: "DDS, DMD",
    chamber: "Lorem ipsum ante duo locatols",
    location: "Accra, Ghana",
    address: "Kwame Nkrumah Circle , Accra  Ghana lorem ipsum dolor sit amet, constnene afipesing elie , sed ddeelkj",
    specialities: ["Oral Radiology", "Implantology", "Cosmetic Dentistry"],
    issues: ["Oral Radiology", "Implantology", "Cosmetic Dentistry"],
    qualification: "Licecnces: of implant and cosmetic dentistry",
    experienceYears: 15,
    priceRange: "$100 - $350",
    traits: ["Friendly", "Good Listener", "Patient"],
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In enim lorem sit rhoncus ullamcorper. Dui lorem duis amet vulputate. Nunc lobortis adipiscing faucibus diam amet sed. Scelerisque mattis tincidunt mattis a. Risus varius nunc sed ut amet in. Ut tristique vulputate ac volutpat purus scelerisque ac id. Quis quam tellus, adipiscing sit diam. Nibh ipsum nibh vitae, lacus arcu metus mi at ultricies. Volutpat habitasse nunc aenean risus. At suscipit suscipit magna est neque aliquam facilisis eu. Nisi, nullam et in ipsum, mi dignissim nec. Nibh nullam libero nibh suscipit montes, fringilla donec quis. Feugiat amet amet tristique mauris hendrerit dui integer.",
  },
  {
    slug: "vivian-monroe",
    name: "Dr. Vivian Monroe",
    role: "Pediatric Surgeon",
    img: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?q=80&w=400&auto=format&fit=crop",
    reviews: 120,
  },
  {
    slug: "richard-brook",
    name: "Dr. Richard Brook",
    role: "Gastroenterlogist",
    img: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=400&auto=format&fit=crop",
    reviews: 120,
  },
  {
    slug: "ellen-may",
    name: "Dr. Ellen May",
    role: "Neurology",
    img: "https://images.unsplash.com/photo-1580281658626-ee379f3cce93?q=80&w=400&auto=format&fit=crop",
    reviews: 120,
  },
  {
    slug: "steven-kute",
    name: "Dr. Steven Kute",
    role: "Dentician",
    img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=400&auto=format&fit=crop",
    reviews: 120,
  },
  {
    slug: "philimon-youn",
    name: "Dr. Philimon Youn",
    role: "Surgeon",
    img: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=400&auto=format&fit=crop",
    reviews: 120,
  },
  {
    slug: "annah-ray-2",
    name: "Dr. Annah Ray",
    role: "Dentician",
    img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=400&auto=format&fit=crop",
    reviews: 120,
  },
];

// repeat the base set to fill out the grid like the reference design
export const doctorGrid: Doctor[] = [
  ...doctors,
  ...doctors.slice(5).map((d) => ({ ...d })),
  ...doctors.slice(5).map((d) => ({ ...d })),
  ...doctors.slice(5).map((d) => ({ ...d })),
];

const defaultProfile = {
  location: "Accra, Ghana",
  address:
    "Kwame Nkrumah Circle , Accra  Ghana lorem ipsum dolor sit amet, constnene afipesing elie , sed ddeelkj",
  specialities: ["Oral Radiology", "Implantology", "Cosmetic Dentistry"],
  issues: ["Oral Radiology", "Implantology", "Cosmetic Dentistry"],
  qualification: "Licecnces: of implant and cosmetic dentistry",
  experienceYears: 12,
  priceRange: "$100 - $350",
  traits: ["Friendly", "Good Listener", "Patient"],
  about:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In enim lorem sit rhoncus ullamcorper. Dui lorem duis amet vulputate. Nunc lobortis adipiscing faucibus diam amet sed. Scelerisque mattis tincidunt mattis a. Risus varius nunc sed ut amet in. Ut tristique vulputate ac volutpat purus scelerisque ac id. Quis quam tellus, adipiscing sit diam.",
  degree: "MBBS, MD",
  chamber: "Lorem ipsum ante duo locatols",
};

export function getDoctorBySlug(slug: string): Doctor {
  const found = doctors.find((d) => d.slug === slug);
  const base = found ?? doctors[1];
  return { ...defaultProfile, ...base };
}

export function getAllDoctorSlugs(): string[] {
  return doctors.map((d) => d.slug);
}
