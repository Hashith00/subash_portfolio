import React from "react";

const InteractiveBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(/background_image.png)",
        }}
      />

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Subtle animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-green-500/5 animate-pulse" />

      {/* Additional animated elements for visual interest */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-cyan-500/15 rounded-full blur-xl animate-float-slow"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-green-500/15 rounded-full blur-xl animate-pulse-delayed"></div>
        <div className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-blue-500/15 rounded-full blur-xl animate-float"></div>
      </div>
    </div>
  );
};

export default InteractiveBackground;
