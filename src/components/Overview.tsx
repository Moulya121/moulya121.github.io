import { motion } from 'framer-motion';
import deskImage from '../assets/icon1.png'; // Update path as needed
import resume from "../assets/Moulya_resume.pdf";

export default function Overview() {
  return (
    <div id="overview" className="min-h-screen bg-gray-900 py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-8 text-white"
        >
          About Me.
        </motion.h2>
        
        {/* Text + Image */}
        <div className="flex flex-col lg:flex-row items-start gap-8 mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-300 text-lg flex-1"
          >
            Hey, I’m Moulya Vishwanath! I build cool stuff with code—from full stack webs to AI-powered solutions. 
            Currently crafting ReGenX, revolutionizing waste, regenerating resources.<br />
            <span className="inline-block mr-2">⚡</span> Love: Breaking things, fixing them better.<br />
            <span className="inline-block mr-2">🎯</span> Focus: Blockchain, AI, full-stack magic.<br /><br />
            "I have a joke on recursion... but you’ll have to read it again to get it."<br /><br />
            Always up for tech, hackathons, and wild ideas—let’s connect!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="hidden lg:block flex-shrink-0 w-[340px] h-[200px] rounded-xl overflow-hidden shadow-lg"
          >
            <img
              src={deskImage}
              alt="Desk"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Resume Button */}
        <div className="mb-8">
          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors text-base sm:text-lg"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
}
