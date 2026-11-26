import { PropsWithChildren } from 'react';

export default function AppLayout({ children }: PropsWithChildren) {
    return (
        <div className='grow shrink-0 basis-auto p-8'>
            { children }
        </div>
    )
}