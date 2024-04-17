'use client';
import { FunctionComponent } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation";
import React from "react";
import { useState } from "react";



const navItems = [
    { path: '/', label: 'vítejte' },
    { path: '/pravidla', label: 'pravidla' },
    { path: '/triky', label: 'tipy a triky' },
];


const MyNav: FunctionComponent = () => {
    const [showDiv, setShowDiv] = useState(false);

    const handleClick = () => {
        if (typeof window !== "undefined" && window.innerWidth < 550) {
            setShowDiv(!showDiv);
        } else {
            setShowDiv(false);
        }
    }



    const pathname = usePathname();
    const isActive = (path: string) => pathname === path;
    return (
        <ul>
            {navItems.map((item) => (
                <li
                    key={item.path} // Essential for proper re-rendering
                    className={`${isActive(item.path) ? 'active' : ''} default-nav`}
                    onClick={handleClick}>

                    <Link
                        className={`nav-button ${isActive(item.path) ? 'active' : ''}`}
                        href={item.path}>
                        {item.label}
                    </Link>
                </li>
            ))}
            {showDiv &&
                navItems.map((item) => (
                    <li
                        key={item.path} // Essential for proper re-rendering    
                        className={`
                        pop-up-nav`}
                        onClick={handleClick}>

                        <Link
                            className={`nav-button`}
                            href={item.path}>
                            {item.label}
                        </Link>
                    </li>
                ))
            
            }
        </ul>
    );
}
/*
<ul >
            <li className={isActive('/') ? 'active' : ''} onClick={handleClick}>
                <Link
                    className={`${'nav-button'} ${isActive('/') ? 'active' : ''}`}
                    href="/">vítejte</Link>
            </li>
            <li className={isActive('/pravidla') ? 'active' : ''} onClick={handleClick}>
                <Link
                    className={`${'nav-button'} ${isActive('/pravidla') ? 'active' : ''}`}
                    href="/pravidla">pravidla</Link>
            </li>
            <li className={isActive('/triky') ? 'active' : ''} onClick={handleClick}>
                <Link
                    className={`${'nav-button'} ${isActive('/triky') ? 'active' : ''}`}
                    href="/triky">tipy a triky</Link>
            </li>
            {showDiv && <MyNav />}
        </ul>*/

export default MyNav;