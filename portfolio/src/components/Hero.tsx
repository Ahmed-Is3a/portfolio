import Ahmed from '../assets/ahmed_issa.png';

export default function Hero() {
  return (
  
      <div className="font-display bg-background-light dark:bg-background-dark">
        <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
          <div className="layout-container flex h-full grow flex-col">
            <div className="flex flex-1 justify-center px-4 sm:px-8 md:px-10 lg:px-20 xl:px-40 py-5">
              <div className="layout-content-container flex flex-col w-full max-w-6xl flex-1">
                <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-gray-200/80 dark:border-white/10 px-6 py-4">
                  <div className="flex items-center gap-4 text-text-light-primary dark:text-text-dark-primary">
                    <div className="size-6 text-primary">
                      <svg
                        fill="none"
                        viewBox="0 0 48 48"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          clip-rule="evenodd"
                          d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z"
                          fill="currentColor"
                          fill-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">
                      Ahmed Issa
                    </h2>
                  </div>
                  <div className="hidden md:flex flex-1 justify-end gap-8">
                    <nav className="flex items-center gap-9">
                      <a
                        className="text-text-light-secondary dark:text-text-dark-secondary hover:text-primary dark:hover:text-primary text-sm font-medium leading-normal transition-colors"
                        href="#"
                      >
                        About Me
                      </a>
                      <a
                        className="text-text-light-secondary dark:text-text-dark-secondary hover:text-primary dark:hover:text-primary text-sm font-medium leading-normal transition-colors"
                        href="#"
                      >
                        Projects Showcase
                      </a>
                      <a
                        className="text-text-light-secondary dark:text-text-dark-secondary hover:text-primary dark:hover:text-primary text-sm font-medium leading-normal transition-colors"
                        href="#"
                      >
                        Skills &amp; Technologies
                      </a>
                      <a
                        className="text-text-light-secondary dark:text-text-dark-secondary hover:text-primary dark:hover:text-primary text-sm font-medium leading-normal transition-colors"
                        href="#"
                      >
                        Contact
                      </a>
                    </nav>
                  </div>
                  <div className="md:hidden">
                    <button className="text-text-light-primary dark:text-text-dark-primary">
                      <span className="material-symbols-outlined text-3xl">
                        menu
                      </span>
                    </button>
                  </div>
                </header>
                <main className="flex-grow">
                  <div className="@container">
                    <div className="flex flex-col-reverse gap-10 px-4 py-16 md:flex-row md:items-center md:gap-16 md:py-24">
                      <div className="flex flex-col gap-8 md:w-1/2">
                        <div className="flex flex-col gap-4 text-left">
                          <h1 className="text-text-light-primary dark:text-text-dark-primary text-4xl font-black leading-tight tracking-[-0.033em] sm:text-5xl">
                            Hi, I'm Ahmed Issa
                          </h1>
                          <h2 className="text-primary text-lg font-medium leading-normal sm:text-xl">
                            Full-Stack Developer
                          </h2>
                          <p className="text-text-light-secondary dark:text-text-dark-secondary text-base font-normal leading-relaxed sm:text-lg">
                            I'm a passionate software engineer specializing in
                            building modern and intuitive web applications.
                          </p>
                        </div>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                          <a
                            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity"
                            href="#projects"
                          >
                            <span className="truncate">View Projects</span>
                          </a>
                        </div>
                      </div>
                      <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                        <div
                          className="w-full max-w-sm sm:max-w-md aspect-square bg-center bg-no-repeat bg-cover rounded-full"
                          data-alt="Professional headshot of Ahmed Issa, a software engineer, smiling in a well-lit office environment."
                          style={{
                            backgroundImage: `url(${Ahmed})`,
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </main>
                <footer className="flex flex-col gap-8 px-5 py-10 text-center @container border-t border-solid border-gray-200/80 dark:border-white/10 mt-auto">
                  <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
                    <a
                      className="text-text-light-secondary dark:text-text-dark-secondary hover:text-primary dark:hover:text-primary text-base font-medium leading-normal transition-colors"
                      href="#"
                    >
                      About Me
                    </a>
                    <a
                      className="text-text-light-secondary dark:text-text-dark-secondary hover:text-primary dark:hover:text-primary text-base font-medium leading-normal transition-colors"
                      href="#"
                    >
                      Projects Showcase
                    </a>
                    <a
                      className="text-text-light-secondary dark:text-text-dark-secondary hover:text-primary dark:hover:text-primary text-base font-medium leading-normal transition-colors"
                      href="#"
                    >
                      Skills &amp; Technologies
                    </a>
                    <a
                      className="text-text-light-secondary dark:text-text-dark-secondary hover:text-primary dark:hover:text-primary text-base font-medium leading-normal transition-colors"
                      href="#"
                    >
                      Contact
                    </a>
                  </div>
                  <p className="text-text-light-secondary dark:text-text-dark-secondary text-sm font-normal leading-normal">
                    © 2024 John Doe. All rights reserved.
                  </p>
                </footer>
              </div>
            </div>
          </div>
        </div>
      </div>  
  );
}
