import { PropsWithChildren } from 'react';

export default function AuthPagesLayout({ children }: PropsWithChildren) {
    return (
        <div className='flex mx-auto px-6 w-[90vw] md:w-md h-screen'>
            { children }
        </div>
    )
}
