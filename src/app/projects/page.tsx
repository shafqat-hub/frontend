import ProjectCard1 from "@/components/projects/cards/ProjectCard1"
import ProjectCard2 from "@/components/projects/cards/ProjectCard2"
import ProjectCard3 from "@/components/projects/cards/ProjectCard3"
import ProjectCard4 from "@/components/projects/cards/ProjectCard4"
import ProjectTable from "@/components/projects/ProjectTable"

export default function ProjectsPage() {
  return (
    <div className="space-y-8">
      {/* Top Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <ProjectCard1 />
        <ProjectCard2 />
        <ProjectCard3 />
        <ProjectCard4 />
      </div>

      {/* Table */}
      <div>
        <h2 className="text-xl font-bold mb-4">Projects List</h2>
        <ProjectTable />
      </div>
    </div>
  )
}
