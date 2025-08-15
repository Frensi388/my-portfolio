"use client";

type Skill = {
  id: string;
  name: string;
  category: string;
  level: number;
  description: string;
  icon: string;
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
      icon: "⚛️",
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
      icon: "🟢",
      color: "from-emerald-600 to-teal-600",
    },

    // DevOps & Cloud
    {
      id: "devops",
      name: "DevOps & Cloud",
      category: "devops",
      level: 5,
      description: "Serverless (Vercel), CI/CD, monitoring & observability",
      icon: "⚡",
      color: "from-teal-500 to-emerald-500",
    },

    // AI & ML
    {
      id: "ai",
      name: "AI & Machine Learning",
      category: "ai",
      level: 4,
      description: "OpenAI API, OCR, computer vision, ML classification",
      icon: "🤖",
      color: "from-emerald-600 to-teal-600",
    },

    // Mobile
    {
      id: "mobile",
      name: "Mobile Development",
      category: "mobile",
      level: 3,
      description: "React Native, Expo, iOS/Android apps & prototyping",
      icon: "📱",
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
      icon: "📊",
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
              <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300">
                🚀 Currently Learning: Advanced AI Integration
              </span>
              <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-800 dark:bg-green-900/30 dark:text-green-300">
                📚 Next Goal: Cloud Architecture Certification
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
