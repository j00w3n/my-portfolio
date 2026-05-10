const projects = [
  {
    title: "Widevine Proxy Server",
    tech: "Spring Boot | Shaka Player",
    desc: "Enterprise-grade secure streaming proxy designed for DRM content protection and seamless playback.",
    status: "OPERATIONAL",
  },
  {
    title: "VIVnews.my",
    tech: "PHP | Multilingual",
    desc: "High-traffic news architecture supporting real-time streaming and dynamic language localizations.",
    status: "ACTIVE",
  },
  {
    title: "EDMS System",
    tech: "ASP.NET MVC | PostgreSQL",
    desc: "Centralized document management hub with secure indexing and high-integrity data storage.",
    status: "STABLE",
  }
];

function Projects() {
  return (
    <section className="py-16 px-8 bg-[#0a0a0a] text-gray-300">
      <div className="max-w-6xl mx-auto">
        {/* Section Header with Tactical Underline */}
        <div className="mb-12 border-l-4 border-green-500 pl-4">
          <h2 className="text-4xl font-bold tracking-tighter text-white uppercase">Project Log</h2>
          <p className="text-sm text-green-500 font-mono tracking-widest">SYSTEMS_ENGINEERING_RECORDS_V4.0</p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="group relative border border-gray-800 bg-[#111] p-6 hover:border-green-500 transition-all duration-300">
              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-transparent group-hover:border-green-500 transition-all"></div>
              
              <div className="flex justify-between items-start mb-4">
                <span className="text-xs font-mono text-green-500 px-2 py-1 border border-green-900 bg-green-950">
                  {project.status}
                </span>
                <span className="text-gray-600 text-xs font-mono">0{index + 1}</span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400">
                {project.title}
              </h3>
              
              <p className="text-sm text-gray-500 mb-4 h-16 leading-relaxed">
                {project.desc}
              </p>

              <div className="pt-4 border-t border-gray-900">
                <p className="text-[10px] uppercase tracking-widest text-gray-400 font-mono">
                  Stack: <span className="text-gray-200">{project.tech}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;