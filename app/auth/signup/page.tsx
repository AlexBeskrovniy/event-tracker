'use client';

import Link from 'next/link';
import { useActionState } from 'react';
import { signUpWithEmail } from '@/app/actions/auth';

import { GoogleSignInButton } from '@/app/components/auth/GoogleSignInButton';

export default function SignUpPage() {
    const [state, formAction, isPending] = useActionState(signUpWithEmail, null);
    return (
        <div className='bg-(--background-contrast) px-4 py-6 my-auto flex flex-col w-full border rounded-lg'>
            <h1 className='text-2xl font-bold'>Create an account</h1>
            <p className='text-sm opacity-65'>Some slogan here</p>
            <form
                action={formAction}
                className='flex flex-col gap-10 my-8'
            >
                <div className='flex flex-col gap-4 text-start'>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="user-name">Username</label>
                        <input
                            type="text"
                            name="name"
                            id="user-name"
                            required
                        />
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label htmlFor="user-email">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="user-email"
                            required
                        />
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label htmlFor="user-password">Password</label>
                        <input
                            type="password"
                            name="password"
                            id="user-password"
                            required
                        />
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label htmlFor="user-password-confirm">Confirm password</label>
                        <input
                            type="password"
                            name="password-confirm"
                            id="user-password-confirm"
                            required
                        />
                    </div>
                </div>

                {state?.error && (
                    <div className="rounded-md px-3 py-2 text-sm text-red-500">
                        {state.error}
                    </div>
                )}

                <button
                    className='bg-white text-black'
                    disabled={isPending}
                >
                    Sign Up
                </button>
                <p>Or</p>
                <GoogleSignInButton />
                {/* <button className='bg-gray-600 text-black flex justify-center items-center gap-8'>
                    <svg viewBox="0 0 256 256" width="2em" height="2em"><rect fill="none"/><path d="M128,128h88a88,88,0,1,1-20.11-56" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/></svg>
                    Continue with Google
                </button> */}
            </form>
            <p className='flex gap-4 items-center justify-center text-sm opacity-65'>
                <span className='opacity-65'>Already have an account?</span>
                <Link href="/auth/signin">Sign In</Link>
            </p>
        </div>
    );
}
