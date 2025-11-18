export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  category: string;
  content?: string;
}

export const journalPosts: BlogPost[] = [
  {
    id: 1,
    slug: 'laikipia-at-dawn',
    title: "WHEN THE RAINS REFUSE TO COME: A GLIMPSE INTO SAMBURU RESILIENCE",
    date: "JUNE 02, 2025",
    excerpt: "It begins quietly. The rivers shrink back into the earth and dust lingers longer in the air. Livestock tread the same worn paths to dry riverbeds, sniffing at stones where water once flowed.",
    image: "/images/journal-1.jpg", 
    category: "CULTURE"
  },
  {
    id: 2,
    slug: 'conservation-efforts',
    title: "NAIROBI IN MOTION: BETWEEN MEMORY AND MOMENTUM",
    date: "MAY 15, 2025",
    excerpt: "Before Nairobi's skyline claimed the horizon, it was a highland plain. Edged by cool rivers and grazed by Maasai herders, the region was known as Enkare Nyirobi, meaning “the place of cool waters”.",
    image: "/images/journal-2.jpg", 
    category: "HISTORY"
  },
  {
    id: 3,
    slug: 'walking-safari',
    title: "ONCE UPON A TIDAL BREEZE: THE STORY OF LAMU",
    date: "APRIL 20, 2025",
    excerpt: "Somewhere, between the shifting tides of the Indian Ocean lies Lamu, a town shaped not only by time, but by encounter. As East Africa's oldest living town, Lamu is more than its weathered coral walls.",
    image: "/images/journal-3.jpg",
    category: "DESTINATIONS"
  }
];