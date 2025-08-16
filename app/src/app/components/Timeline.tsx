"use client";

import { getProfessionalProjects, sortProjectsByDate } from "@/data/projects";

import ProjectCover from "./ProjectCover";

const Timeline = () => {
  // Get professional projects from centralized data
  const professionalProjects = getProfessionalProjects();
  const sortedProjects = sortProjectsByDate(professionalProjects);

  const formatDateForTimeline = (startDate: string, endDate: string | null) => {
    const start = new Date(startDate);
    const startFormatted = start.toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });

    if (endDate) {
      const end = new Date(endDate);
      const endFormatted = end.toLocaleDateString("en-US", {
        month: "short",
        year: "numeric",
      });
      return `${startFormatted} - ${endFormatted}`;
    }

    return `${startFormatted} - Present`;
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      fullstack: "from-emerald-500 to-teal-500",
      data: "from-teal-500 to-emerald-500",
      mobile: "from-emerald-600 to-teal-600",
      fintech: "from-green-500 to-emerald-500",
      personal: "from-emerald-400 to-teal-400",
    };
    return (
      colors[category as keyof typeof colors] || "from-gray-500 to-gray-600"
    );
  };

  return (
    <section id="timeline" className="bg-gray-50 py-20 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
            Professional Timeline
          </h2>
          <p className="mb-6 text-lg text-gray-600 dark:text-gray-300">
            A chronological journey through my professional projects and client
            work
          </p>

          {/* Timeline legend */}
          <div className="flex justify-center">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 animate-pulse rounded-full bg-emerald-500"></div>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                Currently Active Projects
              </span>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative mt-16">
          {/* Central timeline line */}
          <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 transform bg-gradient-to-b from-emerald-500 to-teal-500"></div>

          {/* Timeline items */}
          <div className="space-y-12">
            {sortedProjects.map((project, index) => (
              <div
                key={project.id}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                {/* Timeline node with date */}
                <div
                  className={`absolute left-1/2 z-10 flex h-auto min-w-[8rem] -translate-x-1/2 transform items-center justify-center whitespace-nowrap rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 px-3 py-2 text-xs font-bold text-white shadow-lg ${
                    project.status === "active" ? "animate-pulse" : ""
                  }`}
                >
                  {formatDateForTimeline(project.startDate, project.endDate)}
                </div>

                {/* Project card */}
                <div className={`w-5/12 ${index % 2 === 0 ? "pr-8" : "pl-8"}`}>
                  <div className="group relative rounded-xl border border-gray-200 bg-white p-6 shadow-lg transition-all duration-300 hover:border-emerald-300 hover:shadow-xl dark:border-gray-600 dark:bg-gray-800 dark:hover:border-emerald-500">
                    {/* Project media */}
                    {project.media.length > 0 && (
                      <div className="relative mb-4 h-32 overflow-hidden rounded-lg">
                        <ProjectCover
                          media={project.media[0]}
                          fallbackSrc={project.images[0] || "/placeholder.jpg"}
                          fallbackAlt={project.title}
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                    )}

                    {/* Project content */}
                    <div className="mb-4">
                      <h3 className="mb-2 text-lg font-bold text-gray-900 transition-colors group-hover:text-emerald-600 dark:text-white dark:group-hover:text-emerald-400">
                        {project.title}
                      </h3>
                      <div className="mb-3 flex items-center gap-3 text-sm">
                        <span className="font-medium text-emerald-600 dark:text-emerald-400">
                          {project.company}
                        </span>
                        <span className="text-gray-500 dark:text-gray-400">
                          •
                        </span>
                        <span className="text-gray-600 dark:text-gray-300">
                          {project.role}
                        </span>
                      </div>
                    </div>

                    <p className="mb-4 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                      {project.description}
                    </p>

                    {/* Key technologies */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1">
                        {project.technologies
                          .slice(0, 5)
                          .map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="rounded-md bg-gray-100 px-2 py-1 text-xs text-gray-600 dark:bg-gray-700 dark:text-gray-400"
                            >
                              {tech}
                            </span>
                          ))}
                        {project.technologies.length > 5 && (
                          <span className="rounded-md bg-gray-100 px-2 py-1 text-xs text-gray-500 dark:bg-gray-700 dark:text-gray-500">
                            +{project.technologies.length - 5} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Links */}
                    {project.liveUrl && (
                      <div className="flex gap-2">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm font-medium text-emerald-600 transition-colors hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300"
                        >
                          View Project →
                        </a>
                      </div>
                    )}

                    {/* Hover effect */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${getCategoryColor(project.category)} rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-5`}
                    ></div>
                  </div>
                </div>

                {/* Empty space for the other side */}
                <div className="w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
