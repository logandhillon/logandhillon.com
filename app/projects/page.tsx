import { ProjectCover } from "@/components/project"
import { PROJECTS } from "@/config/content";
import { ProjectPreview } from "@/config/types";

const categories = Array.from(
  new Set(PROJECTS.map(p => p.category).filter(Boolean))
);

const grouped: Record<string, ProjectPreview[]> = {
  ...Object.fromEntries(
    categories.map(cat => [
      cat,
      PROJECTS.filter(p => p.category === cat),
    ])
  ),
  Uncategorized: PROJECTS.filter(p => !p.category),
};

export default function Page() {
  return (
    <section
      className="min-h-screen px-8 py-8 space-y-8 bg-neutral-100">
      <div className="space-y-1">
        <h1 className="text-3xl font-semibold">All Projects</h1>
        <p className="text-sm">This page serves as an index for all my projects.</p>
      </div>

      {Object.entries(grouped).map(([category, projects]) => (
        <div key={category} className="space-y-4">
          <h2 className="text-xl font-semibold">{category}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {projects.map((p, i) => (
              <ProjectCover key={`${category}-${i}`} project={p}/>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
