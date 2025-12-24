import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  google,
  amazon,
  user,
  MR,
  face,
  fraud,
  logo2,
  sk,
  tf,
  dev,
  
} from "../assets";
import k2 from "../assets/k2.png"
import anzo from "../assets/tech/anzo.png"
import echocare from "../assets/echocare.png"
import docxtract from "../assets/docxtract.png"

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Data Scientist",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Web Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Sklearn",
    icon: sk,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "tenserflow",
    icon: tf,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name:"python",
    icon: logo2,
  },
  // {
  //   name: "sklearn",
  //   icon: sk,
  // },
];

const experiences = [
  {
    title: "Scholar",
    company_name: "Amazon Future Engineers Bootcamp",
    icon: amazon,
    iconBg: "#383E56",
    date: "Feb 2025 - Present",
    points: [
      "Learning and applying core programming concepts in Python, Java, and foundational AI techniques through structured modules.",
      "Collaborating with mentors and peers to build problem-solving and analytical skills through hands-on coding exercises and projects.",
      "Understanding and implementing Data Structures and Algorithms to solve real-world computational problems efficiently.",
     "Participating in workshops, assessments, and coding challenges to strengthen technical and soft skills for career readiness.",
    ],
  },
  {
    title: "Machine Learning Intern",
    company_name: "Krishi Kutumb",
    icon: k2,
    iconBg: "#E6DEDD",
    date: "June 2025 - November 2025",
    points: [
"Developing and deploying machine learning models to analyze agricultural data and support smart farming solutions for improved crop productivity.",
"Working with real-world datasets involving soil health, crop conditions, and weather patterns to build predictive and classification models.",
"Implementing data preprocessing, feature engineering, and model evaluation techniques to improve accuracy and reliability of ML solutions.",
"Collaborating with domain experts and developers to translate agricultural challenges into practical, AI-driven applications for farmers.",
    ],
  },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "The Amazon Future Engineers Bootcamp strengthened my programming fundamentals and problem-solving skills.",
    name: "Karthikeyan",
    designation: "Conventional Lead",
    company: "Amazon Future Engineers",
    image: user,
  },
  {
    testimonial:
      "Being part of GDSC empowered me to build real-world tech solutions while collaborating with a vibrant community of student developers.",
    name: "Sona Malhotra",
    designation: "Conventional Lead",
    company: "Google Developer Students Club",
    image: user,
  },
  {
    testimonial:
      "Learning with Zuvy gave me industry-relevant skills and practical exposure through interactive lessons and real-time projects.",
    name: "Bhagyashree",
    designation: "Manager",
    company: "Zuvy",
    image: user,
  },
];

const projects = [

  {
    name: "EchoCare",
    description:
      "Developed a full-stack mental wellness platform integrating an AI chatbot, community engagement system, and professional counselling services. Built secure modules for session booking, resource management, and user interactions, along with an admin dashboard for monitoring users, managing content, and overseeing platform operations.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "socket.io",
        color: "green-text-gradient",
      },
      {
        name: "Llama",
        color: "pink-text-gradient",
      },
      {
        name: "Node",
        color: "pink-text-gradient",
      },
    ],
    image: echocare,
    source_code_link: "https://echo-care-omega.vercel.app/",
  },
  {
    name: "DocXtract",
    description:
      "Developed an AI-powered invoice extraction system using OCR and LLaMA LLM to convert unstructured documents into structured JSON and CSV data. Built a React dashboard for uploading, previewing, and downloading data, with a secure backend API for validation and report generation.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "Llama",
        color: "pink-text-gradient",
      },
      {
        name: "Node",
        color: "pink-text-gradient",
      },
    ],
    image: docxtract,
    source_code_link: "https://docxtract-three.vercel.app/",
  },
  {
    name: "Movie Recommendation System",
    description:
      "Developed an intelligent movie recommendation system using content-based filtering that analyzes user preferences and movie attributes to deliver hyper-personalized suggestions, significantly enhancing engagement and discovery.",
    tags: [
      {
        name: "steamlit",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "machine-learning",
        color: "pink-text-gradient",
      },
    ],
    image: MR,
    source_code_link: "https://movie-recommender-kg.onrender.com",
  },
  {
    name: "Bollywood Face Matcher",
    description:
      "Discover your Bollywood celebrity lookalike with our AI-powered face matcher! Powered by DeepFace technology, our app analyzes your facial features against 10,000+ star embeddings using advanced cosine similarity to instantly reveal your closest match. Just upload a photo and meet your famous twin in seconds!",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "python",
        color: "pink-text-gradient",
      },
      {

        name: "Deepface",
        color: "orange-text-gradient",},

    ],
    image:face,
    source_code_link: "https://face-matcher.vercel.app/",
  },
  {
    name: "Anzo- Clone",
    description:
      "Recreated an award-winning Anzo Designer website clone with high-fidelity layouts, interactive animations, and seamless responsiveness, leveraging React, Tailwind CSS, and modern frontend best practices.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "framer motion",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },

    ],
    image: anzo,
    source_code_link: "https://anzo-clone-mocha.vercel.app/"
  },

];

export { services, technologies, experiences, testimonials, projects , dev};
