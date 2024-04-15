import { FunctionComponent } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation";
import React from "react";



const MyComponent: FunctionComponent = () => {
    const pathname = usePathname();
    const isActive = (path: string) => pathname === path;
    return (
        <ul>
            <li className={isActive('/') ? 'active' : ''}>
                <Link
                    className={`${'nav-button'} ${isActive('/') ? 'active' : ''}`}
                    href="/">vítejte</Link>
            </li>
            <li className={isActive('/pravidla') ? 'active' : ''}>
                <Link
                    className={`${'nav-button'} ${isActive('/pravidla') ? 'active' : ''}`}
                    href="/pravidla">pravidla</Link>
            </li>
            <li className={isActive('/triky') ? 'active' : ''}>
                <Link
                    className={`${'nav-button'} ${isActive('/triky') ? 'active' : ''}`}
                    href="/triky">tipy a triky</Link>
            </li>

        </ul>
    );
}

export default MyComponent;