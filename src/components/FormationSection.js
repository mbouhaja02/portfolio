import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

import enseirbMatmeca_logo from '../assets/enseirbMatmeca_logo.jpeg';
import cpgeMoulayYoussef_logo from '../assets/cpgeMoulayYoussef_logo.jpeg'

const FormationSection = () => {
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
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
const formations = [
  {
    id: 1,
    logo: enseirbMatmeca_logo, // variable ou import correspondant au logo ENSEIRB-MATMECA
    institution: "ENSEIRB-MATMECA",
    diplome: "Diplôme d'ingénieur, Informatique",
    periode: "2022 - 2025",
    competences: "Ingénierie"
  },
  {
    id: 2,
    logo: cpgeMoulayYoussef_logo, // variable/import pour logo CPGE Moulay Youssef
    institution: "CPGE Moulay Youssef",
    diplome: "MP*",
    periode: "sept. 2020 - juil. 2022",
    competences: ""
  },

];



  return (
    <section 
      id="formations"
      className="w-full py-20 px-4 sm:px-8 lg:px-16b bg-white text-gray-800 dark:bg-[#01161E] dark:text-[#AEC3B0]"
      ref={ref}
    >
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="max-w-4xl mx-auto"
      >
        <motion.div variants={itemVariants} className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-black dark:text-white mb-2">Parcours Académique</h2>
          <div className="w-20 h-1 bg-indigo-400  dark:bg-indigo-400 rounded-full"></div>
        </motion.div>

        <div className="relative">
          {/* Ligne de timeline */}
          <motion.div
            variants={timelineVariants}
            className="absolute left-6 top-0 h-full w-1 bg-indigo-400 bg-opacity-40 dark:bg-indigo-400 origin-top"
          />

          <div className="space-y-8">
            {formations.map((formation, index) => (
              <motion.div
                key={formation.id}
                variants={itemVariants}
                className="relative pl-16"
              >
                {/* Point sur la timeline */}
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2">
                  <div className="w-6 h-6 rounded-full bg-indigo-700 border-4 border-indigo-400 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-[#EFF6E0]"></div>
                  </div>
                </div>

                {/* Carte de formation */}
                <div className="bg-white dark:bg-gray-800/80 bg-opacity-80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-indigo-400 hover:border-[#598392] transition-all duration-300">
                  <div className="flex flex-col sm:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <img 
                        src={formation.logo} 
                        alt={`Logo ${formation.institution}`} 
                        className="w-16 h-16 rounded-full object-cover border-2 border-indigo-400"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-black dark:text-white">{formation.institution}</h3>
                      <p className="text-indigo-600 dark:text-indigo-400 font-medium">{formation.diplome}</p>
                      <p className="text-black dark:text-white text-sm mt-1">{formation.periode}</p>
                      <div className="mt-3 pt-3 border-t border-indigo-400">
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          <span className="font-semibold text-indigo-600 dark:text-indigo-400">Compétences :</span> {formation.competences}
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

export default FormationSection;