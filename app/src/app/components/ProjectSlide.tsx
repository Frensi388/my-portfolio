"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { type Project } from "@/data/projects";

import MediaItem from "./MediaItem";
import ProjectCover from "./ProjectCover";

const ProjectSlide = (props: { project: Project }) => {
  const mediaFiles = props.project.media;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="group cursor-pointer overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-gray-800">
          <div className="relative aspect-[16/9] overflow-hidden">
            <ProjectCover
              media={mediaFiles[0]}
              fallbackSrc={props.project.images[0]}
              fallbackAlt={props.project.title}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {props.project.featured && (
              <div className="absolute right-3 top-3 rounded-full bg-yellow-500 px-2 py-1 text-xs font-medium text-white">
                Featured
              </div>
            )}
          </div>

          <div className="p-6">
            <div className="mb-3">
              <h3 className="mb-1 text-lg font-bold text-gray-900 transition-colors group-hover:text-emerald-600 dark:text-white dark:group-hover:text-emerald-400">
                {props.project.title}
              </h3>
              {props.project.company && (
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {props.project.company}
                </p>
              )}
            </div>

            <div className="mb-3 flex items-center gap-2 text-xs">
              <span className="rounded-full bg-emerald-100 px-2 py-1 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300">
                {props.project.role}
              </span>
              <span className="rounded-full bg-gray-100 px-2 py-1 text-gray-700 dark:bg-gray-700 dark:text-gray-300">
                {props.project.duration}
              </span>
            </div>

            <p className="mb-4 line-clamp-2 text-sm text-gray-600 dark:text-gray-300">
              {props.project.description}
            </p>

            <div className="flex flex-wrap gap-1">
              {props.project.technologies.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="rounded-md bg-gray-100 px-2 py-1 text-xs text-gray-600 dark:bg-gray-700 dark:text-gray-400"
                >
                  {tech}
                </span>
              ))}
              {props.project.technologies.length > 4 && (
                <span className="rounded-md bg-gray-100 px-2 py-1 text-xs text-gray-600 dark:bg-gray-700 dark:text-gray-400">
                  +{props.project.technologies.length - 4} more
                </span>
              )}
            </div>
          </div>
        </div>
      </DialogTrigger>

      <DialogContent className="max-h-[85vh] max-w-5xl overflow-hidden">
        <DialogHeader className="pb-2">
          <DialogTitle className="text-xl font-bold">
            {props.project.title}
          </DialogTitle>
          {props.project.company && (
            <p className="text-sm text-muted-foreground">
              {props.project.company}
            </p>
          )}
        </DialogHeader>

        <div className="grid h-full grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="space-y-3">
            <div className="flex justify-center">
              <div className="relative w-80 max-w-full overflow-hidden">
                <Carousel>
                  <CarouselContent className="ml-0">
                    {mediaFiles.map((media, index) => (
                      <CarouselItem key={index}>
                        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg">
                          <MediaItem
                            src={media.src}
                            alt={media.alt}
                            type={media.type}
                            className={
                              media.type === "video"
                                ? "h-full w-full object-cover"
                                : "object-cover"
                            }
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="absolute top-1/2 -translate-y-1/2" />
                  <CarouselNext className="absolute top-1/2 -translate-y-1/2" />
                </Carousel>
              </div>
            </div>

            <div className="flex flex-wrap gap-1">
              <span className="rounded-full bg-emerald-100 px-2 py-1 text-xs text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300">
                {props.project.role}
              </span>
              <span className="rounded-full bg-green-100 px-2 py-1 text-xs text-green-800 dark:bg-green-900/30 dark:text-green-300">
                {props.project.duration}
              </span>
              <span className="rounded-full bg-teal-100 px-2 py-1 text-xs text-teal-800 dark:bg-teal-900/30 dark:text-teal-300">
                Team of {props.project.teamSize}
              </span>
            </div>

            <div>
              <p className="mb-1 text-xs text-muted-foreground">
                <span className="font-medium">Domain:</span>{" "}
                {props.project.domain}
              </p>
              <p className="text-sm leading-relaxed">
                {props.project.description}
              </p>
            </div>

            <div className="flex gap-2">
              {props.project.liveUrl && (
                <a
                  href={props.project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 rounded-lg bg-emerald-600 px-3 py-2 text-center text-sm font-medium text-white transition-colors hover:bg-emerald-700"
                >
                  Live Project
                </a>
              )}
            </div>
          </div>

          <div className="space-y-3">
            <div>
              <h3 className="mb-2 text-sm font-semibold">Technologies</h3>
              <div className="flex flex-wrap gap-1">
                {props.project.technologies.slice(0, 8).map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-gray-100 px-2 py-1 text-xs dark:bg-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-2 text-sm font-semibold">Key Achievements</h3>
              <ul className="space-y-1">
                {props.project.achievements
                  .slice(0, 3)
                  .map((achievement, index) => (
                    <li key={index} className="flex items-start text-xs">
                      <span className="mr-1 mt-1 text-emerald-500">•</span>
                      <span className="leading-tight">{achievement}</span>
                    </li>
                  ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-2 text-sm font-semibold">Skills & Lessons</h3>
              <ul className="space-y-1">
                {props.project.skillsLearned.slice(0, 3).map((skill, index) => (
                  <li key={index} className="flex items-start text-xs">
                    <span className="mr-1 mt-1 text-green-500">•</span>
                    <span className="leading-tight">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectSlide;
