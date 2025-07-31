
export interface MentorData {
  id: number;
  name: string;
  title: string;
  category: string;
  company: string;
  location: string;
  description: string;
  skills: string[];
  rating: number;
  avatar: string;
}

export const allMentorsData: MentorData[] = [
  {
    id: 1,
    name: "Vanya Aurelia",
    title: "Head of Product Design",
    category: "UX/UI Designer",
    company: "Gojek",
    location: "Jakarta",
    description: "Helping you navigate your design career, fr...",
    skills: ["Design Leadership", "Design Systems", "Team..."],
    rating: 4.9,
    avatar: "/avatars/vanya-aurelia.png",
  },
  {
    id: 2,
    name: "Adrian Wibowo",
    title: "Senior Product Designer",
    category: "UX/UI Designer",
    company: "GoDigital",
    location: "Jakarta",
    description: "I specialize in agile UX and launching prod...",
    skills: ["Agile UX", "Rapid Prototyping", "Startup Life"],
    rating: 4.8,
    avatar: "/avatars/adrian-wibowo.png",
  },
  {
    id: 3,
    name: "Kaelan Dimitri",
    title: "UI/Visual Designer",
    category: "UX/UI Designer",
    company: "Kreasi Digital Agency",
    location: "Bandung",
    description: "Passionate about creating beautiful, pixel...",
    skills: ["Visual Design", "Mobile UI Design", "Figma", "Br..."],
    rating: 4.8,
    avatar: "/avatars/kaelan-dimitri.png",
  },
  {
    id: 4,
    name: "Sierra Anindita",
    title: "Senior UX Writer",
    category: "UX/UI Designer",
    company: "InvestaSecure",
    location: "Surabaya",
    description: "Words matter. I can help you craft clear an...",
    skills: ["UX Writing", "Microcopy", "Content Strategy", "I..."],
    rating: 4.7,
    avatar: "/avatars/sierra-anindita.png",
  },
];