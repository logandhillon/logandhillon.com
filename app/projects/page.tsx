import { ProjectCover } from "@/components/project"

export default function Page() {
  return (
    <section
      className="min-h-screen px-8 py-8 space-y-8 bg-neutral-100">
      <div className="space-y-1">
        <h1 className="text-3xl font-semibold">All Projects</h1>
        <p className="text-sm">This page serves as an index for all my projects.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 ">
        <ProjectCover
          title="Internet Communication Exchange (ICX)"
          genre="Desktop application"
          description="IRC: recreated for the 21st century."
          imgPath="icx.png"
          href="https://github.com/logandhillon/icx/"
          className="bg-gradient-to-b from-emerald-400 to-emerald-50 text-black"
          imgHeight={384}
          isDownload
        />
      </div>
    </section>
  );
}
