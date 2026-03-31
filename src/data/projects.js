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

const projects = [
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
