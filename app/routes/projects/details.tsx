import type { Route } from "./+types/details";
import type { Project } from "~/types";

export async function clientLoader({
  request,
  params,
}: Route.ClientLoaderArgs): Promise<Project> {
  const { id } = params;
  const res = await fetch(`http://localhost:8000/projects/${id}`);
  if (!res.ok) throw new Response("project not found", { status: 404 });

  const project: Project = await res.json();

  return project;
}

export function HydrateFallback() {
  return <div>Loading...</div>;
}

const ProjectDetails = ({ loaderData }: Route.ComponentProps) => {
  const project = loaderData;

  console.log(project);
  return <>project detail</>;
};

export default ProjectDetails;
