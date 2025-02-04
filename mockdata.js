// Job Descriptions Object
const jobDescriptions = {
  "Full Stack Developer": {
    title: "Full Stack Developer",
    note: "Responsible for both front-end and back-end development.",
    description:
      "A Full Stack Developer is responsible for developing both client and server software. They work with front-end and back-end technologies to build dynamic applications and ensure seamless user experiences.",
    skills: [
      "HTML/CSS/JavaScript",
      "React/Angular/Vue",
      "Node.js/Express",
      "Database Management (SQL/NoSQL)",
      "RESTful APIs",
      "Version Control (Git)",
    ],
    sectionDescription:
      "Full Stack Developers play a crucial role in software development by bridging the gap between user-facing applications and server-side logic.",
  },
  "Data Scientist": {
    title: "Data Scientist",
    note: "Focuses on data analysis and machine learning.",
    description:
      "A Data Scientist analyzes large sets of structured and unstructured data. They use programming, statistical modeling, and machine learning to extract insights that help businesses make data-driven decisions.",
    skills: [
      "Python/R",
      "Machine Learning Algorithms",
      "Data Visualization (Matplotlib, Seaborn)",
      "Statistical Analysis",
      "SQL",
      "Big Data Technologies (Hadoop, Spark)",
    ],
    sectionDescription:
      "Data Scientists are essential in interpreting complex data to inform strategic business decisions and drive innovation.",
  },
  "Embedded Application Developer": {
    title: "Embedded Application Developer",
    note: "This job role is only for ECE students.",
    description:
      "An Embedded Application Developer designs, develops, and optimizes embedded systems, working with microcontrollers, real-time operating systems, and hardware interfaces.",
    skills: [
      "ARM Processor",
      "C Programming",
      "Embedded Application Development",
      "Power Electronics",
      "Analog and Digital Circuits",
      "Communication Protocols",
    ],
    sectionDescription:
      "Embedded Application Developers create software that interacts directly with hardware, playing a key role in the development of smart devices.",
  },
  "Electrical Design Engineer": {
    title: "Electrical Design Engineer (EEE)",
    note: "Focus on electrical systems design.",
    description:
      "An Electrical Design Engineer is responsible for designing and implementing electrical systems and components, ensuring they operate safely and efficiently.",
    skills: [
      "Understanding SLDs",
      "Knowledge of CAD",
      "Knowledge of APFC Panels",
      "Capacitors",
      "LT Switchgears",
      "Meters",
      "Proficiency in Word, Excel, PowerPoint & E-mails Mandatory",
    ],
    sectionDescription:
      "Electrical Design Engineers are critical in creating reliable electrical systems that meet regulatory standards and client specifications.",
  },
  "Electronics Engineer": {
    title: "Electronics Engineer (EEE, EIE & ECE)",
    note: "Involves various electronic systems.",
    description:
      "Electronics Engineers design and develop electronic circuits, devices, and systems, ensuring functionality and efficiency.",
    skills: [
      "Arduino",
      "ARM Microcontroller",
      "C++ Programming",
      "Embedded Systems",
      "Internet of Things (IoT)",
    ],
    sectionDescription:
      "Electronics Engineers innovate and improve electronic systems that are integral to modern technology.",
  },
  "Trainee Engineer - PCB Design": {
    title: "Trainee Engineer - Printed Circuit Board Design",
    note: "Entry-level position for PCB design.",
    description:
      "A Trainee Engineer in PCB Design assists in the creation and testing of printed circuit boards, gaining hands-on experience in the field.",
    skills: [
      "Basic understanding of electronic circuits",
      "Familiarity with PCB design tools such as Altium Designer, Eagle, KiCad",
    ],
    sectionDescription:
      "Trainee Engineers in PCB Design are essential in supporting the development of electronic products through effective circuit board design.",
  },
  "Engineer - PLC Programmer": {
    title: "Engineer - PLC Programmer (EEE, EIE, ECE)",
    note: "Specializes in PLC systems.",
    description:
      "A PLC Programmer designs and implements programmable logic controller (PLC) systems for industrial automation.",
    skills: [
      "PLC HMI programming",
      "Experience in Rockwell or Siemens programming",
      "Understanding of hydraulics and electrical",
      "Designing and developing PLC programs based on project requirements",
    ],
    sectionDescription:
      "PLC Programmers are crucial in automating industrial processes, enhancing efficiency and safety.",
  },
  "VLSI Design Engineer": {
    title: "VLSI Design Engineer",
    note: "Focus on integrated circuit design.",
    description:
      "A VLSI Design Engineer specializes in designing integrated circuits using Very-Large-Scale Integration technology.",
    skills: [
      "Basic STA knowledge",
      "Experience on FPGA platforms like XILINX/Altera",
      "Expertise in digital hardware designing using Verilog",
      "Experience in scripting languages like Perl, Python, Tcl",
      "Working experience in Linux",
      "Run internal scripts for performance testing",
    ],
    sectionDescription:
      "VLSI Design Engineers are at the forefront of semiconductor technology, developing the next generation of chips.",
  },
  "Automation Engineer": {
    title: "Automation Engineer in Industrial Automation",
    note: "Focus on automation systems.",
    description:
      "An Automation Engineer designs and implements automated systems to improve manufacturing processes.",
    skills: [
      "PLC Programming (AB, Siemens, Mitsubishi)",
      "Knowledge in Robotics, Instrumentation & Automation",
      "Experience on CNC & Servo Motor",
      "Electronic Problem Finding",
      "Hands-on experience on HMI, Drives, Panel Wiring, DCS, Hydraulic & Pneumatic",
    ],
    sectionDescription:
      "Automation Engineers enhance production efficiency through innovative automation solutions.",
  },
  "Fresher Mechanical Engineer (Intern)": {
    title: "Fresher Mechanical Engineer (Intern)",
    note: "Internship role for mechanical engineering students.",
    description:
      "A Fresher Mechanical Engineer Intern supports engineering projects and gains practical experience in mechanical engineering.",
    skills: ["Total AutoCAD"],
    sectionDescription:
      "Interns in Mechanical Engineering are provided with a platform to apply theoretical knowledge in real-world engineering scenarios.",
  },
  "Production Engineer": {
    title: "Production/Manufacturing/Maintenance Mechanical Engineer",
    note: "Focus on production processes.",
    description:
      "A Production Engineer ensures efficient manufacturing processes, focusing on quality and productivity.",
    skills: [
      "Modeling",
      "Drafting",
      "Calculation of machine design",
      "P&ID & Analysis (CFD/Structural)",
      "Component Selection based on requirements",
    ],
    sectionDescription:
      "Production Engineers are vital in optimizing processes and ensuring the smooth operation of manufacturing facilities.",
  },
  "Mechanical and Structural Engineer": {
    title: "Mechanical Engineering, Structural Engineering",
    note: "Combines mechanical and structural engineering.",
    description:
      "Mechanical and Structural Engineers design and analyze mechanical systems and structures, ensuring safety and performance.",
    skills: [
      "Experience in mechanical design and specification",
      "Experience in CAD development software",
      "Experience in structural analysis and FEA (Preferably ANSYS)",
    ],
    sectionDescription:
      "These engineers play a pivotal role in the design and integrity of various structures and mechanical systems.",
  },
  "R&D Intern": {
    title: "R&D Intern Design",
    note: "Supports R&D projects.",
    description:
      "An R&D Intern assists in research and development activities, contributing to innovative engineering solutions.",
    skills: [
      "Strong fundamentals of solid mechanics",
      "Experience in designing and building prototypes",
    ],
    sectionDescription:
      "R&D Interns are essential in driving innovation through hands-on experience in research and development.",
  },
  "Process Engineer (Chemical Plants)": {
    title: "Process Engineer in Chemical Plants",
    note: "Involved in chemical process design.",
    description:
      "A Process Engineer designs and optimizes chemical processes in manufacturing environments, ensuring efficiency and safety.",
    skills: [
      "Process simulation",
      "Heat transfer",
      "Process Safety Time calculation",
      "HAZID",
      "PSSR",
      "HAZOP",
      "SOP",
    ],
    sectionDescription:
      "Process Engineers are critical in the production of chemicals, ensuring adherence to safety and regulatory standards.",
  },
  "Production Engineer (Pharmaceuticals)": {
    title: "Production Engineer at Pharmaceutical Companies",
    note: "Focus on pharmaceutical production processes.",
    description:
      "A Production Engineer in pharmaceuticals ensures efficient production processes while complying with industry regulations.",
    skills: [
      "Agile Methodology",
      "Auditing",
      "Automation",
      "Continuous Improvement Process",
      "Good Manufacturing Practices",
      "ISO 9000 Series",
      "New Product Development",
    ],
    sectionDescription:
      "These engineers play a crucial role in the production of safe and effective pharmaceutical products.",
  },
  "Research & Development Engineer": {
    title: "Research & Development Engineer",
    note: "Works on innovative engineering solutions.",
    description:
      "A Research & Development Engineer conducts experiments and develops new technologies or products.",
    skills: [
      "Design, conduct, and analyze experiments",
      "Investigate and develop innovative solutions",
      "Develop and optimize chemical formulations",
    ],
    sectionDescription:
      "R&D Engineers are vital in advancing technology and improving existing products or processes.",
  },
  "Technical Service Engineer (Chemical Companies)": {
    title: "Technical Service Engineer at Chemical Companies",
    note: "Provides technical support in the chemical industry.",
    description:
      "A Technical Service Engineer offers expertise and support for chemical products and processes, ensuring customer satisfaction.",
    skills: [
      "Chemical Engineering Fundamentals",
      "Process Knowledge",
      "Analytical Skills",
      "Troubleshooting",
      "Customer Interaction",
    ],
    sectionDescription:
      "These engineers are essential in bridging the gap between technical knowledge and customer needs in the chemical industry.",
  },
  "Process Safety Engineer": {
    title: "Process Safety Engineer at Industrial Plants",
    note: "Ensures safety in industrial processes.",
    description:
      "A Process Safety Engineer focuses on identifying hazards and implementing safety measures in industrial operations.",
    skills: [
      "Incoming quality control supervision",
      "Managing Assembly/Process Quality",
      "Molding Quality monitoring",
    ],
    sectionDescription:
      "Process Safety Engineers are crucial in maintaining safety standards in industrial settings to prevent accidents.",
  },
  "Environmental Engineer": {
    title: "Environmental Engineer at Treatment Plants",
    note: "Focus on environmental protection.",
    description:
      "An Environmental Engineer designs and implements systems to protect the environment and manage waste.",
    skills: [
      "Process of ETP, RO, MF, UF, WTP",
      "GFC Drawing",
      "Hydraulic design for WTP / STP, ETP / CETP",
    ],
    sectionDescription:
      "Environmental Engineers are vital in developing solutions to environmental challenges and ensuring compliance with regulations.",
  },
  "Process Design Engineer": {
    title: "Process Design Engineer at Engineering Firms",
    note: "Designs processes for various industries.",
    description:
      "A Process Design Engineer creates and optimizes processes for manufacturing systems, ensuring efficiency and quality.",
    skills: [
      "Crude",
      "FCC",
      "Coker",
      "Hydrocracker",
      "Hydrotreater",
      "Alkylation",
      "Naphtha Reforming",
    ],
    sectionDescription:
      "These engineers are essential in designing processes that enhance productivity and reduce costs in various industries.",
  },
  "Site Engineer": {
    title: "Site Engineer at Construction Companies",
    note: "Manages construction sites.",
    description:
      "A Site Engineer oversees construction projects, ensuring they are completed on time and within budget.",
    skills: [
      "Understanding of construction methods, materials, and processes",
      "Ability to read and interpret blueprints",
      "Total Station, Auto Level, GPS",
      "AutoCAD, MS Project or Primavera",
      "Knowledge of local and international building codes",
    ],
    sectionDescription:
      "Site Engineers are crucial in coordinating construction activities and ensuring compliance with safety and quality standards.",
  },
  "Structural Design Engineer": {
    title: "Structural Design Engineer",
    note: "Specializes in structural engineering.",
    description:
      "A Structural Design Engineer designs and analyzes structures to ensure they are safe and capable of withstanding various loads.",
    skills: [
      "ETABS, Staad Pro, SAP",
      "Structural Design",
      "AISC, AutoCAD, REVIT",
    ],
    sectionDescription:
      "Structural Design Engineers play a critical role in ensuring the integrity and safety of buildings and infrastructures.",
  },
  "Quality Control Engineer": {
    title: "Quality Control Engineer at Construction Sites",
    note: "Ensures quality standards on sites.",
    description:
      "A Quality Control Engineer monitors and inspects construction processes to ensure compliance with quality standards.",
    skills: [
      "Casting, Quality Control, QC Inspection",
      "Quality Assurance Protocols",
      "Field testing",
    ],
    sectionDescription:
      "Quality Control Engineers are essential for maintaining the quality and safety of construction projects.",
  },
  "AutoCAD Designer": {
    title: "AutoCAD Designer at Architecture Firms",
    note: "Works on architectural designs.",
    description:
      "An AutoCAD Designer creates detailed drawings and plans for architectural projects using AutoCAD software.",
    skills: [
      "Proficiency in AutoCAD and related design software",
      "Strong understanding of design principles",
      "Ability to read and interpret architectural plans",
      "Excellent problem-solving and communication skills",
    ],
    sectionDescription:
      "AutoCAD Designers are vital in translating architectural concepts into detailed technical drawings that guide construction.",
  },
};

// Quiz questions for new quiz
const newQuizQuestions = [
  {
    question: "What is the primary purpose of React's useEffect hook?",
    options: [
      "To handle side effects in functional components",
      "To create new components",
      "To style components",
      "To manage state"
    ],
    correct: 0
  },
  {
    question: "Which hook is used for maintaining state in React functional components?",
    options: [
      "useComponent",
      "useState",
      "useStateHook",
      "stateHook"
    ],
    correct: 1
  },
  {
    question: "What is the virtual DOM in React?",
    options: [
      "A direct copy of the browser's DOM",
      "A lightweight copy of the actual DOM",
      "A programming concept",
      "A browser feature"
    ],
    correct: 1
  }
];

// Quiz questions for review quiz
// const reviewQuizQuestions = [
//     {
//         question: "What is CSS Flexbox primarily used for?",
//         options: [
//             "Creating animations",
//             "One-dimensional layouts",
//             "Database management",
//             "Server-side rendering"
//         ],
//         correct: 1
//     },
//     {
//         question: "Which property is used to change the stacking order in CSS?",
//         options: [
//             "stack-order",
//             "z-index",
//             "position",
//             "layer"
//         ],
//         correct: 1
//     },
//     {
//         question: "What does CSS Grid excel at?",
//         options: [
//             "One-dimensional layouts",
//             "Two-dimensional layouts",
//             "Text formatting",
//             "Color management"
//         ],
//         correct: 1
//     }
// ];

const completedQuizData = {
  "JavaScript Fundamentals": {
    topic: "JavaScript",
    score: "8/10",
    timeSpent: "45 minutes",
    questions: [
      {
        question: "What is closure in JavaScript?",
        userAnswer: "A function that has access to variables in its outer scope",
        correct: true
      },
      {
        question: "What is hoisting?",
        userAnswer: "Moving declarations to the top",
        correct: true
      },
      {
        question: "What is the event loop?",
        userAnswer: "Incorrect answer about event loop",
        correct: false
      }
    ],
    completion: "2024-01-15",
    performance: "Great understanding of core concepts!"
  },
  "React Components": {
    topic: "React",
    score: "9/10",
    timeSpent: "40 minutes",
    questions: [
      {
        question: "What is the purpose of useState?",
        userAnswer: "To manage state in functional components",
        correct: true
      },
      {
        question: "Explain component lifecycle",
        userAnswer: "Series of methods that are called during component rendering",
        correct: true
      }
    ],
    completion: "2024-01-20",
    performance: "Excellent work on component lifecycle!"
  },
  "CSS Layouts": {
    topic: "CSS",
    score: "7/10",
    timeSpent: "35 minutes",
    questions: [
      {
        question: "What is the CSS Box Model?",
        userAnswer: "Content, padding, border, and margin",
        correct: true
      },
      {
        question: "Explain CSS Flexbox",
        userAnswer: "A one-dimensional layout model for arranging items",
        correct: true
      },
      {
        question: "What is CSS Grid?",
        userAnswer: "A layout system for rows and columns",
        correct: true
      },
      {
        question: "Explain the position property in CSS",
        userAnswer: "Controls element positioning",
        correct: false
      }
    ],
    completion: "2024-01-25",
    performance: "Good progress on flexbox concepts!"
  },
  "HTML Basics": {
    topic: "HTML",
    score: "10/10",
    timeSpent: "30 minutes",
    questions: [
      {
        question: "What are semantic HTML elements?",
        userAnswer: "Elements that clearly describe their meaning like header, nav, main, footer",
        correct: true
      },
      {
        question: "Explain the difference between div and span",
        userAnswer: "div is a block element, span is inline",
        correct: true
      },
      {
        question: "What is the purpose of the alt attribute?",
        userAnswer: "Provides alternative text for images for accessibility",
        correct: true
      },
      {
        question: "Explain HTML forms and their importance",
        userAnswer: "Forms collect user input and submit data to servers",
        correct: true
      }
    ],
    completion: "2024-01-30",
    performance: "Perfect score! Outstanding performance!"
  }
};

// Mock data for assessments
const assessmentQuestions = {
  mcq: [
    {
      question: "What is the primary purpose of React's useEffect hook?",
      options: [
        "To handle side effects in functional components",
        "To create new components",
        "To style components",
        "To manage state"
      ],
      correct: 0
    },
    // Add more MCQ questions as needed
  ],
  written: [
    {
      question: "Explain the concept of microservices architecture and its advantages over monolithic architecture.",
      type: "long-answer"
    },
    // Add more written questions as needed
  ],
  coding: [
    {
      question: "Write a function that finds the longest palindromic substring in a given string.",
      type: "code",
      testCases: [
        { input: "babad", expected: "bab" },
        { input: "cbbd", expected: "bb" }
      ]
    }
    // Add more coding questions as needed
  ]
};
