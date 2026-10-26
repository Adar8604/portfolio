// ─────────────────────────────────────────────────────────────
//  All portfolio content lives here. Edit this file to update
//  the site; no need to touch the components.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Adarsh Kumar',
  role: 'Data Science & AI Engineer',
  roles: ['LLM Systems', 'RAG Pipelines', 'Knowledge Graphs', 'AI Agents', 'Model Fine-tuning'],
  location: 'IIT Roorkee, India',
  email: 'adarsh_k@mfs.iitr.ac.in',
  summary:
    "M.Tech Data Science student at IIT Roorkee. I build production-grade AI systems: LLM-powered analysis platforms, RAG pipelines, knowledge graphs and autonomous agents. I've shipped AI tooling at PwC and built a financial-intelligence platform for FIU-India, and I like turning research ideas into systems that save people real hours.",
  // Add your links here. Leave an empty string to hide a link.
  links: {
    github: '', // e.g. 'https://github.com/your-username'
    linkedin: '', // e.g. 'https://www.linkedin.com/in/your-handle'
    leetcode: 'https://leetcode.com/u/A_K-47/',
    codechef: 'https://www.codechef.com/users/adar8604',
  },
  // Put a PDF in /public (e.g. public/resume.pdf) and set this to 'resume.pdf' to show a download button.
  resumeUrl: '',
}

export const stats = [
  { value: '~97%', label: 'Accuracy on automated STR analysis' },
  { value: '6×', label: 'Faster report processing (30 → 5 min)' },
  { value: '~40 hrs', label: 'Analyst time saved every week' },
  { value: '2025', label: 'Max LeetCode rating (Knight)' },
]

export const experience = [
  {
    role: 'Data Science Intern',
    company: 'LTM Limited',
    period: 'May 2026 – Aug 2026',
    type: 'Internship',
    highlights: [
      'Engineered an end-to-end financial intelligence platform for FIU-India: GOS Analyzer, GOS Linker and STR Quality Assessment, built on LLMs, GLiNER, RAG and a Neo4j graph database.',
      'Built an entity-intelligence pipeline with GLiNER + Neo4j that extracts and resolves entities across STRs and connected records into a knowledge graph for relationship and network analysis.',
      'Developed RAG and LLM-driven workflows that contextualize STR data, generate evidence-backed insights and assess report quality, at ~97% accuracy, cutting analyst review effort by ~80%.',
      'Automated the investigative workflow, reducing processing time from 30 to 5 minutes per STR and saving ~40 analyst hours per week.',
    ],
    tags: ['LLMs', 'GLiNER', 'RAG', 'Neo4j', 'Knowledge Graphs', 'Python'],
  },
  {
    role: 'Associate',
    company: 'PwC Acceleration Centers',
    period: 'Aug 2024 – Aug 2025',
    type: 'Full-time',
    highlights: [
      'Built an AI-powered agent using the Gemini API and prompt engineering to automate code generation and technical design document (TDD) creation, improving development efficiency and output quality by 40%.',
      'Developed and deployed 40+ client-side and server-side scripts using JavaScript and REST APIs to enhance UI functionality and enable seamless database integration.',
      'Designed custom workspaces and UI components, improving user experience and system usability by 30% across enterprise workflows.',
    ],
    tags: ['Gemini API', 'Prompt Engineering', 'JavaScript', 'REST APIs', 'ServiceNow'],
  },
  {
    role: 'Advisory Attachment Intern',
    company: 'PwC Acceleration Centers',
    period: 'Feb 2024 – Sep 2024',
    type: 'Internship',
    highlights: [
      'Implemented 50+ GRC-IRM solutions in ServiceNow: ACLs, flows, forms, widgets, Client Scripts, Business Rules, Script Includes, Scheduled Jobs and Transform Scripts.',
      'Configured 2 workspaces (Risk & Compliance), 2 portals and 30+ notifications; performed 1000+ data loads and resolved 20+ data fixes.',
    ],
    tags: ['ServiceNow', 'GRC', 'JavaScript', 'REST APIs'],
  },
  {
    role: 'Software Developer Intern',
    company: 'EMSEC Private Limited',
    period: 'Sep 2022 – Feb 2024',
    type: 'Internship',
    highlights: [
      'Built IDS/IPS software on Suricata 4.1.2: implemented multicasting, configured custom rule sets and added network interfaces to a traffic-generator VM, improving detection accuracy and functionality by 60%.',
      'Optimized the codebase, integrated a REST API and delivered 20+ new features; executed 100+ test scenarios to improve stability and performance.',
    ],
    tags: ['C++', 'Python', 'Django', 'Suricata', 'Linux', 'Qt Creator'],
  },
]

export const projects = [
  {
    title: 'Socratic Math Tutor',
    subtitle: 'QLoRA + DPO fine-tuning · IIT Roorkee',
    period: 'Mar 2026 – Apr 2026',
    description:
      'Fine-tuned Qwen2.5-1.5B-Instruct into a tutor that guides students to answers instead of giving them away. QLoRA (4-bit NF4, rank 16) trained only 1.2% of parameters on 8.1K curated MathDial turns, followed by DPO on automatically mined preference pairs.',
    metrics: [
      { value: '7.4% → 0%', label: 'Answer leakage' },
      { value: '4.7×', label: 'Lower latency vs 7B' },
      { value: '25% → 49%', label: 'Self-correction' },
    ],
    points: [
      'Multi-turn evaluation pipeline with an LLM-simulated student across 150 dialogues.',
      "Measured LLM-judge reliability against human annotations (Cohen's κ) and added task-based routing to preserve base-model problem-solving.",
    ],
    tags: ['PyTorch', 'Hugging Face', 'QLoRA', 'DPO', 'PEFT', 'LLM Evaluation'],
    featured: true,
    link: '',
  },
  {
    title: 'Multi-Tool AI Agent',
    subtitle: 'LangGraph agent with tools + RAG',
    period: 'Dec 2025 – Apr 2026',
    description:
      'An agent that decides on its own whether to answer directly, call an external tool, or retrieve from uploaded documents, which keeps it from making tool calls it does not need.',
    metrics: [
      { value: '3', label: 'Integrated tools' },
      { value: 'RAG', label: 'Grounded answers' },
    ],
    points: [
      'Web search, live stock-price APIs and a calculator for real-time, multi-step queries.',
      'Document RAG using Hugging Face embeddings and vector similarity search.',
    ],
    tags: ['LangGraph', 'RAG', 'Vector Search', 'Hugging Face'],
    link: '',
  },
  {
    title: 'FIU-India Financial Intelligence Platform',
    subtitle: 'GOS Analyzer · GOS Linker · STR Quality Assessment',
    period: 'LTM Limited · 2026',
    description:
      'An end-to-end platform for analysing Suspicious Transaction Reports: entity extraction and linking, relationship discovery over a Neo4j knowledge graph, and LLM-based quality assessment.',
    metrics: [
      { value: '~97%', label: 'Accuracy' },
      { value: '~80%', label: 'Less review effort' },
      { value: '30 → 5 min', label: 'Per report' },
    ],
    points: [
      'GLiNER-based NER with entity resolution across connected records.',
      'Evidence-backed insights generated through RAG over case data.',
    ],
    tags: ['LLMs', 'GLiNER', 'Neo4j', 'RAG', 'Python'],
    link: '',
  },
]

export const skills = [
  {
    group: 'Languages',
    icon: 'code',
    items: ['Python', 'JavaScript', 'Java', 'SQL', 'C++', 'Node.js'],
  },
  {
    group: 'AI / ML & GenAI',
    icon: 'brain',
    items: [
      'Machine Learning',
      'Deep Learning',
      'LLMs',
      'RAG',
      'Prompt Engineering',
      'QLoRA / PEFT',
      'DPO',
      'NER (GLiNER)',
      'LLM Evaluation',
    ],
  },
  {
    group: 'Frameworks & Tools',
    icon: 'layers',
    items: ['LangGraph', 'Hugging Face', 'PyTorch', 'Gemini API', 'Django', 'REST APIs'],
  },
  {
    group: 'Data & Platforms',
    icon: 'database',
    items: ['Neo4j', 'Vector Databases', 'DBMS', 'ServiceNow', 'Linux (Debian)', 'Suricata'],
  },
]

export const education = [
  {
    degree: 'M.Tech, Data Science',
    institution: 'Indian Institute of Technology, Roorkee',
    period: '2025 – 2027',
    score: 'CGPA 8.55',
  },
  {
    degree: 'B.Tech (Undergraduate)',
    institution: 'Dr. A.P.J. Abdul Kalam Technical University',
    period: 'Graduated 2024',
    score: 'CGPA 8.36',
  },
]

export const achievements = [
  {
    title: 'LeetCode Knight',
    detail: 'Max rating 2025',
    link: 'https://leetcode.com/u/A_K-47/',
    platform: 'leetcode',
  },
  {
    title: 'CodeChef 4★',
    detail: 'Max rating 1892 · Global rank 85 in Starters 63',
    link: 'https://www.codechef.com/users/adar8604',
    platform: 'codechef',
  },
]
