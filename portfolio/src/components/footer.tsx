
function footer() {
  return (
        <footer className="bg-background-light dark:bg-background-dark font-display flex flex-col gap-8 px-5 py-10 text-center @container border-t border-solid border-gray-200/80 dark:border-white/10 mt-auto">
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
                    © 2024 Ahmed Issa. All rights reserved.
                  </p>
                </footer>
  )
}

export default footer