// import { motion } from 'framer-motion';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGithub } from '@fortawesome/free-brands-svg-icons';

// const projects = [
//   {
//     title: 'ReGenX',
//     description: 'ReGenX is a real-time waste management app built with Kotlin, featuring dynamic geofencing via Google Maps API and real-time alerts through Firebase Cloud Messaging. It includes AI-assisted complaint validation using TensorFlow Lite and an admin dashboard for officials.',
//     tech: ['Kotlin', 'Firebase', 'MongoDB'],
//     github: 'https://github.com/VasudhaMurthy/RegenX'
//   },
//   {
//     title: 'ArmoraBioKey',
//     description: 'Contributed to the design and development of ArmoraBioKey, a secure biometric authentication system focused on fingerprint-based identity verification using embedded security principles. Worked on authentication flow design, secure feature extraction and hashing logic, helper data protection, threat modeling, secure memory handling, and integration concepts involving Infineon AURIX TC3xx, ARM Cortex-M33, HSM-based key management, ECC/SHA-256 cryptography, and secure boot mechanisms. Also contributed to testing workflows, state machine logic.',
//     tech: ['Embedded systems', 'Cybersecurity & Cryptography', 'Secure system architecture'],
//   },
//   {
//     title: 'GoTogether',
//     description: 'GoTogether is a MERN-stack smart ride-sharing PWA featuring real-time route optimization via Google Maps API, secure Razorpay payments, and a dynamic React UI. It rewards users for rides and referrals, promoting engagement through gamified incentives.',
//     tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
//     github: 'https://github.com/VasudhaMurthy/GoTogether'
//   },
//   {
//     title: 'CogniChat',
//     description: 'CogniChat is a mental health chatbot built with GPT, BERT, Flask, and MongoDB. It features NLP-based emotion recognition, dynamic persona switching, and sentiment-driven conversations to deliver empathetic and context-aware user interactions.',
//     tech: ['BERT', 'Flask', 'MongoDB'],
//     github: 'https://github.com/Moulya121/CogniChatAI'
//   },
// ];

// export default function Projects() {
//   return (
//     <div className="min-h-screen bg-[#0d1117] py-16 px-4 font-mono">
//       <h2 className="text-3xl md:text-4xl font-bold text-green-400 text-left max-w-6xl mx-auto mb-4">// Projects</h2>
//       <p className="text-gray-400 text-left text-sm max-w-6xl mx-auto mb-12">
//         // Things I’ve built using code 💻
//       </p>

//       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 perspective-[1000px]">
//         {projects.map((project) => (
//           <motion.div
//             key={project.title}
//             className="group [transform-style:preserve-3d] relative w-full h-[300px] transition-transform duration-700 hover:rotate-y-180"
//           >
//             {/* Front */}
//             <div className="absolute inset-0 bg-[#161b22] rounded-xl overflow-hidden border border-gray-700 shadow-lg backface-hidden">
//               <img
//                 alt={project.title}
//                 className="w-full h-full object-cover opacity-90"
//               />
//               <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-3">
//                 <h3 className="text-white text-xl font-semibold">{project.title}</h3>
//               </div>
//             </div>

//             {/* Back */}
//             <div className="absolute inset-0 bg-[#1a1f2c] text-gray-200 p-6 rounded-xl border border-gray-700 shadow-lg rotate-y-180 backface-hidden">
//               <h3 className="text-xl text-green-400 font-semibold mb-2">{project.title}</h3>
//               <p className="text-sm mb-4">// {project.description}</p>
//               <div className="flex flex-wrap gap-2 mb-4">
//                 {project.tech.map((tech) => (
//                   <span
//                     key={tech}
//                     className="text-xs px-2 py-1 bg-[#0f172a] text-green-300 border border-green-700 rounded"
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>
//               <a
//                 href={project.github}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-[#58a6ff] hover:text-blue-300 text-sm"
//               >
//                 <FontAwesomeIcon icon={faGithub} size="lg" />
//               </a>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// }








import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const projects = [
  {
    title: 'ReGenX',
    description:
      'ReGenX is a real-time waste management app built with Kotlin, featuring dynamic geofencing via Google Maps API and real-time alerts through Firebase Cloud Messaging. It includes AI-assisted complaint validation using TensorFlow Lite and an admin dashboard for officials.',
    tech: ['Kotlin', 'Firebase', 'MongoDB'],
    github: 'https://github.com/VasudhaMurthy/RegenX',
  },
  {
    title: 'ArmoraBioKey',
    description:
      'Developed a secure biometric authentication system for fingerprint-based identity verification using embedded security principles. Worked on authentication flow design, secure hashing, helper data protection, threat modeling, secure memory handling, HSM-based key management, ECC/SHA-256 cryptography, secure boot mechanisms, testing workflows, and state machine logic.',
    tech: [
      'Embedded Systems',
      'Cybersecurity & Cryptography',
      'Biometric Authentication',
      'Secure Architecture',
    ],
    github: '',
  },
  {
    title: 'GoTogether',
    description:
      'GoTogether is a MERN-stack smart ride-sharing PWA featuring real-time route optimization via Google Maps API, secure Razorpay payments, and a dynamic React UI.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    github: 'https://github.com/VasudhaMurthy/GoTogether',
  },
  {
    title: 'Vulcan Observe',
    description:
      'Built a monitoring system using Flask, Prometheus, and Grafana to track API performance (latency, request rate, CPU, memory). Implemented real-time metrics scraping, custom dashboards, and alerting. Containerized using Docker for scalable deployment.',
    tech: ['Flask', 'Prometheus', 'Grafana', 'Docker'],
    github: 'https://github.com/Moulya121/Vulcan-Observe',
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-[#0d1117] py-16 px-4 font-mono">
      <h2 className="text-3xl md:text-4xl font-bold text-green-400 text-left max-w-6xl mx-auto mb-4">
        // Projects
      </h2>

      <p className="text-gray-400 text-left text-sm max-w-6xl mx-auto mb-12">
        // Things I’ve built using code 💻
      </p>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-[#1a1f2c] text-gray-200 p-6 rounded-2xl border border-gray-700 shadow-lg min-h-[360px] flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl text-green-400 font-bold mb-4">
                {project.title}
              </h3>

              <p className="text-sm text-gray-300 leading-relaxed mb-5">
                // {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1 bg-[#0f172a] text-green-300 border border-green-700 rounded-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* GitHub */}
            {project.github && (
              <div className="mt-5">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#58a6ff] hover:text-blue-300 text-lg transition"
                >
                  <FontAwesomeIcon icon={faGithub} size="lg" />
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}