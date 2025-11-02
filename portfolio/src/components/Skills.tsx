const SKILLS = ['TypeScript', 'JavaScript', 'Python', 'Django', 'React', 'Tailwind', 'Node.js', 'Rest API', 'Testing']

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Skills</h2>
        <div className="flex flex-wrap gap-3">
          {SKILLS.map((s) => (
            <span key={s} className="px-3 py-1.5 border rounded-full text-sm text-gray-700">{s}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
