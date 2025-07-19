import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const projects = [
  {
    title: 'ReGenX',
    description: 'ReGenX is a real-time waste management app built with Kotlin, featuring dynamic geofencing via Google Maps API and real-time alerts through Firebase Cloud Messaging. It includes AI-assisted complaint validation using TensorFlow Lite and an admin dashboard for officials.',
    tech: ['Kotlin', 'Firebase', 'MongoDB'],
    github: 'https://github.com/VasudhaMurthy/RegenX'
  },
  {
    title: 'GoTogether',
    description: 'GoTogether is a MERN-stack smart ride-sharing PWA featuring real-time route optimization via Google Maps API, secure Razorpay payments, and a dynamic React UI. It rewards users for rides and referrals, promoting engagement through gamified incentives.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    github: 'https://github.com/VasudhaMurthy/GoTogether'
  },
  {
    title: 'CogniChat',
    description: 'CogniChat is a mental health chatbot built with GPT, BERT, Flask, and MongoDB. It features NLP-based emotion recognition, dynamic persona switching, and sentiment-driven conversations to deliver empathetic and context-aware user interactions.',
    tech: ['BERT', 'Flask', 'MongoDB'],
    github: 'https://github.com/Moulya121/CogniChatAI'
  },
  {
    title: 'PillPal',
    description: 'PillPal is a Python-based medication reminder script that sends daily alerts, suggests diet tips, and checks tablet dosage. It helps users manage their prescriptions effectively with simple, automated health guidance.',
    tech: ['Python', 'GPT'],
    github: 'https://github.com/Moulya121/PillPal'
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-[#0d1117] py-16 px-4 font-mono">
      <h2 className="text-3xl md:text-4xl font-bold text-green-400 text-left max-w-6xl mx-auto mb-4">// Projects</h2>
      <p className="text-gray-400 text-left text-sm max-w-6xl mx-auto mb-12">
        // Things I’ve built using code 💻
      </p>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 perspective-[1000px]">
        {projects.map((project) => (
          <motion.div
            key={project.title}
            className="group [transform-style:preserve-3d] relative w-full h-[300px] transition-transform duration-700 hover:rotate-y-180"
          >
            {/* Front */}
            <div className="absolute inset-0 bg-[#161b22] rounded-xl overflow-hidden border border-gray-700 shadow-lg backface-hidden">
              <img
                alt={project.title}
                className="w-full h-full object-cover opacity-90"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-3">
                <h3 className="text-white text-xl font-semibold">{project.title}</h3>
              </div>
            </div>

            {/* Back */}
            <div className="absolute inset-0 bg-[#1a1f2c] text-gray-200 p-6 rounded-xl border border-gray-700 shadow-lg rotate-y-180 backface-hidden">
              <h3 className="text-xl text-green-400 font-semibold mb-2">{project.title}</h3>
              <p className="text-sm mb-4">// {project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 bg-[#0f172a] text-green-300 border border-green-700 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#58a6ff] hover:text-blue-300 text-sm"
              >
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
