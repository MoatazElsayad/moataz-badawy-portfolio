import aiFinance0 from '../assets/projects/ai-finance-tracker/0.png'
import aiFinance1 from '../assets/projects/ai-finance-tracker/1.png'
import aiFinance2 from '../assets/projects/ai-finance-tracker/2.png'
import aiFinance3 from '../assets/projects/ai-finance-tracker/3.png'
import aiFinance4 from '../assets/projects/ai-finance-tracker/4.png'
import aiFinance5 from '../assets/projects/ai-finance-tracker/5.png'
import aiFinance6 from '../assets/projects/ai-finance-tracker/6.png'
import losPollos0 from '../assets/projects/los-pollos/0.png'
import losPollos1 from '../assets/projects/los-pollos/1.png'
import losPollos2 from '../assets/projects/los-pollos/2.png'
import losPollos3 from '../assets/projects/los-pollos/3.png'

import gladiators1 from '../assets/projects/gladiators/1.png'
import gladiators2 from '../assets/projects/gladiators/2.png'
import gladiators3 from '../assets/projects/gladiators/3.png'
import gladiators4 from '../assets/projects/gladiators/4.png'
import gladiators5 from '../assets/projects/gladiators/5.png'
import gladiators6 from '../assets/projects/gladiators/6.png'
import gladiators7 from '../assets/projects/gladiators/7.png'
import gladiators8 from '../assets/projects/gladiators/8.png'
import gladiators9 from '../assets/projects/gladiators/9.png'
import gladiators10 from '../assets/projects/gladiators/10.png'
import gladiators11 from '../assets/projects/gladiators/11.png'
import gladiatorsVideo from '../assets/projects/gladiators/0.mp4'
import safeLa1 from '../assets/projects/powerbi/1.png'
import safeLa2 from '../assets/projects/powerbi/2.png'
import safeLa3 from '../assets/projects/powerbi/3.png'
import safeLa4 from '../assets/projects/powerbi/4.png'
import safeLaVideo from '../assets/projects/powerbi/0.mp4'

const projects = [
  {
    id: 4,
    title: 'Battle Arena (Gladiators)',
    description: 'A fast-paced 2D pixel-art fighting game built with C++ and Qt 6. Connects to a live website with rankings, leaderboards, PS4 controller support, and AI-powered features like an enemy advisor and gameplay coach.',
    category: 'desktop',
    image: gladiatorsVideo,
    gallery: [
      gladiatorsVideo,
      gladiators1,
      gladiators2,
      gladiators3,
      gladiators4,
      gladiators5,
      gladiators6,
      gladiators7,
      gladiators8,
      gladiators9,
      gladiators10,
      gladiators11
    ],
    iconName: 'Zap',
    technologies: ['C++', 'Qt 6', 'CMake'],
    github: 'https://github.com/MoatazElsayad/battle_arena.git',
    live: 'https://gladiators-website.vercel.app/',
    role: 'Team Leader',
    status: 'Completed',
    startDate: 'Spring 2026',
    endDate: 'Spring 2026',
    highlights: [
      'Built a fast-paced 2D fighting game with C++ and Qt 6.',
      'Connected desktop game to a live website with leaderboards.',
      'Integrated AI-powered gameplay coach and PS4 controller support.'
    ]
  },
  {
    id: 1,
    title: 'AI Finance Tracker',
    description: 'AI-Powered Finance Tracker is a full-stack financial management application that combines intelligent automation with modern UI design. Built with React and FastAPI, it helps users manage budgets, scan receipts with OCR, track savings goals, generate PDF reports, and receive AI-driven insights through OpenRouter integrations.',
    category: 'fullstack',
    image: aiFinance0,
    gallery: [
      aiFinance0,
      aiFinance1,
      aiFinance2,
      aiFinance3,
      aiFinance4,
      aiFinance5,
      aiFinance6
    ],
    iconName: 'BarChart3',
    technologies: ['FastAPI', 'React', 'HTML5', 'CSS3', 'JavaScript', 'SQLite', 'Docker'],
    github: 'https://github.com/MoatazElsayad/ai-finance-tracker.git',
    live: null,
    role: 'Full-Stack Developer',
    status: 'Completed',
    startDate: 'Jan 2026',
    endDate: 'Mar 2026',
    highlights: [
      'Built an AI financial advisor workflow powered by OpenRouter models.',
      'Integrated OCR-based receipt scanning into the finance flow.',
      'Added budgeting, savings goals, alerts, and PDF reporting in one system.'
    ]
  },
  {
    id: 2,
    title: 'MB Currency Converter',
    description: 'MB Currency Converter is a full-stack CS50x final project built with Flask. It supports real-time conversion, user authentication, favorite currency pairs, conversion history, CSV export, country flags, and random currency facts while using ExchangeRate-API for live rates.',
    category: 'fullstack',
    image: 'https://img.youtube.com/vi/vLPi9Mm9WhM/maxresdefault.jpg',
    gallery: [],
    videoEmbed: 'https://www.youtube-nocookie.com/embed/vLPi9Mm9WhM',
    videoWatchUrl: 'https://youtu.be/vLPi9Mm9WhM?si=sgPfjDqH8hJxbnjt',
    iconName: 'Monitor',
    technologies: ['Flask', 'HTML5', 'CSS3', 'JavaScript', 'SQLite'],
    github: 'https://github.com/MoatazElsayad/CS50x_Final_Project.git',
    live: null,
    role: 'Full-Stack Developer',
    status: 'Completed',
    startDate: 'Jul 2025',
    endDate: 'Jul 2025',
    highlights: [
      'Used ExchangeRate-API for live exchange-rate conversion.',
      'Added authentication, favorites, conversion history, and CSV export.',
      'Designed the app as a practical and easy-to-use financial tool.'
    ]
  },
  {
    id: 5,
    title: 'SafeLA',
    description: 'An interactive 4-page Power BI dashboard analyzing over 1 million reported crime incidents in Los Angeles from 2020 to 2025, sourced from LAPD open data. It covers crime hotspots, time-based trends, victim demographics, and weapon involvement with a geospatial map and dynamic filters.',
    category: 'data-analytics',
    image: safeLaVideo,
    gallery: [
      safeLaVideo,
      safeLa1,
      safeLa2,
      safeLa3,
      safeLa4
    ],
    videoWatchUrl: safeLaVideo,
    iconName: 'BarChart3',
    technologies: ['Power BI', 'DAX', 'Power Query (M)'],
    role: 'Solo Project',
    status: 'Completed',
    startDate: 'Summer 2026',
    endDate: 'Summer 2026',
    highlights: [
      'Built a 4-page interactive dashboard analyzing 1M+ LAPD crime records from 2020 to 2025.',
      'Designed geospatial and time-series visualizations to surface hotspots, seasonal trends, and hourly and weekday patterns.',
      'Modeled victim demographics and weapon involvement with DAX measures and cross-filtering across report pages.'
    ]
  },
  {
    id: 3,
    title: 'Los Pollos Hermanos Restaurant',
    description: 'This was the first website I built after learning HTML, CSS, and JavaScript. It has a simple structure, basic design, and light interactivity, and it represents an early milestone in my frontend journey.',
    category: 'fullstack',
    image: losPollos0,
    gallery: [
      losPollos0,
      losPollos1,
      losPollos2,
      losPollos3
    ],
    iconName: 'Bot',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    github: 'https://github.com/MoatazElsayad/Los-Pollos-Hermanos-Restaurant.git',
    live: 'https://moatazelsayad.github.io/Los-Pollos-Hermanos-Restaurant/',
    role: 'Frontend Developer',
    status: 'Completed',
    startDate: 'May 2025',
    endDate: 'May 2025',
    highlights: [
      'Built the first complete website in my frontend learning journey.',
      'Practiced page layout, styling, and basic JavaScript interactivity.',
      'Used the project to turn fundamentals into a real deployed site.'
    ]
  }
]

export default projects
