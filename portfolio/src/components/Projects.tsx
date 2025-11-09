import ProjectCard from "./ProjectCard";
import EDashboard from "../assets/E-Dashboard.jpg";
import Medigate from "../assets/medigate.png";

export default function Projects() {
  return (
    <section>
      <div className="bg-background-light dark:bg-background-dark font-display text-base">
        <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
          <div className="layout-container flex h-full grow flex-col">
            <div className="px-4 sm:px-10 md:px-20 lg:px-40 flex flex-1 justify-center py-5">
              <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                <div className="flex-1">
                  <div className="flex flex-wrap justify-between gap-3 p-4 pt-12">
                    <div className="flex min-w-72 flex-col gap-3">
                      <p className="text-slate-900 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">
                        Featured Projects
                      </p>
                      <p className="text-slate-500 dark:text-[#90a4cb] text-base font-normal leading-normal">
                        A selection of my work. Feel free to explore.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3 p-3 flex-wrap pr-4">
                    <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#0d59f2]/20 dark:bg-[#222f49] pl-4 pr-4 cursor-pointer">
                      <p className="text-[#0d59f2] dark:text-white text-sm font-medium leading-normal">
                        All
                      </p>
                    </div>
                    <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-slate-200 dark:bg-[#222f49] pl-4 pr-4 cursor-pointer">
                      <p className="text-slate-600 dark:text-white text-sm font-medium leading-normal">
                        React
                      </p>
                    </div>
                    <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-slate-200 dark:bg-[#222f49] pl-4 pr-4 cursor-pointer">
                      <p className="text-slate-600 dark:text-white text-sm font-medium leading-normal">
                        Python
                      </p>
                    </div>
                    <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-slate-200 dark:bg-[#222f49] pl-4 pr-4 cursor-pointer">
                      <p className="text-slate-600 dark:text-white text-sm font-medium leading-normal">
                        Next.js
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-4">
                    <ProjectCard
                      title="E-commerce Analytics Dashboard"
                      description="A comprehensive dashboard for visualizing sales data
                          and customer behavior."
                      imageUrl={EDashboard}
                      tags={["Django", "Python", "PostgreSQL", "Tailwind"]}
                    />
                    
                    <ProjectCard
                      title="Medigate is a Medical appointment booking system"
                      description="A full-stack Django application for scheduling and managing client appointments, featuring authentication, availability management, and admin dashboard."
                      imageUrl={Medigate}
                      tags={["Django", "Python", "PostgreSQL", "Tailwind", "REST API"]}
                      projectUrl="https://medigate-sd.com"
                    />
                    <div className="flex flex-col gap-4 p-4 rounded-xl bg-white dark:bg-[#151c2c] border border-slate-200 dark:border-[#222f49] shadow-sm hover:shadow-lg transition-shadow duration-300">
                      <div
                        className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
                        data-alt="Abstract image representing code for an API library"
                        style={{
                          backgroundImage:
                            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB_w2oQig8DM0emJ0_sY1n2tLLS0dc6ABp5f4DpPJtcWS77Mwf0XLOygbqQEdu2BVd1_WCjgiuG4CpR5DftQTh7au80d9uxQMylbywU6nB975gCj2DgiNSKQcwXeg_cTtp7jNB5DpbkWzexnBZZjPXq9wN9r_L7-ZDLnZRB4zNIijNhqpWKUpL3FM6tulr7RZRhwUZvDDEtBm8jDX3f7MDOh-ANN3XqRC27x6M4BHmJBHidw9b5kUqDWzmf1pOOlE1czRWjm0oUZBC9')",
                        }}
                      ></div>
                      <div className="flex flex-col gap-3">
                        <p className="text-slate-900 dark:text-white text-base font-bold leading-normal">
                          Open Source API Library
                        </p>
                        <p className="text-slate-500 dark:text-[#90a4cb] text-sm font-normal leading-normal">
                          A lightweight Python library for interacting with a
                          popular third-party API.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="text-xs font-medium text-[#0d59f2] dark:text-blue-300 bg-[#0d59f2]/20 dark:bg-blue-900/50 px-2 py-1 rounded-full">
                            Python
                          </span>
                          <span className="text-xs font-medium text-[#0d59f2] dark:text-blue-300 bg-[#0d59f2]/20 dark:bg-blue-900/50 px-2 py-1 rounded-full">
                            Requests
                          </span>
                          <span className="text-xs font-medium text-[#0d59f2] dark:text-blue-300 bg-[#0d59f2]/20 dark:bg-blue-900/50 px-2 py-1 rounded-full">
                            Pytest
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 mt-2">
                        <a
                          className="flex items-center gap-2 text-sm font-medium text-[#0d59f2] dark:text-blue-400 hover:underline"
                          href="#"
                        >
                          <span className="material-symbols-outlined text-base">
                            link
                          </span>
                          View on PyPI
                        </a>
                        <a
                          className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:underline"
                          href="#"
                        >
                          <span className="material-symbols-outlined text-base">
                            code
                          </span>
                          GitHub
                        </a>
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
