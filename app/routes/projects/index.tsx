import ProjectCard from "~/components/ProjectCard";
import type { Route } from "../+types";
import type { Project } from "~/types";
import { useState } from "react";
import Pagination from "~/components/Pagination";

export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ projects: Project[] }> {
  const res = await fetch("http://localhost:8000/projects");
  const data = await res.json();

  return { projects: data };
}

const Projects = ({ loaderData }: Route.ComponentProps) => {
  const { projects } = loaderData as unknown as { projects: Project[] };
  const [currentPage, setCurrentPage] = useState(1);
  const projectPerPage = 2;

  // calculate total pages
  const totalPages = Math.ceil(projects.length / projectPerPage);

  // get currentpages project
  const indexOfLast = currentPage * projectPerPage;
  const indexOfFirst = indexOfLast - projectPerPage;

  const currentProjects = projects.slice(indexOfFirst, indexOfLast);

  return (
    <>
      <h2 className="text-3xl text-white font-bold mb-8">Projects</h2>

      <div className="grid gap-6 sm:grid-cols-2 ">
        {currentProjects.map((project): any => (
          <ProjectCard project={project} />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </>
  );
};

export default Projects;
