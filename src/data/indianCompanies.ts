// Indian and global campus-hiring companies: marquee + dropdown entries and their hiring rounds.
// All of them start as "Coming soon" for users (see src/lib/waitlist.ts); the founder can open any of them.
//
// Rounds marked verified: true follow public 2026 hiring reports (checked Nov 2026).
// Every other company uses the typical pattern for its type of company and says so in its recruiter notes.
// Replace a company's `rounds` with exact details whenever you wire in its real question bank.
import type { CompanyTrackData, RoleConfig, RoundConfig } from "./companyTracks";

export type CompanyGroup =
  | "IT Services"
  | "Consulting"
  | "Global Captive"
  | "Banking & Fintech"
  | "Indian Product"
  | "Startup"
  | "Research";

interface Spec {
  name: string;
  color: string;
  group: CompanyGroup;
  program?: string;
  overview?: string;
  rounds?: RoundConfig[];
  verified?: boolean;
}

const r = (n: number, title: string, desc: string, duration: string, focusArea: string, tags: string[]): RoundConfig => ({
  round: "ROUND 0" + n,
  title,
  desc,
  duration,
  focusArea,
  tags,
});

export const slugOf = (name: string) =>
  name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

/* -------------------------------------------------------------------------- */
/* Typical round patterns by type of company                                   */
/* -------------------------------------------------------------------------- */

function typicalRounds(group: CompanyGroup, name: string): RoundConfig[] {
  switch (group) {
    case "IT Services":
      return [
        r(1, "Online Assessment: Aptitude + Coding", "Timed test with quantitative, logical and verbal sections followed by 1-2 coding problems.", "90-120 Mins", "Aptitude & Basic Coding", ["Aptitude", "Verbal", "Coding"]),
        r(2, "Technical Interview", "Programming basics, OOP, DBMS/SQL, OS and networking fundamentals, plus questions on your own code.", "30-45 Mins", "Core CS Fundamentals", ["OOP", "DBMS / SQL", "OS & Networks"]),
        r(3, "Project Deep Dive & Design Basics", "Walk through your academic project: architecture, your role, trade-offs, and what you would change.", "30 Mins", "Project Ownership", ["Project Defense", "Basic Design", "Debugging"]),
        r(4, "Managerial + HR Round", "Communication, relocation and shift flexibility, learning attitude, and service-agreement discussion.", "20-30 Mins", "Communication & Fit", ["HR", "Communication", "Flexibility"]),
      ];
    case "Consulting":
      return [
        r(1, "Online Assessment", "Aptitude, logical reasoning and technical MCQs (programming, DBMS, cloud basics).", "60-90 Mins", "Aptitude & Technical MCQs", ["Aptitude", "Technical MCQ", "Time Pressure"]),
        r(2, "Communication Assessment", "Automated spoken and written English evaluation used as an eliminator before interviews.", "30-40 Mins", "Spoken English", ["Spoken English", "Fluency", "Clarity"]),
        r(3, "Technical Interview", "Coding or SQL problems plus architecture, database, OOP and cloud questions, often with a small case.", "45 Mins", "Technology & Problem Solving", ["Coding / SQL", "Architecture", "Case Questions"]),
        r(4, "Manager / Partner Interview", "Behavioral and consulting-aptitude conversation about client work, teamwork and motivation.", "30-45 Mins", "Consulting Readiness", ["Behavioral", "Client Mindset", "Motivation"]),
      ];
    case "Global Captive":
    case "Banking & Fintech":
      return [
        r(1, "Online Coding Assessment", "Proctored HackerRank/CodeSignal style test with 2-3 DSA problems and hidden test cases.", "90 Mins", "DSA & Time Complexity", ["Proctored OA", "Hidden Tests", "Arrays / Strings / Graphs"]),
        r(2, "Technical Interview: DSA", "Live problem solving on a shared editor with follow-ups on complexity and edge cases.", "60 Mins", "Algorithms & Big-O", ["Live Coding", "Big-O Defense", "Edge Cases"]),
        r(3, "Design Round (LLD / HLD)", "Object-oriented design of a real system, and for experienced roles a high-level architecture.", "60 Mins", "Design & Concurrency", ["LLD", "SOLID", "Scalability"]),
        r(4, "Hiring Manager & Behavioral", "Past projects, ownership, collaboration, and how you handle ambiguity and conflict.", "45 Mins", "Ownership & Collaboration", ["STAR Format", "Ownership", "Team Fit"]),
      ];
    case "Indian Product":
      return [
        r(1, "Online Assessment", "3 coding problems (arrays, strings, trees, DP) on HackerRank/Codility with hidden tests.", "75-90 Mins", "DSA Speed & Accuracy", ["Online Test", "Hidden Tests", "Medium-Hard DSA"]),
        r(2, "DSA Round", "Two medium-to-hard problems live; interviewer probes optimality and dry-runs your code.", "60 Mins", "Problem Solving", ["Live Coding", "Dry Run", "Optimization"]),
        r(3, "Machine Coding / LLD", "Build a small working system (booking, cache, scheduler) with clean classes and extensibility, then explain it.", "90-120 Mins", "Design & Code Quality", ["Machine Coding", "Extensibility", "Clean Code"]),
        r(4, "System Design + Hiring Manager", "HLD discussion for the product domain and a conversation about projects, ownership and impact.", "60 Mins", "Architecture & Ownership", ["HLD", "Scale", "Hiring Manager"]),
      ];
    case "Startup":
      return [
        r(1, "Online Coding Screen", "1-2 practical coding problems or a short take-home focused on real engineering tasks.", "60-90 Mins", "Practical Coding", ["Take-home / OA", "Clean Code", "Tests"]),
        r(2, "Problem Solving Round", "Live DSA and debugging with emphasis on clear thinking and communication.", "60 Mins", "Algorithms & Debugging", ["Live Coding", "Debugging", "Communication"]),
        r(3, "System Design / Machine Coding", "Design or build a small service end to end: APIs, data model, scaling and failure handling.", "60-90 Mins", "Design & Engineering Depth", ["API Design", "Data Modeling", "Scaling"]),
        r(4, "Founder / Culture Round", "Ownership, speed of learning, product sense and why this company.", "30-45 Mins", "Culture & Ownership", ["Ownership", "Product Sense", "Motivation"]),
      ];
    case "Research":
      return [
        r(1, "Online Coding + Aptitude", "Algorithmic coding with math, probability and logical reasoning.", "90 Mins", "Algorithms & Math", ["Coding", "Probability", "Logic"]),
        r(2, "Research Technical Interview", "Algorithms, data structures and the math behind them; ML or systems fundamentals depending on the lab.", "60 Mins", "Depth of Fundamentals", ["Algorithms", "Math", "ML / Systems Basics"]),
        r(3, "Research Project Deep Dive", "Defend a paper, thesis or project: problem framing, experiments, baselines and what failed.", "60 Mins", "Research Thinking", ["Paper / Project Defense", "Experiments", "Critical Thinking"]),
        r(4, "Research Manager + HR", "Research interests, collaboration style and fit with the lab's agenda.", "30-45 Mins", "Fit & Motivation", ["Interests", "Collaboration", "HR"]),
      ];
  }
}

function lateralRounds(group: CompanyGroup, name: string): RoundConfig[] {
  if (group === "IT Services" || group === "Consulting") {
    return [
      r(1, "Technical Screening", "Resume screen plus a coding or SQL assessment aligned to your primary stack.", "45-60 Mins", "Primary Stack Depth", ["Stack Test", "SQL", "Coding"]),
      r(2, "Technical Interview", "Deep dive into your stack (Java/.NET/Python/cloud), APIs, databases and production issues you solved.", "60 Mins", "Hands-on Depth", ["Production Issues", "APIs", "Cloud"]),
      r(3, "Architecture & Solution Design", "Design a solution for a client scenario: components, integration, non-functional requirements.", "60 Mins", "Solution Architecture", ["HLD", "Integration", "NFRs"]),
      r(4, "Client-Facing Managerial + HR", "Stakeholder handling, delivery ownership, team leadership, compensation and notice period.", "45 Mins", "Delivery & Leadership", ["Stakeholders", "Delivery", "Leadership"]),
    ];
  }
  return [
    r(1, "Coding Screen", "Two medium-to-hard problems with strict time limits and hidden tests.", "75 Mins", "Advanced DSA", ["Hidden Tests", "Optimal Solutions", "Time Pressure"]),
    r(2, "Advanced DSA + Code Quality", "Live problem solving with deep follow-ups on complexity, concurrency and testing.", "60 Mins", "Algorithms & Engineering", ["Live Coding", "Concurrency", "Testing"]),
    r(3, "High-Level System Design", "Design a scalable, fault-tolerant system for " + name + "'s domain and defend the trade-offs.", "60 Mins", "Scale & Reliability", ["HLD", "Sharding", "Failure Modes"]),
    r(4, "Hiring Manager & Leadership", "Past impact, mentoring, cross-team influence and handling disagreement.", "45 Mins", "Leadership & Impact", ["Impact Stories", "Mentorship", "Influence"]),
  ];
}

/* -------------------------------------------------------------------------- */
/* Company list                                                                */
/* -------------------------------------------------------------------------- */

const SPECS: Spec[] = [
  // ----- IT services and mass recruiters (researched ones carry exact rounds) -----
  {
    name: "TCS", color: "#0D47A1", group: "IT Services", program: "Ninja / Digital / Prime", verified: true,
    overview: "TCS hires through the TCS NQT. Your NQT score decides whether you are interviewed for Ninja, Digital or Prime.",
    rounds: [
      r(1, "NQT Foundation Section", "Numerical Ability (25 min), Verbal Ability (25 min) and Reasoning Ability (25 min).", "75 Mins", "Aptitude", ["Numerical", "Verbal", "Reasoning"]),
      r(2, "NQT Advanced Section", "Advanced Quantitative & Reasoning (25 min) and Advanced Coding (90 min). Needed for Digital and Prime.", "115 Mins", "Advanced Coding", ["Advanced Coding", "Quant & Reasoning", "Digital / Prime Gate"]),
      r(3, "Technical + Managerial Interview", "Your NQT result decides the interview track. Technical and managerial topics may be combined into one conversation.", "30-45 Mins", "Technical & Managerial", ["Project Questions", "Core CS", "Managerial"]),
      r(4, "HR Interview + Document Verification", "HR discussion, then verification of original academic documents.", "20-30 Mins", "Fit & Verification", ["HR", "Documents", "Relocation"]),
    ],
  },
  {
    name: "Infosys", color: "#007CC3", group: "IT Services", program: "Systems Engineer / Digital Specialist Engineer / Power Programmer", verified: true,
    overview: "Infosys runs an aptitude test and a coding test, then technical and HR interviews. Higher tracks need stronger coding.",
    rounds: [
      r(1, "Online Aptitude Test", "Logical Reasoning, Quantitative Aptitude and Verbal Ability with sectional and overall cut-offs.", "60-90 Mins", "Aptitude", ["Logical", "Quant", "Verbal"]),
      r(2, "Coding Test", "1-2 problems on arrays, strings and basic algorithms. Critical for Digital Specialist Engineer and Power Programmer.", "30-60 Mins", "Coding", ["Arrays", "Strings", "Basic Algorithms"]),
      r(3, "Technical Interview", "Data Structures, OOP, DBMS and OS; you may be asked to explain your coding-test solutions or solve new puzzles.", "30-45 Mins", "Core CS", ["DSA", "OOP", "DBMS / OS"]),
      r(4, "HR Interview", "Communication, attitude, cultural fit and career goals.", "20-30 Mins", "Culture Fit", ["HR", "Communication", "Goals"]),
    ],
  },
  {
    name: "Wipro", color: "#341C6B", group: "IT Services", program: "Elite NTH", verified: true,
    overview: "Wipro's online assessment covers aptitude, a written essay and coding, followed by technical and HR interviews.",
    rounds: [
      r(1, "Aptitude + Written Essay", "Quantitative, logical and verbal aptitude plus a written essay on a given topic.", "60-90 Mins", "Aptitude & Writing", ["Quant", "Logical", "Essay"]),
      r(2, "Coding Assessment", "Usually 2 coding problems in the online assessment.", "60 Mins", "Coding", ["2 Problems", "Arrays / Strings", "Logic"]),
      r(3, "Technical Interview", "Java/OOP, DBMS, networking basics and a deep dive into your project.", "30-45 Mins", "Core CS & Project", ["Java / OOP", "DBMS", "Networking"]),
      r(4, "HR Interview", "Relocation, shift flexibility and the service agreement, if applicable.", "20-30 Mins", "Fit & Terms", ["HR", "Relocation", "Shifts"]),
    ],
  },
  {
    name: "Cognizant", color: "#1A4CA1", group: "IT Services", program: "GenC / GenC Next / GenC Elevate", verified: true,
    overview: "Cognizant tracks differ by coding depth: GenC has no coding round, GenC Next and Elevate add it.",
    rounds: [
      r(1, "Aptitude & Reasoning", "Timed quantitative, logical and verbal sections.", "60-90 Mins", "Aptitude", ["Quant", "Logical", "Verbal"]),
      r(2, "Coding / Automata + Communication", "1-2 problems in C, C++, Java or Python (GenC Next and Elevate), and an automated spoken English assessment.", "60-90 Mins", "Coding & Communication", ["Automata Coding", "DSA / SQL / Web", "Spoken English"]),
      r(3, "Technical Interview", "Your project, SQL and core programming concepts; deeper for GenC Next and Elevate.", "30-40 Mins", "Technical Depth", ["Project", "SQL", "Programming"]),
      r(4, "HR Interview", "Flexibility on location and shifts, communication and motivation.", "20-30 Mins", "Fit", ["HR", "Location", "Shifts"]),
    ],
  },
  {
    name: "Accenture", color: "#A100FF", group: "IT Services", program: "ASE / Advanced ASE", verified: true,
    overview: "Accenture mixes cognitive and technical assessments, an AI-scored spoken English test and a coding round that decides ASE versus Advanced ASE.",
    rounds: [
      r(1, "Cognitive + Technical Assessment", "Analytical and abstract reasoning, then pseudocode, programming basics, and networking, cloud and security basics.", "90-120 Mins", "Reasoning & Technical Basics", ["Cognitive", "Pseudocode", "Cloud / Security Basics"]),
      r(2, "Communication + Coding", "AI-scored spoken English test and usually 2 coding problems; the coding score helps decide ASE or Advanced ASE.", "60-90 Mins", "Communication & Coding", ["Spoken English", "2 Problems", "ASE vs Advanced ASE"]),
      r(3, "Technical Interview (Advanced ASE)", "A dedicated technical interview for Advanced ASE candidates: code, data structures and your projects.", "30-45 Mins", "Technical Depth", ["DSA", "Projects", "Problem Solving"]),
      r(4, "HR Interview", "Behavioral questions, adaptability and relocation.", "20-30 Mins", "Fit", ["HR", "Adaptability", "Teamwork"]),
    ],
  },
  {
    name: "Capgemini", color: "#0070AD", group: "IT Services", program: "Analyst / Senior Analyst", verified: true,
    overview: "Capgemini starts with game-based aptitude, then pseudocode and technical MCQs; the coding round is mainly for Senior Analyst.",
    rounds: [
      r(1, "Game-Based Aptitude", "6-8 short games testing memory, patterns, logic and speed.", "30-45 Mins", "Cognitive Games", ["Memory", "Patterns", "Speed"]),
      r(2, "Pseudocode, Technical MCQs + Coding", "Tracing short programs for outputs or errors; two easy-to-medium coding problems mainly for Senior Analyst.", "60-90 Mins", "Code Reading & Coding", ["Pseudocode", "Output Tracing", "2 Problems"]),
      r(3, "Technical Interview", "CS basics and your project.", "30-40 Mins", "Core CS", ["CS Basics", "Project", "OOP"]),
      r(4, "HR Interview", "Behavioral questions and expectations.", "20-30 Mins", "Fit", ["HR", "Behavioral", "Goals"]),
    ],
  },
  { name: "HCLTech", color: "#0075C9", group: "IT Services", program: "Graduate Engineer Trainee" },
  { name: "Tech Mahindra", color: "#E31837", group: "IT Services", program: "Associate Software Engineer" },
  { name: "LTIMindtree", color: "#00A3E0", group: "IT Services", program: "Graduate Engineer Trainee" },
  { name: "Mphasis", color: "#0A3C7D", group: "IT Services", program: "Software Engineer" },
  { name: "Persistent Systems", color: "#FF6600", group: "IT Services", program: "Software Engineer" },
  { name: "Hexaware", color: "#F26A21", group: "IT Services", program: "Graduate Engineer Trainee" },
  { name: "Coforge", color: "#00A0DF", group: "IT Services", program: "Graduate Engineer Trainee" },
  { name: "Birlasoft", color: "#EF3E36", group: "IT Services", program: "Graduate Engineer Trainee" },
  { name: "Zensar", color: "#E7332D", group: "IT Services", program: "Graduate Engineer Trainee" },
  { name: "DXC Technology", color: "#5F259F", group: "IT Services", program: "Associate Professional" },
  { name: "NTT Data", color: "#0072BC", group: "IT Services", program: "Software Engineer" },
  { name: "Virtusa", color: "#003F7F", group: "IT Services", program: "Engineer" },
  { name: "Sonata Software", color: "#E31E24", group: "IT Services", program: "Graduate Engineer Trainee" },
  { name: "KPIT", color: "#00AEEF", group: "IT Services", program: "Graduate Engineer Trainee" },
  { name: "Genpact", color: "#E1261C", group: "IT Services", program: "Technology Analyst" },

  // ----- Consulting and Big 4 -----
  {
    name: "Deloitte", color: "#86BC25", group: "Consulting", program: "Analyst (USI / NLA)", verified: true,
    overview: "Deloitte combines an online assessment, a Versant voice test that eliminates weak speakers, a technical interview and a final partner or director interview.",
    rounds: [
      r(1, "Online Assessment", "MCQ sections covering aptitude and technical knowledge; no negative marking.", "60-90 Mins", "Aptitude & Technical MCQs", ["Aptitude", "Technical MCQ", "No Negative Marking"]),
      r(2, "Versant Voice Assessment", "Automated spoken English test in six parts (A to F). Speech clarity, grammar and fluency thresholds eliminate candidates before interviews.", "30-40 Mins", "Spoken English", ["Versant", "Fluency", "Eliminator"]),
      r(3, "Technical Interview", "Coding problems plus architecture, database, OOP, OS and case-based questions.", "45 Mins", "Technology & Cases", ["Coding", "DBMS / OOP / OS", "Case Questions"]),
      r(4, "Partner / Director Interview", "Behavioral assessment combined with consulting aptitude.", "30-45 Mins", "Consulting Readiness", ["Behavioral", "Consulting Aptitude", "Motivation"]),
    ],
  },
  { name: "PwC", color: "#D04A02", group: "Consulting", program: "Associate (Acceleration Center)" },
  { name: "EY", color: "#2E2E38", group: "Consulting", program: "Associate (GDS)" },
  { name: "KPMG", color: "#00338D", group: "Consulting", program: "Analyst (GDC)" },
  { name: "Thoughtworks", color: "#003D4F", group: "Consulting", program: "Graduate Developer" },
  { name: "Mu Sigma", color: "#F26522", group: "Consulting", program: "Decision Scientist Trainee" },
  { name: "Fractal Analytics", color: "#FF6A00", group: "Consulting", program: "Engineer / Data Scientist" },
  { name: "Tredence", color: "#1B1464", group: "Consulting", program: "Analyst / Engineer" },

  // ----- Global captives and research -----
  { name: "IBM Research", color: "#0530AD", group: "Research", program: "Research Intern / Research Software Engineer" },
  { name: "Visa", color: "#1A1F71", group: "Global Captive", program: "Software Engineer" },
  { name: "Mastercard", color: "#EB001B", group: "Global Captive", program: "Software Engineer" },
  { name: "American Express", color: "#006FCF", group: "Global Captive", program: "Engineer I" },
  { name: "Walmart Global Tech", color: "#0071CE", group: "Global Captive", program: "Software Engineer" },
  { name: "Target", color: "#CC0000", group: "Global Captive", program: "Software Engineer" },
  { name: "Dell Technologies", color: "#007DB8", group: "Global Captive", program: "Software Engineer" },
  { name: "HP", color: "#0096D6", group: "Global Captive", program: "Software Engineer" },
  { name: "Micron", color: "#0072CE", group: "Global Captive", program: "Engineer" },
  { name: "Texas Instruments", color: "#CC0000", group: "Global Captive", program: "Engineer" },
  { name: "SAP", color: "#0FAAFF", group: "Global Captive", program: "Associate Developer" },
  { name: "Siemens", color: "#009999", group: "Global Captive", program: "Graduate Engineer" },
  { name: "Bosch", color: "#EA0016", group: "Global Captive", program: "Graduate Engineer" },
  { name: "Samsung R&D", color: "#1428A0", group: "Global Captive", program: "Software Engineer" },
  { name: "Honeywell", color: "#E1261C", group: "Global Captive", program: "Engineer" },
  { name: "Thomson Reuters", color: "#FF8000", group: "Global Captive", program: "Software Engineer" },
  { name: "Philips", color: "#0B5ED7", group: "Global Captive", program: "Software Engineer" },

  // ----- Banking and fintech captives -----
  { name: "Wells Fargo", color: "#D71E28", group: "Banking & Fintech", program: "Analyst / Software Engineer" },
  { name: "Barclays", color: "#00AEEF", group: "Banking & Fintech", program: "Analyst" },
  { name: "Deutsche Bank", color: "#0018A8", group: "Banking & Fintech", program: "Analyst" },
  { name: "HSBC", color: "#DB0011", group: "Banking & Fintech", program: "Graduate Engineer" },
  { name: "Standard Chartered", color: "#0473EA", group: "Banking & Fintech", program: "Graduate Engineer" },
  { name: "Citi", color: "#056DAE", group: "Banking & Fintech", program: "Analyst" },
  { name: "BNY", color: "#E4002B", group: "Banking & Fintech", program: "Analyst" },
  { name: "Fidelity Investments", color: "#368727", group: "Banking & Fintech", program: "Software Engineer" },
  { name: "State Street", color: "#0F2D52", group: "Banking & Fintech", program: "Analyst" },

  // ----- Indian product companies -----
  {
    name: "Zoho", color: "#E42527", group: "Indian Product", program: "Software Developer", verified: true,
    overview: "Zoho is known for a long, programming-heavy process with code-quality checks and a panel that discusses the programs you wrote.",
    rounds: [
      r(1, "Aptitude + C Programming (pen and paper)", "About 10 C programming questions and 10 aptitude questions in an offline paper; no negative marking.", "60 Mins", "C & Aptitude", ["C Programming", "Aptitude", "Offline"]),
      r(2, "Level 1: Basic Programming", "Five programming questions covering OOP basics, numbers, strings and data structures.", "180 Mins", "Programming Fluency", ["5 Problems", "Strings / Numbers", "Data Structures"]),
      r(3, "Level 2: Advanced Programming", "Two problems: one on code quality, modularity, boundary test cases and efficiency; one booking-style problem with availability checks, cancellation and chart preparation.", "120-180 Mins", "Design Through Code", ["Modularity", "Boundary Cases", "Booking System"]),
      r(4, "Technical + HR Panels", "A technical panel discusses the programs you wrote; an HR panel covers soft skills, background and motivation.", "25-40 Mins", "Defense & Fit", ["Code Walkthrough", "Core Concepts", "HR"]),
    ],
  },
  {
    name: "Flipkart", color: "#2874F0", group: "Indian Product", program: "SDE-1", verified: true,
    overview: "Flipkart tests DSA, then a timed machine-coding build you must explain, and finishes with design and hiring-manager rounds.",
    rounds: [
      r(1, "Online Assessment", "Three coding problems (arrays and strings, often sliding window and two pointers). Sometimes skipped for referrals or campus.", "60-90 Mins", "DSA Speed", ["3 Problems", "Sliding Window", "Two Pointers"]),
      r(2, "DSA Rounds", "Typically two medium problems: graphs, DP, trees, topological sort, binary search, rate-limiter style APIs.", "60 Mins", "Problem Solving", ["Graphs / DP", "Trees", "Complexity"]),
      r(3, "Machine Coding + Code Walkthrough", "Build a small system (for example a task scheduler or booking app) in 60 minutes to 2.5 hours, then explain and defend it in a separate review.", "90-150 Mins", "Working, Extensible Code", ["Machine Coding", "Decoupling", "Walkthrough"]),
      r(4, "Design Discussion + Hiring Manager", "LLD or combined LLD/HLD (IRCTC-like system, video feed) or a deep dive into your past projects, then the hiring manager.", "60 Mins", "Design & Experience", ["LLD / HLD", "Project Deep Dive", "Hiring Manager"]),
    ],
  },
  { name: "Swiggy", color: "#FC8019", group: "Indian Product", program: "SDE-1" },
  { name: "Zomato", color: "#E23744", group: "Indian Product", program: "SDE-1" },
  { name: "Paytm", color: "#00BAF2", group: "Indian Product", program: "SDE-1" },
  { name: "PhonePe", color: "#5F259F", group: "Indian Product", program: "SDE-1" },
  { name: "Razorpay", color: "#0C2451", group: "Indian Product", program: "SDE-1" },
  { name: "CRED", color: "#1B1B1B", group: "Indian Product", program: "SDE-1" },
  { name: "Meesho", color: "#9F2089", group: "Indian Product", program: "SDE-1" },
  { name: "Myntra", color: "#FF3F6C", group: "Indian Product", program: "SDE-1" },
  { name: "Freshworks", color: "#2C5CC5", group: "Indian Product", program: "Software Engineer" },
  { name: "Ola", color: "#1C1C1C", group: "Indian Product", program: "SDE-1" },
  { name: "Dream11", color: "#D6001C", group: "Indian Product", program: "SDE-1" },
  { name: "MakeMyTrip", color: "#EB2226", group: "Indian Product", program: "SDE-1" },
  { name: "Nykaa", color: "#FC2779", group: "Indian Product", program: "SDE-1" },
  { name: "ShareChat", color: "#F26A1B", group: "Indian Product", program: "SDE-1" },
  { name: "InMobi", color: "#E6322C", group: "Indian Product", program: "Software Engineer" },
  { name: "JioHotstar", color: "#1F80E0", group: "Indian Product", program: "SDE-1" },
  { name: "Reliance Jio", color: "#0F3CC9", group: "Indian Product", program: "Graduate Engineer" },
  { name: "Bharti Airtel", color: "#E40000", group: "Indian Product", program: "Graduate Engineer" },
  { name: "Delhivery", color: "#E8212B", group: "Indian Product", program: "SDE-1" },
  { name: "Lenskart", color: "#00BAC6", group: "Indian Product", program: "SDE-1" },
  { name: "PhysicsWallah", color: "#2B3A8C", group: "Indian Product", program: "SDE-1" },

  // ----- Startups -----
  { name: "Groww", color: "#00D09C", group: "Startup", program: "SDE-1" },
  { name: "Zerodha", color: "#387ED1", group: "Startup", program: "Software Developer" },
  { name: "Postman", color: "#FF6C37", group: "Startup", program: "Software Engineer" },
  { name: "BrowserStack", color: "#F78F1E", group: "Startup", program: "Software Engineer" },
  { name: "Juspay", color: "#0F4C81", group: "Startup", program: "Software Engineer" },
  { name: "Urban Company", color: "#111827", group: "Startup", program: "SDE-1" },
  { name: "Zepto", color: "#5A189A", group: "Startup", program: "SDE-1" },
  { name: "Rapido", color: "#F5B800", group: "Startup", program: "SDE-1" },
  { name: "BharatPe", color: "#0C3AFF", group: "Startup", program: "SDE-1" },
  { name: "Slice", color: "#3B2F9C", group: "Startup", program: "SDE-1" },
  { name: "Atlan", color: "#2026D2", group: "Startup", program: "Software Engineer" },
  { name: "Chargebee", color: "#FF3300", group: "Startup", program: "Software Engineer" },
  { name: "Sprinklr", color: "#1B6AE8", group: "Startup", program: "Software Engineer" },
];

/* -------------------------------------------------------------------------- */
/* Exports used by the marquee, the dropdown and the track pages               */
/* -------------------------------------------------------------------------- */

/** For the dropdown and the marquee row. */
export const EXTRA_COMPANIES: ReadonlyArray<{ name: string; color: string; group: CompanyGroup }> = SPECS.map((s) => ({
  name: s.name,
  color: s.color,
  group: s.group,
}));

function overviewFor(s: Spec): string {
  if (s.overview) return s.overview;
  switch (s.group) {
    case "IT Services":
      return s.name + " hires freshers in large batches: an aptitude and coding test, then technical and HR interviews.";
    case "Consulting":
      return s.name + " evaluates aptitude, communication and technology skills, then client-readiness in manager or partner interviews.";
    case "Research":
      return s.name + " looks for strong algorithms and math plus the ability to defend your own research or project work.";
    case "Banking & Fintech":
    case "Global Captive":
      return s.name + " India engineering hiring centres on a coding assessment, DSA interviews, a design round and a hiring-manager conversation.";
    case "Indian Product":
      return s.name + " tests DSA speed, machine coding or low-level design, and product-scale system design.";
    case "Startup":
      return s.name + " favours practical engineers: real coding, clear thinking, system design and strong ownership.";
  }
}

function notesFor(s: Spec): string {
  return s.verified
    ? "Round structure follows public 2026 hiring reports. Confirm against the current drive notice before launch."
    : "Typical pattern for this type of company, not independently verified. Replace with the exact rounds before launch.";
}

function buildRoles(s: Spec): Record<string, RoleConfig> {
  const fresher = s.rounds ?? typicalRounds(s.group, s.name);
  const program = s.program ? " (" + s.program + ")" : "";
  return {
    intern: { roleTitle: s.name + " Intern / Trainee", level: "Intern / Trainee", rounds: fresher },
    sde1: { roleTitle: s.name + " Fresher Engineer" + program, level: "Entry-Level", rounds: fresher },
    sde2: { roleTitle: s.name + " Experienced Engineer", level: "Lateral / Experienced", rounds: lateralRounds(s.group, s.name) },
  };
}

/** Merged into getCompanyTrackData() so each company's track page shows its own rounds. */
export const EXTRA_COMPANY_PROFILES: Record<string, Partial<CompanyTrackData>> = Object.fromEntries(
  SPECS.map((s) => [
    slugOf(s.name),
    {
      companyName: s.name,
      brandColor: s.color,
      overview: overviewFor(s),
      recruiterNotes: notesFor(s),
      roles: buildRoles(s),
    } as Partial<CompanyTrackData>,
  ])
);
