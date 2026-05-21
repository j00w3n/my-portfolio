import React, { useMemo, useState } from 'react';

const projects = [
  {
    id: "NOC-01",
    title: "Enterprise NOC Dashboard",
    tech: "React | PHP | UDP Multicast",
    shortDesc: "Real-time nation-wide network node health monitoring.",
    fullDesc: "Engineered a high-availability Network Operations Center (NOC) monitor utilizing direct UDP Multicast for sub-second data ingestion. The system provides real-time visualization of node health across Malaysia, featuring a custom 'Tactical Notification Engine' for instant failure alerts.",
    image: "/src/assets/nocdashboard.jpg", 
    status: "MISSION_CRITICAL",
    tags: ["Infrastructure", "Real-time", "Network"]
  },
  {
    id: "SOC-02",
    title: "SOC Security Monitor",
    tech: "Laravel | PostgreSQL | Tailwind",
    shortDesc: "Security Operations Center threat visualization hub.",
    fullDesc: "Designed and implemented a Security Operations Center (SOC) interface to visualize system logs and security incidents. Focused on rapid incident response UI and high-integrity data auditing for enterprise security teams.",
    image: "/src/assets/socdashboard.png",
    status: "SECURE",
    tags: ["Cybersecurity", "Auditing", "Defense"]
  },
  {
    id: "DRM-03",
    title: "Widevine Proxy Server",
    tech: "Spring Boot | Shaka Player",
    shortDesc: "Secure DRM content protection proxy.",
    fullDesc: "Developed a robust proxy server using Spring Boot to manage Widevine DRM licenses. Ensured secure content delivery and seamless playback integration with Shaka Player for encrypted streaming assets.",
    image: "/src/assets/widevineproject.png",
    status: "OPERATIONAL",
    tags: ["Streaming", "DRM", "Security"]
  },
  {
    id: "NEWS-04",
    title: "VIVnews.my",
    tech: "PHP | Multilingual | CMS",
    shortDesc: "Multilingual streaming news architecture.",
    fullDesc: "Architected a high-traffic news platform supporting real-time streaming and dynamic language localizations. Focused on database optimization for fast content delivery across diverse regional locales.",
    image: "/src/assets/vivnewsmyproject.png",
    status: "ACTIVE",
    tags: ["PHP", "Scalability", "CMS"]
  }
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
 // tapis projects berdasarkan search term di title, tech, atau tags
  const filteredProjects = useMemo(() => {
    return projects.filter(project => 
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tech.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }, [searchTerm]);

  // close modal using keyboeard ESC
  React.useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) setSelectedProject(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

return (
    <section className="min-h-screen bg-[#0a0a0a] text-gray-300 py-16 px-8 font-mono">
      <div className="max-w-6xl mx-auto">
        
        <div className="mb-12 border-l-4 border-green-500 pl-4 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-4xl font-bold tracking-tighter text-white uppercase">Project_Log</h2>
            <p className="text-sm text-green-500 tracking-widest uppercase font-bold">Querying_Database...</p>
          </div>

          {/* SEARCH TERMINAL */}
          <div className="relative w-full md:w-80 group">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-green-500 font-bold">{`>`}</span>
            <input 
              type="text"
              placeholder="SEARCH_BY_TECH_OR_NAME..."
              className="w-full bg-black border border-gray-800 py-2 pl-8 pr-4 text-xs focus:outline-none focus:border-green-500 transition-colors placeholder:text-gray-700 text-green-400"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="absolute bottom-0 left-0 h-[1px] bg-green-500 w-0 group-focus-within:w-full transition-all duration-500"></div>
          </div>
        </div>

        {/* RESULTS GRID */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in duration-500">
            {filteredProjects.map((project) => (
              <div 
                key={project.id} 
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer border border-gray-800 bg-[#111] p-6 hover:border-green-500 transition-all duration-300"
              >
                {/* ... (Keep your card content the same) ... */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400">{project.title}</h3>
                <p className="text-xs text-gray-500 mb-4">{project.tech}</p>
                <div className="text-[10px] text-green-600 uppercase font-bold">View_Details_→</div>
              </div>
            ))}
          </div>
        ) : (
          /* EMPTY STATE */
          <div className="border border-dashed border-gray-800 p-20 text-center">
            <p className="text-red-900 font-bold mb-2">ERROR: NO_RECORDS_FOUND</p>
            <p className="text-gray-600 text-xs">Search query "{searchTerm}" returned 0 results from local_db.</p>
          </div>
        )}

        {/* --- TACTICAL MODAL --- */}
        {selectedProject && (
      <div className="fixed inset-0 bg-[#0a0a0a]/95 z-[100] flex items-center justify-center p-4">        <div 
              className="bg-[#111] border border-gray-700 max-w-4xl w-full max-h-[90vh] overflow-y-auto relative shadow-[0_0_50px_rgba(34,197,94,0.15)] animate-in fade-in zoom-in duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top Frame Decor */}
              <div className="h-1 bg-green-600 w-full"></div>
              
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 text-gray-500 hover:text-green-500 transition-colors font-bold text-xs"
              >
                [ CLOSE_X ]
              </button>

              <div className="p-8 md:p-12">
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-green-500 animate-pulse rounded-full"></div>
                    <span className="text-green-500 text-xs font-bold tracking-widest">{selectedProject.status}</span>
                  </div>
                  <h2 className="text-4xl font-bold text-white uppercase tracking-tighter">{selectedProject.title}</h2>
                  <p className="text-gray-500 text-sm mt-2 font-mono">{selectedProject.tech}</p>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-[1fr,300px] gap-10">
                  
                  <div>
                    {/* Image Frame */}
                    <div className="border border-gray-800 p-2 bg-black mb-6">
                      <img 
                        src={selectedProject.image} 
                        alt={selectedProject.title} 
                        className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700 brightness-75 hover:brightness-100"
                      />
                    </div>
                    
                    <h4 className="text-xs text-green-500 border-b border-gray-800 pb-2 uppercase font-bold mb-4 tracking-widest">
                      Technical_Summary
                    </h4>
                    <p className="text-gray-300 leading-relaxed text-lg">
                      {selectedProject.fullDesc}
                    </p>
                  </div>

                  {/* Sidebar Metadata */}
                  <div className="space-y-8">
                    <div className="border border-gray-800 bg-black p-4">
                      <h4 className="text-[10px] text-gray-500 uppercase tracking-widest mb-4">Core_Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tags.map(tag => (
                          <span key={tag} className="text-[9px] bg-gray-900 border border-gray-800 px-2 py-1 text-gray-400 uppercase">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="text-[10px] text-gray-600 space-y-2">
                      <p>FILE_ID: {selectedProject.id}</p>
                      <p>ENCRYPTION: AES-256_ACTIVE</p>
                      <p>ACCESS_LEVEL: LEVEL_4_ENG</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;