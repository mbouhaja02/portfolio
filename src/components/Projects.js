import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import viruswareImage from '../assets/virusware.jpeg';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const projects = [
  {
    title: "Malware detection using machine learning",
    date: "Mai 2024 - Sept. 2024",
    description: `Passionné par la cybersécurité et l'IA, je travaille sur un projet de détection de malwares utilisant des techniques de machine learning. En analysant des ensembles de données de signatures de malwares et de comportements suspects, j'explore des algorithmes avancés comme les forêts aléatoires et les réseaux de neurones. Bien que le modèle soit prometteur, il nécessite encore des améliorations pour atteindre une efficacité optimale.`,
    skills: [
      "Cybersécurité",
      "Intelligence artificielle (IA)",
      "Réseaux de neurones artificiels",
      "Python",
      "Traitement des données",
      "Analyse des logiciels malveillants",
      "Détection de logiciels malveillants"
    ]
  },
  {
    title: "Implementing Strategies for Confusion Matrix Comparison in Supervised Learning",
    date: "Déc. 2023 - Mai 2024",
    description: `Engaged in a research project at LaBRI as part of my academic journey at ENSEIRB-MATMECA. Implementing Strategies for Confusion Matrix Comparison in Supervised Learning.`,
    skills: ["Machine Learning", "JavaScript", "D3.js", "Python"]
  },
  {
    title: "Note de synthèse (Informatique Quantique)",
    date: "Févr. 2024 - Mai 2024",
    description: `Animée par ma passion pour le domaine quantique et la sécurité, j'ai collaboré en binôme pour rédiger une note de synthèse sur un article scientifique portant sur les algorithmes quantiques. Nous avons conçu des circuits quantiques et évalué l'efficacité de l'algorithme de Shor avec Qiskit (IBM).`,
    skills: ["Qiskit", "Informatique quantique"]
  },
  {
    title: "Projet de robotique",
    date: "Mars 2024 - Mai 2024",
    description: `Engagé dans un projet de robotique, j'ai contribué à l'implémentation d'un algorithme en Python permettant à notre robot de se déplacer de manière autonome et à distance.`,
    skills: ["Robotique", "Python"]
  },
  {
    title: "User-Space Threading Library (C Language)",
    date: "Mars 2024 - Mai 2024",
    description: `Développement d'une bibliothèque de threads en espace utilisateur en langage C.`,
    skills: ["C"]
  },
  {
    title: "Web Application Development for Student Carpooling",
    date: "Oct. 2023 - Déc. 2023",
    description: `Développement d'une application web de covoiturage étudiant.`,
    skills: ["SQL", "PhpMyAdmin", "XAMPP"]
  },
  {
    title: "The game of the amazons",
    date: "Févr. 2023 - Mai 2023",
    description: `Implémentation du jeu des Amazones en langage C, un jeu abstrait à deux joueurs sur plateau.`,
    skills: ["C"]
  },
  {
    title: "Tower Defense Game Development (TypeScript, JavaScript)",
    date: "Mars 2023 - Mai 2023",
    description: `Développement d'un jeu Tower Defense en TypeScript et JavaScript.`,
    skills: ["TypeScript", "JavaScript"]
  },
  {
    title: "Airfoil Refinement and Modelling, Pressure Mapping (Python)",
    date: "Avr. 2023",
    description: `Projet de modélisation et affinage de profils aérodynamiques, avec cartographie de pression.`,
    skills: ["Python"]
  },
  {
    title: "Image Compression using SVD Factorisation (Python)",
    date: "Mars 2023",
    description: `Compression d'images par factorisation SVD.`,
    skills: ["Python"]
  },
  {
    title: "Mansuba Game Development (C Language)",
    date: "Oct. 2022 - Janv. 2023",
    description: `Projet de jeu basé sur une version modifiée du jeu chinois Mansuba.`,
    skills: ["C"]
  },
  {
    title: "TIPE : Quantum-Resistant ECC: Design and Evaluation",
    date: "Déc. 2021 - Juin 2022",
    description: `Développement d’un algorithme de chiffrement/déchiffrement basé sur la cryptographie sur courbes elliptiques, et évaluation de sa résistance aux attaques quantiques.`,
    skills: ["Informatique quantique", "ECC", "Cryptographie à clé publique"]
  },
  {
    title: "Smart Intersections - Sécurité routière et signalisation intelligente à Bordeaux",
    date: "",
    description: `Développement d’une application Android utilisant les données ouvertes pour améliorer la sécurité routière aux intersections critiques de Bordeaux.`,
    skills: ["Applications mobiles", "Développement Android", "Android Studio", "Firebase", "Google Cloud Platform (GCP)"]
  }
];


  return (
    <section 
      id="projects"
      className="w-full py-20 px-4 sm:px-8 lg:px-16 bg-white dark:bg-[#01161E]"
      ref={ref}
    >
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="max-w-7xl mx-auto"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-black dark:text-white mb-2">Mes Projets</h2>
          <div className="w-20 h-1 bg-indigo-400 dark:bg-indigo-400 rounded-full"></div>
        </motion.div>

        {/* Projects Grid */}
<motion.div 
  variants={containerVariants}
  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
>
  {projects.map((project, idx) => (
    <motion.div
      key={idx}
      variants={itemVariants}
      className="flex flex-col h-full bg-white dark:bg-gray-800/80 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-xl"
    >
      {/* Contenu principal */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
          {project.title}
        </h3>

        <p className="text-gray-600 dark:text-gray-300 mb-4 whitespace-pre-line flex-grow">
          {project.description}
        </p>

        {/* Tags de compétences */}
        <div className="mt-auto">
          <div className="flex flex-wrap gap-2">
            {project.skills.map((skill, idx) => (
              <span
                key={idx}
                className="text-xs font-medium px-3 py-1 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-200 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  ))}
</motion.div>

      </motion.div>
    </section>
  );
};

export default Projects;