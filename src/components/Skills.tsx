
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPython } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';

const skills = [
    { name: 'Kotlin', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg' },
    { name: 'Solidity', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg' },
    { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'Python', icon: faPython },
    { name: 'Hardhat', icon: 'https://seeklogo.com/images/H/hardhat-logo-888739EBB4-seeklogo.com.png' },
];

const SkillIcon = ({ skill, index }: { skill: typeof skills[0]; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, scale: 1.1 }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-blue-500/20 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative bg-gray-800/50 p-6 rounded-[2rem] backdrop-blur-sm border border-gray-700/50">
        <div className="w-16 h-16 mx-auto mb-4 relative">
          <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          {typeof skill.icon === 'string' ? (
            <motion.img
              src={skill.icon}
              alt={skill.name}
              className="w-full h-full object-contain relative z-10"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
          ) : (
            <motion.div
              className="w-full h-full relative z-10 text-blue-500"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <FontAwesomeIcon
                icon={skill.icon}
                className="w-full h-full"
              />
            </motion.div>
          )}
        </div>
        <p className="text-center text-sm font-medium text-gray-300">{skill.name}</p>
      </div>
    </motion.div>
  );
};

export default function Skills() {
  return (
    <div className="min-h-screen bg-gray-900 py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-purple-500/10 to-transparent opacity-50" />
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I've worked with a variety of technologies in the web development world.
            Here's my tech stack and tools I use to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <SkillIcon key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

