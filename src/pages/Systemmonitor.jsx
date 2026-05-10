import React, { useState, useEffect } from 'react';

function SystemMonitor() {
  const [cpuLoad, setCpuLoad] = useState(0);
  const [isActive, setIsActive] = useState(true);
const [isBlinking, setBlinking] = useState(false);
  // useEffect bermula di sini
  useEffect(() => {
    let interval;

    if (isActive) {
      // 1. Setup: Start the monitor
      console.log("SYSTEM: Monitoring service started...");
      
      interval = setInterval(() => {
        const mockLoad = Math.floor(Math.random() * 100);
        setCpuLoad(mockLoad);
      }, 2000); // Update setiap 2 saat
    }

    // 2. Cleanup: Stop the monitor
    // Ini sangat penting supaya tak berlaku memory leak!
    return () => {
      console.log("SYSTEM: Cleaning up resources...");
      clearInterval(interval);
    };

  }, [isActive]); // 3. Dependency: Hanya run semula jika 'isActive' berubah


  return (
    <div className="p-6 bg-[#111] border border-gray-800 font-mono">
      <h3 className="text-green-500 mb-4 tracking-widest uppercase">Live_Node_Status</h3>
      
      <div className="flex items-center gap-4 mb-6">
        <span className="text-gray-400">CPU_LOAD:</span>
        <span className={`text-2xl font-bold ${cpuLoad > 80 ? 'text-red-500' : 'text-green-400'}`}>
          {cpuLoad}%
        </span>
      </div>
      

      <button 
        onClick={() => setIsActive(!isActive)}
        className="px-4 py-2 border border-green-900 text-[10px] hover:bg-green-900 transition-colors"
      >
        {isActive ? 'SHUTDOWN_MONITOR' : 'INITIALIZE_MONITOR'}
      </button>
    </div>
  );
}

export default SystemMonitor;