import { IProject } from '@/types';
import { IClients } from '@/types';

export const GENERAL_INFO = {
    email: 'edwinsdjah@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Edwin, I am reaching out to you because...',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/edwinsdjah', icon: '' },
    {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/edwinsdjah',
        icon: '',
    },
    { name: 'facebook', url: 'https://www.facebook.com/edwinsdjah', icon: '' },
];

export const MY_CLIENTS: IClients[] = [
    { name: 'All Nippon Airways', logo: '/logo/ana.png' },
    { name: 'Transcosmos Japan', logo: '/logo/transcosmos.svg' },
    { name: 'Insinho Putra Pratama', logo: '/logo/insinho.png' },
    { name: '7 Bank', logo: '/logo/sbank.png' },
];

export const MY_STACK = {
    frontend: [
        {
            name: 'JavaScript',
            icon: '/logo/js.png',
        },
        {
            name: 'TypeScript',
            icon: '/logo/ts.png',
        },
        {
            name: 'React',
            icon: '/logo/react.png',
        },
        {
            name: 'Next.js',
            icon: '/logo/next.png',
        },
        {
            name: 'Redux',
            icon: '/logo/redux.png',
        },
        {
            name: 'Tailwind CSS',
            icon: '/logo/tailwind.png',
        },
        {
            name: 'GSAP',
            icon: '/logo/gsap.png',
        },
        {
            name: 'Adobe Experience Manager',
            icon: '/logo/aem.png',
        },
        {
            name: 'Framer Motion',
            icon: '/logo/framer-motion.png',
        },
        {
            name: 'Sass',
            icon: '/logo/sass.png',
        },
        {
            name: 'Bootstrap',
            icon: '/logo/bootstrap.svg',
        },
    ],
    backend: [
        {
            name: 'Node.js',
            icon: '/logo/node.png',
        },
        {
            name: 'Express.js',
            icon: '/logo/express.png',
        },
    ],
    database: [
        {
            name: 'MySQL',
            icon: '/logo/mysql.svg',
        },
        {
            name: 'PostgreSQL',
            icon: '/logo/postgreSQL.png',
        },
        {
            name: 'MongoDB',
            icon: '/logo/mongodb.svg',
        },
        {
            name: 'Prisma',
            icon: '/logo/prisma.png',
        },
    ],
    tools: [
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'ANA - Hotel Recommendation',
        slug: 'hotel-ana',
        client: 'All Nippon Airways',
        liveUrl: 'https://electroev.co.uk/',
        year: 2024,
        description: `
      A Page to show Hotel Recommendation based on price in Japan <br/> <br/>

      Key Features:<br/>
      <ul>
        <li>📱 Fully Responsive: Optimized for all device sizes</li>
      </ul><br/>

      Technical Highlights:
      <ul>
        <li>Slicing From Figma Design into Production Ready Website</li>
        <li>Fetch Flight Schedule from ANA Backend into Frontend</li>
        <li>Developed responsive components for Display</li>
      </ul>
      `,
        role: `
      Front End Developer
      `,
        techStack: ['Javascript', 'Adobe Experience Manager'],
        thumbnail: '/projects/thumbnail/ana-hotel-capture.png',
        longThumbnail: '/projects/long/mti-electronics.webp',
        images: [
            '/projects/images/mti-electronics-1.webp',
            '/projects/images/mti-electronics-2.webp',
        ],
    },
    {
        title: 'ANA - Golden Week',
        slug: 'goldenweek-ana',
        client: 'All Nippon Airways',
        techStack: ['Javascript', 'Adobe Experience Manager'],
        thumbnail: '/projects/thumbnail/epikcart.jpg',
        longThumbnail: '/projects/long/epikcart.jpg',
        images: [
            '/projects/images/epikcart-1.png',
            '/projects/images/epikcart-2.png',
            '/projects/images/epikcart-3.png',
            '/projects/images/epikcart-4.png',
            '/projects/images/epikcart-5.png',
        ],
        liveUrl: 'https://demo.epikcart.siphertech.com/',
        year: 2024,
        description: `Epikcart is a feature-rich, scalable e-commerce platform tailored for large businesses. It features dynamic product filtering, multi-language support with RTL, advanced inventory management, order tracking, and refund systems, offering a comprehensive solution for multi-vendor operations.`,
        role: `As the frontend developer in a team of five, I: <br/>
        - Built the frontend from scratch using React, Redux, RTK Query, and Tailwind CSS.<br/>
        - Developed dynamic filtering logic for the product search page with admin-configurable parameters.<br/>
        - Integrated multi-language support with React i18n, including RTL handling.<br/>
        - Delivered a responsive, user-friendly interface in collaboration with the UI/UX designer.`,
    },
    {
        title: 'PT Insinho Putra Pratama',
        slug: 'insinho',
        client: 'Insinho Putra Pratama',
        techStack: [
            'GPT-4',
            'Next.js',
            'Postgressql',
            'Prisma',
            'Tailwind CSS',
        ],
        thumbnail: '/projects/thumbnail/resume-roaster.jpg',
        longThumbnail: '/projects/long/resume-roaster.jpg',
        images: [
            '/projects/images/resume-roaster-1.png',
            '/projects/images/resume-roaster-2.png',
            '/projects/images/resume-roaster-3.png',
        ],
        liveUrl: 'https://resume-roaster.vercel.app/',
        year: 2023,
        description:
            'Resume Roaster is a web application designed to provide tailored resume feedback and professional writing services. Built with Next.js, PostgreSQL, Prisma, and Tailwind CSS, it integrates GPT-4 for AI-powered recommendations. The platform also includes peer-to-peer reviews with a points-based system, fostering a collaborative and engaging experience. Targeting freshers, experienced professionals, and programmers, it helps optimize resumes for job-specific success.',
        role: `As the sole developer and business owner, I:<br/>
        - Designed and developed the platform end-to-end using Next.js, PostgreSQL, Prisma, and Tailwind CSS.<br/>
        - Integrated GPT-4 for AI-driven feedback and insights.<br/>
        - Implemented complex SQL queries, including one to identify the top two resumes based on user points.`,
    },
    {
        title: 'Transcosmos Japan Staff Introduction',
        slug: 'transcosmos',
        client: 'Transcosmos Japan',
        techStack: [
            'React.js',
            'Redux',
            'Tailwind CSS',
            'React i18n',
            'Framer Motion',
        ],
        thumbnail: '/projects/thumbnail/property-pro.jpg',
        longThumbnail: '/projects/long/property-pro.jpg',
        images: [
            '/projects/images/property-pro-1.png',
            '/projects/images/property-pro-2.png',
            '/projects/images/property-pro-3.png',
        ],
        liveUrl: 'https://demo.propertypro.siphertech.com/',
        year: 2022,
        description:
            'PropertyPro is a real estate management platform offering users a seamless experience to explore, manage, and view property listings. The application emphasizes accessibility and responsive design, ensuring a smooth interface across devices.',
        role: `As the frontend developer, I:<br/>
        - Built the frontend using React, Redux, RTK Query, Framer Motion, and Tailwind CSS.<br/>
        - Integrated dynamic state management for efficient handling of property data.<br/>
        - Implemented multi-language support with React i18n to cater to diverse audiences.<br/>
        - Enhanced user interaction with animations and transitions using Framer Motion.`,
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'Front End Developer',
        company: 'Transcosmos Indonesia',
        duration: 'Sept 2022 - Present',
    },
    {
        title: 'Web Administrator',
        company: 'Transcosmos Indonesia',
        duration: 'Sept 2019 - Sept 2022',
    },
    {
        title: 'General Affair (Branch Support Officer)',
        company: 'Asuransi Astra',
        duration: 'Nov 2018 - May 2019',
    },
    {
        title: 'Digital Marketing Content Officer',
        company: 'Thinktub Indonesia',
        duration: 'Oct 2017 - Oct 2018',
    },
    {
        title: 'Postpaid Activation Staff',
        company: 'XL Axiata',
        duration: 'Sept 2016 - Sept 2017',
    },
];
