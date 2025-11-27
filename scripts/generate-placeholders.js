const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, '..', 'public', 'images');

if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

const categories = {
  nature: ['#10b981', '#059669', '#047857', '#065f46'],
  architecture: ['#6366f1', '#4f46e5', '#4338ca', '#3730a3'],
  people: ['#f59e0b', '#d97706', '#b45309', '#92400e'],
  food: ['#ef4444', '#dc2626', '#b91c1c', '#991b1b'],
  animals: ['#8b5cf6', '#7c3aed', '#6d28d9', '#5b21b6'],
};

const imageConfigs = [
  { name: 'nature1', category: 'nature', text: 'Green Forest' },
  { name: 'nature2', category: 'nature', text: 'Mountain Peak' },
  { name: 'nature3', category: 'nature', text: 'Ocean Waves' },
  { name: 'nature4', category: 'nature', text: 'Desert Sunset' },
  { name: 'architecture1', category: 'architecture', text: 'Modern Building' },
  { name: 'architecture2', category: 'architecture', text: 'Classic Bridge' },
  { name: 'architecture3', category: 'architecture', text: 'Skyscraper' },
  { name: 'architecture4', category: 'architecture', text: 'Old Cathedral' },
  { name: 'people1', category: 'people', text: 'City Life' },
  { name: 'people2', category: 'people', text: 'Portrait' },
  { name: 'people3', category: 'people', text: 'Street Photo' },
  { name: 'people4', category: 'people', text: 'Cultural Dance' },
  { name: 'food1', category: 'food', text: 'Gourmet Dish' },
  { name: 'food2', category: 'food', text: 'Fresh Salad' },
  { name: 'food3', category: 'food', text: 'Coffee Art' },
  { name: 'food4', category: 'food', text: 'Sushi Platter' },
  { name: 'animals1', category: 'animals', text: 'Wild Fox' },
  { name: 'animals2', category: 'animals', text: 'Butterfly' },
  { name: 'animals3', category: 'animals', text: 'Eagle Flight' },
  { name: 'animals4', category: 'animals', text: 'Dolphin Jump' },
];

imageConfigs.forEach((config, index) => {
  const colors = categories[config.category];
  const color = colors[index % colors.length];
  
  const svg = `<svg width="800" height="800" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad${index}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${color};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${color}dd;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="800" height="800" fill="url(#grad${index})"/>
  <text x="50%" y="45%" dominant-baseline="middle" text-anchor="middle" 
        font-family="Arial, sans-serif" font-size="48" font-weight="bold" fill="white">
    ${config.text}
  </text>
  <text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" 
        font-family="Arial, sans-serif" font-size="32" fill="rgba(255,255,255,0.8)">
    ${config.category.charAt(0).toUpperCase() + config.category.slice(1)}
  </text>
</svg>`;

  fs.writeFileSync(path.join(imagesDir, `${config.name}.svg`), svg);
  console.log(`Created ${config.name}.svg`);
});

console.log('✅ All placeholder images generated successfully!');
