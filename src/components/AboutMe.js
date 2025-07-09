import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import image2 from '../assets/me.jpeg';

const AboutMe = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  // Variantes d'animation pour le conteneur principal
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  // Variantes d'animation pour les éléments enfants
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

  // Variantes d'animation pour les indicateurs visuels
  const indicatorVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.2
      }
    }
  };

  return (
    <section 
      id='about' 
      className="px-4 sm:px-8 lg:px-16 pt-24 pb-16"
      ref={ref}
    >
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="max-w-4xl mx-auto"
      >
        {/* En-tête de section avec indicateur visuel */}
        <div className="flex items-center mb-8">
          <motion.div variants={itemVariants} className="mr-4">
            <h2 className="text-gray-800 dark:text-white text-3xl sm:text-4xl font-bold leading-tight">
              À propos de moi
            </h2>
          </motion.div>
          <motion.div
            variants={indicatorVariants}
            className="h-0.5 bg-indigo-500 dark:bg-indigo-400 flex-grow origin-left"
          />
        </div>

        {/* Contenu principal avec photographie, bouton et bio */}
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Colonne image + bouton */}
          <motion.div variants={itemVariants} className="w-full md:w-2/5 flex flex-col">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
              <div className="relative aspect-square overflow-hidden rounded-lg shadow-xl">
                <img
                  src={image2}
                  alt="Mohammed Bouhaja"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Bouton "Me contacter" sous l'image */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-6"
            >
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-600 to-indigo-500 text-white font-medium text-base transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/30"
              >
                Me contacter
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </motion.div>
          </motion.div>

          {/* Colonne bio */}
          <motion.div variants={itemVariants} className="w-full md:w-3/5">
            <div className="space-y-4 text-gray-700 dark:text-gray-200">
              <p className="text-lg leading-relaxed">
                Actuellement stagiaire au{" "}
                <span className="font-medium text-indigo-600 dark:text-indigo-400">
                  CNRS
                </span>
                , je participe à un projet en{" "}
                <span className="font-medium text-indigo-600 dark:text-indigo-400">
                  inspection non-destructive
                </span>{" "}
                avec le logiciel{" "}
                <span className="font-medium text-indigo-600 dark:text-indigo-400">
                  ATHENA
                </span>
                . Mon parcours à{" "}
                <span className="font-medium text-indigo-600 dark:text-indigo-400">
                  ENSEIRB-MATMECA
                </span>
                , où je prépare un diplôme d’ingénieur en{" "}
                <span className="font-medium text-indigo-600 dark:text-indigo-400">
                  informatique
                </span>
                , m’a permis de développer une solide expertise en{" "}
                <span className="font-medium text-indigo-600 dark:text-indigo-400">
                  Python
                </span>{" "}
                appliquée aux données scientifiques.
              </p>

              <p className="text-lg leading-relaxed mt-4">
                J’ai également collaboré avec le{" "}
                <span className="font-medium text-indigo-600 dark:text-indigo-400">
                  LaBRI
                </span>{" "}
                sur l’analyse de{" "}
                <span className="font-medium text-indigo-600 dark:text-indigo-400">
                  matrices de confusion
                </span>{" "}
                en{" "}
                <span className="font-medium text-indigo-600 dark:text-indigo-400">
                  machine learning
                </span>
                , explorant de nouvelles approches en{" "}
                <span className="font-medium text-indigo-600 dark:text-indigo-400">
                  analyse de données
                </span>{" "}
                et en{" "}
                <span className="font-medium text-indigo-600 dark:text-indigo-400">
                  traitement du signal
                </span>
                .
              </p>

              <p className="text-lg leading-relaxed mt-4">
                Je suis motivé à contribuer à des projets innovants, en lien étroit
                avec des{" "}
                <span className="font-medium text-indigo-600 dark:text-indigo-400">
                  partenaires industriels
                </span>
                , pour faire avancer la technologie.
              </p>

              <div className="pt-2">
                <motion.div
                  variants={itemVariants}
                  className="grid grid-cols-2 gap-4"
                >
                  <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg mb-4">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1 text-sm">
                      Études
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 text-xs leading-tight">
                      ENSEIRB-MATMECA <br />
                      Diplôme d'ingénieur, Informatique <br />
                      2022 - 2025
                    </p>
                  </div>

                  <div className="bg-indigo-50 dark:bg-indigo-900/20 p-3 rounded-lg">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1 text-sm">
                      Stage actuel
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 font-semibold text-xs">
                      Orange · Stage
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 text-xs italic mb-1">
                      Fév. 2025 - aujourd’hui · 6 mois
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 text-xs italic mb-0">
                      Lannion, Bretagne, France
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>


        {/* Cartes des intérêts/compétences */}
        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 mb-12 "
        >
          {[
            {
              title: "GenAI & Intelligence Artificielle",
              description: "Développement et application de modèles d’IA, réseaux de neurones artificiels, et machine learning.",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <circle cx="12" cy="12" r="10" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h8" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v8" />
                </svg>
              )
            },
            {
              title: "Développement Backend & API",
              description: "Conception d’API robustes avec Python, Django, Node.js et gestion de bases de données.",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <ellipse cx="12" cy="6" rx="9" ry="3" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6v6c0 1.657 4.03 3 9 3s9-1.343 9-3V6" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12v6c0 1.657 4.03 3 9 3s9-1.343 9-3v-6" />
                </svg>
              )
            },
            {
              title: "Développement Frontend",
              description: "Création d’interfaces modernes et réactives avec React, JavaScript, HTML et CSS.",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <rect x="3" y="4" width="18" height="14" rx="2" ry="2" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 20h8" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 16v4" />
                </svg>
              )
            },
            {
              title: "Cloud & DevOps",
              description: "Utilisation de Google Cloud Platform (GCP), Firebase et gestion d’infrastructures cloud.",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2l9 21H3L12 2z" />
                </svg>
              )
            },
            {
              title: "Cybersécurité & Analyse de Malware",
              description: "Détection de logiciels malveillants par machine learning et analyse avancée des menaces.",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4 8 5.79 8 8s1.79 4 4 4z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14v6" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 20h8" />
                </svg>
              )
            },
            {
              title: "Applications mobiles & Android",
              description: "Développement d’applications Android avec Android Studio, Firebase et intégration Cloud.",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <rect x="3" y="4" width="18" height="16" rx="2" ry="2" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 20h8" />
                </svg>
              )
            },
            {
              title: "Recherche & Analyse de données",
              description: "Expériences en recherche scientifique, traitement de données et analyse algorithmique avancée.",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <circle cx="12" cy="12" r="10" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                </svg>
              )
            }

          ].map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-gray-800/80 rounded-xl p-6 shadow-md hover:shadow-xl dark:shadow-indigo-500/5 transition-all duration-300 border border-gray-100 dark:border-gray-700"
            >
              <div className="text-indigo-500 dark:text-indigo-400 mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutMe;