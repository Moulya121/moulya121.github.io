import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import Typewriter from "typewriter-effect";
import profile from "../assets/mona5.png";
import background from "../assets/imageb.png";

export default function Hero() {
  return (
    <div 
      id="hero" 
      className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-20 md:py-0 overflow-x-hidden relative pt-24 md:pt-0 font-mono"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Text Content - Centered on all screens */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 flex flex-col items-left text-left z-10 px-4 py-8"
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
          Hello! I am
        </h1>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Moulya Vishwanath
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 flex items-left justify-left mb-8">
          I am a {" "}
          <span className="ml-2 font-bold text-yellow-400">
            <Typewriter
              options={{
                strings: ["Backend Engineer", "Cybersecurity Analyst", "AI enthusiast"],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 30,
              }}
            />
          </span>
        </p>

        {/* Social Links */}
        <div className="flex space-x-6">
          <a href="https://github.com/Moulya121" className="text-gray-400 hover:text-white transition-colors" aria-label="GitHub">
            <Github size={28} />
          </a>
          <a href="https://www.linkedin.com/in/moulya-vish/" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
            <Linkedin size={28} />
          </a>
          <a href="mailto:moulya.vish@gmail.com" className="text-gray-400 hover:text-white transition-colors" aria-label="Email">
            <Mail size={28} />
          </a>
        </div>
      </motion.div>

      {/* Image - Visible on all screens */}
      <div className="w-full md:w-1/2 flex justify-center items-center relative z-20 py-8 md:py-0">
        <div className="relative h-[320px] w-[260px] sm:h-[360px] sm:w-[300px] md:h-[420px] md:w-[340px] overflow-hidden">
  <img 
    src={profile} 
    alt="Profile"
    className="w-full h-full object-cover object-top"
  />
  <div 
    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[calc(100%+40px)] h-[3px]"
    style={{
      background: "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0) 100%)"
    }}
  />
</div>

      </div>
    </div>
  );
}
