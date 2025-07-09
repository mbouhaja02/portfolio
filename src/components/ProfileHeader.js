import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaFilePdf } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import image1 from '../assets/me.jpeg';

const ProfileHeader = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="px-4 sm:px-8 lg:px-32 py-16 lg:pt-[120px]"
      style={{
        opacity: 0,
        animation: "fadeIn 0.8s ease-out forwards"
      }}
    >
      <div 
        className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-6 p-6 bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg rounded-3xl shadow-xl dark:shadow-indigo-500/10 border border-gray-100 dark:border-gray-800"
        style={{
          transform: "translateY(20px)",
          animation: "slideUp 0.6s ease-out forwards 0.2s"
        }}
      >
        {/* Profile Image and Info */}
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <div
            className="relative group cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
              transition: "transform 0.3s ease-out"
            }}
          >
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-[128px] h-[128px] sm:w-[150px] sm:h-[150px] md:w-[180px] md:h-[180px] border-4"
              style={{
                backgroundImage:
                   `url(${image1})`,
                borderColor: isHovered ? "#6366f1" : "#4f46e5",
                transform: isHovered ? "rotate(5deg) scale(1.05)" : "rotate(0) scale(1)",
                transition: "all 0.3s ease-out",
                boxShadow: isHovered ? "0 10px 25px -5px rgba(99, 102, 241, 0.4)" : "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
              }}
            />
            <div 
              className="absolute inset-0 rounded-full flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, rgba(99, 102, 241, 0.7), rgba(79, 70, 229, 0.7))",
                opacity: isHovered ? 1 : 0,
                transition: "opacity 0.3s ease-out"
              }}
            >
              <span className="text-white font-medium text-lg">👋 Salut!</span>
            </div>
          </div>

          <div 
            className="flex flex-col justify-center text-center sm:text-left"
            style={{
              opacity: 0,
              animation: "fadeIn 0.6s ease-out forwards 0.4s"
            }}
          >
            <p className="text-gray-900 text-2xl sm:text-3xl font-bold leading-tight dark:text-white">
              Mohammed Bouhaja
            </p>
            <p className="text-indigo-600 dark:text-indigo-400 text-sm sm:text-base mt-2">
              Développement Logiciel | Passionné par la Cybersécurité (1% THM) et l'Informatique Quantique | CTF Player
            </p>
            
            {/* Social Icons */}
            <div 
              className="flex justify-center sm:justify-start gap-4 mt-4"
              style={{
                opacity: 0,
                animation: "fadeIn 0.6s ease-out forwards 0.6s"
              }}
            >
              <a
                href="https://www.linkedin.com/in/mohammed-bouhaja-4b5b9619b/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-500 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 text-xl"
                style={{
                  transition: "all 0.3s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/mbouhaja02"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-500 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 text-xl"
                style={{
                  transition: "all 0.3s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>

        {/* Buttons Section */}
        <div 
          className="flex flex-col sm:flex-row gap-4 sm:w-auto w-full"
          style={{
            opacity: 0,
            animation: "fadeIn 0.6s ease-out forwards 0.8s"
          }}
        >
          <a 
            href="https://drive.google.com/file/d/1Nx_dcgNkEgc3DtD3zWflzl9pOWwY8fFs/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className="flex items-center justify-center gap-2 rounded-xl h-12 px-6 text-white text-sm font-bold leading-normal w-full sm:w-auto"
              style={{
                background: "linear-gradient(135deg, #4f46e5, #6366f1)",
                transition: "all 0.3s ease",
                boxShadow: "0 4px 6px -1px rgba(99, 102, 241, 0.2), 0 2px 4px -1px rgba(99, 102, 241, 0.1)"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px) scale(1.02)";
                e.currentTarget.style.boxShadow = "0 10px 15px -3px rgba(99, 102, 241, 0.3), 0 4px 6px -2px rgba(99, 102, 241, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow = "0 4px 6px -1px rgba(99, 102, 241, 0.2), 0 2px 4px -1px rgba(99, 102, 241, 0.1)";
              }}
            >
              <FaFilePdf />
              <span className="truncate">Télécharger CV</span>
            </button>
          </a>
          
          <a
            href="mailto:your-email@example.com"
          >
            <button
              className="flex items-center justify-center gap-2 rounded-xl h-12 px-6 text-indigo-600 dark:text-indigo-400 text-sm font-bold leading-normal w-full sm:w-auto bg-white dark:bg-gray-800"
              style={{
                border: "2px solid #4f46e5",
                transition: "all 0.3s ease",
                boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px) scale(1.02)";
                e.currentTarget.style.boxShadow = "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)";
                e.currentTarget.style.borderColor = "#6366f1";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow = "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)";
                e.currentTarget.style.borderColor = "#4f46e5";
              }}
            >
              <HiOutlineMail />
              <span className="truncate">Contact</span>
            </button>
          </a>
        </div>
      </div>
      
      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default ProfileHeader; 