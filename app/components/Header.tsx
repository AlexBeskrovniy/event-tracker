import Link from 'next/link';
import Logout from "./auth/Logout";

type HeaderProps = {
    user: Record<string, any> | null
}

export default function Header({ user }: HeaderProps) {
    return (
        <header className='flex items-center justify-between'>
            {user ? (
                <>
                   <div className="h-8 w-8 rounded-full shrink-0 overflow-hidden">
                        {user.image
                            ? <img className="h-full object-cover object-center" src={user.image} alt="Avatar" />
                            : <div className="h-full object-cover object-center bg-red-800">U</div>
                        }
                        
                    </div>
                    <div className="text-sm">
                        <Logout />
                    </div>
                </>
            ) : (
                <>
                    <nav>
                        <Link href="/auth/signin">Sign In</Link>
                        <Link href="/auth/signup">Sign Up</Link>
                    </nav>
                </>
            )}
        </header>
    );
}
