export default function Projects() {
  return (
    <section>
      <div className="bg-background-light dark:bg-background-dark font-display text-base">
        <div
          className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden"
        >
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
                        AWS
                      </p>
                    </div>
                    <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-slate-200 dark:bg-[#222f49] pl-4 pr-4 cursor-pointer">
                      <p className="text-slate-600 dark:text-white text-sm font-medium leading-normal">
                        Next.js
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-4">
                    <div className="flex flex-col gap-4 p-4 rounded-xl bg-white dark:bg-[#151c2c] border border-slate-200 dark:border-[#222f49] shadow-sm hover:shadow-lg transition-shadow duration-300">
                      <div
                        className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
                        data-alt="Screenshot of an e-commerce analytics dashboard with charts and graphs"
                        style={{
                          backgroundImage:
                            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCq-LOPUsiyHEZVp6P42ruGlEDwpbuufUrwCqgPvGwbbjDqf8jw9J1n2zvUqyKxfybfneVY1EPIb0VpxpmZXekR8jiy-Q_pbetzD6b3tDk8AXKeTJOR5i2h5AQ2lmvgCGhQCMt_DOdyTxA1aiYvCYLhB3DkcA4OeYKaIC3FjRAmTH7pBCRkAG14PML96CeIhTqvOYeuYORGxW1p1qWqURtOjuDtBJUX0TOVdJyAXBeEElzQ6y6p6oIRGQI55ktX_USzbyg079a07IVP')",
                        }}
                      ></div>
                      <div className="flex flex-col gap-3">
                        <p className="text-slate-900 dark:text-white text-base font-bold leading-normal">
                          E-commerce Analytics Dashboard
                        </p>
                        <p className="text-slate-500 dark:text-[#90a4cb] text-sm font-normal leading-normal">
                          A comprehensive dashboard for visualizing sales data
                          and customer behavior.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="text-xs font-medium text-[#0d59f2] dark:text-blue-300 bg-[#0d59f2]/20 dark:bg-blue-900/50 px-2 py-1 rounded-full">
                            React
                          </span>
                          <span className="text-xs font-medium text-[#0d59f2] dark:text-blue-300 bg-[#0d59f2]/20 dark:bg-blue-900/50 px-2 py-1 rounded-full">
                            TypeScript
                          </span>
                          <span className="text-xs font-medium text-[#0d59f2] dark:text-blue-300 bg-[#0d59f2]/20 dark:bg-blue-900/50 px-2 py-1 rounded-full">
                            D3.js
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
                          Live Demo
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
                    <div className="flex flex-col gap-4 p-4 rounded-xl bg-white dark:bg-[#151c2c] border border-slate-200 dark:border-[#222f49] shadow-sm hover:shadow-lg transition-shadow duration-300">
                      <div
                        className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
                        data-alt="Screenshot of a mobile weather application interface"
                        style={{
                          backgroundImage:
                            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA0MeW-Pz8c0fiXOZZzV6tWHFp5swyW3Yk2q4ZH9JdlAg4r42_LguRaoXuN_iTB6q3pQp1cYefXr0rp0CiJEA_4V25yQ44jFZu65ng5YRdw1ujwY3oWSVrobbnhYjuKRF_Q3tzskhO79CIMl2INdPV0RCvChBkUhiSr7KTmhNEkx-xOj6E-45P4XUNT06h_QArvKVkj9LgMql0osP6X9-SHqvNVazz3FLN2A7-Ykga-mYNu0HomHYb2YXxoSgZkL73l9oudGn8_lH79')",
                        }}
                      ></div>
                      <div className="flex flex-col gap-3">
                        <p className="text-slate-900 dark:text-white text-base font-bold leading-normal">
                          Mobile Weather Application
                        </p>
                        <p className="text-slate-500 dark:text-[#90a4cb] text-sm font-normal leading-normal">
                          A clean, modern weather app with real-time forecasts
                          and location tracking.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="text-xs font-medium text-[#0d59f2] dark:text-blue-300 bg-[#0d59f2]/20 dark:bg-blue-900/50 px-2 py-1 rounded-full">
                            React Native
                          </span>
                          <span className="text-xs font-medium text-[#0d59f2] dark:text-blue-300 bg-[#0d59f2]/20 dark:bg-blue-900/50 px-2 py-1 rounded-full">
                            Expo
                          </span>
                          <span className="text-xs font-medium text-[#0d59f2] dark:text-blue-300 bg-[#0d59f2]/20 dark:bg-blue-900/50 px-2 py-1 rounded-full">
                            API
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
                          Live Demo
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
                    <div className="flex flex-col gap-4 p-4 rounded-xl bg-white dark:bg-[#151c2c] border border-slate-200 dark:border-[#222f49] shadow-sm hover:shadow-lg transition-shadow duration-300">
                      <div
                        className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
                        data-alt="Interface of a real-time collaborative document editing tool"
                        style={{
                          backgroundImage:
                            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAkZvUwolcMFeT6QamF2WlJi3VPdYwUV6eJC_KIahxoccolaFs3kHwyD5VQtf0jg7pXUkkN7ttkEqova9kpP7z5-GiAbLzZFOH3-8UBlft15kiG4nhu7lQkrCGNvpbjq3WbVeeEQu_w-_WBq3AYyAHtf7oynKSaVhBXawiDjG04qsE-F4kbxi-Yak-y_lffT4qeZbppeVzBpeiDSPX8J7vPFcymtsQu3esduBZxpDFIYFGQQUDKGKe6ayOnfM0v3N8ZW4UFrdbQdMo3')",
                        }}
                      ></div>
                      <div className="flex flex-col gap-3">
                        <p className="text-slate-900 dark:text-white text-base font-bold leading-normal">
                          Real-time Collaboration Tool
                        </p>
                        <p className="text-slate-500 dark:text-[#90a4cb] text-sm font-normal leading-normal">
                          A web platform for teams to edit documents and share
                          ideas simultaneously.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="text-xs font-medium text-[#0d59f2] dark:text-blue-300 bg-[#0d59f2]/20 dark:bg-blue-900/50 px-2 py-1 rounded-full">
                            Next.js
                          </span>
                          <span className="text-xs font-medium text-[#0d59f2] dark:text-blue-300 bg-[#0d59f2]/20 dark:bg-blue-900/50 px-2 py-1 rounded-full">
                            WebSockets
                          </span>
                          <span className="text-xs font-medium text-[#0d59f2] dark:text-blue-300 bg-[#0d59f2]/20 dark:bg-blue-900/50 px-2 py-1 rounded-full">
                            AWS
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
                          Live Demo
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
