'use client'

import { signOut } from '@/app/actions/auth';

export default function Logout() {
    return (<button onClick={signOut}>Log Out</button>);
} 