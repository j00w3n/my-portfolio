import React from 'react';

function Experience() {
  const deployments = [
    {
      company: "Vision Four Multimedia",
      role: "Systems & Software Engineer",
      period: "MAC 2023 – PRESENT",
      tech: "LARAVEL | PHP | UDP Multicast | Linux",
      achievements: [
        "Architected and deployed a centralized Network Operations Center (NOC) dashboard to monitor 100+ nation-wide streaming nodes, achieving a 30% increase in system stability through automated health checks.",
        "Engineered a Security Operations Center (SOC) visualization hub for real-time log analysis, improving threat detection and incident response protocols for enterprise clients.",
        "Optimized enterprise streaming server architecture, achieving a 20% increase in throughput and system stability.",
        "Engineered secure promotional web ecosystems using modern React and specialized CDN configurations.",
        "Lead technical troubleshooter for high-priority client-side network and application failures.",
        "Implemented real-time UDP Multicast monitoring tools for automated network stream health checks."
      ]
    },
    {
      company: "FTGR BIKE SDN BHD",
      role: "IT Intern",
      period: "AUG 2020 – SEP 2020",
      tech: "E-Commerce | Shopify | HTML/CSS/JS",
      achievements: [
        "Maintained the company’s Shopify-based e-commerce platform, updated product listings, managed orders, and troubleshot third-party app integrations.",
        "Developed and deployed a dedicated promotional website using HTML, CSS, and JavaScript to support a niche product launch, resulting in increased customer inquiries and conversions."      ]
    }
  ];

  return (
    <section className="min-h-screen bg-[#0a0a0a] text-gray-300 py-16 px-8 font-mono">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="mb-12 border-l-4 border-green-500 pl-4">
          <h2 className="text-4xl font-bold text-white uppercase tracking-tighter">Service_History</h2>
          <p className="text-xs text-green-500 tracking-widest mt-1">LOGGED_WORK_EXPERIENCE_V2.0</p>
        </div>

        {/* Timeline */}
        <div className="space-y-12">
          {deployments.map((job, index) => (
            <div key={index} className="relative pl-8 border-l border-gray-800">
              {/* Timeline Dot */}
              <div className="absolute -left-[5px] top-0 w-[9px] h-[9px] bg-green-500 rounded-full shadow-[0_0_10px_#22c55e]"></div>
              
              <div className="flex flex-wrap justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl font-bold text-white uppercase">{job.role}</h3>
                  <p className="text-green-500 text-sm font-bold tracking-tight">{job.company}</p>
                </div>
                <span className="text-xs bg-[#111] border border-gray-800 px-3 py-1 text-gray-500 mt-2 md:mt-0">
                  {job.period}
                </span>
              </div>

              <div className="mt-4 bg-[#111] border border-gray-800 p-6 hover:border-green-900 transition-colors">
                <ul className="space-y-3 mb-4">
                  {job.achievements.map((item, i) => (
                    <li key={i} className="text-sm flex gap-3">
                      <span className="text-green-500 mt-1">▶</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="pt-4 border-t border-gray-900">
                  <span className="text-[10px] text-gray-600 uppercase">Tech_Stack:</span>
                  <p className="text-xs text-gray-400 mt-1">{job.tech}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom System Message */}
        <div className="mt-20 p-4 border border-dashed border-gray-800 text-center">
          <p className="text-[10px] text-gray-600 uppercase tracking-widest animate-pulse">
            // End of Experience Log //
          </p>
        </div>

      </div>
    </section>
  );
}

export default Experience;