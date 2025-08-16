"use client";

const Contact = () => {
  return (
    <section id="contact" className="bg-white py-20 dark:bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
            Let&apos;s Connect
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600 dark:text-gray-300">
            I&apos;m always interested in hearing about new opportunities,
            interesting projects, or just having a chat about technology and
            development.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="mx-auto max-w-4xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Email Card */}
            <div className="group rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-600 p-8 text-white transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
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
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold">Email</h3>
              <p className="mb-4 text-emerald-100">Drop me a line anytime</p>
              <a
                href="mailto:frensimuso2000@gmail.com"
                className="inline-block transform rounded-lg bg-white/20 px-4 py-2 text-sm font-medium transition-all duration-200 hover:scale-105 hover:bg-white/30"
              >
                frensimuso2000@gmail.com
              </a>
            </div>

            {/* Phone Card */}
            <div className="group rounded-2xl bg-gradient-to-br from-gray-600 to-gray-700 p-8 text-white transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
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
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold">Phone</h3>
              <p className="mb-4 text-gray-300">
                Let&apos;s have a conversation
              </p>
              <a
                href="tel:+33753024373"
                className="inline-block transform rounded-lg bg-white/20 px-4 py-2 text-sm font-medium transition-all duration-200 hover:scale-105 hover:bg-white/30"
              >
                +33 7 53 02 43 73
              </a>
            </div>

            {/* LinkedIn Card */}
            <div className="group rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 p-8 text-white transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.328v15.344C1 18.4 1.595 19 2.328 19h15.34c.734 0 1.332-.6 1.332-1.328V2.328C19 1.581 18.4 1 17.668 1z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold">LinkedIn</h3>
              <p className="mb-4 text-blue-100">Connect professionally</p>
              <a
                href="www.linkedin.com/in/frensi-muso-bb8aab28b"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block transform rounded-lg bg-white/20 px-4 py-2 text-sm font-medium transition-all duration-200 hover:scale-105 hover:bg-white/30"
              >
                View Profile
              </a>
            </div>
          </div>

          {/* Availability Status */}
          {/* <div className="mt-12 text-center">
            <div className="inline-flex items-center rounded-2xl border border-green-200 bg-green-50 px-6 py-4 dark:border-green-800 dark:bg-green-900/20">
              <div className="mr-3 h-3 w-3 animate-pulse rounded-full bg-green-500"></div>
              <div>
                <span className="font-semibold text-green-800 dark:text-green-400">
                  Currently Available
                </span>
                <span className="ml-2 text-sm text-green-600 dark:text-green-300">
                  • Open to new opportunities and collaborations
                </span>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
