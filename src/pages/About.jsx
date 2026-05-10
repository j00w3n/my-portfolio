import React from 'react';

function About() {
  const skills = [
    { category: "Frontend", tools: "React, Tailwind, Inertia.js" },
    { category: "Backend", tools: "PHP (Laravel), .NET Core, Spring Boot" },
    { category: "Infrastructure", tools: "Linux, Azure, UDP Multicast, Nginx" },
    { category: "Database", tools: "PostgreSQL, MySQL, SQL Server" }
  ];
  const education = [
  {
    institution: "Universiti Teknologi MARA (UiTM)",
    degree: "Bachelor of Computer Networks (Hons.)",
    duration: "2021 - 2023",
    specialization: "Computer Networking",
    details: "Specialized in enterprise networking",
    finalyearproject: "Secret data Transfer using Steganography and Hybrid Encryption",
    cgpa: "3.5"
  },
  {
  
    institution: "Universiti Teknologi MARA (UiTM)",
    degree: "Diploma in Computer Science",
    duration: "2018 - 2021",
    cgpa: "3.7",
    details: "Solidified core programming logic, database management, and operating system fundamentals. Specialized in the basics of software development and algorithm design."  }
];

  return (
    <section className="min-h-screen bg-[#0a0a0a] text-gray-300 py-16 px-8 font-mono">
      <div className="max-w-4xl mx-auto">
        
        {/* Header Hook */}
        <div className="border-b border-gray-800 pb-8 mb-12">
          <h2 className="text-4xl font-bold text-white tracking-tighter uppercase mb-2">
            Personal Info
          </h2>
          <p className="text-green-500 text-sm tracking-widest uppercase">
            Subject: Ezzuan // Systems Engineer
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
              "When I'm off the clock, I'm usually researching world tech facts or tracking the latest updates in the Marvel Cinematic Universe."
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
      <section className="my-16">
        {/* Header Section */}
        <div className="flex items-center gap-4 mb-8">
          <div className="h-[1px] flex-grow bg-gray-800"></div>
          <h2 className="text-2xl font-bold tracking-tighter text-white uppercase italic">
            Academic_Credentials
          </h2>
          <div className="h-[1px] w-12 bg-green-500"></div>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="relative pl-8 border-l border-gray-800 group hover:border-green-500 transition-all duration-300">
              
              {/* Animated Status Dot */}
              <div className="absolute -left-[5px] top-0 w-2 h-2 bg-gray-800 group-hover:bg-green-500 rounded-full transition-colors"></div>
              
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2 gap-2">
                <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors">
                  {edu.institution}
                </h3>
                <span className="text-[10px] font-mono text-green-500 border border-green-500/30 bg-green-500/5 px-2 py-1 rounded inline-block w-fit">
                  PERIOD // {edu.duration}
                </span>
              </div> {edu.cgpa && <span className="text-gray-600">// CGPA: {edu.cgpa}</span>}
              
              <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">
                {edu.degree} {edu.specialization && <span className="text-gray-600">// {edu.specialization}</span>}
              </p>
              
              <p className="text-xs text-gray-500 max-w-2xl leading-relaxed font-mono">
                {edu.details}
              </p>
              {edu.finalyearproject && (
                <p className="text-sm text-green-400 max-w-2xl leadi      ng-relaxed font-bold border-l-2 border-green-500 pl-3 mt-3">
                  ★ Final Year Project: {edu.finalyearproject}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>
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