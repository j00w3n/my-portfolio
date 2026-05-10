import React from 'react';

function Contact() {
  const channels = [
    { 
      label: "EMAIL", 
      value: "ezzuana@gmail.com", 
      link: "mailto:ezzuana@gmail.com",
      icon: "✉"
    },
    { 
      label: "LINKEDIN", 
      value: "linkedin.com/in/ezzuan-azizon", 
      link: "https://www.linkedin.com/in/ezzuan-azizon/",
      icon: "🔗"
    },
    { 
      label: "GITHUB_REPOSITORY", 
      value: "github.com/j00w3n", 
      link: "https://github.com/j00w3n",
      icon: "📁"
    }
  ];

  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center bg-[#0a0a0a] text-gray-300 px-8 font-mono">
      <div className="max-w-2xl w-full border border-gray-800 bg-[#111] p-8 md:p-12 relative shadow-2xl">
        
        {/* Header Decor */}
        <div className="absolute top-0 left-0 w-full h-1 bg-green-600"></div>
        
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 bg-green-500 animate-pulse rounded-full"></div>
            <span className="text-green-500 text-[10px] tracking-[0.3em] uppercase">Contact</span>
          </div>
          <h2 className="text-4xl font-bold text-white uppercase tracking-tighter">CONTACT ME</h2>
          <p className="text-gray-500 text-xs mt-2 uppercase tracking-widest">Ready to receive secure transmission</p>
        </div>

        {/* Communication Channels */}
        <div className="space-y-6">
          {channels.map((channel, index) => (
            <a 
              key={index}
              href={channel.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block border border-gray-800 bg-black p-4 hover:border-green-500 transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] text-gray-600 mb-1 group-hover:text-green-500 transition-colors">
                    {`> ${channel.label}`}
                  </p>
                  <p className="text-lg text-gray-200 group-hover:text-white">
                    {channel.value}
                  </p>
                </div>
                <span className="text-2xl opacity-20 group-hover:opacity-100 group-hover:text-green-500 transition-all">
                  {channel.icon}
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Footer Metadata */}
        <div className="mt-12 pt-6 border-t border-gray-900 flex flex-wrap justify-between items-center gap-4">
          <div className="text-[9px] text-gray-700 uppercase tracking-tighter">
            Encryption: End-to-End // Protocol: HTTPS
          </div>
          <button 
            onClick={() => window.print()} 
            className="text-[9px] text-gray-500 hover:text-green-500 uppercase border border-gray-800 px-2 py-1 transition-colors"
          >
            Download_Dossier_PDF
          </button>
        </div>

      </div>
    </section>
  );
}

export default Contact;