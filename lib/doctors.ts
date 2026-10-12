export type WeekDay =
	| "Monday"
	| "Tuesday"
	| "Wednesday"
	| "Thursday"
	| "Friday"
	| "Saturday"
	| "Sunday";

export type AvailabilitySlot = {
	startTime: string; // 24-hour format: "09:00"
	endTime: string; // 24-hour format: "13:00"
};

export type WeeklyAvailability = {
	day: WeekDay;
	slots: AvailabilitySlot[];
};

export type Doctor = {
	slug: string;
	name: string;
	role: string;
	img: string;
	phone?: string;
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
	weeklyAvailability: WeeklyAvailability[];
};

export const doctors: Doctor[] = [
	{
		slug: "travis-oman",
		name: "Dr. Travis Oman",
		role: "Ophthalmologist",
		img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=400&auto=format&fit=crop",
		reviews: 128,
		featured: true,
		degree: "MBBS, MS (Ophthalmology)",
		chamber: "Accra Eye Care Centre",
		location: "Accra, Ghana",
		address: "Ring Road Central, Accra, Ghana",
		phone: "+233 24 123 4567",
		specialities: ["Cataract Surgery", "Glaucoma", "Eye Care"],
		issues: ["Blurred Vision", "Eye Pain", "Dry Eyes"],
		qualification:
			"Specialist training in ophthalmology and clinical eye care.",
		experienceYears: 12,
		priceRange: "GH₵250 - GH₵500",
		traits: ["Patient", "Detail-Oriented", "Good Listener"],
		about: "Dr. Travis Oman focuses on comprehensive eye examinations, the diagnosis of common eye conditions, and long-term vision care. His consultations emphasize clear explanations and practical treatment plans tailored to each patient's needs.",
		weeklyAvailability: [
			{
				day: "Monday",
				slots: [{ startTime: "09:00", endTime: "13:00" }],
			},
			{
				day: "Tuesday",
				slots: [{ startTime: "14:00", endTime: "18:00" }],
			},
			{
				day: "Wednesday",
				slots: [{ startTime: "09:00", endTime: "13:00" }],
			},
			{
				day: "Thursday",
				slots: [{ startTime: "14:00", endTime: "18:00" }],
			},
			{
				day: "Friday",
				slots: [{ startTime: "09:00", endTime: "12:00" }],
			},
			{
				day: "Saturday",
				slots: [{ startTime: "09:00", endTime: "12:00" }],
			},
		],
	},
	{
		slug: "annah-ray",
		name: "Dr. Annah Ray",
		role: "Senior Dentist",
		img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=400&auto=format&fit=crop",
		reviews: 96,
		featured: true,
		degree: "BDS, MSc (Restorative Dentistry)",
		phone: "+233 24 987 6543",
		chamber: "Accra Dental & Oral Care",
		location: "Accra, Ghana",
		address: "Osu Oxford Street, Accra, Ghana",
		specialities: [
			"General Dentistry",
			"Cosmetic Dentistry",
			"Restorative Dentistry",
		],
		issues: ["Toothache", "Gum Problems", "Tooth Sensitivity"],
		qualification:
			"Dental training in restorative and preventive oral care.",
		experienceYears: 10,
		priceRange: "GH₵200 - GH₵600",
		traits: ["Friendly", "Good Listener", "Patient"],
		about: "Dr. Annah Ray provides preventive dental care, routine examinations, and treatment planning for common oral health concerns. She aims to make dental visits comfortable and helps patients understand their options before treatment.",
		weeklyAvailability: [
			{
				day: "Monday",
				slots: [{ startTime: "10:00", endTime: "14:00" }],
			},
			{
				day: "Tuesday",
				slots: [{ startTime: "15:00", endTime: "19:00" }],
			},
			{
				day: "Wednesday",
				slots: [{ startTime: "10:00", endTime: "14:00" }],
			},
			{
				day: "Thursday",
				slots: [{ startTime: "15:00", endTime: "19:00" }],
			},
			{
				day: "Friday",
				slots: [{ startTime: "09:00", endTime: "13:00" }],
			},
			{
				day: "Saturday",
				slots: [{ startTime: "09:00", endTime: "13:00" }],
			},
		],
	},
	{
		slug: "vivian-monroe",
		name: "Dr. Vivian Monroe",
		role: "Pediatric Surgeon",
		img: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?q=80&w=400&auto=format&fit=crop",
		reviews: 84,
		degree: "MBBS, Fellowship in Pediatric Surgery",
		phone: "+233 24 456 7890",
		chamber: "Children's Specialist Clinic",
		location: "Accra, Ghana",
		address: "East Legon, Accra, Ghana",
		specialities: [
			"Pediatric Surgery",
			"Child Health",
			"Surgical Consultation",
		],
		issues: [
			"Pediatric Surgical Conditions",
			"Hernia Assessment",
			"Postoperative Follow-up",
		],
		qualification:
			"Specialist training in pediatric surgical assessment and care.",
		experienceYears: 11,
		priceRange: "GH₵300 - GH₵650",
		traits: ["Compassionate", "Patient", "Child-Friendly"],
		about: "Dr. Vivian Monroe works with children and their families to assess surgical concerns, explain available treatment options, and coordinate follow-up care. Each consultation is adapted to the child's age and individual needs.",
		weeklyAvailability: [
			{
				day: "Monday",
				slots: [{ startTime: "09:00", endTime: "12:00" }],
			},
			{
				day: "Tuesday",
				slots: [{ startTime: "13:00", endTime: "16:00" }],
			},
			{
				day: "Wednesday",
				slots: [{ startTime: "09:00", endTime: "12:00" }],
			},
			{
				day: "Friday",
				slots: [{ startTime: "13:00", endTime: "16:00" }],
			},
			{
				day: "Saturday",
				slots: [{ startTime: "09:00", endTime: "11:00" }],
			},
		],
	},
	{
		slug: "richard-brook",
		name: "Dr. Richard Brook",
		role: "Gastroenterologist",
		img: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=400&auto=format&fit=crop",
		reviews: 112,
		degree: "MBBS, MD (Internal Medicine), Fellowship in Gastroenterology",
		phone: "+233 24 456 7890",
		chamber: "Central Digestive Health Clinic",
		location: "Accra, Ghana",
		address: "Cantonments Road, Accra, Ghana",
		specialities: [
			"Digestive Health",
			"Liver Conditions",
			"Endoscopy Consultation",
		],
		issues: ["Acid Reflux", "Abdominal Discomfort", "Digestive Problems"],
		qualification:
			"Specialist training in digestive and gastrointestinal medicine.",
		experienceYears: 14,
		priceRange: "GH₵250 - GH₵550",
		traits: ["Analytical", "Patient", "Clear Communicator"],
		about: "Dr. Richard Brook evaluates digestive health concerns and supports patients with investigation planning, treatment discussions, and follow-up. He prioritizes a careful medical history and clear explanations of next steps.",
		weeklyAvailability: [
			{
				day: "Monday",
				slots: [{ startTime: "08:30", endTime: "12:30" }],
			},
			{
				day: "Tuesday",
				slots: [{ startTime: "14:00", endTime: "17:00" }],
			},
			{
				day: "Wednesday",
				slots: [{ startTime: "08:30", endTime: "12:30" }],
			},
			{
				day: "Thursday",
				slots: [{ startTime: "14:00", endTime: "17:00" }],
			},
			{
				day: "Friday",
				slots: [{ startTime: "09:00", endTime: "12:00" }],
			},
		],
	},
	{
		slug: "ellen-may",
		name: "Dr. Ellen May",
		role: "Neurologist",
		img: "https://images.unsplash.com/photo-1580281658626-ee379f3cce93?q=80&w=400&auto=format&fit=crop",
		reviews: 103,
		phone: "+233 24 321 9876",
		degree: "MBBS, MD (Neurology)",
		chamber: "NeuroCare Specialist Centre",
		location: "Accra, Ghana",
		address: "Airport Residential Area, Accra, Ghana",
		specialities: ["Neurology", "Headache Management", "Nerve Disorders"],
		issues: ["Recurring Headaches", "Numbness", "Dizziness"],
		qualification:
			"Specialist training in neurological assessment and care.",
		experienceYears: 9,
		priceRange: "GH₵280 - GH₵550",
		traits: ["Empathetic", "Thorough", "Good Listener"],
		about: "Dr. Ellen May assesses neurological symptoms and helps patients understand diagnostic and treatment options. Her consultations focus on detailed symptom histories, appropriate evaluation, and ongoing care where needed.",
		weeklyAvailability: [
			{
				day: "Monday",
				slots: [{ startTime: "13:00", endTime: "17:00" }],
			},
			{
				day: "Tuesday",
				slots: [{ startTime: "09:00", endTime: "12:00" }],
			},
			{
				day: "Wednesday",
				slots: [{ startTime: "13:00", endTime: "17:00" }],
			},
			{
				day: "Thursday",
				slots: [{ startTime: "09:00", endTime: "12:00" }],
			},
			{
				day: "Saturday",
				slots: [{ startTime: "09:00", endTime: "12:00" }],
			},
		],
	},
	{
		slug: "steven-kute",
		name: "Dr. Steven Kute",
		role: "Orthopedic Surgeon",
		img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=400&auto=format&fit=crop",
		reviews: 91,
		phone: "+233 24 456 7890",
		degree: "MBBS, MS (Orthopedics)",
		chamber: "Mobility & Bone Specialist Clinic",
		location: "Accra, Ghana",
		address: "Spintex Road, Accra, Ghana",
		specialities: ["Orthopedics", "Sports Injuries", "Joint Care"],
		issues: ["Joint Pain", "Back Pain", "Sports Injuries"],
		qualification:
			"Specialist training in musculoskeletal assessment and orthopedic care.",
		experienceYears: 13,
		priceRange: "GH₵250 - GH₵600",
		traits: ["Practical", "Patient", "Supportive"],
		about: "Dr. Steven Kute evaluates bone, joint, and musculoskeletal concerns, including sports-related injuries. He discusses appropriate investigations, conservative treatment options, and referrals when further care is needed.",
		weeklyAvailability: [
			{
				day: "Monday",
				slots: [{ startTime: "09:00", endTime: "13:00" }],
			},
			{
				day: "Tuesday",
				slots: [{ startTime: "14:00", endTime: "18:00" }],
			},
			{
				day: "Thursday",
				slots: [{ startTime: "09:00", endTime: "13:00" }],
			},
			{
				day: "Friday",
				slots: [{ startTime: "14:00", endTime: "17:00" }],
			},
			{
				day: "Saturday",
				slots: [{ startTime: "09:00", endTime: "12:00" }],
			},
		],
	},
	{
		slug: "philimon-youn",
		name: "Dr. Philimon Youn",
		role: "General Surgeon",
		img: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=400&auto=format&fit=crop",
		reviews: 76,
		phone: "+233 24 987 6543",
		degree: "MBBS, MS (General Surgery)",
		chamber: "City General Surgical Clinic",
		location: "Accra, Ghana",
		address: "Adabraka, Accra, Ghana",
		specialities: [
			"General Surgery",
			"Surgical Assessment",
			"Postoperative Care",
		],
		issues: ["Hernia Assessment", "Abdominal Symptoms", "Wound Follow-up"],
		qualification:
			"Specialist training in general surgical assessment and treatment.",
		experienceYears: 16,
		priceRange: "GH₵300 - GH₵700",
		traits: ["Experienced", "Thorough", "Calm"],
		about: "Dr. Philimon Youn provides consultations for common surgical concerns, helps patients understand possible investigations and treatment pathways, and supports follow-up after procedures.",
		weeklyAvailability: [
			{
				day: "Monday",
				slots: [{ startTime: "14:00", endTime: "17:00" }],
			},
			{
				day: "Wednesday",
				slots: [{ startTime: "09:00", endTime: "13:00" }],
			},
			{
				day: "Thursday",
				slots: [{ startTime: "14:00", endTime: "17:00" }],
			},
			{
				day: "Friday",
				slots: [{ startTime: "09:00", endTime: "12:00" }],
			},
		],
	},
	{
		slug: "nana-adjei",
		name: "Dr. Nana Adjei",
		role: "Family Physician",
		img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=400&auto=format&fit=crop",
		reviews: 117,
		phone: "+233 24 456 7890",
		degree: "MBBS, Membership in Family Medicine",
		chamber: "Community Family Health Centre",
		location: "Accra, Ghana",
		address: "Dansoman, Accra, Ghana",
		specialities: [
			"Family Medicine",
			"Preventive Care",
			"General Consultation",
		],
		issues: [
			"Routine Health Concerns",
			"Blood Pressure Follow-up",
			"Preventive Screening",
		],
		qualification:
			"Training in primary care, preventive health, and family medicine.",
		experienceYears: 8,
		priceRange: "GH₵150 - GH₵350",
		traits: ["Friendly", "Approachable", "Good Listener"],
		about: "Dr. Nana Adjei supports patients with routine health concerns, preventive screening discussions, and ongoing primary care. Consultations focus on understanding the patient's overall health and planning appropriate follow-up.",
		weeklyAvailability: [
			{
				day: "Monday",
				slots: [{ startTime: "08:00", endTime: "12:00" }],
			},
			{
				day: "Tuesday",
				slots: [{ startTime: "15:00", endTime: "18:00" }],
			},
			{
				day: "Wednesday",
				slots: [{ startTime: "08:00", endTime: "12:00" }],
			},
			{
				day: "Thursday",
				slots: [{ startTime: "15:00", endTime: "18:00" }],
			},
			{
				day: "Friday",
				slots: [{ startTime: "08:00", endTime: "12:00" }],
			},
			{
				day: "Saturday",
				slots: [{ startTime: "09:00", endTime: "13:00" }],
			},
		],
	},
];

export const doctorGrid: Doctor[] = doctors;

export function getDoctorBySlug(slug: string): Doctor | undefined {
	return doctors.find((doctor) => doctor.slug === slug);
}

export function getAllDoctorSlugs(): string[] {
	return doctors.map((doctor) => doctor.slug);
}
