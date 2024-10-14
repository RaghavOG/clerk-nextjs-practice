import Link from 'next/link';
import React from 'react';
import { SignedIn, SignedOut, UserButton, SignInButton, RedirectToSignIn } from '@clerk/nextjs';

const Header = () => {
  return (
    <div className='text-white flex items-center justify-between p-4 bg-gray-700'>
      <Link href={'/'}>Home</Link>
      
      <div className="gap-12 flex">
        <Link href={'/about'}>About</Link>
        <Link href={'/dashboard'}>Dashboard</Link>

        {/* When the user is signed out, show Sign In / Sign Up */}
        <SignedOut>
          <Link href={'/sign-up'}>Sign Up</Link>
          <SignInButton />
          <RedirectToSignIn />
        </SignedOut>

        {/* When the user is signed in, show User Button */}
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
};

export default Header;
