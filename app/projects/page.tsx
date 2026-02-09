import { ProjectCover } from "@/components/project"

import type { ProjectPreview } from "@/config/types"

const projects: ProjectPreview[] = [
  {
    name: "Internet Communication Exchange (ICX)",
    genre: "Desktop application",
    description: "IRC: recreated for the 21st century.",
    img: {
      src: "icx.png",
      alt: "Screenshot of an ICX chatroom",
      height: 384
    },
    url: "https://github.com/logandhillon/icx/",
    className: "bg-gradient-to-b from-emerald-400 to-emerald-50 text-black",
    downloadable: true
  }
]

export default function Page() {
  return (
    <section
      className="min-h-screen px-8 py-8 space-y-8 bg-neutral-100">
      <div className="space-y-1">
        <h1 className="text-3xl font-semibold">All Projects</h1>
        <p className="text-sm">This page serves as an index for all my projects.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 ">
        {projects.map((p, i) => <ProjectCover key={i} project={p}/>)}
      </div>
    </section>
  );
}
