import React from "react";
import Logo from "./Logo";
import Image from "next/image";
function AuthHeader() {
  return (
    <div className="h-full flex flex-col items-center justify-evenly bg-rose-400">
      <div className=" items-center  w-[30vw]">
        <div className="flex flex-row gap-4 items-center mb-20">
          <Logo />
          <h1 className=" text-3xl font-semibold text-white">SkyVault</h1>
        </div>
        <h2 className="text-6xl font-bold text-white mb-3">
          Manage your files the best way
        </h2>
        <p className=" text-base text-white">
          Awesome, we've created the perfect place for you to store all your
          documents.
        </p>
      </div>
      <div>
        <Image src="/assets/images/files.png" alt="My Picture" width={300} height={300} />
      </div>
    </div>
  );
}

export default AuthHeader;
