import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import carpooling from '../assets/carpooling.jpg';
import ecc from '../assets/ecc.png';
import quantum from '../assets/image-of-quantum-computing.jpg';
import zfe from '../assets/ZFE-logo.png'
import mansuba from '../assets/Chaturanga_Chess_Set.jpg';
import amazones from '../assets/game_of_the_amazones.jpeg';
import towerdefense from '../assets/landscape_comp.jpeg';
import airfoil from '../assets/airfoil.png'
import qiskit from '../assets/qiskit.png'
import malware from '../assets/malware_detection.jpg'
import gogame from '../assets/Go_game.jpg'
import p2p from '../assets/ptwop.png';
import aiImageDetection from '../assets/ai_image_detection.jpg';
import fakeAudioDetection from '../assets/fake_audio.jpg';
import chatbotRAG from '../assets/chatbot.png';


const allProjects = [
  {
    title: 'Malware Detection with ML',
    date: 'May 2024 – Sep 2024',
    description: "Malware detection model utilizing Random Forests and Neural Networks (VirusTotal dataset).",
    skills: ['Python', 'Scikit-learn', 'Cyber Security'],
    image: malware,
    theme: 'Cyber'
  },
  {
    title: 'AI-Generated Image Detection',
    date: 'Mar 2025 – Aug 2025',
    description: "Fine-tuned CLIP and PRNU-based models to detect deepfake and AI-generated images from diffusion models (e.g., DALL·E, Stable Diffusion).",
    skills: ['PyTorch', 'CLIP', 'Computer Vision'],
    image: aiImageDetection,
    theme: 'AI'
  },
  {
    title: 'Synthetic Audio Deepfake Detection',
    date: 'Juin 2025 – Aug 2025',
    description: "Built a detection system for AI-generated voices using spectrogram analysis, CNN models, and the FakeSound dataset.",
    skills: ['Audio Processing', 'CNN', 'FakeSound'],
    image: fakeAudioDetection,
    theme: 'AI'
  },
  {
    title: 'LLM-based Chatbot with RAG',
    date: 'Jul 2024 – Sep 2024',
    description: "Implemented a retrieval-augmented chatbot using LangChain and OpenAI GPT models, capable of answering from custom PDF and web sources.",
    skills: ['LangChain', 'OpenAI', 'RAG'],
    image: chatbotRAG,
    theme: 'AI'
  },
  {
    title: 'Post-Quantum ECC (TIPE)',
    date: 'Dec 2021 – Jun 2022',
    description: "Quantum-resistant Elliptic Curve Cryptography algorithm, including benchmarks and security evaluation.",
    skills: ['ECC', 'PQ-Crypto', 'C++'],
    image: quantum,
    theme: 'Cyber'
  },
  {
    title: 'Security Analysis Tool',
    date: 'Jan 2023 - Mar 2023',
    description: "Developed a Python tool for automated vulnerability scanning and report generation.",
    skills: ['Python', 'Nmap', 'Security'],
    image: 'https://images.unsplash.com/photo-1563206698-da2373fde39f?auto=format&fit=crop&w=960&q=60',
    theme: 'Cyber'
  },
  {
    title: 'Confusion-Matrix Analytics',
    date: 'Dec 2023 – May 2024',
    description: "Hellinger / K-L distance for comparing supervised model performance, visualized with D3.js.",
    skills: ['D3.js', 'Statistics', 'Python'],
    image: 'https://images.unsplash.com/photo-1534751516642-a1af1efbab31?auto=format&fit=crop&w=960&q=60',
    theme: 'Research (Quantum)'
  },
  {
    title: 'Quantum Circuit Review (Shor)',
    date: 'Feb 2024 – May 2024',
    description: "Study and optimization of Shor's algorithm using Qiskit (5 qubits).",
    skills: ['Qiskit', 'Quantum', 'Shor'],
    image: qiskit,
    theme: 'Research (Quantum)'
  },
  {
    title: 'Airfoil CFD & Pressure Maps',
    date: 'Apr 2023',
    description: "Aerodynamic airfoil optimization using a custom CFD solver and pressure map visualization.",
    skills: ['NumPy', 'CFD', 'Matplotlib'],
    image: airfoil,
    theme: 'Research (Quantum)'
  },
  {
    title: 'Image Compression via SVD',
    date: 'Mar 2023',
    description: "Dimensionality reduction through SVD factorization with automatic optimal rank selection.",
    skills: ['SVD', 'NumPy', 'Pillow'],
    image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=960&q=60',
    theme: 'Research (Quantum)'
  },
  {
    title: 'User-Space Thread Library',
    date: 'Mar 2024 – May 2024',
    description: "Cooperative threading library in C, including x86-64 assembly context switching.",
    skills: ['C', 'Concurrency', 'x86-64'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=960&q=60',
    theme: 'Dev'
  },
  {
    title: 'Student Car-Pooling App',
    date: 'Oct 2023 – Dec 2023',
    description: "PHP/MySQL platform for student carpooling with JWT authentication and Stripe payment integration.",
    skills: ['PHP', 'MySQL', 'JWT'],
    image: carpooling,
    theme: 'Dev'
  },
  {
    title: 'Smart Intersections (Android)',
    date: '—',
    description: "Android app using Bordeaux open-data to secure traffic intersections with Firebase Realtime DB.",
    skills: ['Android', 'Firebase', 'Open Data'],
    image: zfe,
    theme: 'Dev'
  },
  {
    title: 'The Game of the Amazons',
    date: 'Feb 2023 – May 2023',
    description: "Implementation of the Game of the Amazons in C, with alpha-beta minimax AI and ncurses UI.",
    skills: ['C', 'Minimax', 'ncurses'],
    image: amazones,
    theme: 'Games'
  },
  {
    title: 'Tower Defense (TS)',
    date: 'Mar 2023 – May 2023',
    description: "2D Tower Defense game built in TypeScript/JavaScript using the Canvas API and dynamic pathfinding.",
    skills: ['TypeScript', 'Canvas API', 'Game Dev'],
    image: towerdefense,
    theme: 'Games'
  },
  {
    title: 'Mansuba Game (C)',
    date: 'Oct 2022 – Jan 2023',
    description: "Terminal-based adaptation of the Chinese game Mansuba with basic AI.",
    skills: ['C', 'Game AI'],
    image: mansuba,
    theme: 'Games'
  },
  {
    title: 'Go Game AI (Python)',
    date: 'Jul 2024 – Sep 2024',
    description: "Development of a Python AI to play the game of Go using Monte Carlo Tree Search and reinforcement learning.",
    skills: ['Python', 'MCTS', 'Reinforcement Learning'],
    image: gogame,
    theme: 'AI'
  },
  {
  title: 'P2P Communication System (Java/C)',
  date: 'Apr 2024 – Jun 2024',
  description: "Designed and implemented a Peer-to-Peer communication system with a central server in Java and multiple clients in C, supporting message broadcasting and file exchange.",
  skills: ['Java', 'C', 'Sockets', 'P2P Networking'],
  image: p2p, 
  theme: 'Dev'
}

];


const themesOrder = ['Games', 'Dev', 'Cyber', 'Research (Quantum)', 'AI', 'Other projects'];

const themedProjects = themesOrder.reduce((acc, theme) => {
  acc[theme] = allProjects.filter(p => p.theme === theme).slice(0, 4); 
  return acc;
}, {});


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, 
      delayChildren: 0.2
    }
  }
};

const themeBlockVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    }
};

const projectCardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.35,
        ease: [0.22, 1, 0.36, 1]
      }
    }
};


export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const [activeCard, setActiveCard] = useState(null);

  const ProjectCard = ({ project, idx }) => (
    <motion.div
      variants={projectCardVariants}
      className="relative h-48 rounded-xl overflow-hidden cursor-pointer group shadow-lg"
      onClick={() => setActiveCard(activeCard === `${project.theme}-${idx}` ? null : `${project.theme}-${idx}`)}
      onMouseEnter={() => setActiveCard(`${project.theme}-${idx}`)}
      onMouseLeave={() => setActiveCard(null)}
    >
      {/* Background Image */}
      <img
        src={project.image}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/40 to-gray-900/80 group-hover:from-indigo-900/60 transition-colors duration-500" />

      {/* Title & date */}
      <div className="absolute bottom-3 left-3 right-3 z-10">
        <h4 className="text-md font-semibold text-white leading-tight drop-shadow">
          {project.title}
        </h4>
        <p className="text-xs text-gray-200">{project.date}</p>
      </div>

      {/* Details overlay */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={activeCard === `${project.theme}-${idx}` ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 0.2 }}
        className="absolute inset-0 p-4 flex flex-col justify-center text-xs text-gray-200 backdrop-blur-sm bg-black/60 pointer-events-none"
      >
        <p className="mb-2 leading-snug max-h-24 overflow-y-auto scrollbar-hide">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1">
          {project.skills.map((skill, i) => (
            <span
              key={i}
              className="text-[0.65rem] font-medium px-2 py-0.5 bg-indigo-300/30 text-indigo-100 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );

  return (
    <section
      id="projects"
      ref={ref}
      className="w-full py-20 px-4 sm:px-8 lg:px-16 bg-white dark:bg-[#01161E]"
    >
      <motion.div
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={containerVariants}
        className="max-w-7xl mx-auto"
      >
        {/* Section header */}
        <motion.div variants={themeBlockVariants} className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-black dark:text-white mb-2 inline-block">
            My Projects
          </h2>
          <div className="mx-auto w-24 h-1 bg-indigo-500 rounded-full" />
        </motion.div>

        {/* Main 2x2 Grid for Project Themes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> {/* Main 2x2 grid */}
          {themesOrder.map((theme) => (
            <motion.div
              variants={themeBlockVariants} // Animation for the whole theme block
              key={theme}
              className="p-6 bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-xl flex flex-col items-center border border-indigo-200 dark:border-indigo-700" // Styled theme container
            >
              <h3 className="text-2xl font-bold text-black dark:text-white mb-6 text-center">
                {theme}
              </h3>
              
              {/* Nested 2x2 Grid for Projects within this Theme */}
              {themedProjects[theme]?.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full"> {/* Nested 2x2 grid for projects */}
                  {themedProjects[theme].map((project, idx) => (
                    <ProjectCard project={project} idx={idx} key={idx} />
                  ))}
                </div>
              ) : (
                <p className="text-gray-600 dark:text-gray-400 text-center text-sm mt-4">No projects in this category yet, or more than 4 are present and only the first 4 are shown.</p>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}