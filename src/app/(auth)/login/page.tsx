'use client';

import React, { useState } from 'react';
import { Input } from '@/components/ui/input';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <div className="">
      <p className="mb-8 text-4xl font-bold text-black">Login</p>
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
            type="email"
            id="email"
            placeholder="password"
            className="mb-4 h-12 w-90"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            variant="default"
            type="submit"
            className="h-12 w-full rounded-full bg-rose-400 text-white hover:bg-red-300 hover:text-white"
          >
            Log in
          </Button>
        </form>
        <div className="flex flex-row justify-center">
          <p className="mr-2 text-black">Don't have account ?</p>
          <Link href={'/auth/signup'}>
            <p className="text-rose-400">create account</p>{' '}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
