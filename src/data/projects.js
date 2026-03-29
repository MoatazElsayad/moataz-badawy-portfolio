/**
 * Projects Data
 * 
 * Store all project information here instead of hardcoding in components
 * This makes it easier to maintain and update your portfolio
 */

const projects = [
  {
    id: 1,
    title: "AI Finance Tracker",
    description: "Full-stack web app with receipt OCR scanning, expense categorization, and financial insights powered by AI. Built to solve real personal finance management.",
    category: "fullstack",
    image: "ai-finance-tracker.jpg",
    technologies: ["React", "Node.js", "Python", "OCR", "PostgreSQL"],
    github: "https://github.com/moataz",
    live: "https://ai-finance-tracker.vercel.app",
    startDate: "2024-01",
    endDate: "2024-06",
    highlights: [
      "Integrated OCR for receipt scanning",
      "Real-time expense categorization",
      "Dashboard with financial insights"
    ]
  },
  {
    id: 2,
    title: "Smart IoT Monitor (ESP32)",
    description: "Real-time environmental monitoring system using ESP32. Tracks temperature, humidity, and air quality with cloud data visualization. Built for practical home automation.",
    category: "embedded",
    image: "iot-monitor.jpg",
    technologies: ["C++", "ESP32", "Arduino", "MQTT", "React"],
    github: "https://github.com/moataz",
    live: null,
    startDate: "2023-09",
    endDate: "2023-12",
    highlights: [
      "Real-time sensor data collection",
      "Cloud data visualization",
      "Mobile app integration"
    ]
  },
  {
    id: 3,
    title: "Network Shell (NSH)",
    description: "Custom shell implementation with TCP/IP networking, command parsing, process management, and advanced scripting. Deep systems programming in C++.",
    category: "systems",
    image: "nsh.jpg",
    technologies: ["C++", "CMake", "Linux", "Networking", "Sockets"],
    github: "https://github.com/moataz",
    live: null,
    startDate: "2023-06",
    endDate: "2023-09",
    highlights: [
      "Full shell implementation",
      "TCP/IP networking support",
      "Process management system"
    ]
  },
  {
    id: 4,
    title: "Arduino Robotics Project",
    description: "Autonomous robotics system with obstacle detection, pathfinding algorithms, and real-time sensor integration. Showcases hardware + software integration.",
    category: "embedded",
    image: "robotics.jpg",
    technologies: ["Arduino", "C++", "Sensors", "Control Systems"],
    github: "https://github.com/moataz",
    live: null,
    startDate: "2023-03",
    endDate: "2023-06",
    highlights: [
      "Autonomous obstacle avoidance",
      "Pathfinding algorithms",
      "Real-time sensor integration"
    ]
  },
  {
    id: 5,
    title: "Problem-Solving Repository",
    description: "Advanced algorithms and data structures implementations. LeetCode-style problems solved in C++ with optimized solutions and explanations.",
    category: "systems",
    image: "algorithms.jpg",
    technologies: ["C++", "Algorithms", "Data Structures", "Problem-Solving"],
    github: "https://github.com/moataz",
    live: null,
    startDate: "2023-01",
    endDate: "ongoing",
    highlights: [
      "500+ algorithm problems solved",
      "Optimized solutions",
      "Detailed explanations"
    ]
  },
  {
    id: 6,
    title: "Asynchronous C++ Framework",
    description: "High-performance async I/O framework using Boost.Asio. Demonstrates modern C++ patterns, threading, and networking fundamentals.",
    category: "systems",
    image: "cpp-framework.jpg",
    technologies: ["C++", "Boost", "Threading", "Async I/O"],
    github: "https://github.com/moataz",
    live: null,
    startDate: "2024-02",
    endDate: "2024-05",
    highlights: [
      "Async I/O implementation",
      "Modern C++ patterns",
      "High-performance networking"
    ]
  }
];

export default projects;
