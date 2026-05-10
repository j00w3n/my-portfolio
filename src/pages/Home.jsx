import React from 'react';
import profilePic from './assets/profile.jpg';
function Home() {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center bg-[#0a0a0a] text-gray-300 px-8">
      {/* The Main Container */}
      <div className="max-w-5xl w-full border border-gray-800 bg-[#111] p-8 md:p-12 shadow-2xl relative overflow-hidden">
        
        {/* Background Decorative Grid */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" 
             style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
        </div>

        {/* Status Bar */}
        <div className="relative z-10 flex items-center gap-2 mb-10">
          <span className="text-green-500 font-mono text-xs">[PERSONAL_IDENTIFICATION_FILE_V1.1]</span>
          <div className="h-[1px] flex-grow bg-gray-800"></div>
          <span className="text-xs font-mono text-gray-600 px-2 py-1 border border-green-900 bg-green-950 animate-pulse">ACTIVE</span>
        </div>

        {/* Content Grid (Picture on Left, Text on Right) */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-[200px,1fr] gap-12 items-center">
          
          {/* Personnel Picture Frame (Option A: /public/profile.jpg) */}
          <div className="flex justify-center md:justify-start">
            <div className="relative p-2 border-2 border-gray-800 bg-[#0a0a0a] hover:border-green-500 transition-colors duration-300">
              {/* Corner Accents */}
              <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-green-600"></div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-green-600 animate-pulse"></div>
              
              {/* Actual Image */}
              <img 
                src="/profile.jpg"  // Make sure your file is in /public/
                alt="Juan // Systems Engineer Profile" 
                className="w-[180px] h-[180px] object-cover filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tighter uppercase leading-none">
              I AM <span className="text-green-500">JUAN</span>
            </h1>

            <p className="text-xl md:text-2xl font-mono text-gray-400 mb-8 leading-tight">
              &gt; SYSTEMS_ENGINEER // FULL_STACK_DEVELOPER
            </p>

            <div className="space-y-4 text-lg text-gray-500 max-w-2xl leading-relaxed">
              <p>
                Architecting <span className="text-gray-200">High-Availability Media Infrastructure</span>, 
                secure streaming proxies, and enterprise data hubs for mission-critical operations.
              </p>
            </div>

            {/* Call to Action */}
            <div className="mt-12 flex flex-wrap gap-4 justify-center md:justify-start">
              <a href="/projects" className="bg-green-600 hover:bg-green-500 text-black font-bold py-3 px-8 uppercase tracking-widest text-xs transition-all">
                Initialize Project_View
              </a>
              <a href="/contact" className="border border-gray-700 hover:border-green-500 text-white font-bold py-3 px-8 uppercase tracking-widest text-xs transition-all">
                Establish_Contact
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Metadata */}
        <div className="mt-16 flex justify-between items-end text-[10px] font-mono text-gray-700 uppercase tracking-widest">
          <div>LAT: 3.1390° N // LON: 101.6869° E // ID: <span className="text-gray-500">EST_2026.SYS</span></div>
          <div className="flex gap-4">
            <a href="https://github.com/j00w3n" className="hover:text-green-500">[GIT_HUB]</a>
            <a href="#" className="hover:text-green-500">[LINKED_IN]</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;