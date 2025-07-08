import React, { useEffect, useState } from 'react';

const ZoomLoader: React.FC = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(false);
    }, 3500); // 3.5 seconds animation

    return () => clearTimeout(timeout);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black">
      <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-green-400 bg-clip-text text-transparent animate-zoomTyping whitespace-nowrap overflow-hidden border-r-2 border-white">
        UptechAutomation
      </h1>
    </div>
  );
};

export default ZoomLoader;
