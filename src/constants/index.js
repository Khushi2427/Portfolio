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
  tf
} from "../assets";



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
    title: "Trainee Software Engineer",
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
    title: "Trainee Software Engineer",
    company_name: "Google Developer Students Club",
    icon: google,
    iconBg: "#E6DEDD",
    date: "Feb 2025 - Present",
    points: [
"Contributing to community-driven technical projects and collaborating with fellow students to build impactful solutions using Google technologies.",
"Participating in workshops, hackathons, and coding events to enhance development skills in areas like web, mobile, and cloud computing.",
"Learning and implementing modern technologies such as Firebase, Flutter, TensorFlow, and Google Cloud through hands-on sessions.",
"Engaging in peer learning, mentoring, and networking to grow as a developer and build a strong tech community on campus.",
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
    source_code_link: "https://github.com/Khushi2427/KG-movie-recommender/tree/master",
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
    source_code_link: "https://github.com/Khushi2427/FaceMatcher/tree/master",
  },
  {
    name: "Fraud Detection System",
    description:
      "Developed a high-precision fraud detection system using machine learning, with Random Forest as the core algorithm to analyze transaction patterns. The model achieves 95% accuracy in real-time prediction by effectively learning from imbalanced datasets. This solution reduces manual review workload while maintaining robust security against evolving fraudulent tactics.",
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
        name: "flask",
        color: "pink-text-gradient",
      },
    ],
    image: fraud,
    source_code_link: "https://github.com/Khushi2427",
  },
];

export { services, technologies, experiences, testimonials, projects };
