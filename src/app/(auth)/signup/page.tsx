'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import React, { useState } from 'react';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <div className="">
      <p className="mb-8 text-4xl font-bold text-black">Sign Up</p>
      <div className="grid w-full max-w-sm items-center gap-3">
        <form onSubmit={handleSubmit}>
          <Input
            type="email"
            id="email"
            placeholder="Email"
            className="mb-4 h-12 w-90"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            id="email"
            placeholder="password"
            className="mb-4 h-12 w-90"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            type="password"
            id="email"
            placeholder="confirm password"
            className="mb-4 h-12 w-90"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Button
            variant="default"
            type="submit"
            className="h-12 w-full rounded-full bg-rose-400 text-white hover:bg-red-300 hover:text-white"
          >
            Signup
          </Button>
        </form>
        <div className="flex flex-row justify-center">
          <p className="mr-2 text-black font-medium">Already have an account ?</p>
          <Link href={'/auth/login'}>
            <p className="text-rose-400 font-medium ">Log in</p>{' '}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
