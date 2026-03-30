const projects = [
  {
    id: 1,
    title: 'AI Finance Tracker',
    description: 'Full-stack finance app with OCR receipt scanning, expense classification, and AI-assisted insights for everyday money decisions.',
    category: 'fullstack',
    image: '/src/assets/projects/ai-finance-tracker/0.png',
    gallery: [
      '/src/assets/projects/ai-finance-tracker/0.png',
      '/src/assets/projects/ai-finance-tracker/1.png',
      '/src/assets/projects/ai-finance-tracker/2.png',
      '/src/assets/projects/ai-finance-tracker/3.png',
      '/src/assets/projects/ai-finance-tracker/4.png',
      '/src/assets/projects/ai-finance-tracker/5.png',
      '/src/assets/projects/ai-finance-tracker/6.png'
    ],
    iconName: 'BarChart3',
    technologies: ['React', 'Node.js', 'Python', 'OCR', 'PostgreSQL'],
    github: 'https://github.com/moataz-badawy',
    live: 'https://ai-finance-tracker.vercel.app',
    role: 'Full-stack developer',
    status: 'In progress',
    startDate: '2024-01',
    endDate: 'Present',
    highlights: [
      'Integrated OCR to turn paper receipts into structured expense entries.',
      'Built category-based tracking flows for clearer spending visibility.',
      'Designed a dashboard oriented around useful personal finance decisions.'
    ]
  },
  {
    id: 2,
    title: 'Los Pollos',
    description: 'Restaurant-style web experience with a strong visual direction, product presentation, and polished UI storytelling.',
    category: 'fullstack',
    image: '/src/assets/projects/los-pollos/0.png',
    gallery: [
      '/src/assets/projects/los-pollos/0.png',
      '/src/assets/projects/los-pollos/1.png',
      '/src/assets/projects/los-pollos/2.png',
      '/src/assets/projects/los-pollos/3.png'
    ],
    iconName: 'Bot',
    technologies: ['React', 'Node.js', 'CSS3'],
    github: 'https://github.com/moataz-badawy',
    live: null,
    role: 'Frontend-focused developer',
    status: 'Completed',
    startDate: '2025-01',
    endDate: '2025-01',
    highlights: [
      'Built a visually driven interface with strong product presentation.',
      'Used structured layout and styling to make the experience feel branded.',
      'Focused on clean presentation and interaction polish.'
    ]
  },
  {
    id: 3,
    title: 'MB Currency Converter',
    description: 'Currency conversion tool focused on speed, clarity, and a clean user flow for quick exchange-rate checks.',
    category: 'fullstack',
    image: 'https://img.youtube.com/vi/vLPi9Mm9WhM/maxresdefault.jpg',
    gallery: [],
    videoEmbed: 'https://www.youtube-nocookie.com/embed/vLPi9Mm9WhM',
    videoWatchUrl: 'https://youtu.be/vLPi9Mm9WhM?si=sgPfjDqH8hJxbnjt',
    iconName: 'Monitor',
    technologies: ['JavaScript', 'HTML5', 'CSS3'],
    github: 'https://github.com/moataz-badawy',
    live: null,
    role: 'Frontend developer',
    status: 'Completed',
    startDate: '2025-01',
    endDate: '2025-01',
    highlights: [
      'Built a focused conversion experience around a single clear task.',
      'Prioritized speed and readability over unnecessary interface clutter.',
      'Packaged the project as a concise utility with a strong demo flow.'
    ]
  }
]

export default projects
