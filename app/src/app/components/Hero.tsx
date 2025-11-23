import Image from "next/image";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center justify-center pt-14 sm:pt-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Animated Background */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-gradient-to-r from-emerald-400/20 via-teal-400/20 to-cyan-400/20 blur-3xl"></div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Profile Image Section */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              {/* Profile Image */}
              <div className="h-48 w-48 overflow-hidden rounded-full border-4 border-white shadow-2xl dark:border-gray-800 sm:h-56 sm:w-56 md:h-64 md:w-64 lg:h-80 lg:w-80">
                <Image
                  src="/me/profile.jpeg"
                  alt="Frensi Muso - Full Stack Developer"
                  width={320}
                  height={320}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>

              {/* Floating Elements - smaller on mobile */}
              <div className="absolute -right-2 -top-2 flex h-10 w-10 animate-bounce items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-lg text-white sm:-right-3 sm:-top-3 sm:h-12 sm:w-12 sm:text-xl lg:-right-4 lg:-top-4 lg:h-16 lg:w-16 lg:text-2xl">
                💻
              </div>
              <div className="absolute -bottom-2 -left-2 flex h-8 w-8 animate-pulse items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-sm text-white sm:-bottom-3 sm:-left-3 sm:h-10 sm:w-10 sm:text-base lg:-bottom-4 lg:-left-4 lg:h-12 lg:w-12 lg:text-xl">
                🚀
              </div>
              <div
                className="absolute -left-4 top-1/2 flex h-8 w-8 animate-bounce items-center justify-center rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 text-sm text-white sm:-left-6 sm:h-9 sm:w-9 sm:text-base lg:-left-8 lg:h-10 lg:w-10"
                style={{ animationDelay: "0.5s" }}
              >
                ⚛️
              </div>
            </div>
          </div>

          {/* Text Content Section */}
          <div className="space-y-6 text-center lg:space-y-8 lg:text-left">
            {/* Greeting */}
            <div className="space-y-3 lg:space-y-4">
              <p className="animate-fade-in text-base font-medium text-emerald-600 dark:text-emerald-400 sm:text-lg">
                👋 Hello, I&apos;m
              </p>
              <h1 className="animate-slide-up text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                Frensi Muso
              </h1>
              <p className="mx-auto max-w-2xl animate-fade-in-delay text-base text-gray-600 dark:text-gray-300 sm:text-lg md:text-xl lg:mx-0 lg:max-w-3xl lg:text-2xl">
                A passionate Software Engineer based in Paris, France, crafting
                digital experiences with modern technologies
              </p>
            </div>

            {/* Skills Preview */}
            <div className="flex max-w-2xl animate-fade-in-delay-2 flex-wrap justify-center gap-2 lg:justify-start lg:gap-3">
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
                  className="rounded-full border border-gray-200 bg-white/80 px-3 py-1.5 text-xs font-medium text-gray-700 backdrop-blur-sm transition-transform duration-200 hover:scale-105 dark:border-gray-700 dark:bg-gray-800/80 dark:text-gray-300 sm:px-4 sm:py-2 sm:text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex animate-fade-in-delay-3 flex-col justify-center gap-3 sm:flex-row sm:gap-4 lg:justify-start">
              <a
                href="#projects"
                className="transform rounded-lg bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-200 hover:scale-105 hover:from-emerald-700 hover:to-teal-700 hover:shadow-xl sm:px-8 sm:py-4"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="transform rounded-lg border-2 border-gray-300 px-6 py-3 font-semibold text-gray-700 transition-all duration-200 hover:scale-105 hover:border-emerald-600 hover:text-emerald-600 dark:border-gray-600 dark:text-gray-300 dark:hover:border-emerald-400 dark:hover:text-emerald-400 sm:px-8 sm:py-4"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator - hidden on small screens to prevent overlap */}
        <div className="absolute bottom-4 left-1/2 hidden -translate-x-1/2 transform animate-bounce sm:bottom-8 sm:block">
          <div className="flex h-8 w-5 justify-center rounded-full border-2 border-gray-400 dark:border-gray-600 sm:h-10 sm:w-6">
            <div className="mt-1.5 h-2 w-0.5 animate-pulse rounded-full bg-gray-400 dark:bg-gray-600 sm:mt-2 sm:h-3 sm:w-1"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
