import React from 'react';
import Logo from './Logo';
import Image from 'next/image';
function AuthHeader() {
  return (
    <div className="flex h-full flex-col items-center justify-evenly bg-rose-400">
      <div className="w-[30vw] items-center">
        <div className="mb-20 flex flex-row items-center gap-4">
          <Logo />
          <h1 className="text-3xl font-semibold text-white">SkyVault</h1>
        </div>
        <h2 className="mb-3 text-6xl font-bold text-white">Manage your files the best way</h2>
        <p className="text-base text-white">
          Awesome, we've created the perfect place for you to store all your documents.
        </p>
      </div>
      <div className=' transition-all  hover:rotate-2 hover:scale-105'>
        <Image src="/assets/images/files.png" alt="My Picture" width={300} height={300} />
      </div>
    </div>
  );
}

export default AuthHeader;
