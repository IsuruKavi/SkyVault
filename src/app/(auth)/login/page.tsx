'use client';

import React, { useState } from 'react';
import { Input } from '@/components/ui/input';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import AuthForm from '@/components/auth/AuthForm';
function SignIn() {


  return (
    <AuthForm type="login"/>
  );
}

export default SignIn;
