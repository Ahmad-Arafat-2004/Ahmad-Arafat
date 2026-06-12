import GithubIcon from "./../public/assets/icons/github.svg";
import LinkedInIcon from "./../public/assets/icons/linkedin.svg";
import SnapIcon from "./../public/assets/icons/snapchat.svg";
import InstagramIcon from "./../public/assets/icons/instagram.svg";
import LLM from "./../public/assets/icons/frontend.svg";
import Interfaces from "./../public/assets/icons/leadership.svg";
import Automation from "./../public/assets/icons/problem-solving.svg";
import Deployment from "./../public/assets/icons/freelance.svg";
import CV from "./../public/assets/icons/backend.svg";
import ML from "./../public/assets/icons/full-stack.svg";

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Machine Learning",
    icon: <ML />,
  },
  {
    title: "LLM Applications",
    icon: <LLM />,
  },
  {
    title: "Computer Vision",
    icon: <CV />,
  },
  {
    title: "AI Automation",
    icon: <Automation />,
  },
  {
    title: "Model Deployment",
    icon: <Deployment />,
  },
  {
    title: "Intelligent Interfaces",
    icon: <Interfaces />,
  },
];

const technologies = {
  languages: [
    {
      name: "Python",
      icon: "/assets/tech/python.svg",
      link: "https://www.python.org/",
    },
    {
      name: "C++",
      icon: "/assets/tech/c-plusplus.svg",
      link: "https://cplusplus.com/",
    },
    {
      name: "C#",
      icon: "/assets/tech/c-sharp-icon-original.svg",
      link: "https://dotnet.microsoft.com/en-us/languages/csharp",
    },
    {
      name: "R",
      icon: "/assets/tech/r.svg",
      link: "https://www.r-project.org/",
    },
    {
      name: "SQL",
      icon: "/assets/tech/sql.png",
      link: "https://www.mysql.com/",
    },
    {
      name: "Java",
      icon: "/assets/tech/java.svg",
      link: "https://www.java.com/en/",
    },

  ],
  frameworks: [
    {
      name: "PyTorch",
      icon: "/assets/tech/pytorch-icon-original.svg",
      link: "https://pytorch.org/",
    },
    {
      name: "TensorFlow",
      icon: "/assets/tech/tensorflow-icon-original.svg",
      link: "https://www.tensorflow.org/",
    },
    {
      name: "opencv",
      icon: "/assets/tech/opencv-icon-original.svg",
      link: "https://opencv.org/",
    },
    {
      name: "Scikit-learn",
      icon: "/assets/tech/scikit-learn.svg",
      link: "https://scikit-learn.org/stable/",
    },
    {
      name: "FastAPI",
      icon: "/assets/tech/FastAPI.svg",
      link: "https://fastapi.tiangolo.com/",
    },

  ],
  libraries: [
    {
      name: "NumPy",
      icon: "/assets/tech/file-type-numpy-icon-original.svg",
      link: "https://numpy.org/",
    },
    {
      name: "Pandas",
      icon: "/assets/tech/Pandas.svg",
      link: "https://pandas.pydata.org/",
    },
    {
      name: "Matplotlib",
      icon: "/assets/tech/Matplotlib.svg",
      link: "https://matplotlib.org/",
    },
    {
      name: "Seaborn",
      icon: "/assets/tech/seaborn.svg",
      link: "https://seaborn.pydata.org/",
    },
    
    {
      name: "Hugging Face",
      icon: "/assets/tech/huggingface-color.svg",
      link: "https://huggingface.co/",
    },
    {
      name: "lightgbm",
      icon: "/assets/tech/LightGBM.png",
      link: "https://lightgbm.readthedocs.io/en/stable/",
    },
    {
      name: "xgboost",
      icon: "/assets/tech/xgboost.svg",
      link: "https://xgboost.ai/",
    },

  ],
  tools: [
    {
      name: "Git",
      icon: "/assets/tech/git.svg",
      link: "https://git-scm.com/",
    },
    {
      name: "Github",
      icon: "/assets/icons/github.svg",
      link: "https://github.com/",
    },
    {
      name: "Figma",
      icon: "/assets/tech/figma.svg",
      link: "https://www.figma.com/",
    },
    {
      name: "Docker",
      icon: "/assets/tech/docker.svg",
      link: "https://www.docker.com/",
    },
        {
      name: "Slack",
      icon: "/assets/tech/slack.svg",
      link: "https://www.Slack.com/",
    },
        {
      name: "Docker",
      icon: "/assets/tech/notion.svg",
      link: "https://www.notion.com/",
    },
            {
      name: "n8n",
      icon: "/assets/tech/n8n.svg",
      link: "https://www.n8n.io/",
    },
  ],
  environments: [
    {
      name: "Linux (Ubuntu)",
      icon: "/assets/tech/ubuntu.svg",
      link: "https://www.linux.org/",
    },
    {
      name: "Google Colab",
      icon: "/assets/tech/Google_Colaboratory.svg",
      link: "https://colab.research.google.com/",
    },
    {
      name: "Jupyter",
      icon: "/assets/tech/Jupyter_logo.png",
      link: "https://jupyter.org/",
    },
  ],
  databases: [
    {
      name: "MySQL",
      icon: "/assets/tech/my-sql.png",
      link: "https://www.mysql.com/",
    },
    {
      name: "PostgreSQL",
      icon: "/assets/tech/postgresql.png",
      link: "https://www.postgresql.org",
    },
    {
      name: "MongoDB",
      icon: "/assets/tech/mongodb.svg",
      link: "https://www.mongodb.com/",
    },
    {
      name: "Firebase",
      icon: "/assets/tech/firebase.svg",
      link: "https://firebase.google.com/",
    },
    {
      name: "Supabase",
      icon: "/assets/tech/supabase.svg",
      link: "https://supabase.com/",
    },
  ],
};

const experiences = [
{
  title: "Graduation Project Intern",
  company_name: "ESKADENIA Software",
  icon: "/assets/company/eskadenia.png",
  iconBg: "#E6DEDD",
  date: "Mar 2026 - Present",
  points: [
    "Developing an offline speech-to-text system running on GPU without internet connectivity",
    "Building and optimizing deep learning models for real-time voice transcription",
    "Implementing efficient inference pipelines for on-device audio processing",
  ],
},
{
  title: "AI Agent Engineering Trainee",
  company_name: "MetaServ.me",
  icon: "/assets/company/metaserv.png",
  iconBg: "#E6DEDD",
  date: "Nov 2025 - Feb 2026",
  points: [
    "Built AI agent automation workflows",
    "Integrated agents with APIs and real time services",
    "Worked with LangChain, CrewAI, Autogen and MCP",
    "Implemented RAG pipelines and prompt engineering",
    "Applied TensorFlow for basic machine learning tasks",
  ],
},
{
  title: "Advanced Data Analytics Intern",
  company_name: "Correlation One",
  icon: "/assets/company/c1.png",
  iconBg: "#E6DEDD",
  date: "Oct 2024 - Mar 2025",
  points: [
    "Performed data analysis and machine learning tasks using Python",
    "Extracted insights from complex datasets",
    "Collaborated on real world problem solving projects",
    "Applied critical thinking for data driven decisions",
    "Built analytical reports and findings presentations",
  ],
},
  // {
  //   title: "Frontend Developer",
  //   company_name: "Tech team member at GDSC MVJCE",
  //   icon: "/assets/company/gdsc-logo.svg",
  //   iconBg: "#E6DEDD",
  //   date: "February 2022 - July 2023",
  //   points: [
  //     "Successfully planned and executed induction programs, providing new members with crucial information about the organization's goals and values.",
  //     "Demonstrated web development expertise by conducting CSS workshops, equipping participants with practical web design and styling skills.",
  //     "Played a crucial role in promoting GDSC events and actively collaborated with cross-functional teams to deliver high-quality projects, fostering teamwork and innovation.",
  //     "Actively engaged with the GDSC community, assisted in workshops, and contributed to planning and managing GDSC events, ensuring their success and growth.",
  //   ],
  // },
];


const projects = [
  {
<<<<<<< HEAD
    name: "Distributed Electronic Voting System",
    description:
      "A secure multi-voting system built on blockchain and distributed systems principles, ensuring transparency, immutability, and fault tolerance. The system eliminates single points of failure and guarantees tamper-proof vote recording across a decentralized network.",
    tags: [
      {
        name: "blockchain",
        color: "blue-text-gradient",
      },
      {
        name: "distributed-systems",
        color: "green-text-gradient",
      },
      {
        name: "multi-voting",
        color: "pink-text-gradient",
      },
      {
        name: "security",
        color: "orange-text-gradient",
      },
    ],
    image: "/assets/projects/dis.png",
    source_code_link: null,
    deployed_link: null,
  },
  {
    name: "Aircraft Damage Detection",
    description:
      "A three-stage AI pipeline for aircraft inspection achieving top accuracy on both Kaggle and Roboflow — among the first teams globally to reach this benchmark. Model 1 identifies the aircraft type, Model 2 detects structural damage, and Model 3 performs 3D localization to precisely map damage on the aircraft body.",
    tags: [
      {
        name: "computer-vision",
        color: "blue-text-gradient",
      },
      {
        name: "object-detection",
        color: "green-text-gradient",
      },
      {
        name: "3D-localization",
        color: "pink-text-gradient",
      },
      {
        name: "deep-learning",
        color: "orange-text-gradient",
      },
    ],
    image: "/assets/projects/aircraft.png",
    source_code_link: null,
    deployed_link: null,
  },
  {
    name: "Chatbot For MEU University",
    description:
      "An intelligent university chatbot built with a hybrid KAG architecture combining Retrieval-Augmented Generation (RAG) and Knowledge Graph to deliver accurate and context-aware answers about university information and services.",
    tags: [
      {
        name: "RAG",
        color: "blue-text-gradient",
      },
      {
        name: "knowledge-graph",
        color: "green-text-gradient",
      },
      {
        name: "NLP",
        color: "pink-text-gradient",
      },
      {
        name: "python",
        color: "orange-text-gradient",
      },
    ],
    image: "/assets/projects/chatbot.png",
    source_code_link: "https://github.com/Ahmad-Arafat-2004/NLP_PROJECT",
    deployed_link: null,
  },
  {
=======
>>>>>>> 20e2b83a863ca22dabc4c3b87cb9fbbe75607098
    name: "Irth Biladi Food Application",
    description:
      "Irth Biladi is a digital grocery store for authentic Middle Eastern foods. It provides essential home cooking ingredients with quick ordering and home delivery, bringing traditional pantry products into a modern online shopping experience.",
    tags: [
      {
        name: "ecommerce",
        color: "blue-text-gradient",
      },
      {
        name: "online-store",
        color: "green-text-gradient",
      },
      {
        name: "grocery",
        color: "pink-text-gradient",
      },
      {
        name: "food-delivery",
        color: "orange-text-gradient",
      },
      {
        name: "react",
        color: "yellow-text-gradient",
      },
      {
        name: "nextjs",
        color: "gray-text-gradient",
      },
      {
        name: "tailwind",
        color: "cyan-text-gradient",
      },
    ],
    image:
    "/assets/projects/irth2.png",
    source_code_link: null,
    deployed_link: "https://irthbiladi.com/",
  },
  {
    name: "Digital Clock Using Circuits Simulator and Logical Gates",
    description:
      "Digital Logic Circuits is a hardware design project focused on building fundamental computer components from basic logic gates. The project implements a BCD to 7-Segment display driver, a 4-bit binary comparator, and a 3-to-8 decoder using Boolean algebra, truth tables, and Karnaugh maps. It demonstrates how binary data is processed, compared, and converted into human-readable output entirely through digital circuits.",
    tags: [
      {
        name: "digital-logic",
        color: "blue-text-gradient",
      },
      {
        name: "karnaugh-map",
        color: "green-text-gradient",
      },
      {
        name: "decoder",
        color: "pink-text-gradient",
      },
      {
        name: "low-level-computing",
        color: "orange-text-gradient",
      },
      {
        name: "boolean-algebra",
        color: "yellow-text-gradient",
      },
    ],
    image: "/assets/projects/logic2.png",
    source_code_link: "https://github.com/Ahmad-Arafat-2004/Logic-",
    deployed_link: null,
  },
  {
    name: "Hospital Management System",
    description:
      "Hospital Management System is a C++ console application designed to demonstrate practical usage of core data structures in a real world scenario. The system manages doctors, patients, nurses, and visitors using linked lists, stack, queue, binary search tree, hash table, and binary search algorithms. Each structure was selected based on operational behavior such as FIFO for emergency patients, LIFO for doctor history, ordered retrieval using BST, and fast lookup using hashing.",
    tags: [
      {
        name: "data-structures",
        color: "blue-text-gradient",
      },
      {
        name: "algorithms",
        color: "green-text-gradient",
      },
      {
        name: "console-application",
        color: "pink-text-gradient",
      },
      {
        name: "queue",
        color: "orange-text-gradient",
      },
      {
        name: "hash-table",
        color: "yellow-text-gradient",
      },
    ],
    image: "/assets/projects/hospital.png",
    source_code_link: "https://github.com/Ahmad-Arafat-2004/Hospital-Management-System-Sourse-Code.git",
    deployed_link: null,
  },
  {
    name: "Psychological Robot Assistant",
    description:
      "An AI robotic system that listens to voice commands, scans people using a camera, detects faces, analyzes emotions using deep learning, and responds with spoken feedback. The robot rotates using a servo motor to inspect the environment, identifies each person once, determines emotional state, then generates a natural response through AI speech interaction. ",
    tags: [
      {
        name: "AI",
        color: "blue-text-gradient",
      },
      {
        name: "Computer-Vision",
        color: "green-text-gradient",
      },
      {
        name: "Speech-Recognition",
        color: "pink-text-gradient",
      },
      {
        name: "RaspberryPi",
        color: "orange-text-gradient",
      },
      {
        name: "HumanRobotInteraction",
        color: "yellow-text-gradient",
      },
    ],
    image: "/assets/projects/robot2.png",
    source_code_link:
      null,
    deployed_link:
      null,
  },

];

const socials = [
  {
    id: "github",
    icon: <GithubIcon />,
    link: "https://github.com/Ahmad-Arafat-2004",
  },
  {
    id: "linkedin",
    icon: <LinkedInIcon />,
    link: "https://www.linkedin.com/in/ahmad-arafat2004",
  },
  {
    id: "snap",
    icon: <SnapIcon />,
    link: "https://www.snapchat.com/add/a7mad-97a",
  },
  {
    id: "instagram",
    icon: <InstagramIcon />,
    link: "https://www.instagram.com/a7mad.__.3rafat_",
  },
];

const heroTexts = [
  "Builds AI systems end-to-end",
  500,
  "Trains & deploys ML models",
  500,
  "Computer Vision applications",
  500,
  "NLP & LLM integration",
  500,
  "Python AI backend developer",
  500,
  "MLOps & model APIs",
  500,
];

export {
  navLinks,
  services,
  technologies,
  experiences,
  projects,
  socials,
  heroTexts,
};
