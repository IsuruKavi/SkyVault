'use client'

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import React, { useState } from 'react'

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(email, password);
  };
 
  return (
    <div className="">
      <p className="text-black font-bold text-4xl mb-8">Sign Up</p>
      <div className="grid w-full max-w-sm items-center gap-3">
        <form onSubmit={handleSubmit}>
          <Input
            type="email"
            id="email"
            placeholder="Email"
            className="w-90 h-12 mb-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            id="email"
            placeholder="password"
            className="w-90 h-12 mb-4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            type="password"
            id="email"
            placeholder="confirm password"
            className="w-90 h-12 mb-4"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Button
            variant="default"
            type="submit"
            className="bg-rose-400 rounded-full w-full h-12 text-white hover:bg-red-300 hover:text-white"
          >
            Signup
          </Button>
        </form>
        <div className="flex flex-row justify-center">
          <p className="mr-2 text-black">Already have an account ?</p>
          <Link href={"/auth/login"}>
            <p className="text-rose-400">Log in</p>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp