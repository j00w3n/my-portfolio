import React from 'react';

function About() {
  const skills = [
    { category: "Frontend", tools: "React, Tailwind, Inertia.js" },
    { category: "Backend", tools: "PHP (Laravel), .NET Core, Spring Boot" },
    { category: "Infrastructure", tools: "Linux, Azure, UDP Multicast, Nginx" },
    { category: "Database", tools: "PostgreSQL, MySQL, SQL Server" }
  ];

  return (
    <section className="min-h-screen bg-[#0a0a0a] text-gray-300 py-16 px-8 font-mono">
      <div className="max-w-4xl mx-auto">
        
        {/* Header Hook */}
        <div className="border-b border-gray-800 pb-8 mb-12">
          <h2 className="text-4xl font-bold text-white tracking-tighter uppercase mb-2">
            Personnel_Dossier
          </h2>
          <p className="text-green-500 text-sm tracking-widest uppercase">
            Subject: Juan // Systems Engineer
          </p>
        </div>

        {/* Biography Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr,300px] gap-12 mb-16">
          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              Based in <span className="text-white">Kuala Lumpur</span>, I bridge the gap between complex low-level infrastructure and modern high-level user interfaces. 
            </p>
            <p>
              With a background in <span className="text-green-500">Systems Engineering</span>, I specialize in building streaming architectures and secure proxy servers that handle mission-critical data.
            </p>
            <p className="text-gray-500 text-sm italic">
              "When I'm off the clock, I'm usually researching Capybara facts or tracking the latest updates in the Marvel Cinematic Universe."
            </p>
          </div>

          {/* Side Stats Box */}
          <div className="border border-gray-800 bg-[#111] p-6">
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4 border-b border-gray-800 pb-2">
              System_Info
            </h3>
            <ul className="text-xs space-y-3">
              <li className="flex justify-between"><span>LOCATION:</span> <span className="text-gray-200">KL, MY</span></li>
              <li className="flex justify-between"><span>STATUS:</span> <span className="text-green-500">AVAILABLE</span></li>
              <li className="flex justify-between"><span>ROLE:</span> <span className="text-gray-200">FULL-STACK</span></li>
              <li className="flex justify-between"><span>LEVEL:</span> <span className="text-gray-200">ENGINEER</span></li>
            </ul>
          </div>
        </div>

        {/* Technical Skills Terminal */}
        <div className="border border-gray-800 bg-black p-6 rounded-sm">
          <div className="flex gap-2 mb-6">
            <div className="w-3 h-3 rounded-full bg-red-900"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-900"></div>
            <div className="w-3 h-3 rounded-full bg-green-900"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index}>
                <h4 className="text-green-500 text-xs mb-2">{`> ${skill.category}`}</h4>
                <p className="text-sm text-gray-200">{skill.tools}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;