'use client';

import Link from 'next/link';
import { useActionState } from 'react';
import { signUpWithEmail, type ActionResponse } from '@/app/actions/auth';
import { GoogleSignInButton } from '@/app/components/auth/GoogleSignInButton';

const initialState: ActionResponse = {
  success: false,
  message: '',
  errors: undefined,
}

export default function SignInPage() {
    const [state, formAction, isPending] = useActionState(signUpWithEmail, initialState);

    return (
        <div className='bg-(--background-contrast) px-4 py-6 my-auto flex flex-col w-full border rounded-lg'>
            <h1 className='text-2xl font-bold'>Welcome back</h1>
            <p className='text-sm opacity-65'>Some slogan here</p>
            <form
                action={formAction}
                className='flex flex-col gap-10 my-8'
            >
                {state.message && !state.success && (
                    <div className="rounded-md px-3 py-2 text-sm text-red-500">
                        {state.message}
                    </div>
                )}
                <div className='flex flex-col gap-4 text-start'>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="user-email">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="user-email"
                            aria-describedby="email-error"
                            disabled={isPending}
                            required
                        />
                        {state?.errors?.properties?.email && (
                            state.errors?.properties?.email.errors?.map(error => (
                                <p key={'email-error'} id="email-error" className="text-sm text-red-500">
                                    {error}
                                </p>
                            ))
                        )}
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label htmlFor="user-password">Password</label>
                        <input
                            type="password"
                            name="password"
                            id="user-password"
                            aria-describedby="password-error"
                            disabled={isPending}
                            required
                        />
                        {state?.errors?.properties?.password && (
                            state.errors?.properties?.password.errors?.map(error => (
                                <p key={'password-error'} id="password-error" className="text-sm text-red-500">
                                    {error}
                                </p>
                            ))
                        )}
                    </div>
                </div>
                <button
                    className='bg-white text-black'
                    disabled={isPending}
                >
                    Sign In
                </button>
            </form>
            <p>Or</p>
            <GoogleSignInButton />
            <p className='flex gap-4 items-center justify-center text-sm opacity-65'>
                <span className='opacity-65'>Have not an account yet?</span>
                <Link href="/auth/signup">Sign Up</Link>
            </p>
        </div>
    );
}

