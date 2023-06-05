import Experience from "./Experience";
import Section from "./Section";

const Experiences = () => {
  return (
    <Section title="01. Experience" id="experiences">
      <Experience
        title="Senior Software Engineer"
        location="Capital One"
        date="Feb 2022 - Now"
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
        date="Jan 2021 - Now"
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

      <Experience
        title="Student Software Engineer"
        location="Rutgers University - New Brunswick"
        date="Sep 2019 - Feb 2022"
        skills={[
          "ML / AI",
          "Data Science",
          "Data Analytics",
          "Python",
          "Vue.js",
          "Electron",
          "Typescript",
        ]}
      >
        <p className="mb-4">
          Worked for Human Genetics Institute of New Jersey through Rutgers. Was
          responsible for designing and developing a data pipeline to automate
          ultrasonic vocalization analysis in mice. Parallely presented data
          reports for inferential analysis on genetics and behavior.
        </p>
        <p>
          I also contributed to a full-stack web application for allowing
          researchers to analyze in-house data with an interactive dashboard.
          Before leaving, I kickstarted the architecture for a new file sharing
          web application, designing core features such as Access Control Lists,
          authorization & authentication, database design, and more.
        </p>
      </Experience>

      <Experience
        title="Application & Software Development Intern"
        location="Colgate-Palmolive"
        date="Sep 2021 - Dec 2021"
        skills={[
          "Data Engineering",
          "PostgreSQL",
          "Kubernetes",
          "Google Cloud Platform",
          "Veeva & Veeva Vault",
          "Python / Flask",
        ]}
        reverse={true}
      >
        <p className="mb-4">
          I spearheaded the design & development of an extract, transform, load
          (ETL) system that migrated data from Veeva Vault to PostgreSQL with
          CRON jobs. I started from scratch, architecting the entire solution
          and presenting it, then built the ETL system and deployed to GCP with
          Kubernetes.
        </p>
      </Experience>

      <Experience
        title="Software Engineer Intern"
        location="Capital One"
        date="Jun 2021 - Aug 2021"
        skills={[
          "Data Engineering",
          "Apache Spark",
          "PySpark",
          "Snowflake",
          "Databricks",
          "AWS",
          "SQL",
          "React",
          "Node.js / Express",
          "MongoDB",
        ]}
      >
        <p className="mb-4">
          I worked on two projects. The first was my primary role: I worked with
          other interns to design and implement a data visualization dashboard
          for stakeholders on data warehouse usage reports. We built data
          pipelines to gather data and generate reports in real-time.
        </p>
        <p>
          On the side, I found a side-of-desk project from another team to
          generate dynamic data visualizations on an internal web application
          where I got to work on the MERN stack.
        </p>
      </Experience>

      <Experience
        title="Development Team Lead"
        location="Collab Learning - Rutgers University - New Brunswick"
        date="Feb 2021 - Aug 2021"
        skills={[
          "Node.js",
          "Javascript",
          "Python / Flask",
          "PostgreSQL",
          "React",
        ]}
        reverse={true}
      >
        <p className="mb-4">
          This was a student-run project through an entrepreneurial club, and my
          first exposure to leading a development team. I supervised a team to
          build a Minimum Viable Product for an online learning platform startup
          aimed towards helping university students with visual learning. I
          organized weekly meetings, providing technical guidance as well as
          planning and executing future development plans, while obviously
          contributing heavily to the codebase.
        </p>
        <p className="mb-4">
          We pitched the idea to a few incubator / accelerator programs within
          the EdTech space, particularly within the Rutgers University
          ecosystem. Unfortunately, it didn't go anywhere, but it was a fun time
          while it lasted.
        </p>
      </Experience>
    </Section>
  );
};

export default Experiences;
