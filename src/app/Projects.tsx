import bloombookings from "../../public/bloombookings.png";
import Image from "next/image";
import Section from "./Section";
import Project from "./Project";

const Projects = () => {
  return (
    <Section title="10. Projects" id="projects">
      <Project
        title="Bloom Bookings"
        img={bloombookings}
        alt="Bloom Bookings"
        link="https://bloombookings.co"
      >
        <p>
          Calendar scheduling application for all use cases, built by Bloom
          Technologies (my software company). We’re the only scheduling software
          with a pay-as-you-go pricing model, enabling accessibility to small
          businesses or use cases of large scales.
        </p>
      </Project>
    </Section>
  );
};

export default Projects;
