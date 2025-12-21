"use client";

import { getPersonalProjects } from "@/data/projects";

import ProjectSlide from "./ProjectSlide";
import Timeline from "./Timeline";

const Projects = () => {
  // Get personal projects from centralized data
  const personalProjects = getPersonalProjects();

  return (
    <section
      id="projects"
      className="bg-gray-50 py-12 dark:bg-gray-900 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8 text-center sm:mb-16">
          <h2 className="mb-3 text-2xl font-bold text-gray-900 dark:text-white sm:mb-4 sm:text-3xl lg:text-4xl">
            My Projects
          </h2>
          <p className="mx-auto max-w-3xl text-base text-gray-600 dark:text-gray-300 sm:text-lg lg:text-xl">
            A comprehensive overview of my professional work and personal
            projects.
          </p>
        </div>

        {/* Professional Timeline */}
        <div className="mb-12 sm:mb-20">
          <Timeline embedded={true} />
        </div>

        {/* Personal Projects Section */}
        <div className="mb-8 text-center sm:mb-16">
          <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white sm:mb-4 sm:text-2xl lg:text-3xl">
            Personal Projects
          </h3>
          <p className="mx-auto max-w-3xl text-sm text-gray-600 dark:text-gray-300 sm:text-base lg:text-lg">
            Passion projects and personal experiments that showcase my
            creativity and exploration of new technologies.
          </p>
        </div>

        {/* Info about personal projects */}
        <div className="mb-8 text-center sm:mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300 sm:px-6 sm:py-3">
            <span className="text-base sm:text-lg">🚀</span>
            <span className="text-sm font-medium sm:text-base">
              {personalProjects.length} Personal Projects
            </span>
          </div>
        </div>

        {/* Horizontal Scrollable Gallery */}
        <div className="-mx-4 sm:-mx-6 lg:-mx-8">
          <div className="scrollbar-hide overflow-x-auto px-4 sm:px-6 lg:px-8">
            <div className="flex gap-4 pb-4 sm:gap-6">
              {personalProjects.map((project) => (
                <div
                  key={project.id}
                  className="w-[85vw] flex-shrink-0 sm:w-[75vw] md:w-[65vw] lg:w-[50vw] xl:w-[400px]"
                >
                  <ProjectSlide project={project} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* View More Button */}
        <div className="mt-8 text-center sm:mt-16">
          <a
            href="https://github.com/Frensi388"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-lg bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100 sm:px-8 sm:py-4 sm:text-base"
          >
            <svg
              className="mr-2 h-4 w-4 sm:h-5 sm:w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                clipRule="evenodd"
              />
            </svg>
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
