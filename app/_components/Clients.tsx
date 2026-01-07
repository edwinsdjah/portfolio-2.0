'use client';

import SectionTitle from '@/components/SectionTitle';
import { MY_CLIENTS } from '../../lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Image from 'next/image';
import React, { useRef } from 'react';

gsap.registerPlugin(useGSAP);

const Clients = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const track = containerRef.current?.querySelector(
                '.marquee-track',
            ) as HTMLElement;

            if (!track) return;

            const distance = track.scrollWidth / 2;

            gsap.fromTo(
                track,
                { x: 0 },
                {
                    x: -distance,
                    duration: 20,
                    ease: 'none',
                    repeat: -1,
                },
            );
        },
        { scope: containerRef },
    );

    return (
        <section id="my-clients" ref={containerRef}>
            <div className="container">
                <SectionTitle title="Clients" />

                {/* SINGLE ROW MARQUEE */}
                <div className="overflow-hidden">
                    <div className="marquee-track flex gap-x-14 w-max">
                        {[...MY_CLIENTS, ...MY_CLIENTS].map((item, idx) => (
                            <div
                                key={`${item.name}-${idx}`}
                                className="flex items-center gap-3.5"
                            >
                                <Image
                                    src={item.logo}
                                    alt={item.name}
                                    width={100}
                                    height={40}
                                    className="h-10 w-auto object-contain brightness-0 invert opacity-90"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Clients;
