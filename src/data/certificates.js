// ─────────────────────────────────────────────────────────────────────────────
// Certificates data
//
// TO ADD A CERTIFICATE PHOTO:
//   1. Drop the image into:       src/assets/certificates/
//   2. Import it at the top:      import cs50xPhoto from '../assets/certificates/cs50x.jpg'
//   3. Set it on the entry:       image: cs50xPhoto,
//
// Fields:
//   category     : 'cs' | 'web' | 'aiml' | 'datacloud' | 'pro'
//                  (labels live in CATEGORY_LABELS inside Certificates.jsx;
//                   entries are grouped by category in this array's order)
//   skills       : shown as one line on the card + chips in the detail panel
//   featured     : true → included in the default "Featured" carousel view
//   credentialUrl: verification link — the "View Credential →" button appears
//                  on the card automatically once this is set
// ─────────────────────────────────────────────────────────────────────────────

import cs50xPhoto from '../assets/certificates/CS50x.png'
import cs50pPhoto from '../assets/certificates/CS50P.png'
import ecpcPhoto from '../assets/certificates/ecpc.png'
import edxCppPhoto from '../assets/certificates/edx-ibm-cpp.png'
import linkedinCppPhoto from '../assets/certificates/linkedin-cpp.png'
import reactPhoto from '../assets/certificates/front-end-react.png'
import ibmWebPhoto from '../assets/certificates/ibm-web.png'
import promptersPhoto from '../assets/certificates/million-prompters.png'
import sprintupPhoto from '../assets/certificates/sprintup-ai-machine.png'
import ibmCloudPhoto from '../assets/certificates/ibm-cloud.png'
import eyouthPhoto from '../assets/certificates/eyouth.png'
import ibmGitPhoto from '../assets/certificates/ibm-git.png'
import ibmAgilityPhoto from '../assets/certificates/ibm-agility.png'
import amideastPhoto from '../assets/certificates/amideast-steam.png'
import depiPhoto from '../assets/certificates/depi.png'
import injazPhoto from '../assets/certificates/INJAZ.png'

const certificates = [
  // ── Computer Science ──────────────────────────────────────────────────────
  {
    id: 15,
    title: '2026 ICPC ECPC Qualifications Collegiate Programming Contest Day 3',
    issuer: 'International Collegiate Programming Contest (ICPC Foundation)',
    date: 'Aug 14, 2026',
    category: 'cs',
    skills: ['Competitive Programming', 'Algorithms', 'Problem Solving'],
    featured: true,
    type: 'award',
    description:
      'Competed in the 2026 ECPC Qualifications Collegiate Programming Contest (Day 3) representing The American University in Cairo — earned 34th place among collegiate teams.',
    credentialUrl: null,
    image: ecpcPhoto
  },
  {
    id: 1,
    title: 'CS50x: Introduction to Computer Science',
    issuer: 'CS50 · Harvard University',
    date: 'Jul 2025',
    category: 'cs',
    skills: ['C', 'Python', 'Algorithms', 'Data Structures', 'Computer Science'],
    featured: true,
    type: 'certificate',
    description:
      "Harvard's flagship computer-science course — C, algorithms, memory, Python, SQL, and web fundamentals — completed with all problem sets and a final project.",
    credentialUrl: null,
    image: cs50xPhoto
  },
  {
    id: 2,
    title: 'CS50P: Introduction to Programming with Python',
    issuer: 'CS50 · Harvard University',
    date: 'Jul 2025',
    category: 'cs',
    skills: ['Python', 'Object-Oriented Programming'],
    featured: true,
    type: 'certificate',
    description:
      'Harvard\'s Python-focused course — functions, object-oriented programming, recursion, file I/O, and unit testing — completed through weekly problem sets.',
    credentialUrl: null,
    image: cs50pPhoto
  },
  {
    id: 3,
    title: 'Fundamentals of C++',
    issuer: 'edX',
    date: 'Sep 2023',
    category: 'cs',
    skills: ['C++', 'Problem Solving'],
    featured: true,
    type: 'certificate',
    description:
      'Verified edX course covering C++ syntax, control flow, functions, arrays, and structured problem-solving techniques.',
    credentialUrl: null,
    image: edxCppPhoto
  },
  {
    id: 4,
    title: 'C++ Programming: Essential Techniques and Best Practices',
    issuer: 'LinkedIn',
    date: 'Aug 2023',
    category: 'cs',
    skills: ['C++', 'Programming'],
    featured: false,
    type: 'certificate',
    description:
      'Course on essential C++ techniques and best practices — pointers, references, classes, and writing clean, maintainable code.',
    credentialUrl: null,
    image: linkedinCppPhoto
  },

  // ── Web Development ───────────────────────────────────────────────────────
  {
    id: 5,
    title: 'Developing Front-End Apps with React',
    issuer: 'IBM',
    date: 'Jun 2025',
    category: 'web',
    skills: ['React.js', 'Web Development', 'Front-End Development'],
    featured: true,
    type: 'certificate',
    description:
      'Hands-on IBM course building front-end applications with React — components, props, state, hooks, and application structure.',
    credentialUrl: null,
    image: reactPhoto
  },
  {
    id: 6,
    title: 'Introduction to Web Development with HTML, CSS, JavaScript',
    issuer: 'IBM',
    date: 'May 2025',
    category: 'web',
    skills: ['HTML', 'CSS', 'JavaScript', 'Front-End Development'],
    featured: false,
    type: 'certificate',
    description:
      'Foundations of the web platform — semantic HTML, CSS styling and layout, and core JavaScript programming.',
    credentialUrl: null,
    image: ibmWebPhoto
  },

  // ── AI & Machine Learning ────────────────────────────────────────────────
  {
    id: 7,
    title: '1 Million Prompters',
    issuer: 'Dubai Future Foundation',
    date: 'Jun 2025',
    category: 'aiml',
    skills: ['AI Prompting', 'Generative AI'],
    featured: false,
    type: 'certificate',
    description:
      'Generative-AI prompt-engineering program by the Dubai Future Foundation — practical prompting techniques and AI workflows.',
    credentialUrl: null,
    image: promptersPhoto
  },
  {
    id: 8,
    title: 'SprintUp — AI and Machine Learning Foundations',
    issuer: 'Sprints',
    date: 'Jun 2025',
    category: 'aiml',
    skills: ['Machine Learning', 'AI'],
    featured: false,
    type: 'certificate',
    description:
      'Foundations of machine learning and artificial intelligence — core concepts, model families, and real-world applications.',
    credentialUrl: null,
    image: sprintupPhoto
  },

  // ── Data & Cloud ─────────────────────────────────────────────────────────
  {
    id: 16,
    title: 'Digital Egypt Pioneers (DEPI) — Data Analysis Track',
    issuer: 'MCIT (Ministry of Communications & IT)',
    date: 'Dec 2025',
    category: 'datacloud',
    skills: ['Data Analysis', 'SQL', 'Power BI'],
    featured: true,
    type: 'certificate',
    description:
      'National initiative training on Excel, SQL, Python, Pandas, Tableau, and Power BI with practical reporting workflows.',
    credentialUrl: null,
    image: depiPhoto
  },
  {
    id: 9,
    title: 'Introduction to Cloud Computing',
    issuer: 'IBM',
    date: 'May 2025',
    category: 'datacloud',
    skills: ['Cloud Computing'],
    featured: false,
    type: 'certificate',
    description:
      'Cloud fundamentals — service models, deployment models, virtualization, and the major cloud providers.',
    credentialUrl: null,
    image: ibmCloudPhoto
  },
  {
    id: 10,
    title: 'EYouth Data Analytics Bootcamp',
    issuer: 'EYouth for Development',
    date: 'Jun 2024',
    category: 'datacloud',
    skills: ['Data Analysis'],
    featured: false,
    type: 'certificate',
    description:
      'Intensive bootcamp on data analysis — collecting, cleaning, exploring, and interpreting data to support decisions.',
    credentialUrl: null,
    image: eyouthPhoto
  },

  // ── Professional ─────────────────────────────────────────────────────────
  {
    id: 11,
    title: 'Getting Started with Git and GitHub',
    issuer: 'IBM',
    date: 'Jun 2025',
    category: 'pro',
    skills: ['Git', 'GitHub', 'Version Control'],
    featured: true,
    type: 'certificate',
    description:
      'Version-control essentials — commits, branches, pull requests, and collaborative GitHub workflows.',
    credentialUrl: null,
    image: ibmGitPhoto
  },
  {
    id: 12,
    title: 'Delivering Quality Work with Agility',
    issuer: 'IBM',
    date: 'May 2025',
    category: 'pro',
    skills: ['Agile', 'Work Agility'],
    featured: false,
    type: 'certificate',
    description:
      'IBM course on agile ways of working — iterative delivery, feedback loops, and adapting plans to change.',
    credentialUrl: null,
    image: ibmAgilityPhoto
  },
  {
    id: 13,
    title: 'Virtual Internship in Project Management in Information Technology',
    issuer: 'Project Management Institute · INJAZ',
    date: 'Apr 2024',
    category: 'pro',
    skills: ['Project Management'],
    featured: true,
    type: 'certificate',
    description:
      'Virtual internship simulating IT project management — scoping, scheduling, stakeholder communication, and delivery.',
    credentialUrl: null,
    image: injazPhoto
  },
  {
    id: 14,
    title: 'STEM Center Programs',
    issuer: 'Amideast / Egypt',
    date: 'Nov 2022',
    category: 'pro',
    skills: ['C#', 'Web Development', 'Programming'],
    featured: false,
    type: 'certificate',
    description:
      'AMIDEAST STEM center programs covering C# programming and web development fundamentals.',
    credentialUrl: null,
    image: amideastPhoto
  }
]

// Array of all featured certificates — drives the default "Featured" carousel view
export const FEATURED_CERTIFICATES = certificates.filter((cert) => cert.featured)

export const CATEGORY_LABELS = {
  cs: 'Computer Science',
  web: 'Web Development',
  aiml: 'AI & Machine Learning',
  datacloud: 'Data & Cloud',
  pro: 'Professional'
}

export default certificates
