import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import orange from '../assets/orange.jpeg';
import cicd from '../assets/CI-CD2.png';
import openshift from '../assets/openshift-red-hat-logo.jpg';
import gitlab from '../assets/gitlab_logo.png';
import vertex from '../assets/Vertex-AI.jpg';
import cnrs from '../assets/cnrs.png';
import labri from '../assets/LABRI_BIG_0.png';
import r3mob from '../assets/r3mob.png';
import athena from '../assets/athena.jpg';



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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const timelineVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: {
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const experiences = [
    {
      id: 1,
      title: "Research and Development Intern",
      date: "Feb 2025 – Present · 6 months",
      company: "Orange · Internship",
      location: "Lannion, Brittany, France · On-site",
      imageUrl: orange,
      summary: "Research and development of software components for large-scale fraud detection systems aimed at the general public. My main tasks include:",
      tasks: [
        "Developing and experimenting with AI models for deepfake detection.",
        "Utilizing Google Cloud Platform (Vertex AI) for model training and MLOps workflows.",
        "Deploying services and applications on OpenShift Red Hat for production readiness.",
        "Implementing CI/CD pipelines with GitLab for efficient integration and deployment.",
        "Building solutions to detect fake online listings (e.g. Leboncoin, Vinted, Airbnb) to protect users.",
        "Exploring public APIs and NLP techniques to detect fake news on social media and news websites."
      ],
      techImages: [
        vertex,
        openshift,
        gitlab,
        cicd
      ],
      skills: []
    },
    {
      id: 2,
      title: "Mobile Application Developer and Smart Systems",
      date: "Oct. 2024 – Jan. 2025 · 4 months",
      company: "R3 MOB",
      location: "Bordeaux, Nouvelle-Aquitaine, France",
      imageUrl: r3mob,
      summary: `Development of a mobile application for parking guidance. Integration of C-ITS communications and traffic optimization for LEZ (Low Emission Zones).`,
      tasks: [
        "Developed a mobile guidance application.",
        "Integrated C-ITS communications.",
        "Optimized traffic flow for LEZ areas.",
        "Designed the mobile user interface."
      ],
      techImages: [],
      skills: [
        "C-ITS", "Java", "Android", "Mobile Development", "Traffic Optimization", "Smart Systems"
      ]
    },
    {
      id: 3,
      title: "Intern",
      date: "Jun. 2024 – Sept. 2024 · 4 months",
      company: "CNRS - National Center for Scientific Research · Internship",
      location: "Talence, Nouvelle-Aquitaine, France · On-site",
      imageUrl: cnrs,
      summary: `Contributed to a Non-Destructive Inspection (NDI) project in collaboration with industrial partners. Developed workflows for the ATHENA software (scientific data management), designed a web interface, processed sensor signals (3D laser, ultrasound, THz, thermography), performed multisensor data fusion, and applied machine learning algorithms for defect detection.`,
      tasks: [
        "Developed workflows for ATHENA (NDI).",
        "Designed web interface for data management.",
        "Processed sensor signals (3D, ultrasound).",
        "Applied Machine Learning algorithms."
      ],
      techImages: [],
      skills: [
        "Python", "Data Processing", "Signal Analysis", "ATHENA", "3D Laser", "Ultrasound", "Machine Learning", "Non-Destructive Testing", "Multisensor Fusion"
      ]
    },
    {
      id: 4,
      title: "Data Science Research Collaborator",
      date: "Dec. 2023 – May 2024 · 6 months",
      company: "LaBRI - Bordeaux Computer Science Research Laboratory",
      location: "Talence, Nouvelle-Aquitaine, France",
      imageUrl: labri,
      summary: `Involved in a research project at LaBRI as part of my academic program at ENSEIRB-MATMECA. Implemented strategies for comparing confusion matrices in supervised learning.`,
      tasks: [
        "Researched confusion matrix comparison methods.",
        "Implemented strategies for supervised learning."
      ],
      techImages: [],
      skills: [
        "Python", "Machine Learning", "D3.js", "Data Science", "Confusion Matrix", "Research"
      ]
    }
  ];


  return (
    <section
      id="experience"
      className="w-full py-24 px-4 sm:px-8 lg:px-24 bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-300"
      ref={ref}
    >
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="max-w-5xl mx-auto"
      >
        <motion.div variants={itemVariants} className="mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-3">Professional Experience</h2>
          <div className="w-24 h-1.5 bg-indigo-500 dark:bg-indigo-400 rounded-full"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <motion.div
            variants={timelineVariants}
            className="absolute left-6 sm:left-8 top-0 h-full w-1.5 bg-indigo-400 bg-opacity-50 dark:bg-indigo-600 origin-top"
          />

          <div className="space-y-12 sm:space-y-16">
            {experiences.map((experience) => (
              <motion.div
                key={experience.id}
                variants={itemVariants}
                className="relative pl-16 sm:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-6 sm:top-8 transform -translate-y-1/2 -translate-x-1/2">
                  <div className="w-7 h-7 rounded-full bg-indigo-700 border-4 border-indigo-300 flex items-center justify-center shadow-md">
                    <div className="w-2.5 h-2.5 rounded-full bg-white dark:bg-gray-100"></div>
                  </div>
                </div>

                {/* Experience card */}
                <div className="bg-white dark:bg-gray-800/85 backdrop-blur-md rounded-2xl p-7 shadow-lg border border-gray-200 dark:border-gray-700 hover:border-indigo-500 dark:hover:border-indigo-400 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8">
                    {/* Company Logo - Enlarged */}
                    <img
                      src={experience.imageUrl}
                      alt={`Logo ${experience.company}`}
                      // Option 3 from previous response for enlarged size
                      className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover border-4 border-indigo-400 dark:border-indigo-500 flex-shrink-0"
                    />

                    <div className="flex-1 w-full">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                        <div>
                          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white leading-tight">{experience.title}</h3>
                          <p className="text-indigo-600 dark:text-indigo-400 font-semibold text-base sm:text-lg">{experience.company}</p>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base font-medium">{experience.date}</p>
                      </div>

                      {/* Summary Section */}
                      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 space-y-4">
                        <div className="bg-indigo-50 dark:bg-gray-700 p-4 rounded-lg border border-indigo-100 dark:border-gray-600 shadow-inner">
                          <p className="text-base text-gray-700 dark:text-gray-200 leading-relaxed">
                            {experience.summary}
                          </p>
                        </div>

                        {/* Tâches organisées en grille de 2 colonnes (ONLY if tasks array is not empty) */}
                        {experience.tasks && experience.tasks.length > 0 && (
                          <div className="mt-5">
                            <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">Key Responsibilities:</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {experience.tasks.map((task, index) => (
                                <motion.div
                                  key={index}
                                  initial={{ opacity: 0, scale: 0.9, y: 10 }}
                                  animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                                  transition={{ delay: 0.3 + index * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                  className="flex items-start gap-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-200"
                                >
                                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white text-lg">
                                    ✔
                                  </div>
                                  <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed flex-grow">{task}</p>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Skills as badges (ONLY if skills array is not empty) */}
                        {experience.skills && experience.skills.length > 0 && (
                          <div className="mt-5">
                            <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-3">Skills:</h4>
                            <div className="flex flex-wrap gap-2">
                              {experience.skills.map((skill, index) => (
                                <motion.span
                                  key={index}
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                  transition={{ delay: 0.4 + index * 0.03, duration: 0.3 }}
                                  className="inline-block bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-100 text-xs font-semibold px-3 py-1 rounded-full shadow-sm"
                                >
                                  {skill}
                                </motion.span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Tech stack icons (ONLY if techImages array is not empty) */}
                  {experience.techImages && experience.techImages.length > 0 && (
                    <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700 flex flex-wrap gap-4 justify-center">
                      {experience.techImages.map((tech, index) => (
                        <img
                          key={index}
                          src={tech}
                          alt="Technology logo"
                          className="h-14 w-14 rounded-full object-contain p-1 bg-white dark:bg-gray-700 shadow-md transform hover:scale-105 transition-transform duration-200"
                        />
                      ))}
                    </div>
                  )}

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