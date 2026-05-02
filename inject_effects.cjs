const fs = require('fs');
const path = require('path');

const viewsDir = 'views';

function processFile(filename, replacements) {
  const filePath = path.join(viewsDir, filename);
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');
  
  replacements.forEach(r => {
    content = content.replace(r.search, r.replace);
  });
  
  fs.writeFileSync(filePath, content);
  console.log('Processed', filename);
}

const cardClasses = 'bg-white/[0.02] backdrop-blur-xl rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.2)] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] hover:-translate-y-2 transition-all duration-500 relative overflow-hidden group flex flex-col';
const glowDiv = '\n              {/* Decorative Background Blur */}\n              <div className="absolute -top-24 -right-24 w-64 h-64 bg-gradient-to-br from-[#FACC15]/20 to-transparent rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700 ease-out pointer-events-none" />\n';

// 1. About.tsx Cards
processFile('About.tsx', [
  {
    search: /className="p-8 bg-white\/\[0\.02\] backdrop-blur-xl border border-white\/5 shadow-sm hover:shadow-md transition-shadow"/g,
    replace: `className="${cardClasses} p-8"`
  },
  {
    search: /(<div className="bg-white\/\[0\.02\] backdrop-blur-xl rounded-\[2rem\] shadow-\[0_8px_30px_rgb\(0,0,0,0\.2\)\] border border-white\/5 hover:border-white\/10 hover:bg-white\/\[0\.04\] hover:-translate-y-2 transition-all duration-500 relative overflow-hidden group flex flex-col p-8">)/g,
    replace: `$1${glowDiv}`
  }
]);

// 2. The 4 Management Policy Pages
['EnvironmentalManagement.tsx', 'OhsManagement.tsx', 'IntegratedManagementPolicy.tsx', 'QualityManagement.tsx'].forEach(file => {
  processFile(file, [
    {
      search: /className="bg-white\/\[0\.02\] backdrop-blur-sm border border-white\/8 rounded-2xl p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-1"/g,
      replace: `className="${cardClasses} p-8"`
    },
    {
      search: /(<motion\.div[^>]*\n\s*className="bg-white\/\[0\.02\] backdrop-blur-xl rounded-\[2rem\] shadow-\[0_8px_30px_rgb\(0,0,0,0\.2\)\] border border-white\/5 hover:border-white\/10 hover:bg-white\/\[0\.04\] hover:-translate-y-2 transition-all duration-500 relative overflow-hidden group flex flex-col p-8"[^>]*>)/g,
      replace: `$1${glowDiv}`
    }
  ]);
});

// 3. Machinery.tsx Cards
processFile('Machinery.tsx', [
  {
    search: /className={`group relative flex flex-col bg-white\/\[0\.02\] backdrop-blur-xl border shadow-sm hover:shadow-2xl transition-all duration-700 h-full rounded-2xl overflow-hidden \${/g,
    replace: `className={\`${cardClasses} h-full \${`
  },
  {
    search: /className="lg:col-span-2 md:col-span-1 bg-white\/\[0\.02\] backdrop-blur-xl border border-white\/5 shadow-sm hover:shadow-2xl transition-all duration-700 rounded-2xl overflow-hidden flex flex-col min-h-\[500px\]"/g,
    replace: `className="lg:col-span-2 md:col-span-1 ${cardClasses} min-h-[500px]"`
  },
  {
    // Inject glow into the mapped cards (there is a div inside the Link, let's inject after the Link's inner wrapper)
    search: /(<div className={`bg-white\/\[0\.02\] backdrop-blur-xl rounded-\[2rem\] shadow-\[0_8px_30px_rgb\(0,0,0,0\.2\)\] border border-white\/5 hover:border-white\/10 hover:bg-white\/\[0\.04\] hover:-translate-y-2 transition-all duration-500 relative overflow-hidden group flex flex-col h-full \${[^}]*}`}>\n\s*<div className="relative p-6 lg:p-8 flex-grow flex flex-col">)/g,
    replace: `$1${glowDiv}`
  },
  {
    // Inject glow into featured card
    search: /(<div className="lg:col-span-2 md:col-span-1 bg-white\/\[0\.02\] backdrop-blur-xl rounded-\[2rem\] shadow-\[0_8px_30px_rgb\(0,0,0,0\.2\)\] border border-white\/5 hover:border-white\/10 hover:bg-white\/\[0\.04\] hover:-translate-y-2 transition-all duration-500 relative overflow-hidden group flex flex-col min-h-\[500px\]">)/g,
    replace: `$1${glowDiv}`
  }
]);

// 4. Production.tsx Cards
processFile('Production.tsx', [
  {
    search: /className="group relative bg-white\/\[0\.02\] backdrop-blur-xl border border-white\/8 rounded-2xl p-10 md:p-14 overflow-hidden flex flex-col justify-between min-h-\[220px\] hover:shadow-2xl hover:-translate-y-1 transition-all duration-500"/g,
    replace: `className="${cardClasses} p-10 md:p-14 min-h-[220px]"`
  },
  {
    search: /(<motion\.div\n\s*key={idx}\n\s*initial={{ opacity: 0, y: 30 }}\n\s*whileInView={{ opacity: 1, y: 0 }}\n\s*viewport={{ once: true }}\n\s*transition={{ delay: idx \* 0\.1 }}\n\s*className="bg-white\/\[0\.02\] backdrop-blur-xl rounded-\[2rem\] shadow-\[0_8px_30px_rgb\(0,0,0,0\.2\)\] border border-white\/5 hover:border-white\/10 hover:bg-white\/\[0\.04\] hover:-translate-y-2 transition-all duration-500 relative overflow-hidden group flex flex-col p-10 md:p-14 min-h-\[220px\]"\n\s*>)/g,
    replace: `$1${glowDiv}`
  }
]);

// 5. Products.tsx Cards
processFile('Products.tsx', [
  {
    search: /className="group flex flex-col bg-white\/\[0\.02\] backdrop-blur-xl border border-white\/5 rounded-\[2rem\] p-5 shadow-sm hover:shadow-2xl transition-all duration-500 border border-white\/5"/g,
    replace: `className="${cardClasses} p-5"`
  },
  {
    search: /(<motion\.div[^>]*\n\s*className="bg-white\/\[0\.02\] backdrop-blur-xl rounded-\[2rem\] shadow-\[0_8px_30px_rgb\(0,0,0,0\.2\)\] border border-white\/5 hover:border-white\/10 hover:bg-white\/\[0\.04\] hover:-translate-y-2 transition-all duration-500 relative overflow-hidden group flex flex-col p-5"\n\s*>)/g,
    replace: `$1${glowDiv}`
  }
]);

console.log('All targeted cards have been updated with the Home page glassmorphism glow and hover effects.');
