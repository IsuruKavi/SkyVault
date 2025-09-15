import React from 'react';

function Logo() {
  return (
    <div className="relative">
      <div className="h-[8vh] w-[8vh] rounded-full bg-white/50"></div>
      <div className="absolute right-[-0.5vw] bottom-[-0.5vw] h-[5vh] w-[5vh] rounded-full bg-white"></div>
    </div>
  );
}

export default Logo;
