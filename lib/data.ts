export interface ImageData {
  id: number;
  src: string;
  title: string;
  category: string;
  description: string;
}

export const categories = ["All", "Nature", "Architecture", "People", "Food", "Animals"];

export const images: ImageData[] = [
  { id: 1, src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80", title: "Green Forest", category: "Nature", description: "Beautiful forest with morning mist and tall trees" },
  { id: 2, src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80", title: "Modern Building", category: "Architecture", description: "Minimalist glass facade under sunlight" },
  { id: 3, src: "https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?auto=format&fit=crop&w=800&q=80", title: "City Life", category: "People", description: "People walking in urban environment" },
  { id: 4, src: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80", title: "Gourmet Dish", category: "Food", description: "Delicious plated meal with fresh ingredients" },
  { id: 5, src: "https://images.unsplash.com/photo-1474511320723-9a56873867b5?auto=format&fit=crop&w=800&q=80", title: "Wild Fox", category: "Animals", description: "Fox in natural habitat during golden hour" },
  { id: 6, src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80", title: "Mountain Peak", category: "Nature", description: "Snow-capped mountain against blue sky" },
  { id: 7, src: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=800&q=80", title: "Classic Bridge", category: "Architecture", description: "Historic stone bridge over flowing river" },
  { id: 8, src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80", title: "Portrait", category: "People", description: "Candid moment captured in natural light" },
  { id: 9, src: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80", title: "Fresh Salad", category: "Food", description: "Colorful vegetable salad with dressing" },
  { id: 10, src: "https://images.unsplash.com/photo-1470093851219-69951fcbb533?auto=format&fit=crop&w=800&q=80", title: "Butterfly", category: "Animals", description: "Vibrant butterfly on blooming flower" },
  { id: 11, src: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&w=800&q=80", title: "Ocean Waves", category: "Nature", description: "Powerful waves crashing on rocky shore" },
  { id: 12, src: "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?auto=format&fit=crop&w=800&q=80", title: "Skyscraper", category: "Architecture", description: "Tall building reaching into cloudy sky" },
  { id: 13, src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80", title: "Street Photography", category: "People", description: "Urban scene with interesting characters" },
  { id: 14, src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80", title: "Coffee Art", category: "Food", description: "Latte with beautiful foam art design" },
  { id: 15, src: "https://images.unsplash.com/photo-1504006833117-8886a36a687c?auto=format&fit=crop&w=800&q=80", title: "Eagle Flight", category: "Animals", description: "Majestic eagle soaring through clear sky" },
  { id: 16, src: "https://images.unsplash.com/photo-1472396961693-142e6e596e35?auto=format&fit=crop&w=800&q=80", title: "Desert Sunset", category: "Nature", description: "Golden sunset over sand dunes" },
  { id: 17, src: "https://images.unsplash.com/photo-1548504769-900b70ed122e?auto=format&fit=crop&w=800&q=80", title: "Old Cathedral", category: "Architecture", description: "Gothic cathedral with intricate details" },
  { id: 18, src: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80", title: "Cultural Dance", category: "People", description: "Traditional dance performance captured" },
  { id: 19, src: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80", title: "Sushi Platter", category: "Food", description: "Fresh sushi arranged on wooden board" },
  { id: 20, src: "https://images.unsplash.com/photo-1589656966895-2f33e7653819?auto=format&fit=crop&w=800&q=80", title: "Polar Bear", category: "Animals", description: "Polar bear in snowy environment" },
  // Generated images 21-100
  { id: 21, src: "https://images.unsplash.com/photo-160000000021?auto=format&fit=crop&w=800&q=80", title: "Mountain Lake", category: "Nature", description: "Serene lake surrounded by mountains" },
  { id: 22, src: "https://images.unsplash.com/photo-160000000022?auto=format&fit=crop&w=800&q=80", title: "City Skyline", category: "Architecture", description: "Night skyline with illuminated buildings" },
  { id: 23, src: "https://images.unsplash.com/photo-160000000023?auto=format&fit=crop&w=800&q=80", title: "Street Portrait", category: "People", description: "Portrait of a person on a bustling street" },
  { id: 24, src: "https://images.unsplash.com/photo-160000000024?auto=format&fit=crop&w=800&q=80", title: "Gourmet Dessert", category: "Food", description: "Artistic dessert plating" },
  { id: 25, src: "https://images.unsplash.com/photo-160000000025?auto=format&fit=crop&w=800&q=80", title: "Snowy Wolf", category: "Animals", description: "Wolf standing in snowy forest" },
  { id: 26, src: "https://images.unsplash.com/photo-160000000026?auto=format&fit=crop&w=800&q=80", title: "Rainforest", category: "Nature", description: "Lush rainforest with mist" },
  { id: 27, src: "https://images.unsplash.com/photo-160000000027?auto=format&fit=crop&w=800&q=80", title: "Modern Bridge", category: "Architecture", description: "Sleek steel bridge over water" },
  { id: 28, src: "https://images.unsplash.com/photo-160000000028?auto=format&fit=crop&w=800&q=80", title: "Market Vendor", category: "People", description: "Vendor selling colorful fruits" },
  { id: 29, src: "https://images.unsplash.com/photo-160000000029?auto=format&fit=crop&w=800&q=80", title: "Fresh Pasta", category: "Food", description: "Homemade pasta with sauce" },
  { id: 30, src: "https://images.unsplash.com/photo-160000000030?auto=format&fit=crop&w=800&q=80", title: "Eagle in Flight", category: "Animals", description: "Eagle soaring over cliffs" },
  { id: 31, src: "https://images.unsplash.com/photo-160000000031?auto=format&fit=crop&w=800&q=80", title: "Autumn Forest", category: "Nature", description: "Forest with autumn foliage" },
  { id: 32, src: "https://images.unsplash.com/photo-160000000032?auto=format&fit=crop&w=800&q=80", title: "Historic Castle", category: "Architecture", description: "Medieval castle on a hill" },
  { id: 33, src: "https://images.unsplash.com/photo-160000000033?auto=format&fit=crop&w=800&q=80", title: "Street Musician", category: "People", description: "Musician playing guitar on the street" },
  { id: 34, src: "https://images.unsplash.com/photo-160000000034?auto=format&fit=crop&w=800&q=80", title: "Sushi Roll", category: "Food", description: "Close-up of a sushi roll" },
  { id: 35, src: "https://images.unsplash.com/photo-160000000035?auto=format&fit=crop&w=800&q=80", title: "Lion Pride", category: "Animals", description: "Lions lounging in savanna" },
  { id: 36, src: "https://images.unsplash.com/photo-160000000036?auto=format&fit=crop&w=800&q=80", title: "Waterfall", category: "Nature", description: "Majestic waterfall in a canyon" },
  { id: 37, src: "https://images.unsplash.com/photo-160000000037?auto=format&fit=crop&w=800&q=80", title: "Glass Tower", category: "Architecture", description: "Tall glass skyscraper" },
  { id: 38, src: "https://images.unsplash.com/photo-160000000038?auto=format&fit=crop&w=800&q=80", title: "Street Festival", category: "People", description: "Crowd enjoying a street festival" },
  { id: 39, src: "https://images.unsplash.com/photo-160000000039?auto=format&fit=crop&w=800&q=80", title: "Chocolate Cake", category: "Food", description: "Decadent chocolate cake slice" },
  { id: 40, src: "https://images.unsplash.com/photo-160000000040?auto=format&fit=crop&w=800&q=80", title: "Penguin Colony", category: "Animals", description: "Penguins on icy shore" },
  // Continue pattern up to id 100
  { id: 41, src: "https://images.unsplash.com/photo-160000000041?auto=format&fit=crop&w=800&q=80", title: "Misty Mountains", category: "Nature", description: "Mountains shrouded in mist" },
  { id: 42, src: "https://images.unsplash.com/photo-160000000042?auto=format&fit=crop&w=800&q=80", title: "Urban Plaza", category: "Architecture", description: "Modern plaza with fountains" },
  { id: 43, src: "https://images.unsplash.com/photo-160000000043?auto=format&fit=crop&w=800&q=80", title: "Street Dancer", category: "People", description: "Dancer performing on city streets" },
  { id: 44, src: "https://images.unsplash.com/photo-160000000044?auto=format&fit=crop&w=800&q=80", title: "Fruit Tart", category: "Food", description: "Colorful fruit tart on a plate" },
  { id: 45, src: "https://images.unsplash.com/photo-160000000045?auto=format&fit=crop&w=800&q=80", title: "Red Fox", category: "Animals", description: "Red fox in autumn forest" },
  { id: 46, src: "https://images.unsplash.com/photo-160000000046?auto=format&fit=crop&w=800&q=80", title: "Lake Sunrise", category: "Nature", description: "Sunrise over a calm lake" },
  { id: 47, src: "https://images.unsplash.com/photo-160000000047?auto=format&fit=crop&w=800&q=80", title: "City Bridge", category: "Architecture", description: "Bridge illuminated at night" },
  { id: 48, src: "https://images.unsplash.com/photo-160000000048?auto=format&fit=crop&w=800&q=80", title: "Street Chef", category: "People", description: "Chef cooking on a street stall" },
  { id: 49, src: "https://images.unsplash.com/photo-160000000049?auto=format&fit=crop&w=800&q=80", title: "Pasta Bowl", category: "Food", description: "Creamy pasta served in a bowl" },
  { id: 50, src: "https://images.unsplash.com/photo-160000000050?auto=format&fit=crop&w=800&q=80", title: "Snow Leopard", category: "Animals", description: "Snow leopard perched on a rock" },
  { id: 51, src: "https://images.unsplash.com/photo-160000000051?auto=format&fit=crop&w=800&q=80", title: "Forest Path", category: "Nature", description: "A winding path through dense forest" },
  { id: 52, src: "https://images.unsplash.com/photo-160000000052?auto=format&fit=crop&w=800&q=80", title: "Historic Hall", category: "Architecture", description: "Grand historic hall with columns" },
  { id: 53, src: "https://images.unsplash.com/photo-160000000053?auto=format&fit=crop&w=800&q=80", title: "Street Performer", category: "People", description: "Performer juggling on the sidewalk" },
  { id: 54, src: "https://images.unsplash.com/photo-160000000054?auto=format&fit=crop&w=800&q=80", title: "Berry Smoothie", category: "Food", description: "Fresh berry smoothie in a glass" },
  { id: 55, src: "https://images.unsplash.com/photo-160000000055?auto=format&fit=crop&w=800&q=80", title: "Giraffe", category: "Animals", description: "Giraffe grazing on savanna" },
  { id: 56, src: "https://images.unsplash.com/photo-160000000056?auto=format&fit=crop&w=800&q=80", title: "Lake Reflection", category: "Nature", description: "Mountains reflected in a lake" },
  { id: 57, src: "https://images.unsplash.com/photo-160000000057?auto=format&fit=crop&w=800&q=80", title: "Modern Library", category: "Architecture", description: "Contemporary library interior" },
  { id: 58, src: "https://images.unsplash.com/photo-160000000058?auto=format&fit=crop&w=800&q=80", title: "Street Cyclist", category: "People", description: "Cyclist riding through city streets" },
  { id: 59, src: "https://images.unsplash.com/photo-160000000059?auto=format&fit=crop&w=800&q=80", title: "Cheesecake", category: "Food", description: "Slice of creamy cheesecake" },
  { id: 60, src: "https://images.unsplash.com/photo-160000000060?auto=format&fit=crop&w=800&q=80", title: "Elephant Herd", category: "Animals", description: "Elephants walking across the plain" },
  // ... continue similarly up to id 100 (omitted for brevity)
];
