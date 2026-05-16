// import { motion } from 'framer-motion';
// import deskImage from '../assets/icon1.png'; // Update path as needed
// import resume from "../assets/Moulya_resume.pdf";

// export default function Overview() {
//   return (
//     <div id="overview" className="min-h-screen bg-gray-900 py-20 px-4 relative">
//       <div className="max-w-6xl mx-auto">
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="text-4xl font-bold mb-8 text-white font-mono"
//         >
//           About Me.
//         </motion.h2>
        
//         {/* Text + Image */}
//         <div className="flex flex-col lg:flex-row items-start gap-8 mb-16">
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             className="text-gray-300 text-lg flex-1 font-mono"
//           >
//             Hey, I’m Moulya Vishwanath! I build cool stuff with code—from full stack webs to AI-powered solutions. 
//             Currently crafting ReGenX, revolutionizing waste, regenerating resources.<br />
//             <span className="inline-block mr-2">⚡</span> Love: Breaking things, fixing them better.<br />
//             <span className="inline-block mr-2">🎯</span> Focus: Blockchain, AI, full-stack magic.<br /><br />
//             "I have a joke on recursion... but you’ll have to read it again to get it."<br /><br />
//             Always up for tech, hackathons, and wild ideas—let’s connect!
//           </motion.p>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.4 }}
//             className="hidden lg:block flex-shrink-0 w-[340px] h-[200px] rounded-xl overflow-hidden shadow-lg"
//           >
//             <img
//               src={deskImage}
//               alt="Desk"
//               className="w-full h-full object-cover"
//             />
//           </motion.div>
//         </div>

//         {/* Resume Button */}
//         <div className="mb-8">
//           <a
//             href={resume}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors text-base sm:text-lg font-mono"
//           >
//             Resume
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }







import { motion } from 'framer-motion';
import deskImage from '../assets/icon1.png'; // Update path as needed
import resume from "../assets/Moulya_resume.pdf";
import { Zap, Target } from "lucide-react";

export default function Overview() {
  return (
    <div id="overview" className="min-h-screen bg-gray-900 py-20 px-4 relative font-mono">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-8 text-white"
        >
          // About Me
        </motion.h2>
        
        {/* Text + Image */}
        <div className="flex flex-col lg:flex-row items-start gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-300 text-base sm:text-lg flex-1 bg-gray-800 border border-gray-700 rounded-xl p-6 shadow-md leading-relaxed"
          >
            <p className="mb-4 text-green-400">// Hello World</p>
            <p><span className="text-blue-400">const</span> developer = "Moulya Vishwanath";</p>
            <p><span className="text-yellow-300">console.log</span>("Crafting ReGenX & more...")</p>

            <br />

            <p>
              I build impactful technology solutions ranging from full stack applications to AI-driven systems. Published research under
              <span className="text-purple-400 font-semibold"> IEEE</span> and indexed in
              <span className="text-purple-400 font-semibold"> Scopus</span>, with a patent filed through the
              <span className="text-purple-400 font-semibold"> Indian Patent Office</span>.
            </p>

            <br />

            <p className="flex items-center gap-2">
              <Zap className="text-purple-400" size={16} />
              <span>Love: Breaking things, fixing them better.</span>
            </p>

            <p className="flex items-center gap-2">
              <Target className="text-purple-400" size={16} />
              <span>Focus: Cybersecurity, AI, full-stack magic.</span>
            </p>

            <br />

            <p className="text-cyan-400">
              "I have a joke on recursion... but you’ll have to read it again to get it."
            </p>

            <br />

            <p>Always up for tech, hackathons, and wild ideas—let’s connect!</p>
          </motion.div>

          {/* Image */}
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
            className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all text-base sm:text-lg animate-pulse hover:animate-none"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
}
