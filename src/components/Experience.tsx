import { motion } from 'framer-motion';
import { Code, Server, Shield } from 'lucide-react';

const experiences = [
  {
    icon: Server,
    title: "Tech Mahindra",
    company: "Trainee - Support",
    description: [
      "Worked on a client-facing CMS project using Adobe Experience Manager (AEM).",
      "Developed a frontend HTML form to automate author onboarding.",
      "Integrated the form with backend servlets to trigger permission workflows.",
      "Completed hands-on training in AEM architecture, servlets, workflows, and permission models."
    ],
    duration: "June 2025 - July 2025"
  },
  {
    icon: Code,
    title: "Adversity Solutions",
    company: "Blockchain Developer Intern",
    description: [
      "Building FewDotNFT – a blockchain platform to showcase Indian art NFTs.",
      "Developing secure smart contracts using Solidity and Hardhat on Sepolia testnet.",
      "Creating and integrating dApps using Ethers.js and other Web3 tools.",
      "Engaging in code reviews, debugging, and exploring blockchain protocols like Ethereum and Hyperledger."
    ],
    duration: "Mar 2025 - Present"
  }
];

export default function Experience() {
  return (
    <section id="experience" className="min-h-screen bg-gray-950 py-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Experience</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A showcase of my technical internships, contributions, and the code I've written that made a difference.
          </p>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900 border border-gray-700 rounded-xl p-6 hover:shadow-lg hover:shadow-blue-500/20 transition"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mt-1 flex-shrink-0">
                  <exp.icon className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                    <span className="text-sm text-blue-400 font-medium">{exp.duration}</span>
                  </div>
                  <p className="text-sm text-yellow-500 font-medium mb-2">{exp.company}</p>
                  <ul className="list-disc list-inside text-sm text-gray-300 space-y-1 pl-2">
                    {exp.description.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
