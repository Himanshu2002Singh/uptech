import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.jpg'; // Apni image ka path yahan set karein

const ZoomLoader: React.FC = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(false);
    }, 3500); // animation duration

    return () => clearTimeout(timeout);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black">
      <img
        src={logo}
        alt="UptechAutomation Logo"
        className="w-32 h-32 animate-zoomOutward"
      />
    </div>
  );
};

export default ZoomLoader;
