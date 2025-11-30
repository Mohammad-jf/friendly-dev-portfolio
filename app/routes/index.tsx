import Hero from "~/components/Hero";
import type { Route } from "./+types/index";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Friendly dev | Wellcome" },
    { name: "description", content: "Custom website development" },
  ];
}
export default function Home() {
  return <section>Home Page</section>;
}
