import Link from 'next/link';

export default function SignUpPage() {
    return (
        <div className='bg-(--background-contrast) px-4 py-6 my-auto flex flex-col w-full border rounded-lg'>
            <h1 className='text-2xl font-bold'>Create an account</h1>
            <p className='text-sm opacity-65'>Some slogan here</p>
            <form
                className='flex flex-col gap-4'
            >
                <div className='flex flex-col gap-2'>
                    <label htmlFor="user-name">Username</label>
                    <input
                        type="text"
                        name="username"
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
                <button className='bg-white text-black'>Sign Up</button>
                <p className='flex gap-4 items-center justify-center text-sm opacity-65'>
                    <span className='opacity-65'>Already have an account?</span>
                    <Link href="/signin">Sign In</Link></p>
            </form>
        </div>
    );
}
