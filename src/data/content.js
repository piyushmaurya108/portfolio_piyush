import civicVoiceImage from "../assets/projects/civicvoice.png";
import hireStackImage from "../assets/projects/hirestack.png";

export const profile = {
  name: "Piyush Maurya",
  role: "Full-Stack Developer",
  tagline:
    "CS undergrad at Panjab University shipping production-grade MERN products, with a bias for real-time systems and applied AI.",
  location: "Chandigarh, IN",
  email: "piyushkumarm3@gmail.com",
  phone: "+91 85744 03701",
  github: "https://github.com/piyushmaurya108/",
  linkedin: "https://linkedin.com/in/piyush-maurya108/",
  leetcode: "https://leetcode.com/u/piyushkumarm3/",
  availability: "Open to SDE internships",
};
 
export const roles = [
  "Full-Stack Developer",
  "MERN Engineer",
  "Competitive Programmer",
  "Applied-AI Builder",
];

export const about = {
  paragraphs: [
    "I'm a Computer Science undergraduate at Panjab University with a passion for building full-stack web applications and solving real-world problems. I enjoy turning ideas into practical solutions, learning new technologies, and continuously improving my problem-solving skills through projects and DSA..",
    "Most recently that's meant building CivicVoice, an AI-driven civic complaint aggregator, and HireStack, a real-time coding interview platform. Outside of shipping, I mentor juniors in C/C++ and help run placement operations for my department.",
  ],
  stats: [
    { label: "DSA problems solved", value: "500+" },
    { label: "LeetCode rating", value: "1600+" },
    { label: "CGPA / 10", value: "8.04" },
    { label: "Students mentored", value: "50+" },
  ],
  tags: ["#systems-thinker", "#realtime", "#applied-ai", "#mern", "#dsa"],
};

export const skills = [
  {
    group: "Languages",
    items: ["C", "C++", "JavaScript", "SQL", "HTML", "CSS"],
  },
  {
    group: "Frontend",
    items: ["React.js", "Tailwind CSS", "Responsive UI"],
  },
  {
    group: "Backend",
    items: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    group: "Databases",
    items: ["MongoDB", "MySQL", "Mongoose"],
  },
  {
    group: "AI / Realtime",
    items: ["Gemini 2.0 Flash", "Vision API", "Socket.IO", "Stream SDK"],
  },
  {
    group: "Tools",
    items: ["Git", "GitHub", "Postman", "VS Code"],
  },
  {
    group: "Core CS",
    items: [
      "Data Structures & Algorithms",
      "Operating Systems",
      "DBMS",
      "OOP",
      "Computer Networks",
      "Discrete Mathematics",
    ],
  },
];

export const experience = [
  {
    role: "Full-Stack Developer Intern",
    org: "Vecontra",
    duration: "Feb 2026",
    mode: "Remote",
    points: [
      "Built and optimized 10+ RESTful APIs using Node.js and Express.js powering an analytics dashboard SaaS serving 100+ users.",
      "Integrated MongoDB with Mongoose for efficient schema design and data handling across multiple dashboard modules.",
      "Connected frontend to backend APIs using Axios, handling real-time data rendering across the analytics interface.",
    ],
    stack: ["Node.js", "Express", "MongoDB", "React", "Axios"],
  },
];

export const education = [
  {
    institution: "UIETH, Panjab University (SSGRC)",
    degree: "Bachelor of Engineering — Computer Science & Engineering",
    duration: "Aug 2023 — 2027",
    score: "CGPA 8.04 / 10",
    coursework: [
      "Data Structures & Algorithms",
      "Operating Systems",
      "DBMS",
      "Computer Networks",
      "OOP",
      "Discrete Mathematics",
    ],
  },
];

export const projects = [
  {
    id: "civicvoice",
    index: "01",
    name: "CivicVoice",
    image: civicVoiceImage,
    tagline: "AI-powered civic complaint aggregator",
    description:
      "A dual-mode complaint platform that turns a phone-shot photo or a short text into a formal, officer-addressed petition — routed by ward-to-state hierarchy to the correct government portal.",
    features: [
      "Dual-mode Gemini 2.0 Flash pipeline: Vision API for photo complaints, text analysis for description-only complaints, with keyword fallback during API outages.",
      "GenAI petition drafter generating officer-addressed, ward-to-state-specific government letters with complaint-type-specific action demands, in the citizen's own words.",
      "3-method location picker (map pin, GPS, cascading address search) using React + Leaflet + Nominatim, resolving precise coordinates that power the AI and portal-matching pipeline.",
    ],
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Gemini 2.0 Flash", "Leaflet"],
    links: { code: "https://github.com/piyushmaurya108/CivicVoice/tree/update", demo: "https://civic-voice-livid.vercel.app" },
  },
  {
    id: "hirestack",
    index: "02",
    name: "HireStack",
    image: hireStackImage,
    tagline: "Real-time coding interview platform",
    description:
      "A collaborative interview studio with live video, chat, shared code execution and an AI mock-interview mode — built for interview prep and real hiring loops.",
    features: [
      "Real-time coding interview sessions with video calling, chat, and live code synchronization using Stream SDK and Socket.IO.",
      "Scalable RESTful APIs for session creation, participant management, authentication, code execution and interview workflows.",
      "AI-powered Mock Interview feature using Gemini AI and the Web Speech API — personalized question generation, real-time voice interaction, speech-to-text transcription, and automated performance evaluation.",
    ],
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Clerk", "Stream SDK", "Socket.IO"],
    links: { code: "https://github.com/piyushmaurya108/HireStack/tree/mock", demo: "https://hire-stack-xi.vercel.app" },
  },
];

export const certifications = [];

export const achievements = [
  {
    title: "1600+ LeetCode rating",
    detail: "Consistent competitive programmer across contests and rated rounds.",
  },
  {
    title: "500+ DSA problems solved",
    detail: "Across LeetCode, GeeksforGeeks, and CodeChef online judges.",
  },
  {
    title: "C/C++ Mentor — Technical Society",
    detail: "Mentored 50+ students in C and C++ through structured problem-solving sessions since 2024.",
  },
  {
    title: "10+ tech events led",
    detail: "Workshops and coding programs run for the student community.",
  },
  {
    title: "Operations Head — Training & Placement Cell",
    detail: "Assisted in organizing 20+ placement drives and outreach to companies since Oct 2024.",
  },
];

export const nav = [
  { id: "home", label: "Home" },
  { id: "resume", label: "Resume" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];
