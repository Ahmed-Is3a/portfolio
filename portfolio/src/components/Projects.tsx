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
