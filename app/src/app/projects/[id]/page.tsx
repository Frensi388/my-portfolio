"use client";

import { ArrowLeft, Calendar, ExternalLink, MapPin, Users } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

import MediaItem from "@/app/components/MediaItem";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { projects } from "@/data/projects";

type PageProps = {
  params: {
    id: string;
  };
};

const ProjectPage = ({ params }: PageProps) => {
  const project = projects.find((p) => p.id === parseInt(params.id));

  if (!project) {
    notFound();
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "long",
      year: "numeric",
    });
  };

  const formatDateRange = (startDate: string, endDate: string | null) => {
    const start = formatDate(startDate);
    const end = endDate ? formatDate(endDate) : "Present";
    return `${start} - ${end}`;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 dark:bg-gray-900">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Back button */}
        <Link
          href="/#projects"
          className="mb-8 inline-flex items-center gap-2 text-emerald-600 transition-colors hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300"
        >
          <ArrowLeft size={20} />
          Back to Projects
        </Link>

        {/* Project Header */}
        <div className="mb-8">
          <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
            {project.title}
          </h1>

          {/* Project Meta */}
          <div className="mb-6 flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
            {project.company && (
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span className="font-medium text-emerald-600 dark:text-emerald-400">
                  {project.company}
                </span>
              </div>
            )}
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>{formatDateRange(project.startDate, project.endDate)}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users size={16} />
              <span>Team of {project.teamSize}</span>
            </div>
          </div>

          {/* Status and Role */}
          <div className="mb-6 flex flex-wrap gap-3">
            <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300">
              {project.role}
            </span>
            <span className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 dark:bg-gray-700 dark:text-gray-300">
              {project.domain}
            </span>
            {project.status === "active" && (
              <span className="flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-800 dark:bg-green-900/30 dark:text-green-300">
                <div className="h-2 w-2 animate-pulse rounded-full bg-green-500"></div>
                Currently Active
              </span>
            )}
          </div>

          {/* Project Links */}
          {project.liveUrl && (
            <div className="mb-8">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-6 py-3 font-medium text-white transition-colors hover:bg-emerald-700"
              >
                <ExternalLink size={20} />
                View Live Project
              </a>
            </div>
          )}
        </div>

        {/* Project Media Gallery */}
        {project.media.length > 0 && (
          <div className="mb-12">
            <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
              Project Gallery
            </h2>
            <div className="mx-auto max-w-6xl">
              <Carousel opts={{ align: "start" }} className="w-full">
                <CarouselContent className="-ml-2 md:-ml-4">
                  {project.media.map((media, index) => (
                    <CarouselItem
                      key={index}
                      className="basis-full pl-2 sm:basis-1/2 md:pl-4 lg:basis-1/3"
                    >
                      <div className="overflow-hidden rounded-lg bg-white shadow-lg dark:bg-gray-800">
                        <div className="relative aspect-video">
                          {media.type === "video" && (
                            <div className="absolute right-2 top-2 z-10 rounded-full bg-black/50 px-2 py-1 text-xs text-white">
                              VIDEO
                            </div>
                          )}
                          <MediaItem
                            src={media.src}
                            alt={media.alt}
                            type={media.type}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="p-4">
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {media.alt}
                          </p>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />
              </Carousel>
            </div>
          </div>
        )}

        {/* Project Description */}
        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
            About This Project
          </h2>
          <div className="rounded-lg bg-white p-8 shadow-lg dark:bg-gray-800">
            <p className="mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              {project.description}
            </p>

            <div className="mb-6">
              <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
                Duration & Team
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                This project was completed over {project.duration} with a team
                of {project.teamSize}{" "}
                {project.teamSize === 1 ? "person" : "people"}.
              </p>
            </div>
          </div>
        </div>

        {/* Technologies */}
        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
            Technologies Used
          </h2>
          <div className="rounded-lg bg-white p-8 shadow-lg dark:bg-gray-800">
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="rounded-lg bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Key Achievements */}
        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
            Key Achievements
          </h2>
          <div className="rounded-lg bg-white p-8 shadow-lg dark:bg-gray-800">
            <ul className="space-y-4">
              {project.achievements.map((achievement, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-emerald-500"></div>
                  <p className="text-gray-700 dark:text-gray-300">
                    {achievement}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Skills Learned */}
        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
            Skills & Lessons Learned
          </h2>
          <div className="rounded-lg bg-white p-8 shadow-lg dark:bg-gray-800">
            <ul className="space-y-4">
              {project.skillsLearned.map((skill, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-teal-500"></div>
                  <p className="text-gray-700 dark:text-gray-300">{skill}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Navigation to other projects */}
        <div className="border-t border-gray-200 pt-8 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-emerald-600 transition-colors hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300"
            >
              <ArrowLeft size={20} />
              View All Projects
            </Link>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-emerald-600 px-6 py-3 font-medium text-emerald-600 transition-colors hover:bg-emerald-50 dark:border-emerald-400 dark:text-emerald-400 dark:hover:bg-emerald-900/20"
              >
                <ExternalLink size={20} />
                Visit Project
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
