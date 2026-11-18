import Link from 'next/link';

export default function SignInPage() {
    return (
        <div className='bg-(--background-contrast) px-4 py-6 my-auto flex flex-col w-full border rounded-lg'>
            <h1 className='text-2xl font-bold'>Welcome back</h1>
            <p className='text-sm opacity-65'>Some slogan here</p>
            <form
                className='flex flex-col gap-10 my-8'
            >
                <div className='flex flex-col gap-4 text-start'>
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
                </div>
                <button className='bg-white text-black'>Sign In</button>
            </form>
            <p className='flex gap-4 items-center justify-center text-sm opacity-65'>
                <span className='opacity-65'>Have not an account yet?</span>
                <Link href="/signup">Sign Up</Link>
            </p>
        </div>
    );
}

