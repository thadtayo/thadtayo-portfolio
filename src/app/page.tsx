import Blog from "./Blog";
import Experiences from "./Experiences";
import Hero from "./Hero";
import Hobbies from "./Hobbies";
import Projects from "./Projects";

export default function Home() {
  return (
    <div className="py-12">
      <Hero />
      <Experiences />
      <Projects />
      <Blog />
      <Hobbies />
    </div>
  );
}
