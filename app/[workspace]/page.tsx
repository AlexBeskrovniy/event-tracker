import { Suspense } from 'react';
import Month from '@/app/components/Month';

export default function Workspace() {
   
    return (
        <Suspense fallback={<p>...Loading...</p>}>
            <Month />
        </Suspense>
    );
}
