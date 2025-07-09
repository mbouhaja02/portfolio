import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Experience = () => {
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

  const timelineVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const experiences = [
  {
    id: 1,
    title: "Stagiaire",
    date: "févr. 2025 - aujourd’hui · 6 mois",
    company: "Orange · Stage",
    location: "Lannion, Bretagne, France · Sur site",
    imageUrl: "http://localhost:3000/Stagiaire.jpeg",
    description: `Conception et développement de briques logicielles de détection de fraudes. Analyse de données utilisateurs en relation avec les fraudes avec possibilité d'utiliser les outils d'IA générative.`,
    skills: [
      "GenAI", "Node.js", "Data Analysis", "Python", "Fraud Detection", "Machine Learning", "Backend Development", "Security", "AI Tools"
    ]
  },
  {
    id: 2,
    title: "Développeur d'application mobile et systèmes intelligents",
    date: "oct. 2024 - janv. 2025 · 4 mois",
    company: "R3 MOB",
    location: "Bordeaux, Nouvelle-Aquitaine, France",
    imageUrl: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?auto=format&fit=crop&w=100&q=80",
    description: `Développement d'une application mobile pour le guidage de stationnement. Intégration des communications C-ITS et optimisation du trafic pour les ZFE.`,
    skills: [
      "C-ITS", "Java", "Android", "Mobile Development", "Traffic Optimization", "Smart Systems"
    ]
  },
  {
    id: 3,
    title: "Stagiaire",
    date: "juin 2024 - sept. 2024 · 4 mois",
    company: "CNRS - Centre national de la recherche scientifique · Stage",
    location: "Talence, Nouvelle-Aquitaine, France · Sur site",
    imageUrl: "http://localhost:3000/Stagiaire2.jpeg",
    description: `Contribution à un projet d'inspection non-destructive (NDI) en collaboration avec des partenaires industriels. Développement de workflows pour le logiciel ATHENA (gestion des données scientifiques), conception d’une interface web, traitement de signaux capteurs (3D laser, ultrasons, THz, thermographie), fusion de données multisensor et application d’algorithmes de machine learning pour la détection de défauts.`,
    skills: [
      "Python", "Data Processing", "Signal Analysis", "ATHENA", "3D Laser", "Ultrasound", "Machine Learning", "Non-Destructive Testing", "Multisensor Fusion"
    ]
  },
  {
    id: 4,
    title: "Data Science Research Collaborator",
    date: "déc. 2023 - mai 2024 · 6 mois",
    company: "Laboratoire Bordelais de Recherche en Informatique (LaBRI)",
    location: "Talence, Nouvelle-Aquitaine, France",
    imageUrl: "http://localhost:3000/Data.jpeg",
    description: `Engagé dans un projet de recherche au LaBRI dans le cadre de mon parcours académique à l'ENSEIRB-MATMECA. Mise en œuvre de stratégies pour la comparaison de matrices de confusion en apprentissage supervisé.`,
    skills: [
      "Python", "Machine Learning", "D3.js", "Data Science", "Confusion Matrix", "Research"
    ]
  }
];

  

  return (
    <section 
      id="experience"
      className="w-full py-20 px-4 sm:px-8 lg:px-16 bg-white text-gray-800 dark:bg-[#01161E] dark:text-[#AEC3B0]"
      ref={ref}
    >
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="max-w-4xl mx-auto"
      >
        <motion.div variants={itemVariants} className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-black dark:text-white mb-2">Expérience Professionnelle</h2>
          <div className="w-20 h-1 bg-indigo-400 dark:bg-indigo-400 rounded-full"></div>
        </motion.div>

        <div className="relative">
          {/* Ligne de timeline */}
          <motion.div
            variants={timelineVariants}
            className="absolute left-6 top-0 h-full w-1 bg-indigo-400 bg-opacity-40 dark:bg-indigo-400 origin-top"
          />

          <div className="space-y-8">
            {experiences.map((experience) => (
              <motion.div
                key={experience.id}
                variants={itemVariants}
                className="relative pl-16"
              >
                {/* Point sur la timeline */}
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2">
                  <div className="w-6 h-6 rounded-full bg-indigo-700 border-4 border-indigo-400 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-white dark:bg-[#EFF6E0]"></div>
                  </div>
                </div>

                {/* Carte d'expérience */}
                <div className="bg-white dark:bg-gray-800/80 bg-opacity-80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-indigo-400 hover:border-indigo-500 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <img 
                        src={experience.imageUrl} 
                        alt={`Logo ${experience.company}`} 
                        className="w-16 h-16 rounded-full object-cover border-2 border-indigo-400"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <div>
                          <h3 className="text-xl font-bold text-black dark:text-white">{experience.title}</h3>
                          <p className="text-indigo-600 dark:text-indigo-400 font-medium">{experience.company}</p>
                        </div>
                        <p className="text-black dark:text-white text-sm sm:text-base">{experience.date}</p>
                      </div>
                      <div className="mt-3 pt-3 border-t border-indigo-400">
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          {experience.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;