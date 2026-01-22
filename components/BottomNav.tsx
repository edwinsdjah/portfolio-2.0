'use client';

import { User, Briefcase, Code, Folder } from 'lucide-react';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { usePreloader } from '@/context/PreloaderContext';

const navItems = [
    { id: 'profile', icon: User },
    { id: 'tech', icon: Code },
    { id: 'experience', icon: Briefcase },
    { id: 'projects', icon: Folder },
];

export default function BottomNav() {
    const [active, setActive] = useState('profile');

    useEffect(() => {
        let ticking = false;

        const handler = () => {
            if (ticking) return;
            ticking = true;

            requestAnimationFrame(() => {
                const scrollPos = window.scrollY + 150;

                for (const item of navItems) {
                    const section = document.getElementById(item.id);
                    if (!section) continue;

                    const top = section.offsetTop;
                    const height = section.offsetHeight;

                    if (scrollPos >= top && scrollPos < top + height) {
                        setActive(item.id);
                        break;
                    }
                }

                ticking = false;
            });
        };

        window.addEventListener('scroll', handler, { passive: true });
        return () => window.removeEventListener('scroll', handler);
    }, []);

    const { done } = usePreloader();

    if (!done) return null; // 🚫 BELUM BOLEH MUNCUL

    const handleClick = (id: string) => {
        const section = document.getElementById(id);
        if (!section) return;

        setActive(id); // SET LANGSUNG

        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    };

    return (
        <nav className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2 rounded-full bg-background/80 backdrop-blur shadow-lg">
            <ul className="flex gap-5 p-2">
                {navItems.map(({ id, icon: Icon }) => (
                    <li key={id}>
                        <button
                            onClick={() => handleClick(id)}
                            className={cn(
                                'flex h-12 w-12 items-center justify-center rounded-full transition-colors',
                                active === id
                                    ? 'bg-primary text-primary-foreground'
                                    : 'text-muted-foreground hover:text-foreground',
                            )}
                        >
                            <Icon size={22} />
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
