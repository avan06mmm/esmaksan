const fs = require('fs');
const path = require('path');

const viewsDir = 'views';
const ignoreFiles = ['Home.tsx', 'Contact.tsx', 'Services.tsx'];

const files = fs.readdirSync(viewsDir).filter(f => f.endsWith('.tsx') && !ignoreFiles.includes(f));

files.forEach(file => {
  const filePath = path.join(viewsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Apply Dark Mode Replacements
  content = content.replace(/bg-paper/g, 'bg-[#050505] relative overflow-hidden');
  content = content.replace(/text-ink\/(\d+)/g, 'text-white/$1');
  content = content.replace(/text-ink/g, 'text-white');
  content = content.replace(/border-ink\/(\d+)/g, 'border-white/$1');
  content = content.replace(/border-ink/g, 'border-white/10');
  content = content.replace(/bg-ink\/(\d+)/g, 'bg-white/$1');
  
  // Convert bg-white cards to glassmorphism
  content = content.replace(/bg-white p-(\d+)/g, 'bg-white/[0.02] backdrop-blur-xl border border-white/5 p-$1');
  content = content.replace(/bg-white rounded-(2xl|3xl|\[.*?\]|xl|lg)/g, 'bg-white/[0.02] backdrop-blur-xl border border-white/5 rounded-$1');
  content = content.replace(/bg-white shadow/g, 'bg-white/[0.02] backdrop-blur-xl border border-white/5 shadow');
  
  // Hover effects that need adjustments
  content = content.replace(/hover:text-brand/g, 'hover:text-[#FACC15]');
  
  // Insert ambient glow after PageHero
  if (!content.includes('blur-[120px]') && content.includes('<PageHero')) {
    content = content.replace(/(<PageHero[\s\S]*?\/>)/, '$1\n\n      {/* Subtle background ambient glow */}\n      <div className="absolute top-[30vh] left-1/2 -translate-x-1/2 w-full h-full max-w-[1200px] bg-[#FACC15]/5 blur-[120px] rounded-full pointer-events-none" />\n');
  }

  fs.writeFileSync(filePath, content);
  console.log('Updated', file);
});
