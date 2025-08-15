"use client";

import { getProfessionalProjects, sortProjectsByDate } from "@/data/projects";
import {
  type MediaFile,
  convertLegacyImages,
  getProjectMedia,
} from "@/lib/mediaLoader";

import ProjectCover from "./ProjectCover";

const Timeline = () => {
  // Get professional projects from centralized data
  const professionalProjects = getProfessionalProjects();
  const sortedProjects = sortProjectsByDate(professionalProjects);

  const getProjectMediaFiles = (project: {
    projectKey?: string;
    images: string[];
  }): MediaFile[] => {
    if (project.projectKey) {
      const projectMedia = getProjectMedia(project.projectKey);
      if (projectMedia.length > 0) {
        return projectMedia;
      }
    }
    return convertLegacyImages(project.images);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });
  };

  const formatDateRange = (startDate: string, endDate: string | null) => {
    const start = formatDate(startDate);
    const end = endDate ? formatDate(endDate) : "Present";
    return `${start} - ${end}`;
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

  const getCategoryIcon = (category: string) => {
    const icons = {
      fullstack: "🌐",
      data: "📊",
      mobile: "📱",
      fintech: "💰",
      personal: "🚀",
    };
    return icons[category as keyof typeof icons] || "💼";
  };

  return (
    <section id="timeline" className="bg-gray-50 py-20 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
            Professional Timeline
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            A chronological journey through my professional projects and client
            work
          </p>
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
                {/* Timeline node */}
                <div className="absolute left-1/2 z-10 flex h-8 w-8 -translate-x-1/2 transform items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-sm font-bold text-white">
                  {getCategoryIcon(project.category)}
                </div>

                {/* Project card */}
                <div className={`w-5/12 ${index % 2 === 0 ? "pr-8" : "pl-8"}`}>
                  <div className="group relative rounded-xl border border-gray-200 bg-white p-6 shadow-lg transition-all duration-300 hover:border-emerald-300 hover:shadow-xl dark:border-gray-600 dark:bg-gray-800 dark:hover:border-emerald-500">
                    {/* Date badge */}
                    <div
                      className={`absolute ${index % 2 === 0 ? "-right-2" : "-left-2"} -top-3 rounded-lg bg-gradient-to-r ${getCategoryColor(project.category)} px-3 py-1 text-xs font-semibold text-white shadow-lg`}
                    >
                      {formatDateRange(project.startDate, project.endDate)}
                    </div>

                    {/* Status indicator */}
                    {project.status === "active" && (
                      <div
                        className={`absolute ${index % 2 === 0 ? "-right-1" : "-left-1"} top-6 flex items-center gap-1`}
                      >
                        <div className="h-2 w-2 animate-pulse rounded-full bg-green-500"></div>
                        <span className="text-xs font-medium text-green-600 dark:text-green-400">
                          Active
                        </span>
                      </div>
                    )}

                    {/* Project media */}
                    {(() => {
                      const mediaFiles = getProjectMediaFiles(project);
                      return mediaFiles.length > 0 ? (
                        <div className="relative mb-4 h-32 overflow-hidden rounded-lg">
                          <ProjectCover
                            media={mediaFiles[0]}
                            fallbackSrc={
                              project.images[0] || "/placeholder.jpg"
                            }
                            fallbackAlt={project.title}
                            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                      ) : null;
                    })()}

                    {/* Project content */}
                    <div className="mb-3">
                      <h3 className="mb-1 text-lg font-bold text-gray-900 transition-colors group-hover:text-emerald-600 dark:text-white dark:group-hover:text-emerald-400">
                        {project.title}
                      </h3>
                      <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
                        {project.company}
                      </p>
                    </div>

                    <div className="mb-3 flex items-center gap-2 text-xs">
                      <span className="rounded-full bg-emerald-100 px-2 py-1 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300">
                        {project.role}
                      </span>
                      <span className="rounded-full bg-gray-100 px-2 py-1 text-gray-700 dark:bg-gray-700 dark:text-gray-300">
                        {project.duration}
                      </span>
                      <span className="rounded-full bg-teal-100 px-2 py-1 text-teal-800 dark:bg-teal-900/30 dark:text-teal-300">
                        Team of {project.teamSize}
                      </span>
                    </div>

                    <p className="mb-3 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                      {project.description}
                    </p>

                    {/* Key technologies */}
                    <div className="mb-3">
                      <div className="flex flex-wrap gap-1">
                        {project.technologies
                          .slice(0, 4)
                          .map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="rounded-md bg-gray-100 px-2 py-1 text-xs text-gray-600 dark:bg-gray-700 dark:text-gray-400"
                            >
                              {tech}
                            </span>
                          ))}
                        {project.technologies.length > 4 && (
                          <span className="rounded-md bg-gray-100 px-2 py-1 text-xs text-gray-500 dark:bg-gray-700 dark:text-gray-500">
                            +{project.technologies.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Key achievement */}
                    <div className="border-l-3 border-emerald-500 pl-3">
                      <p className="mb-1 text-xs font-medium text-gray-500 dark:text-gray-400">
                        Key Achievement
                      </p>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        {project.achievements[0]}
                      </p>
                    </div>

                    {/* Links */}
                    {(project.liveUrl || project.githubUrl) && (
                      <div className="mt-4 flex gap-2">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-md bg-emerald-600 px-3 py-1 text-xs font-medium text-white transition-colors hover:bg-emerald-700"
                          >
                            Live Project
                          </a>
                        )}
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-md border border-gray-300 px-3 py-1 text-xs font-medium text-gray-700 transition-colors hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
                          >
                            View Code
                          </a>
                        )}
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

        {/* Timeline legend */}
        <div className="mt-16 flex flex-wrap justify-center gap-4">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-green-500"></div>
            <span className="text-sm text-gray-600 dark:text-gray-400">
              Currently Active
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-gray-400"></div>
            <span className="text-sm text-gray-600 dark:text-gray-400">
              Completed
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
