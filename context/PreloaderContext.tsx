'use client';

import { createContext, useContext, useState } from 'react';

type PreloaderContextType = {
    done: boolean;
    setDone: (v: boolean) => void;
};

const PreloaderContext = createContext<PreloaderContextType | null>(null);

export const PreloaderProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [done, setDone] = useState(false);

    return (
        <PreloaderContext.Provider value={{ done, setDone }}>
            {children}
        </PreloaderContext.Provider>
    );
};

export const usePreloader = () => {
    const ctx = useContext(PreloaderContext);
    if (!ctx)
        throw new Error('usePreloader must be used inside PreloaderProvider');
    return ctx;
};
