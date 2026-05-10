import React from 'react';

function Home() {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center bg-[#0a0a0a] text-gray-300 px-8">
      <div className="max-w-4xl w-full border border-gray-800 bg-[#111] p-8 md:p-12 shadow-2xl relative overflow-hidden">
        
        {/* Background Decorative Grid */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" 
             style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
        </div>

        {/* Header Section */}
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-6">
            <span className="text-green-500 font-mono text-sm">[STATUS: ONLINE]</span>
            <div className="h-[1px] flex-grow bg-gray-800"></div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tighter uppercase">
            I AM <span className="text-green-500">JUAN</span>
          </h1>

          <p className="text-xl md:text-2xl font-mono text-gray-400 mb-8 leading-tight">
            &gt; SYSTEMS_ENGINEER // FULL_STACK_DEVELOPER
          </p>

          <div className="space-y-4 text-lg text-gray-500 max-w-2xl">
            <p>
              Specializing in <span className="text-gray-200">High-Availability Streaming Architecture</span>, 
              Secure Proxy Servers, and Enterprise Inventory Systems.
            </p>
            <p className="border-l-2 border-green-900 pl-4 italic">
              "Building the invisible infrastructure that powers modern media."
            </p>
          </div>

          {/* Call to Action */}
          <div className="mt-12 flex flex-wrap gap-4">
            <a href="/projects" className="bg-green-600 hover:bg-green-500 text-black font-bold py-3 px-8 uppercase tracking-widest text-sm transition-all">
              Initialize Project_View
            </a>
            <a href="/contact" className="border border-gray-700 hover:border-green-500 text-white font-bold py-3 px-8 uppercase tracking-widest text-sm transition-all">
              Establish_Contact
            </a>
          </div>
        </div>

        {/* Bottom Metadata */}
        <div className="mt-16 flex justify-between items-end text-[10px] font-mono text-gray-600 uppercase tracking-widest">
          <div>LAT: 3.1390° N // LON: 101.6869° E</div>
          <div>EST_2026.SYS</div>
        </div>
      </div>
    </section>
  );
}

export default Home;