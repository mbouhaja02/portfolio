import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import pdp from '../assets/orange_image_of_me.jpg'; // Your profile picture

/**
 * --------------------------------------------------------------------
 * Section "About Me" (Improved Organization & Image Prominence)
 * --------------------------------------------------------------------
 * ▸ Full-width section with enhanced background.
 * ▸ Larger, centrally prominent profile image.
 * ▸ Structured and impactful text blocks, stacking logically.
 * ▸ Centered "Contact Me" button.
 * ▸ Generous spacing and refined typography for a clear, magnified feel.
 * ▸ Framer Motion animations for dynamic reveal.
 * --------------------------------------------------------------------
 */

const aboutMeContent = {
  intro1: "Currently on an end-of-studies internship at ",
  highlight1: "Orange Innovation",
  intro2: ", I contribute to the development of software solutions for ",
  highlight2: "large-scale fraud detection",
  intro3: ". My work includes designing ",
  highlight3: "AI models for deepfake detection",
  intro4: ", utilizing ",
  highlight4: "Google Cloud Platform (Vertex AI)",
  intro5: ", and deployment on ",
  highlight5: "OpenShift",
  intro6: " via ",
  highlight6: "GitLab CI/CD pipelines",
  intro7: ".",

  grad1: "A graduate of ",
  highlight7: "ENSEIRB-MATMECA",
  grad2: " in ",
  highlight8: "Computer Science",
  grad3: ", I've developed solid expertise in ",
  highlight9: "Python",
  grad4: ", data processing, and ",
  highlight10: "cybersecurity",
  grad5: ", with a strong interest in responsible AI.",

  pastExp1: "Previously, I collaborated with ",
  highlight11: "LaBRI",
  pastExp2: " on the analysis of ",
  highlight12: "confusion matrices",
  pastExp3: " in ",
  highlight13: "machine learning",
  pastExp4: ", exploring innovative methods in ",
14: "data analysis",
  pastExp5: " and ",
  highlight15: "signal processing",
  pastExp6: ".",

  conclusion1: "Curious, rigorous, and passionate about innovation, I'm motivated to advance technology alongside ",
  highlight16: "industrial partners",
  conclusion2: ".",
};

const AboutMe = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 },
    },
  };

  return (
    <section id="about" className="relative overflow-hidden py-24 sm:py-32 md:py-40 bg-gray-50 dark:bg-[#01161E] text-gray-900 dark:text-white">
      {/* Subtle Background Gradient/Overlay */}
      <div className="absolute inset-0 z-0 opacity-10 dark:opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 dark:from-indigo-900/10 dark:to-purple-900/10 animate-gradient-shift"></div>
      </div>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 flex flex-col items-center" /* Added flex-col and items-center here */
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="mb-24 text-center w-full"> {/* Ensure header takes full width */}
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-700 dark:from-indigo-400 dark:to-purple-500">
            About Me
          </h2>
          <div className="mx-auto mt-4 h-2 w-56 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full" />
        </motion.div>

        {/* Main Content: Image & Structured Text Blocks */}
        {/* Changed this div to be a flex container for image and text, or a grid with a single column. */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-x-20 gap-y-16 w-full">
            {/* Image Block */}
            <motion.div variants={imageVariants} className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] overflow-hidden shadow-2xl ring-4 ring-indigo-500/50 dark:ring-indigo-300/30 rounded-2xl transform hover:scale-[1.01] transition-transform duration-500 flex-shrink-0">
                <img
                    src={pdp}
                    alt="Portrait of Mohammed Bouhaja"
                    className="w-full h-full object-contain object-center bg-gray-200 dark:bg-gray-700" /* object-contain to show full image */
                />
            </motion.div>

            {/* Structured Text Blocks Container */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left gap-y-8 flex-grow"> {/* Increased gap between text blocks */}
                <motion.div variants={itemVariants} className="p-6 bg-white/5 dark:bg-gray-800/10 rounded-2xl shadow-lg border border-indigo-200/20 dark:border-indigo-700/30 w-full max-w-3xl"> {/* Added max-w-3xl to control width */}
                    <p className="text-lg md:text-xl font-medium text-gray-800 dark:text-gray-100 leading-relaxed">
                        {aboutMeContent.intro1}<span className="font-semibold text-indigo-600 dark:text-indigo-400">{aboutMeContent.highlight1}</span>{aboutMeContent.intro2}<span className="font-semibold text-indigo-600 dark:text-indigo-400">{aboutMeContent.highlight2}</span>{aboutMeContent.intro3}<span className="font-semibold text-indigo-600 dark:text-indigo-400">{aboutMeContent.highlight3}</span>{aboutMeContent.intro4}<span className="font-semibold text-indigo-600 dark:text-indigo-400">{aboutMeContent.highlight4}</span>{aboutMeContent.intro5}<span className="font-semibold text-indigo-600 dark:text-indigo-400">{aboutMeContent.highlight5}</span>{aboutMeContent.intro6}<span className="font-semibold text-indigo-600 dark:text-indigo-400">{aboutMeContent.highlight6}</span>{aboutMeContent.intro7}
                    </p>
                </motion.div>

                <motion.div variants={itemVariants} className="p-6 bg-white/5 dark:bg-gray-800/10 rounded-2xl shadow-lg border border-indigo-200/20 dark:border-indigo-700/30 w-full max-w-3xl">
                    <p className="text-lg md:text-xl font-medium text-gray-800 dark:text-gray-100 leading-relaxed">
                        {aboutMeContent.grad1}<span className="font-semibold text-indigo-600 dark:text-indigo-400">{aboutMeContent.highlight7}</span>{aboutMeContent.grad2}<span className="font-semibold text-indigo-600 dark:text-indigo-400">{aboutMeContent.highlight8}</span>{aboutMeContent.grad3}<span className="font-semibold text-indigo-600 dark:text-indigo-400">{aboutMeContent.highlight9}</span>{aboutMeContent.grad4}<span className="font-semibold text-indigo-600 dark:text-indigo-400">{aboutMeContent.highlight10}</span>{aboutMeContent.grad5}
                    </p>
                </motion.div>

                <motion.div variants={itemVariants} className="p-6 bg-white/5 dark:bg-gray-800/10 rounded-2xl shadow-lg border border-indigo-200/20 dark:border-indigo-700/30 w-full max-w-3xl">
                    <p className="text-lg md:text-xl font-medium text-gray-800 dark:text-gray-100 leading-relaxed">
                        {aboutMeContent.pastExp1}<span className="font-semibold text-indigo-600 dark:text-indigo-400">{aboutMeContent.highlight11}</span>{aboutMeContent.pastExp2}<span className="font-semibold text-indigo-600 dark:text-indigo-400">{aboutMeContent.highlight12}</span>{aboutMeContent.pastExp3}<span className="font-semibold text-indigo-600 dark:text-indigo-400">{aboutMeContent.highlight13}</span>{aboutMeContent.pastExp4}<span className="font-semibold text-indigo-600 dark:text-indigo-400">{aboutMeContent.highlight14}</span>{aboutMeContent.pastExp5}<span className="font-semibold text-indigo-600 dark:text-indigo-400">{aboutMeContent.highlight15}</span>{aboutMeContent.pastExp6}
                    </p>
                </motion.div>
            </div>
        </div>

        {/* Contact Button (Centered Separately) */}
        <motion.div variants={itemVariants} className="mt-20 w-full flex justify-center"> {/* Added margin-top for spacing */}
            <a
                href="#contact"
                className="inline-flex items-center gap-2 px-10 py-5 rounded-full bg-gradient-to-r from-indigo-600 to-purple-700 text-white font-bold text-xl hover:from-indigo-700 hover:to-purple-800 hover:shadow-xl hover:shadow-indigo-500/50 dark:hover:shadow-purple-600/50 transition-all duration-300 transform hover:-translate-y-1"
            >
                Contact Me <ArrowRight className="w-7 h-7 ml-2" />
            </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutMe;