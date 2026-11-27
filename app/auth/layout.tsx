import { PropsWithChildren } from 'react';

export default function AuthPagesLayout({ children }: PropsWithChildren) {
    return (
        <div className='flex mx-auto px-6 w-[min(400px,90vw)] h-screen'>
            { children }
        </div>
    )
}
