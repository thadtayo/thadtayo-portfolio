import Experience from "./Experience";
import Section from "./Section";

const Experiences = () => {
  return (
    <Section title="01. Experience">
      <Experience
        title="Senior Software Engineer"
        location="Capital One"
        date="2022 - Now"
        skills={[
          "React",
          "React Native",
          "GraphQL",
          "NeptuneDB",
          "Python / Flask",
          "Node / Express",
          "Typescript",
          "Java / Spring Boot",
          "AWS",
          "Kafka",
        ]}
      >
        <p className="mb-4">
          Currently working on Capital One’s internal incident management
          platform as a full-stack engineer. Previously worked on the credit
          card fraud response systems team to do back-end
          microservice-architected actioning on bajillions of transactions
          daily. I’ve led high-scale intents for both teams, coordinating across
          several domains. I contribute to on-call shifts, and am getting pretty
          good at late-night debugging detective work, if I do say so myself.
        </p>
        <p>
          I’ve also delivered presentations at Capital One’s SECON (Software
          Engineering Conference) to hundreds of attendees, and was granted a
          patent in internal security vulnerability remediation.
        </p>
      </Experience>

      <Experience
        title="Owner / Founder"
        location="Bloom Technologies"
        date="2021 - Now"
        skills={[
          "React",
          "Next.js",
          "PlanetScale",
          "Prisma",
          "Typescript",
          "AWS",
          "MySQL",
          "Tailwind",
          "Stripe",
          "Twilio",
          "SendGrid",
        ]}
        reverse={true}
      >
        <p className="mb-4">
          This is my child: Bloom Technologies. What was once a small business
          consulting agency (meeting with business owners and building them
          websites) has become a software company. Our first SaaS product --
          Bloom Bookings -- released in April of 2023. To run Bloom
          Technologies, I lead a small team of 2 go-getters who wear more hats
          than I can fit on my head.
        </p>
        <p>
          We aim to be a software company not riddled by archaic enterprise
          practices that inevitably slow down what matters most: releasing. We
          are a customer-oriented business, and actively seek feedback.
        </p>
      </Experience>
    </Section>
  );
};

export default Experiences;
