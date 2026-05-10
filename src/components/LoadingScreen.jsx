import React, { useState, useEffect } from 'react';

const LoadingScreen = ({ onFinished }) => {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("INITIALIZING_CORE...");

  const logs = [
    "MOUNTING_FILESYSTEM...",
    "ESTABLISHING_ENCRYPTED_LINK...",
    "LOADING_NETWORK_PROTOCOLS...",
    "AUTHENTICATING_USER_DATA...",
    "SYSTEM_READY."
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onFinished, 500); // Small delay before entering
          return 100;
        }
        return prev + 1;
      });
    }, 30); // Speed of the loader (30ms * 100 = 3 seconds total)

    return () => clearInterval(timer);
  }, [onFinished]);

  useEffect(() => {
    // Change status text based on progress
    const index = Math.floor((progress / 100) * (logs.length - 1));
    setStatus(logs[index]);
  }, [progress]);

  return (
    <div className="fixed inset-0 z-[9999] bg-[#0a0a0a] flex flex-col items-center justify-center font-mono">
      <div className="w-64 md:w-96">
        <div className="flex justify-between mb-2 text-[10px] text-green-500 tracking-widest uppercase">
          <span>{status}</span>
          <span>{progress}%</span>
        </div>
        
        {/* Progress Bar Container */}
        <div className="w-full h-1 bg-gray-900 overflow-hidden border border-gray-800">
          <div 
            className="h-full bg-green-500 transition-all duration-75 ease-out shadow-[0_0_10px_#22c55e]"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <div className="mt-4 text-[8px] text-gray-700 uppercase tracking-[0.4em] text-center">
          Terminal_ID: {Math.random().toString(16).toUpperCase().substring(2, 10)}
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;