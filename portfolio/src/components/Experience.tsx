export default function Experience() {
  return (
    <section id="experience" className="bg-white">
      <div className="font-display bg-background-light dark:bg-background-dark">
        <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
          <div className="layout-container flex h-full grow flex-col">
           
            <div className="flex-1 px-4 sm:px-6 lg:px-12 py-10 lg:py-16">
              <div className="mx-auto flex max-w-7xl flex-col gap-12 lg:gap-16">
                <div className="flex flex-wrap items-start justify-between gap-6">
                  <div className="flex flex-col gap-3">
                    <h1 className="text-gray-900 dark:text-white text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">
                      Experience &amp; Skills
                    </h1>
                    <p className="text-gray-600 dark:text-[#90a4cb] text-base md:text-lg font-normal leading-normal">
                      A detailed overview of my professional journey, technical
                      skills, and educational background.
                    </p>
                  </div>
                  <button className="flex min-w-[84px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-11 px-5 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] transition-colors hover:bg-primary/90">
                    <span className="material-symbols-outlined text-xl">
                      download
                    </span>
                    <span className="truncate">Download Résumé</span>
                  </button>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
                  <div className="lg:col-span-2 flex flex-col gap-10">
                    <h2 className="text-gray-900 dark:text-white text-2xl md:text-3xl font-bold leading-tight tracking-[-0.015em]">
                      Work Experience
                    </h2>
                    <div className="flex flex-col gap-8">
                      <div className="grid grid-cols-[auto_1fr] gap-x-4">
                        <div className="flex flex-col items-center gap-1 pt-1">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 dark:bg-[#222f49]">
                            <span className="material-symbols-outlined text-lg text-primary dark:text-blue-400">
                              domain
                            </span>
                          </div>
                          <div className="w-[2px] bg-gray-200 dark:bg-[#314368] flex-grow"></div>
                        </div>
                        <div className="flex flex-1 flex-col gap-2 pb-6">
                          <p className="text-gray-900 dark:text-white text-lg font-medium leading-normal">
                            Senior Frontend Engineer
                          </p>
                          <p className="text-gray-600 dark:text-[#90a4cb] text-base font-normal leading-normal">
                            TechSolutions Inc. | San Francisco, CA
                          </p>
                          <p className="text-gray-500 dark:text-[#7185aa] text-sm font-normal">
                            Jan 2022 - Present
                          </p>
                          <ul className="list-disc pl-5 mt-2 space-y-2 text-gray-600 dark:text-[#90a4cb]">
                            <li>
                              Led the architecture and development of a new
                              client-facing dashboard using React and
                              TypeScript, improving user engagement by 25%.
                            </li>
                            <li>
                              Mentored junior engineers, conducted code reviews,
                              and established best practices for frontend
                              development.
                            </li>
                            <li>
                              Collaborated with UX/UI designers to translate
                              complex requirements into intuitive and performant
                              user interfaces.
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="grid grid-cols-[auto_1fr] gap-x-4">
                        <div className="flex flex-col items-center gap-1 pt-1">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 dark:bg-[#222f49]">
                            <span className="material-symbols-outlined text-lg text-primary dark:text-blue-400">
                              code
                            </span>
                          </div>
                          <div className="w-[2px] bg-gray-200 dark:bg-[#314368] flex-grow"></div>
                        </div>
                        <div className="flex flex-1 flex-col gap-2 pb-6">
                          <p className="text-gray-900 dark:text-white text-lg font-medium leading-normal">
                            Software Engineer
                          </p>
                          <p className="text-gray-600 dark:text-[#90a4cb] text-base font-normal leading-normal">
                            Innovate Co. | Remote
                          </p>
                          <p className="text-gray-500 dark:text-[#7185aa] text-sm font-normal">
                            Jun 2019 - Dec 2021
                          </p>
                          <ul className="list-disc pl-5 mt-2 space-y-2 text-gray-600 dark:text-[#90a4cb]">
                            <li>
                              Developed and maintained features for a
                              large-scale e-commerce platform using Node.js,
                              Express, and PostgreSQL.
                            </li>
                            <li>
                              Improved API response times by 30% through
                              performance optimizations and database query
                              tuning.
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="grid grid-cols-[auto_1fr] gap-x-4">
                        <div className="flex flex-col items-center gap-1 pt-1">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 dark:bg-[#222f49]">
                            <span className="material-symbols-outlined text-lg text-primary dark:text-blue-400">
                              laptop_chromebook
                            </span>
                          </div>
                        </div>
                        <div className="flex flex-1 flex-col gap-2">
                          <p className="text-gray-900 dark:text-white text-lg font-medium leading-normal">
                            Junior Web Developer
                          </p>
                          <p className="text-gray-600 dark:text-[#90a4cb] text-base font-normal leading-normal">
                            WebStart LLC | Boston, MA
                          </p>
                          <p className="text-gray-500 dark:text-[#7185aa] text-sm font-normal">
                            May 2018 - May 2019
                          </p>
                          <ul className="list-disc pl-5 mt-2 space-y-2 text-gray-600 dark:text-[#90a4cb]">
                            <li>
                              Built responsive websites for small businesses
                              using HTML, CSS, and JavaScript.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-10">
                    <div className="flex flex-col gap-4">
                      <h2 className="text-gray-900 dark:text-white text-2xl md:text-3xl font-bold leading-tight tracking-[-0.015em]">
                        Skills
                      </h2>
                      <div className="flex flex-col gap-5 rounded-xl bg-gray-100 dark:bg-[#151d2c] p-5">
                        <div>
                          <h3 className="text-gray-700 dark:text-gray-300 font-bold mb-3">
                            Languages &amp; Frameworks
                          </h3>
                          <div className="flex gap-2 flex-wrap">
                            <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-white dark:bg-[#222f49] px-3">
                              <p className="text-gray-800 dark:text-white text-sm font-medium leading-normal">
                                JavaScript
                              </p>
                            </div>
                            <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-white dark:bg-[#222f49] px-3">
                              <p className="text-gray-800 dark:text-white text-sm font-medium leading-normal">
                                Python
                              </p>
                            </div>
                            <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-white dark:bg-[#222f49] px-3">
                              <p className="text-gray-800 dark:text-white text-sm font-medium leading-normal">
                                React
                              </p>
                            </div>
                            <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-white dark:bg-[#222f49] px-3">
                              <p className="text-gray-800 dark:text-white text-sm font-medium leading-normal">
                                Django
                              </p>
                            </div>
                            <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-white dark:bg-[#222f49] px-3">
                              <p className="text-gray-800 dark:text-white text-sm font-medium leading-normal">
                                Node.js
                              </p>
                            </div>
                            <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-white dark:bg-[#222f49] px-3">
                              <p className="text-gray-800 dark:text-white text-sm font-medium leading-normal">
                                Tailwind CSS
                              </p>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h3 className="text-gray-700 dark:text-gray-300 font-bold mb-3">
                            Databases &amp; DevOps
                          </h3>
                          <div className="flex gap-2 flex-wrap">
                            <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-white dark:bg-[#222f49] px-3">
                              <p className="text-gray-800 dark:text-white text-sm font-medium leading-normal">
                                MySQL
                              </p>
                            </div>
                            <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-white dark:bg-[#222f49] px-3">
                              <p className="text-gray-800 dark:text-white text-sm font-medium leading-normal">
                                PostgreSQL
                              </p>
                            </div>
                            <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-white dark:bg-[#222f49] px-3">
                              <p className="text-gray-800 dark:text-white text-sm font-medium leading-normal">
                                Docker
                              </p>
                            </div>
                            <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-white dark:bg-[#222f49] px-3">
                              <p className="text-gray-800 dark:text-white text-sm font-medium leading-normal">
                                Celery
                              </p>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h3 className="text-gray-700 dark:text-gray-300 font-bold mb-3">
                            Tools
                          </h3>
                          <div className="flex gap-2 flex-wrap">
                            <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-white dark:bg-[#222f49] px-3">
                              <p className="text-gray-800 dark:text-white text-sm font-medium leading-normal">
                                Figma
                              </p>
                            </div>
                            <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-white dark:bg-[#222f49] px-3">
                              <p className="text-gray-800 dark:text-white text-sm font-medium leading-normal">
                                Git
                              </p>
                            </div>
                            <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-white dark:bg-[#222f49] px-3">
                              <p className="text-gray-800 dark:text-white text-sm font-medium leading-normal">
                                GitHub
                              </p>
                            </div>
                           
                            <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-white dark:bg-[#222f49] px-3">
                              <p className="text-gray-800 dark:text-white text-sm font-medium leading-normal">
                                Notion
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-4">
                      <h2 className="text-gray-900 dark:text-white text-2xl md:text-3xl font-bold leading-tight tracking-[-0.015em]">
                        Education
                      </h2>
                      <div className="flex flex-col gap-4 rounded-xl bg-gray-100 dark:bg-[#151d2c] p-5">
                        <div className="flex items-start gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 dark:bg-[#222f49] mt-1">
                            <span className="material-symbols-outlined text-xl text-primary dark:text-blue-400">
                              school
                            </span>
                          </div>
                          <div>
                            <p className="text-gray-900 dark:text-white font-semibold">
                              B.S. in Telecommunications Engineering
                            </p>
                            <p className="text-gray-600 dark:text-[#90a4cb]">
                              Al-Neelain University
                            </p>
                            <p className="text-gray-500 dark:text-[#7185aa] text-sm">
                              Graduated November 2025
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
