import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPython,
  faJs,
  faNodeJs,
  faJava,
  faPhp,
  faHtml5,
  faCss3Alt,
  faGitAlt
} from '@fortawesome/free-brands-svg-icons';

import {
  faCloud,
  faLock,
  faMobileAlt,
  faDatabase,
  faBrain,
  faProjectDiagram,
  faCogs,
  faMicrochip,
  faGlobe,
  faTerminal,
  faChartBar,
  faCamera,
  faCode,
  faLaptopCode,
  faStickyNote,
  faLinux,
  faKey,
  faBug,
  faShieldAlt,
  faNetworkWired,
  faSearch,
  faEyeSlash
} from '@fortawesome/free-solid-svg-icons';


/* --------------------------------------------------
  SkillBar – single skill with animated progress bar
-------------------------------------------------- */
const SkillBar = ({ skill, percentage, icon, variants }) => {
  const getLevel = (pct) =>
    pct >= 80 ? 'Advanced' : pct >= 60 ? 'Intermediate' : 'Beginner';

  return (
    <motion.div variants={variants} className="w-full p-2">
      <div className="bg-white dark:bg-gray-800/70 rounded-2xl p-4 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-700 h-full">
        <div className="flex items-center gap-3 mb-3">
          <div className="text-indigo-500 dark:text-indigo-400 text-xl">
            <FontAwesomeIcon icon={icon} />
          </div>
          <h4 className="font-semibold text-gray-800 dark:text-white text-base">
            {skill}
          </h4>
        </div>

        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-1.5">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${percentage}%` }}
            transition={{ duration: 1.3, delay: 0.2, type: 'spring' }}
            className="h-2 rounded-full bg-gradient-to-r from-indigo-400 to-indigo-600"
          />
        </div>

        <div className="flex justify-between text-xs font-medium">
          <span className="text-gray-500 dark:text-gray-400">
            {getLevel(percentage)}
          </span>
          <span className="text-indigo-600 dark:text-indigo-400">
            {percentage}%
          </span>
        </div>
      </div>
    </motion.div>
  );
};





/* --------------------------------------------------
  Category definitions
-------------------------------------------------- */
const categories = [
  {
    name: 'Programming Languages & Frameworks',
    skills: [
      { skill: 'Python', percentage: 90, icon: faPython },
      { skill: 'Django', percentage: 85, icon: faPython },
      { skill: 'JavaScript', percentage: 75, icon: faJs },
      { skill: 'Node.js', percentage: 70, icon: faNodeJs },
      { skill: 'Java', percentage: 70, icon: faJava },
      { skill: 'PHP', percentage: 65, icon: faPhp },
      { skill: 'HTML5', percentage: 85, icon: faHtml5 },
      { skill: 'CSS3', percentage: 80, icon: faCss3Alt }
    ]
  },
  {
    name: 'Cloud Platforms & Services',
    skills: [
      { skill: 'Google Cloud Platform (GCP)', percentage: 70, icon: faCloud },
      { skill: 'Firebase (Auth, Firestore, Functions)', percentage: 65, icon: faCloud },
      { skill: 'Vertex AI', percentage: 65, icon: faCloud },
      { skill: 'TPU (GCP)', percentage: 60, icon: faCloud },
      { skill: 'Cloud Storage (GCP)', percentage: 65, icon: faCloud },
      { skill: 'Microsoft Azure', percentage: 55, icon: faCloud },
      { skill: 'Azure ML & Blob Storage', percentage: 55, icon: faCloud }
    ]
  },
  {
    name: 'DevOps & Tools',
    skills: [
      { skill: 'Git & GitHub', percentage: 75, icon: faGitAlt },
      { skill: 'GitLab CI/CD', percentage: 70, icon: faCogs },
      { skill: 'OpenShift', percentage: 65, icon: faCogs },
      { skill: 'Docker', percentage: 70, icon: faCogs },
      { skill: 'Linux / Bash', percentage: 80, icon: faTerminal }
    ]
  },
  {
    name: 'Artificial Intelligence & Data',
    skills: [
      { skill: 'Machine Learning (scikit-learn)', percentage: 80, icon: faBrain },
      { skill: 'Deep Learning (PyTorch, TensorFlow)', percentage: 75, icon: faBrain },
      { skill: 'Hugging Face Transformers', percentage: 65, icon: faBrain },
      { skill: 'Web Scraping (BeautifulSoup, Selenium)', percentage: 65, icon: faGlobe },
      { skill: 'SQL', percentage: 75, icon: faDatabase },
      { skill: 'Pandas / NumPy', percentage: 80, icon: faChartBar },
      { skill: 'OpenCV', percentage: 65, icon: faCamera }
    ]
  },
  {
    name: 'Mobile Development',
    skills: [
      { skill: 'Flutter', percentage: 70, icon: faMobileAlt },
      { skill: 'React Native', percentage: 65, icon: faMobileAlt },
      { skill: 'Kotlin (Android)', percentage: 60, icon: faMobileAlt },
      { skill: 'Swift (iOS)', percentage: 60, icon: faMobileAlt }
    ]
  },
  {
    name: 'Databases',
    skills: [
      { skill: 'PostgreSQL', percentage: 75, icon: faDatabase },
      { skill: 'MongoDB', percentage: 70, icon: faDatabase },
      { skill: 'Firebase Firestore', percentage: 65, icon: faDatabase },
      { skill: 'Redis', percentage: 60, icon: faDatabase },
      { skill: 'MySQL', percentage: 70, icon: faDatabase },
      { skill: 'SQLite', percentage: 65, icon: faDatabase }
    ]
  },
  {
    name: 'Tools & Environments',
    skills: [
      { skill: 'Git', percentage: 80, icon: faGitAlt },
      { skill: 'VS Code', percentage: 85, icon: faCode },
      { skill: 'Jupyter', percentage: 75, icon: faLaptopCode },
      { skill: 'Notion', percentage: 65, icon: faStickyNote },
      { skill: 'Linux (Ubuntu, Debian)', percentage: 80, icon: faTerminal },
      { skill: 'Bash / Zsh', percentage: 75, icon: faTerminal },
      { skill: 'Conda / pip / virtualenv', percentage: 70, icon: faCogs },
      { skill: 'SSH / SCP', percentage: 70, icon: faKey },
      { skill: 'GDB', percentage: 60, icon: faBug }
    ]
  },
  {
    name: 'Cybersecurity',
    skills: [
      { skill: 'Metasploit', percentage: 60, icon: faShieldAlt },
      { skill: 'Burp Suite', percentage: 65, icon: faShieldAlt },
      { skill: 'Wireshark', percentage: 70, icon: faNetworkWired },
      { skill: 'Nmap', percentage: 65, icon: faSearch },
      { skill: 'Steganography tools', percentage: 60, icon: faEyeSlash },
      { skill: 'JWT / OAuth2', percentage: 65, icon: faKey },
      { skill: 'Web pentesting (XSS, SQLi, CSRF)', percentage: 70, icon: faBug },
      { skill: 'TLS / HTTPS', percentage: 60, icon: faLock },
      { skill: 'Post-Quantum Cryptography', percentage: 60, icon: faProjectDiagram }
    ]
  },
  {
    name: 'Quantum & Emerging Tech',
    skills: [
      { skill: 'Quantum Computing (Qiskit)', percentage: 60, icon: faProjectDiagram },
      { skill: 'Robotics & IoT', percentage: 65, icon: faMicrochip }
    ]
  }
];


/* --------------------------------------------------
  Main component – two‑row / three‑column category grid
-------------------------------------------------- */
const ProgrammingSkills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.25 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section
      id="skills"
      className="w-full py-20 px-4 sm:px-8 lg:px-16 bg-white dark:bg-[#01161E]"
      ref={ref}
    >
      <motion.div
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={containerVariants}
        className="max-w-7xl mx-auto"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="mb-14 text-center md:text-left">
          <h2 className="text-4xl font-bold text-black dark:text-white mb-2">Technical Skills</h2>
          <div className="w-24 h-1 bg-indigo-500 dark:bg-indigo-400 rounded-full mx-auto md:mx-0" />
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto md:mx-0">
            Technical skills acquired through academic and professional projects.
          </p>
        </motion.div>

        {/* Category grid: 2 rows × 3 columns on large screens */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {categories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-gray-50 dark:bg-gray-800/60 rounded-3xl p-6 shadow border border-gray-100 dark:border-gray-700 flex flex-col"
            >
              <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-4 text-center">
                {category.name}
              </h3>

              {/* Skill list inside the category */}
              <div className="flex grow flex-wrap -mx-2">
                {category.skills.map((skillItem, i) => (
                  <SkillBar
                    key={i}
                    skill={skillItem.skill}
                    percentage={skillItem.percentage}
                    icon={skillItem.icon}
                    variants={itemVariants}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProgrammingSkills;
