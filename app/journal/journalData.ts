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
    id: 4, // Unique ID
    slug: 'all-hail-the-marsh',
    title: "ALL HAIL THE MARSH!",
    date: "DEC 23, 2015",
    excerpt: "Many people have asked me why I am so attached to the Olpejeta conservancy. This place holds a special place in my heart for very many reasons but most importantly because I always look at it through fresh eyes.",
    image: "https://kuhiwanjohi.wordpress.com/wp-content/uploads/2015/12/img_20151223_171240.jpeg", // Using WP image directly
    category: "WILDLIFE",
    content: `
      <p>Many people have asked me why I am so attached to the <strong>Olpejeta conservancy</strong>. Some of my friends think I should work there while others assume that I already do… My first ever game drive (one I can actually remember) was at this conservancy when I was in class four.</p>
      
      <p>It was the most exciting day for me and I can distinctly remember the giraffes at the gate, the boat ride at the chimpanzee sanctuary where one rowdy chimp (probably Max) decided to throw stones and sticks at us making sure we did not enjoy our ride at all and I remember meeting and touching Morani the then ambassador for black rhinos.</p>

      <p>Long story short, this place holds a special place in my heart for very many reasons but most importantly because I always look at it through fresh eyes. In the last one year I have been to the conservancy more times than I can count but no matter how many times I see the view from the Marsh circuit, it never gets old.</p>

      <p>Today I am sharing some of my favorite shots from the last one year. Hope you love the view as much as I do and it inspires you to go discover Olpejeta if you haven’t already especially now that the holidays are here… Trust me it will leave a lasting impression.</p>

      <h3 class="text-lg font-serif font-bold mt-8 mb-4">Moments from the Marsh</h3>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <img src="https://kuhiwanjohi.wordpress.com/wp-content/uploads/2015/12/img_20151223_170701.jpeg" alt="Ol Pejeta Landscape" class="w-full h-64 object-cover rounded-sm" />
        <img src="https://kuhiwanjohi.wordpress.com/wp-content/uploads/2015/12/img_20151223_171318.jpeg" alt="Wildlife at the Marsh" class="w-full h-64 object-cover rounded-sm" />
        <img src="https://kuhiwanjohi.wordpress.com/wp-content/uploads/2015/12/img_20151223_171023.jpeg" alt="Elephants" class="w-full h-64 object-cover rounded-sm" />
        <img src="https://kuhiwanjohi.wordpress.com/wp-content/uploads/2015/12/img_20151223_171811.jpeg" alt="Buffalo" class="w-full h-64 object-cover rounded-sm" />
      </div>

      <p><strong>Happy Holidays,<br/>With all my love,<br/>Mukuhi</strong></p>
    `
  },
  {
    id: 1,
    slug: 'laikipia-at-dawn',
    title: "WHEN THE RAINS REFUSE TO COME: A GLIMPSE INTO SAMBURU RESILIENCE",
    date: "JUNE 02, 2025",
    excerpt: "It begins quietly. The rivers shrink back into the earth and dust lingers longer in the air. Livestock tread the same worn paths to dry riverbeds, sniffing at stones where water once flowed.",
    image: "/images/journal-1.jpg", 
    category: "CULTURE",
    content: "<p>It begins quietly. The rivers shrink back into the earth and dust lingers longer in the air. Livestock tread the same worn paths to dry riverbeds, sniffing at stones where water once flowed. And somewhere, not far from the silence, a collective of Samburu women, known as Ntorosi begin to prepare.</p><p>This is a story of resilience, of a community that refuses to break even when the sky refuses to open.</p>"
  },
  {
    id: 2,
    slug: 'conservation-efforts',
    title: "NAIROBI IN MOTION: BETWEEN MEMORY AND MOMENTUM",
    date: "MAY 15, 2025",
    excerpt: "Before Nairobi's skyline claimed the horizon, it was a highland plain. Edged by cool rivers and grazed by Maasai herders, the region was known as Enkare Nyirobi, meaning “the place of cool waters”.",
    image: "/images/journal-2.jpg", 
    category: "HISTORY",
    content: "<p>Before Nairobi's skyline claimed the horizon, it was a highland plain. Edged by cool rivers and grazed by Maasai herders, the region was known as Enkare Nyirobi.</p><p>Today, the city pulses with a different kind of energy, a blend of history and frantic modernity that defines the Kenyan experience.</p>"
  },
  {
    id: 3,
    slug: 'walking-safari',
    title: "ONCE UPON A TIDAL BREEZE: THE STORY OF LAMU",
    date: "APRIL 20, 2025",
    excerpt: "Somewhere, between the shifting tides of the Indian Ocean lies Lamu, a town shaped not only by time, but by encounter. As East Africa's oldest living town, Lamu is more than its weathered coral walls.",
    image: "/images/journal-3.jpg",
    category: "DESTINATIONS",
    content: "<p>Somewhere, between the shifting tides of the Indian Ocean lies Lamu, a town shaped not only by time, but by encounter.</p><p>Walking through its narrow streets is like walking back in time, where the only traffic is donkeys and dhows drift lazily on the horizon.</p>"
  }
];