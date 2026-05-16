import { motion } from 'framer-motion';
import { Code, Server, Shield } from 'lucide-react';

const experiences = [
  {
    icon: Code,
    title: "Cybersecurity Analyst & Lead Architect",
    company: "BitArmora",
    description: [
      "Led security architecture design for ArmoraBioKey, a biometric authentication system eliminating raw template storage across 3+ authentication workflows.",
      "Developed and configured GitLab CI/CD pipelines with SBOM generation, smoke tests, and automated test harness workflows to enhance security validation and operational reliability.",
      "Worked with Docker and Nexus Repository Manager to manage containerized artifacts and implement policy-drivenvalidation workflows within CI/CD pipelines.",
      "Performed threat modeling and operational risk analysis, identifying and mitigating replay attack vectors in authentication pipelines.",
      "Researched and prototyped cryptographic template protection techniques including secure hashing to reduce biometric data exposure.",
      "Participated in incident analysis and mitigation planning for authentication-related operational risks."
    ],
    duration: "Jan 2026 - Present"
  },
    {
    icon: Code,
    title: "Operational Intern",
    company: "CRED",
    description: [
      "Contributed to a voice bot project for CRED Wallet, designing structured conversational workflows to improveloan-related query resolution.",
      "Built and maintained knowledge base content and automation workflows handling high-volume customer support tickets via Freshdesk",
      "Configured API workflows and operational automation using Padawan, improving pipeline efficiency.",
    ],
    duration: "Nov 2025 - Jan 2026"
  },
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
