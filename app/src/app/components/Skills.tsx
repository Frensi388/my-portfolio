"use client";

import { Brain } from "lucide-react";

type Skill = {
  id: string;
  name: string;
  category: string;
  level: number;
  description: string;
  icon: React.ReactNode;
  color: string;
};

const Skills = () => {
  const skills: Skill[] = [
    // Frontend
    {
      id: "frontend",
      name: "Frontend Development",
      category: "frontend",
      level: 8,
      description:
        "React, Next.js, Tailwind CSS, accessibility & responsive design",
      icon: (
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
      color: "from-emerald-500 to-teal-500",
    },

    // Backend
    {
      id: "backend",
      name: "Backend Development",
      category: "backend",
      level: 7,
      description:
        "Node.js, Express, databases (MongoDB/PostgreSQL), auth & payments",
      icon: (
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
          />
        </svg>
      ),
      color: "from-emerald-600 to-teal-600",
    },

    // DevOps & Cloud
    {
      id: "devops",
      name: "DevOps & Cloud",
      category: "devops",
      level: 5,
      description: "Serverless (Vercel), CI/CD, monitoring & observability",
      icon: (
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
          />
        </svg>
      ),
      color: "from-teal-500 to-emerald-500",
    },

    // AI & ML
    {
      id: "ai",
      name: "AI & Machine Learning",
      category: "ai",
      level: 4,
      description: "OpenAI API, OCR, computer vision, ML classification",
      icon: <Brain className="h-6 w-6" />,
      color: "from-emerald-600 to-teal-600",
    },

    // Mobile
    {
      id: "mobile",
      name: "Mobile Development",
      category: "mobile",
      level: 3,
      description: "React Native, Expo, iOS/Android apps & prototyping",
      icon: (
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 18h.01M8 21h8a1 1 0 001-1V4a1 1 0 00-1-1H8a1 1 0 00-1 1v16a1 1 0 001 1z"
          />
        </svg>
      ),
      color: "from-emerald-500 to-teal-500",
    },

    // Data & Analytics
    {
      id: "data",
      name: "Data & Analytics",
      category: "data",
      level: 4,
      description:
        "Data visualization, web scraping, ETL pipelines & dashboards",
      icon: (
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
      color: "from-teal-500 to-emerald-500",
    },
  ];

  return (
    <section id="skills" className="bg-white py-20 dark:bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
            Skills & Expertise
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600 dark:text-gray-300">
            A comprehensive overview of my technical skills and proficiency
            levels across different domains.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="group relative rounded-xl border border-gray-200 bg-white p-6 shadow-lg transition-all duration-300 hover:border-emerald-300 hover:shadow-xl dark:border-gray-600 dark:bg-gray-700 dark:hover:border-emerald-500"
            >
              {/* Skill Header */}
              <div className="mb-4 flex items-center">
                <div
                  className={`h-12 w-12 rounded-lg bg-gradient-to-r ${skill.color} mr-4 flex items-center justify-center text-2xl`}
                >
                  {skill.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    {skill.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {skill.level} projects
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                {skill.description}
              </p>

              {/* Hover Effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${skill.color} rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-5`}
              ></div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="mx-auto max-w-4xl rounded-2xl bg-gray-50 p-8 dark:bg-gray-700">
            <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
              Always Learning & Growing
            </h3>
            <p className="mb-6 text-gray-600 dark:text-gray-300">
              I&apos;m constantly expanding my skill set and staying up-to-date
              with the latest technologies. Currently exploring advanced topics
              in AI/ML, cloud architecture, and emerging web technologies.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300">
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                Currently Learning: Advanced AI Integration
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
