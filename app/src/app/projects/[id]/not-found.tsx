import { ArrowLeft, FileX } from "lucide-react";
import Link from "next/link";

const ProjectNotFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 dark:bg-gray-900">
      <div className="text-center">
        <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
          <FileX className="h-12 w-12 text-gray-400" />
        </div>

        <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
          Project Not Found
        </h1>

        <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">
          The project you&apos;re looking for doesn&apos;t exist or has been
          moved.
        </p>

        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-6 py-3 font-medium text-white transition-colors hover:bg-emerald-700"
        >
          <ArrowLeft size={20} />
          Back to Projects
        </Link>
      </div>
    </div>
  );
};

export default ProjectNotFound;
