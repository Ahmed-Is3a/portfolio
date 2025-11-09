export default function ProjectCard({
  title,
  description,
  imageUrl,
  tags,
    projectUrl,
}: {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
    projectUrl?: string;
}) {
  return (
    <div className="flex flex-col gap-4 p-4 rounded-xl bg-white dark:bg-[#151c2c] border border-slate-200 dark:border-[#222f49] shadow-sm hover:shadow-lg transition-shadow duration-300">
      <div
        className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
        data-alt="Screenshot of an e-commerce analytics dashboard with charts and graphs"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <div className="flex flex-col gap-3">
        <p className="text-slate-900 dark:text-white text-base font-bold leading-normal">
          {title}
        </p>
        <p className="text-slate-500 dark:text-[#90a4cb] text-sm font-normal leading-normal">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
          <span className="text-xs font-medium text-[#0d59f2] dark:text-blue-300 bg-[#0d59f2]/20 dark:bg-blue-900/50 px-2 py-1 rounded-full">
            {tag}
          </span>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-4 mt-2">
        <a
          className="flex items-center gap-2 text-sm font-medium text-[#0d59f2] dark:text-blue-400 hover:underline"
          href={projectUrl || "#"}
        >
          <span className="material-symbols-outlined text-base">link</span>
          Live
        </a>
        <a
          className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:underline"
          href="#"
        >
          <span className="material-symbols-outlined text-base">code</span>
          GitHub
        </a>
      </div>
    </div>
  );
}
