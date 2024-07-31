import React, { useEffect } from 'react';

const Gpr = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://widget.kominfo.go.id/gpr-widget-kominfo.min.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      id="gpr-kominfo-widget-container"
      className="fixed top-0 right-0 h-full p-2 bg-white shadow-lg rounded-md"
      style={{ zIndex: 1000, width: '500px' }}
    ></div>
  );
};

export default Gpr;
