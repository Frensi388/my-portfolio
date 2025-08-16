import Image from "next/image";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center justify-center pt-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Animated Background */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-gradient-to-r from-emerald-400/20 via-teal-400/20 to-cyan-400/20 blur-3xl"></div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Profile Image Section */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              {/* Profile Image */}
              <div className="h-64 w-64 overflow-hidden rounded-full border-4 border-white shadow-2xl dark:border-gray-800 lg:h-80 lg:w-80">
                <Image
                  src="https://cdn.sanity.io/images/vh1j19fm/production/abc63890bd0282557148d0497af2ce7a169960a0-1334x1600.jpg"
                  alt="Frensi Muso - Full Stack Developer"
                  width={320}
                  height={320}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>

              {/* Floating Elements */}
              <div className="absolute -right-4 -top-4 flex h-16 w-16 animate-bounce items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-2xl text-white">
                💻
              </div>
              <div className="absolute -bottom-4 -left-4 flex h-12 w-12 animate-pulse items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-xl text-white">
                🚀
              </div>
              <div
                className="absolute -left-8 top-1/2 flex h-10 w-10 animate-bounce items-center justify-center rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white"
                style={{ animationDelay: "0.5s" }}
              >
                ⚛️
              </div>
            </div>
          </div>

          {/* Text Content Section */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Greeting */}
            <div className="space-y-4">
              <p className="animate-fade-in text-lg font-medium text-emerald-600 dark:text-emerald-400">
                👋 Hello, I&apos;m
              </p>
              <h1 className="animate-slide-up text-5xl font-bold text-gray-900 dark:text-white md:text-7xl">
                Frensi Muso
              </h1>
              <p className="max-w-3xl animate-fade-in-delay text-xl text-gray-600 dark:text-gray-300 md:text-2xl">
                A passionate Software Engineer based in Paris, France, crafting
                digital experiences with modern technologies
              </p>
            </div>

            {/* Skills Preview */}
            <div className="flex max-w-2xl animate-fade-in-delay-2 flex-wrap justify-center gap-3 lg:justify-start">
              {[
                "React",
                "Node.js",
                "TypeScript",
                "Next.js",
                "Python",
                "AWS",
              ].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-gray-200 bg-white/80 px-4 py-2 text-sm font-medium text-gray-700 backdrop-blur-sm transition-transform duration-200 hover:scale-105 dark:border-gray-700 dark:bg-gray-800/80 dark:text-gray-300"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex animate-fade-in-delay-3 flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <a
                href="#projects"
                className="transform rounded-lg bg-gradient-to-r from-emerald-600 to-teal-600 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-200 hover:scale-105 hover:from-emerald-700 hover:to-teal-700 hover:shadow-xl"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="transform rounded-lg border-2 border-gray-300 px-8 py-4 font-semibold text-gray-700 transition-all duration-200 hover:scale-105 hover:border-emerald-600 hover:text-emerald-600 dark:border-gray-600 dark:text-gray-300 dark:hover:border-emerald-400 dark:hover:text-emerald-400"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 transform animate-bounce">
          <div className="flex h-10 w-6 justify-center rounded-full border-2 border-gray-400 dark:border-gray-600">
            <div className="mt-2 h-3 w-1 animate-pulse rounded-full bg-gray-400 dark:bg-gray-600"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
