import { motion } from 'framer-motion';
import project1 from "../assets/project6.png";
import project2 from "../assets/project2.jpeg";
import project3 from "../assets/project3.jpeg";
import project5 from "../assets/project5.jpg";

const projects = [
  {
    title: 'ReGenX',
    description: 'Revolutionizing waste, regenerating resources',
    image: project5,
    tech: ['Flutter', 'Google cloud', 'Firebase', 'MongoDB'],
    github: 'https://github.com/Moulya121/ReGenX'
  },
  {
    title: 'GoTogether',
    description: 'Smart Ride-Sharing & Rewards Platform for Smart Mobility (Progressive Web App)',
    image: project1,
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    github: 'https://github.com/yourusername/gotogether'
  },
  {
    title: 'CogniChat',
    description: 'A Cognitive Assessment Therapist',
    image: project2,
    tech: ['Node.js', 'Socket.io', 'MongoDB'],
    github: 'https://github.com/yourusername/cognichat'
  },
  {
    title: 'PillPal',
    description: 'Your Daily Dose Wingman',
    image: project3,
    tech: ['React Native', 'TypeScript', 'Styled Components'],
    github: 'https://github.com/yourusername/pillpal'
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-[#181e2a] py-16 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-20">
        Projects
      </h2>
      <div className="max-w-6xl mx-auto flex flex-col gap-24">
        {projects.map((project, idx) => {
          const isEven = idx % 2 === 1;
          return (
            <div
              key={project.title}
              className={`flex flex-col-reverse md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''} gap-12 md:gap-20`}
            >
              {/* Text Content */}
              <motion.div
                initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="w-full md:w-1/2"
              >
                <div className="mb-2 text-lg font-semibold text-blue-400">
                  {`PROJECT ${idx + 1}`}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors group"
                >
                  <span>Read more</span>
                  <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                </a>
              </motion.div>

              {/* Image Content */}
              <motion.div
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="w-full md:w-1/2 flex justify-center items-center"
              >
                <div className="relative w-[320px] md:w-[400px] aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl border-4 border-blue-400/20 bg-[#232b3a] flex items-center justify-center">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Optional: Device frame effect */}
                  <div className="absolute -inset-2 border-4 border-blue-400 rounded-3xl pointer-events-none" style={{zIndex: 2, opacity: 0.2}} />
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
