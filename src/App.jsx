import React from "react";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } }
};

const data = {
  header: {
    name: "Sourish Chatterjee",
    title: "M.Tech, Electrical Engineering (Signal Processing & Communication)",
    subtitle:
      "IIT Hyderabad | Deep Learning · Computer Vision · Communication Systems"
  },
  research:
    "My research focuses on developing scalable and efficient systems for visual data processing, combining deep learning with communication-aware architectures. I am particularly interested in image/video understanding, machine learning for signal processing, and real-world deployment of AI systems.",
  experiences: [
    {
      role: "Intel Labs — Graduate Technical Intern",
      dates: "May 2024 – Present",
      description:
        "Working on scalable visual database systems for image and video processing pipelines. Focus on distributed architectures using Kubernetes to ensure low-latency retrieval and high availability."
    },
    {
      role: "Takenaka Corporation (Tokyo) — CV Intern",
      dates: "Jun 2023 – Jul 2023",
      description:
        "Developed human action recognition pipelines for construction environments using Vision Transformers, pose estimation, and 3D CNNs."
    },
    {
      role: "Denso — Electronics R&D Engineer",
      dates: "Sep 2020 – Dec 2021",
      description:
        "Worked on ECU software development, testing, CAN communication, and system-level validation in automotive environments."
    }
  ],
  publications: [
    {
      title: "An Economical RF Solution for Bone Fracture Detection",
      venue: "International Journal of Antenna and Wave Propagation, 2022",
      description:
        "Designed and validated RF-based sensing mechanisms using CST Microwave Studio for fracture detection with biological validation."
    }
  ],
  projects: [
    {
      title: "Machine Unlearning (NeurIPS Challenge)",
      description:
        "Top 2% solution for removing learned data influence from deep models."
    },
    {
      title: "Protein Function Prediction (Kaggle CAFA 5)",
      description:
        "Silver medal solution using sequence-based deep learning models."
    },
    {
      title: "Personalized Speech Enhancement",
      description:
        "Deep learning-based speech enhancement using complex CNN architectures."
    },
    {
      title: "V2X Communication Simulation",
      description:
        "Simulation of MAC-layer communication challenges including interference and packet prioritization."
    }
  ],
  skills: [
    { category: "Programming", items: ["Python", "C++", "MATLAB", "CUDA"] },
    { category: "Frameworks", items: ["PyTorch", "OpenCV", "ROS2"] },
    { category: "Domains", items: ["Deep Learning", "Computer Vision", "Signal Processing"] },
    { category: "Systems", items: ["Kubernetes", "CAN Protocol", "Embedded Systems"] }
  ]
};

const ResearchPortfolio = () => {
  const year = new Date().getFullYear();

  return (
    <motion.main
      className="min-h-screen bg-white text-gray-900 p-6"
      variants={stagger}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row">
        <motion.aside
          variants={fadeIn}
          className="hidden md:block md:w-1/4 pr-6 mb-6 md:mb-0"
        >
          <nav className="space-y-3 sticky top-24">
            <ul>
              <li>
                <a
                  href="#header"
                  className="text-gray-700 hover:text-gray-900"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#research"
                  className="text-gray-700 hover:text-gray-900"
                >
                  Research Interests
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="text-gray-700 hover:text-gray-900"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#publications"
                  className="text-gray-700 hover:text-gray-900"
                >
                  Publications
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-gray-700 hover:text-gray-900"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-gray-700 hover:text-gray-900"
                >
                  Technical Skills
                </a>
              </li>
            </ul>
          </nav>
        </motion.aside>
        <div className="md:w-3/4">
          <motion.header
            id="header"
            variants={fadeIn}
            className="mb-12"
          >
            <h1 className="text-5xl font-extrabold tracking-tight">
              {data.header.name}
            </h1>
            <p className="text-xl mt-3 text-gray-600">
              {data.header.title}
            </p>
            <p className="text-md mt-2 text-gray-500">
              {data.header.subtitle}
            </p>
          </motion.header>

          <motion.section
            id="research"
            variants={fadeIn}
            className="mb-12"
          >
            <h2 className="text-2xl font-semibold mb-4 border-b pb-2">
              Research Interests
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {data.research}
            </p>
          </motion.section>

          <motion.section
            id="experience"
            variants={fadeIn}
            className="mb-12"
          >
            <h2 className="text-2xl font-semibold mb-4 border-b pb-2">
              Research & Industry Experience
            </h2>
            <div className="space-y-6">
              {data.experiences.map((exp, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeIn}
                  className="p-4 rounded-lg hover:bg-gray-50 transition"
                >
                  <h3 className="text-lg font-semibold">
                    {exp.role}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {exp.dates}
                  </p>
                  <p className="mt-2 text-gray-700">
                    {exp.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.section
            id="publications"
            variants={fadeIn}
            className="mb-12"
          >
            <h2 className="text-2xl font-semibold mb-4 border-b pb-2">
              Publications
            </h2>
            {data.publications.map((pub, idx) => (
              <motion.div
                key={idx}
                variants={fadeIn}
                className="mb-6"
              >
                <h3 className="font-semibold">{pub.title}</h3>
                <p className="text-sm text-gray-500">
                  {pub.venue}
                </p>
                <p className="mt-2 text-gray-700">
                  {pub.description}
                </p>
              </motion.div>
            ))}
          </motion.section>

          <motion.section
            id="projects"
            variants={fadeIn}
            className="mb-12"
          >
            <h2 className="text-2xl font-semibold mb-4 border-b pb-2">
              Selected Research Projects
            </h2>
            <div className="space-y-6">
              {data.projects.map((proj, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeIn}
                >
                  <h3 className="font-semibold">
                    {proj.title}
                  </h3>
                  <p className="text-gray-700">
                    {proj.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.section
            id="skills"
            variants={fadeIn}
            className="mb-12"
          >
            <h2 className="text-2xl font-semibold mb-4 border-b pb-2">
              Technical Skills
            </h2>
            <div className="grid grid-cols-2 gap-6 text-gray-700">
              {data.skills.map((skill, idx) => (
                <motion.div key={idx} variants={fadeIn}>
                  <h4 className="font-semibold">
                    {skill.category}
                  </h4>
                  <p>{skill.items.join(", ")}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.footer
            variants={fadeIn}
            className="text-center mt-16 text-sm text-gray-400"
          >
            <p>Academic Portfolio • {year}</p>
          </motion.footer>
        </div>
      </div>
    </motion.main>
  );
};

export default ResearchPortfolio;