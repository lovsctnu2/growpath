
export interface JobData {
  id: number;
  title: string;
  category: string;
  company: string;
  logo: string;
  location: string;
  salary: string;
  type: 'Internship' | 'Full-time' | 'Bootcamp' | 'Fresh Graduate';
}

export const allJobsData: JobData[] = [
  {
    id: 1,
    title: "UI/UX Designer",
    category: "UX/UI Designer",
    company: "Koneksi Tech",
    logo: "/logos/koneksi-tech.png",
    location: "Jakarta Selatan",
    salary: "Rp 8.000.000 - 9.500.000",
    type: "Internship",
  },
  {
    id: 2,
    title: "UX Researcher",
    category: "UX/UI Designer",
    company: "First Solutions",
    logo: "/logos/first-solutions.png",
    location: "Bandung",
    salary: "Rp 9.000.000 - 10.500.000",
    type: "Full-time",
  },
  {
    id: 3,
    title: "Product Designer (UI/UX)",
    category: "UX/UI Designer",
    company: "GoDigital Agency",
    logo: "/logos/godigital.png",
    location: "Jakarta Barat",
    salary: "Rp 9.000.000 - 12.000.000",
    type: "Full-time",
  },
  {
    id: 4,
    title: "Software Engineer",
    category: "Software Engineering",
    company: "TechVerse",
    logo: "/logos/techverse.png",
    location: "Yogyakarta",
    salary: "Rp 10.000.000 - 15.000.000",
    type: "Full-time",
  },
];