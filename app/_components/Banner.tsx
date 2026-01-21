'use client';
import ArrowAnimation from '@/components/ArrowAnimation';
import Button from '@/components/Button';
import Socials from '@/components/Socials';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React from 'react';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Banner = () => {
    const containerRef = React.useRef<HTMLDivElement>(null);

    // move the content a little up on scroll
    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'bottom 70%',
                    end: 'bottom 10%',
                    scrub: 1,
                },
            });

            tl.fromTo(
                '.slide-up-and-fade',
                { y: 0 },
                { y: -150, opacity: 0, stagger: 0.02 },
            );
        },
        { scope: containerRef },
    );

    return (
        <section className="relative overflow-hidden" id="banner">
            <ArrowAnimation />
            <div
                className="container min-h-[100vh] min-h-[530px] max-md:pb-10 flex justify-between items-start md:items-center max-md:flex-col-reverse"
                ref={containerRef}
            >
                <div className="max-md:grow max-md:flex flex-col max-md:justify-start justify-center items-start max-w-[544px]">
                    <h1 className="banner-title slide-up-and-fade leading-[.95] text-6xl sm:text-[80px] font-anton">
                        <span className="text-primary">FRONTEND</span>
                        <br /> <span className="ml-4">DEVELOPER</span>
                    </h1>
                    <p className="banner-description slide-up-and-fade mt-6 text-lg text-muted-foreground">
                        Hi! I&apos;m{' '}
                        <span className="font-medium text-foreground">
                            Edwin Syah
                        </span>
                        . A creative Frontend Developer with 3+ years of
                        experience in building high-performance, scalable, and
                        responsive web solutions.
                    </p>
                    <Socials className="mt-9 banner-button slide-up-and-fade" />
                    <Button
                        as="link"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="#"
                        variant="primary"
                        className="mt-9 banner-button slide-up-and-fade"
                    >
                        Hire Me
                    </Button>
                </div>
                <Image
                    src={'/avatar.png'}
                    alt="avatar"
                    width={400}
                    height={400}
                    className="mb-10 brightness-55 mr-0 contrast-85 slide-up-and-fade max-md:self-end"
                />
            </div>
        </section>
    );
};

export default Banner;
