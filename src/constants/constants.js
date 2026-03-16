export const projects = [
  {
    title: "AI Threat Intelligence Platform",
    description:
      "ML-powered threat intelligence system aggregating OSINT feeds with Neo4j graph-based correlation to detect, analyze, and visualize phishing campaigns and attacker infrastructure. Advanced threat modeling and intelligence fusion.",
    image: "/images/threat_intel.png",
    tags: ["Python", "Machine Learning", "Neo4j", "OSINT"],
    source: "https://github.com/ItsDarker/ai-threat-intelligence-platform",
    visit: "https://github.com/ItsDarker/ai-threat-intelligence-platform",
    id: 0,
    featured: true,
  },
  {
    title: "Cyber-Attack Classification using Supervised ML",
    description:
      "ML pipeline using Random Forest and Naïve Bayes to classify network traffic attacks with 94% accuracy. Trained on comprehensive dataset of attacks, supporting SOC decision-making and incident prioritization.",
    image: "/images/cyberatt.png",
    tags: ["Python", "Machine Learning", "Scikit-learn", "Security Analytics"],
    source: "https://github.com/ItsDarker/Cyber-Attack-Classification-Using-Supervised-ML",
    visit: "https://github.com/ItsDarker/Cyber-Attack-Classification-Using-Supervised-ML",
    id: 1,
    featured: true,
  },
  {
    title: "Real-Time Network Intrusion Prevention System (IPS)",
    description:
      "Python-based IPS to capture and analyze live network traffic, detect malicious activity, perform port scanning, and block suspicious connections in real time. Reinforced knowledge of IDS/IPS technologies and automated response.",
    image: "/images/ips.png",
    tags: ["Python", "Scapy", "Network Analysis", "Real-time Processing"],
    source: "https://github.com/ItsDarker/Network-IPS",
    visit: "https://github.com/ItsDarker/Network-IPS",
    id: 2,
    featured: true,
  },
  {
    title: "Federated Learning Privacy Attack Framework",
    description:
      "Implemented property inference attacks against Federated Learning models in IoT networks. Includes shadow model training, gradient analysis, and evaluation of privacy-preserving defenses.",
    image: "/images/federated.png",
    tags: ["TensorFlow", "Machine Learning Security", "Privacy Attacks"],
    source: "https://github.com/ItsDarker/fl_smarthome_privacy",
    visit: "https://github.com/ItsDarker/fl_smarthome_privacy",
    id: 3,
    featured: true,
  },
  {
    title: "Build-Track: Construction Dashboard",
    description:
      "Construction project management dashboard with task tracking and role-based access control. Developed during Full-Stack DevSecOps internship at Geo Digital Partners with focus on security and compliance.",
    image: "/images/build_track.png",
    tags: ["TypeScript", "React", "IAM", "GCP", "Security"],
    source: "https://github.com/ItsDarker/Build-Track",
    visit: "https://github.com/ItsDarker/Build-Track",
    id: 4,
  },
  {
    title: "Home Automation with Android & Voice Control",
    description:
      "Smart home automation system enabling control of lights, fans, appliances, and laptops via Android app and voice commands. Built with Android Studio, Firebase, and Python.",
    image: "/images/home_auto.png",
    tags: ["Android", "Firebase", "Python", "Voice Control"],
    source: "https://github.com/ItsDarker/Home-Automation-System",
    visit: "https://github.com/ItsDarker/Home-Automation-System",
    id: 5,
  },
  {
    title: "AI Voice Assistant",
    description:
      "Interactive voice assistant using Python, TensorFlow and Speech Recognition for voice-activated interactions.",
    image: "/images/portfolio1.jpg",
    tags: ["Python", "TensorFlow", "Speech Recognition"],
    source: "https://github.com/ItsDarker/AI-VoiceAssitant-Online",
    visit: "https://github.com/ItsDarker/AI-VoiceAssitant-Online",
    id: 6,
  },
  {
    title: "Eye-Controlled Mouse",
    description:
      "Real-time eye-tracking system using OpenCV to control mouse pointer with eye movements. Demonstrates computer vision and HCI principles.",
    image: "/images/IMG6.jpg",
    tags: ["Python", "OpenCV", "Computer Vision"],
    source: "https://github.com/ItsDarker/eye_controlled_mouse",
    visit: "https://github.com/ItsDarker/eye_controlled_mouse",
    id: 7,
  },
];

export const TimeLineData = [
  { year: 2020, text: 'Completed BS in Computer Science & Engineering from Anna University Chennai with strong foundation in algorithms and system design.' },
  { year: 2021, text: 'Transitioned focus to security; mastered core programming concepts and problem-solving methodologies.' },
  { year: 2022, text: 'Built full-stack applications; developed expertise in React.js, Next.js, and modern web development.' },
  { year: 2023, text: 'Completed multiple internships in Full Stack Development; gained hands-on experience in API development and security best practices.' },
  { year: 2024, text: 'Graduated BS Computer Science; Admitted to MS Cybersecurity program at Illinois Institute of Technology. Earned Google Cybersecurity Certificate.' },
  { year: 2025, text: 'Junior Cybersecurity Intern at Lumena Energy: Configured Active Directory, deployed Wazuh SIEM, implemented NIST controls. Earned Security+ & CSEH+ certifications.' },
  { year: 2026, text: 'Full-Stack DevSecOps Intern at Geo Digital Partners; developing secure systems with IAM policies and GCP security controls. On track for MS graduation (May 2026).' },
];

export const certificationsData = [
  { name: "CNSP", fullName: "Certified Network Security Practitioner" },
  { name: "CSEH+", fullName: "Certified Ethical Hacker Plus" },
  { name: "Security+", fullName: "CompTIA Security+ Certification" },
  { name: "Google", fullName: "Google Cybersecurity Certificate" },
];

export const achievementsData = [
  { number: 20, text: 'Security & AI Projects'},
  { number: 4, text: 'Cybersecurity Certifications', },
  { number: 5, text: 'Professional Internships', },
];

export const experienceData = [
  {
    title: "Full-Stack DevSecOps Intern",
    company: "Geo Digital Partners",
    location: "Toronto, ON",
    duration: "January 2026 – Present",
    description: "Currently developing secure websites implementing best practices across multiple applications. Managing GCP hosting environments with IAM policies and security controls. Enhancing construction project management dashboard.",
    highlights: [
      "Implemented security measures across multiple applications and environments",
      "Managed GCP hosting with IAM policies and access management",
      "Contributed to construction project management dashboard",
      "Collaborated with team to streamline security processes"
    ],
    tags: ["DevSecOps", "GCP", "IAM", "Security", "Full-Stack"],
  },
  {
    title: "Junior Cybersecurity Intern",
    company: "Lumena Energy",
    location: "Chicago, IL",
    duration: "September – December 2025",
    description: "Hands-on experience with enterprise security infrastructure, identity management, and threat detection systems.",
    highlights: [
      "Configured and managed Active Directory with users, roles, and group policies",
      "Integrated Wazuh SIEM for security visibility and real-time monitoring",
      "Implemented NIST cybersecurity controls and organizational policies",
      "Conducted vulnerability scans and maintained asset inventory"
    ],
    tags: ["Active Directory", "Wazuh SIEM", "NIST", "Vulnerability Scanning", "IAM"],
  },
  {
    title: "Full-Stack Developer",
    company: "Anju Technology",
    location: "Chennai, India",
    duration: "January – June 2024",
    description: "Developed responsive web applications with focus on user experience and security-aware development practices.",
    highlights: [
      "Built responsive interfaces using React.js and Next.js",
      "Designed and integrated RESTful APIs for seamless communication",
      "Collaborated with cross-functional teams on client solutions",
      "Gained hands-on full software development lifecycle experience"
    ],
    tags: ["React.js", "Next.js", "REST APIs", "Full-Stack"],
  },
  {
    title: "Python Developer",
    company: "Spiro Prime Education Institutes",
    location: "Chennai, India",
    duration: "January – March 2024",
    description: "Backend development and automation engineering focusing on secure data management and workflow optimization.",
    highlights: [
      "Designed backend modules and APIs using Python",
      "Developed automation tools to streamline workflows",
      "Managed structured data using MySQL, PostgreSQL, and SQLite",
      "Implemented secure database management practices"
    ],
    tags: ["Python", "Databases", "Automation", "Backend"],
  },
  {
    title: "Frontend Developer",
    company: "Coffee Inc.",
    location: "Chennai, India",
    duration: "September – November 2022",
    description: "React and JavaScript development focusing on user interface design and API integration.",
    highlights: [
      "Developed front-end components in React and JavaScript",
      "Integrated APIs with backend services",
      "Improved user experience and interface responsiveness",
      "Ensured seamless system integration"
    ],
    tags: ["React", "JavaScript", "Frontend"],
  },
];