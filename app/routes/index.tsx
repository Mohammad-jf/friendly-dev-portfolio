import type { Route } from "./+types/index";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Friendly dev | Wellcome" },
    { name: "description", content: "Custom website development" },
  ];
}
export default function Home() {
  console.log("hello from home");
  return (
    <section>
    </section>
  );
}
