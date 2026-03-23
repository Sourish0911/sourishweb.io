import React from "react";
import { motion } from "framer-motion";

export default function ResearchPortfolio() {
  return (
    <div className="min-h-screen bg-white text-gray-900 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-5xl font-bold tracking-tight">Sourish Chatterjee</h1>
          <p className="text-xl mt-3 text-gray-600">
            M.Tech, Electrical Engineering (Signal Processing & Communication)
          </p>
          <p className="text-md mt-2 text-gray-500">
            IIT Hyderabad | Deep Learning · Computer Vision · Communication Systems
          </p>
        </header>

        {/* Research Interests */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Research Interests</h2>
          <p className="text-gray-700 leading-relaxed">
            My research focuses on developing scalable and efficient systems for visual data processing, combining
            deep learning with communication-aware architectures. I am particularly interested in image/video
            understanding, machine learning for signal processing, and real-world deployment of AI systems.
          </p>
        </section>

        {/* Experience */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Research & Industry Experience</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold">Intel Labs — Graduate Technical Intern</h3>
              <p className="text-sm text-gray-500">May 2024 – Present</p>
              <p className="mt-2 text-gray-700">
                Working on scalable visual database systems for image and video processing pipelines. Focus on
                distributed architectures using Kubernetes to ensure low-latency retrieval and high availability.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Takenaka Corporation (Tokyo) — CV Intern</h3>
              <p className="text-sm text-gray-500">Jun 2023 – Jul 2023</p>
              <p className="mt-2 text-gray-700">
                Developed human action recognition pipelines for construction environments using Vision
                Transformers, pose estimation, and 3D CNNs.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Denso — Electronics R&D Engineer</h3>
              <p className="text-sm text-gray-500">Sep 2020 – Dec 2021</p>
              <p className="mt-2 text-gray-700">
                Worked on ECU software development, testing, CAN communication, and system-level validation in
                automotive environments.
              </p>
            </div>
          </div>
        </section>

        {/* Publications */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Publications</h2>
          <div>
            <h3 className="font-semibold">An Economical RF Solution for Bone Fracture Detection</h3>
            <p className="text-sm text-gray-500">International Journal of Antenna and Wave Propagation, 2022</p>
            <p className="mt-2 text-gray-700">
              Designed and validated RF-based sensing mechanisms using CST Microwave Studio for fracture detection
              with biological validation.
            </p>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Selected Research Projects</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold">Machine Unlearning (NeurIPS Challenge)</h3>
              <p className="text-gray-700">Top 2% solution for removing learned data influence from deep models.</p>
            </div>

            <div>
              <h3 className="font-semibold">Protein Function Prediction (Kaggle CAFA 5)</h3>
              <p className="text-gray-700">Silver medal solution using sequence-based deep learning models.</p>
            </div>

            <div>
              <h3 className="font-semibold">Personalized Speech Enhancement</h3>
              <p className="text-gray-700">Deep learning-based speech enhancement using complex CNN architectures.</p>
            </div>

            <div>
              <h3 className="font-semibold">V2X Communication Simulation</h3>
              <p className="text-gray-700">
                Simulation of MAC-layer communication challenges including interference and packet prioritization.
              </p>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Technical Skills</h2>
          <div className="grid grid-cols-2 gap-6 text-gray-700">
            <div>
              <h4 className="font-semibold">Programming</h4>
              <p>Python, C++, MATLAB, CUDA</p>
            </div>
            <div>
              <h4 className="font-semibold">Frameworks</h4>
              <p>PyTorch, OpenCV, ROS2</p>
            </div>
            <div>
              <h4 className="font-semibold">Domains</h4>
              <p>Deep Learning, Computer Vision, Signal Processing</p>
            </div>
            <div>
              <h4 className="font-semibold">Systems</h4>
              <p>Kubernetes, CAN Protocol, Embedded Systems</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center mt-16 text-sm text-gray-400">
          <p>Academic Portfolio • {new Date().getFullYear()}</p>
        </footer>
      </div>
    </div>
  );
}
