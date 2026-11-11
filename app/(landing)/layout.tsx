import { PropsWithChildren } from 'react';

export default function UnautorizedLayout({ children }: PropsWithChildren) {
    return (
        <div>
            <h1>This is a wrapper for landing page</h1>
            { children }
        </div>
    );
}
