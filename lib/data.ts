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
        liveUrl:
            'https://www.ana.co.jp/ja/jp/domestic/theme/hotel_recommended/',
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
        role: `As a frontend developer and Collaboration in agency Team: `,
        techStack: ['Javascript', 'Adobe Experience Manager'],
        thumbnail: '/projects/thumbnail/ana-hotel-capture.png',
        longThumbnail: '/projects/long/mti-electronics.webp',
        images: [
            '/projects/images/anahotel_1.png',
            '/projects/images/anahotel_2.png',
            '/projects/images/anahotel_3.png',
        ],
    },
    {
        title: 'ANA - Golden Week',
        slug: 'goldenweek-ana',
        client: 'All Nippon Airways',
        techStack: ['Javascript', 'Adobe Experience Manager'],
        thumbnail: '/projects/thumbnail/anagw_1.png',
        longThumbnail: '/projects/thumbnail/anagw_1.png',
        images: [
            '/projects/images/anagw_1.png',
            '/projects/images/anagw_2.png',
            '/projects/images/anagw_3.png',
            '/projects/images/anagw_4.png',
        ],
        liveUrl: 'https://www.ana.co.jp/ja/jp/domestic/theme/gw/',
        year: 2024,
        description: `Golden Week is a page to show the Available Tourism Location Spot to Customer who wants to visit Japan on Golden Week Holiday across Japan Archipelago`,
        role: `As a frontend developer and Collaboration in agency Team: <br/>
        - Built the frontend from scratch using HTML, CSS and Javascript.<br/>
        - Work alongside Japanese Client throughout the project with Design Brief.<br/>
        - Integrated parameter from Backend to display Available trips and Ticket Price using Adobe Experience Manager.<br/>
        - Delivered a responsive, user-friendly interface in collaboration with the Japanese designer.`,
    },
    {
        title: 'ANA - Aomori Travel',
        slug: 'aomori',
        client: 'All Nippon Airways',
        techStack: ['Javascript', 'Adobe Experience Manager'],
        thumbnail: '/projects/thumbnail/aomori_1.png',
        longThumbnail: '/projects/long/property-pro.jpg',
        images: [
            '/projects/images/aomori_1.png',
            '/projects/images/aomori_2.png',
            '/projects/images/aomori_3.png',
        ],
        liveUrl:
            'https://www.ana.co.jp/ja/jp/domestic/theme/here_we_go_japan/aomori/',
        year: 2024,
        description: `This is a page to show several Travel Locations in Aomori Japan`,
        role: `As a frontend developer and Collaboration in agency Team: <br/>
        - Built the frontend from scratch using HTML, CSS and Javascript.<br/>
        - Work alongside Japanese Client throughout the project with Design Brief.<br/>
        - Integrated parameter from Backend to display Available trips and Ticket Price using Adobe Experience Manager.<br/>
        - Delivered a responsive, user-friendly interface in collaboration with the Japanese designer.`,
    },
    {
        title: 'PT Insinho Putra Pratama',
        slug: 'insinho',
        client: 'Insinho Putra Pratama',
        techStack: ['Bootstrap', 'Javascript'],
        thumbnail: '/projects/thumbnail/insinho_1.png',
        longThumbnail: '/projects/long/resume-roaster.jpg',
        images: [
            '/projects/images/insinho_1.png',
            '/projects/images/insinho_2.png',
        ],
        liveUrl: 'https://insinhoputrapratama.com/',
        year: 2023,
        description:
            'Insinho is an Oil and Gas Contractor Company based in Bekasi, West Java, Indonesia',
        role: `As the sole developer and Front End Developer:<br/>
        - Designed and developed the platform end-to-end using Bootstrap.<br/>
        - Create Usable Components for all of the Company Profile pages.<br/>
        - Design Minimalist and Modern Website to attract Visitor and Clients.<br/>
        - Deploy the Website and configure sitemap to make the Website is detected by Google Crawler`,
    },

    {
        title: 'Ushalli - Daily Prayer App',
        slug: 'ushalli',
        client: 'Self Project',
        techStack: ['Next JS', 'React', 'Git', 'Mongo DB', 'Node JS'],
        thumbnail: '/projects/thumbnail/ushalli_1.png',
        longThumbnail: '/projects/long/property-pro.jpg',
        images: [
            '/projects/images/ushalli_1.png',
            '/projects/images/ushalli_2.png',
        ],
        liveUrl: 'https://ushalli.vercel.app/',
        year: 2025,
        description:
            'Ushalli is an PWA App for Daily Prayer Reminder with Push Notification, Nearest Masjid Finder by Route, and Daily Preach Videos.',
        role: `As the frontend developer and Business Owner:<br/>
        - Built the whole entire App from scratch using Next JS and MongoDB as Database.<br/>
        - Create Feature to Push Notification for user Device<br/>
        - Create Feature to search for nearest mosque and calculate the distance from User Location<br/>
        - Integrating the app with third parties API, (Al-adhan, GeoApify, Leaflet).`,
    },
    {
        title: 'Layar Tancap - Netflix Clone to Watch Movie Online',
        slug: 'layartancap',
        client: 'Self Project',
        techStack: ['Next JS', 'React', 'Git', 'Mongo DB', 'Node JS'],
        thumbnail: '/projects/thumbnail/property-pro.jpg',
        longThumbnail: '/projects/long/property-pro.jpg',
        images: [
            '/projects/images/property-pro-1.png',
            '/projects/images/property-pro-2.png',
            '/projects/images/property-pro-3.png',
        ],
        liveUrl: 'https://layartancap.vercel.app/',
        year: 2025,
        description:
            'Layar Tancap is an PWA App for Watch Movie by Streaming Online with mimicking the Netflix Design',
        role: `As the frontend developer and Business Owner:<br/>
        - Built the whole entire App from scratch using Next JS and MongoDB as Database.<br/>
        - Create Feature to search and find details of Movies and Series.<br/>
        - Create Feature to watch movie by sync to Superembed Movie API<br/>
        - Enhanced user interaction with responsive re-usable components.`,
    },
    {
        title: 'Cuap Cuap - Ed Personal Website',
        slug: 'cuapcuap',
        client: 'Self Project',
        techStack: ['Next JS', 'React', 'Git', 'Mongo DB', 'Node JS'],
        thumbnail: '/projects/thumbnail/property-pro.jpg',
        longThumbnail: '/projects/long/property-pro.jpg',
        images: [
            '/projects/images/property-pro-1.png',
            '/projects/images/property-pro-2.png',
            '/projects/images/property-pro-3.png',
        ],
        liveUrl: 'https://cuapcuap.vercel.app/',
        year: 2025,
        description:
            'This is my first Fullstack Project and i decide to create Personal Website for me to express my writings',
        role: `As the frontend developer and Business Owner:<br/>
        - Built the whole entire App from scratch using Next JS and MongoDB as Database.<br/>
        - Create Admin Page to Manage the contents.<br/>
        - Create own API to Serve the content's request.<br/>
        - Enhanced user interaction with responsive re-usable components.`,
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
