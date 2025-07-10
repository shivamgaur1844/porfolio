// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import webverseLogo from './assets/company_logo/webverse_logo.png';
import agcLogo from './assets/company_logo/agc_logo.png';
import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's
import glaLogo from './assets/education_logo/gla_logo.png';
import bsaLogo from './assets/education_logo/bsa_logo.png';
import vpsLogo from './assets/education_logo/vps_logo.png';

// Project Section Logo's
import githubdetLogo from './assets/work_logo/github_det.png';
import csprepLogo from './assets/work_logo/cs_prep.png';
import movierecLogo from './assets/work_logo/movie_rec.png';
import taskremLogo from './assets/work_logo/task_rem.png';
import npmLogo from './assets/work_logo/npm.png';
import webverLogo from './assets/work_logo/web_dig.png';
import cmLogo from './assets/work_logo/cm.png';
import imagesearchLogo from './assets/work_logo/image_search.png';
import removebgLogo from './assets/work_logo/remove_bg.png';
import profile2 from './assets/p.jpg';
import emotionImg from './assets/emotion.png';
import visulalizerImg from './assets/visulalizer.webp';
import interImg from './assets/inter.webp';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'VISUAL PARADIGM', logo: netlifyLogo },
      { name: 'CISCO PACKET TRACER', logo: figmaLogo },
    ],
  },
];

  export const education = [
    {
      id: 0,
      img: bsaLogo, // Keeping the same logo for B.Tech
      school: "Jaypee University of Engineering and Technology, Guna",
      date: "Sept 2022 - Aug 2026 (Pursuing)",
      grade: "---",
      desc: "Currently pursuing my Bachelor’s degree in Computer Science (B.Tech.) at Jaypee University of Engineering and Technology, Guna. Expected to complete in 2026.",
      degree: "Bachelor of Technology - B.Tech. (Computer Science)",
    },
    {
      id: 1,
      img: vpsLogo, // Reusing existing logo for school
      school: "Govt. Higher Secondary School, Raghogarh",
      date: "Apr 2021 - March 2022",
      grade: "---",
      desc: "Completed my class XII (PCM) from Govt. Higher Secondary School, Raghogarh, under the MP board in 2022.",
      degree: "MPBOARD (XII) - PCM",
    },
    {
      id: 2,
      img: vpsLogo, // Reusing existing logo for school
      school: "Saraswati Shishu Mandir, Raghogarh",
      date: "Apr 2019 - March 2020",
      grade: "---",
      desc: "Completed my class X from Saraswati Shishu Mandir, Raghogarh, under the MP board in 2020.",
      degree: "MPBOARD (X)",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Face Sentiment Detection",
      description:
        "A web application that uses computer vision and deep learning to detect faces and analyze their sentiment in real-time using webcam input. Built with React.js and a Python backend for AI inference.",
      image: emotionImg,
      tags: ["React JS", "Python", "AI", "Computer Vision", "Deep Learning"],
      github: "#", // Add your GitHub link
      webapp: "#", // Add your webapp link
    },
    {
      id: 1,
      title: "Algorithm Virtulizer",
      description:
        "An interactive tool to visualize and understand popular algorithms and data structures. Users can step through sorting, searching, and graph algorithms with animated visual feedback.",
      image: visulalizerImg,
      tags: ["React JS", "JavaScript", "Algorithms", "Visualization"],
      github: "#", // Add your GitHub link
      webapp: "#", // Add your webapp link
    },
    {
      id: 2,
      title: "PrepTalk AI (AI Interviewer)",
      description:
        "An AI-powered interview preparation platform that simulates real interview scenarios, provides instant feedback, and helps users improve their communication and technical skills.",
      image: interImg,
      tags: ["React JS", "AI", "NLP", "Interview Prep"],
      github: "#", // Add your GitHub link
      webapp: "#", // Add your webapp link
    },
  ];  