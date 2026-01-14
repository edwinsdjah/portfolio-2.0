'use client';
import SectionTitle from '@/components/SectionTitle';
import { MY_CLIENTS } from '../../lib/data';
import Image from 'next/image';
import React from 'react';
import Slider from 'react-slick';

// slick styles
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Clients = () => {
    const settings = {
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1,
        speed: 5000,
        cssEase: 'linear',
        arrows: false,
        pauseOnHover: false,
        swipe: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 4 },
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 3 },
            },
            {
                breakpoint: 480,
                settings: { slidesToShow: 2 },
            },
        ],
    };

    // 🔑 DUPLIKASI DATA AGAR SLIDER SELALU BISA JALAN
    const MIN_SLIDES = 6; // aman untuk semua breakpoint
    const clients =
        MY_CLIENTS.length >= MIN_SLIDES
            ? MY_CLIENTS
            : Array.from({
                  length: Math.ceil(MIN_SLIDES / MY_CLIENTS.length),
              }).flatMap(() => MY_CLIENTS);

    return (
        <section id="my-clients" className="py-section">
            <div className="container">
                <SectionTitle title="Clients" />

                {/* MARQUEE VIA SLICK */}
                <div className="overflow-hidden">
                    <Slider {...settings}>
                        {clients.map((item, idx) => (
                            <div key={`${item.name}-${idx}`}>
                                <div className="flex items-center justify-center">
                                    <Image
                                        src={item.logo}
                                        alt={item.name}
                                        width={140}
                                        height={40}
                                        className="h-20 w-50     object-contain brightness-0 invert opacity-90"
                                    />
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default Clients;
