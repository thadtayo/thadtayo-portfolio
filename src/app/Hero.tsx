import Button from "./Button";
import Section from "./Section";

const Hero = () => {
  return (
    <Section title="00. Introductions">
      <div className="h-[50vh] flex flex-col justify-around items-center text-center gap-8 my-12">
        <div className="flex flex-col gap-4">
          <h1 className="text-7xl">Thad Tayo</h1>
          <h2 className="text-4xl">
            Software engineer. Cat dad. Dark mode enthusiast.
          </h2>
        </div>
        <div className="text-left max-w-5xl text-lg">
          <p>
            In the 4th grade, I tried making an{" "}
            <span className="underline decoration-dotted">
              <a
                href="https://robloxden.com/dictionary/obby"
                target="_blank"
                rel="noopener noreferrer"
              >
                obby
              </a>
            </span>
            . I didn&apos;t realize it at the time (partially because I was
            copying all the code from a YouTuber), but that was my first
            experience with programming. Fast-forward to today, I&apos;m still
            copying code from YouTubers. But at least I&apos;ve done it to make
            cooler things now.
          </p>
          <p>
            I love engineering in all facets: full-stack, data engineering,
            cloud architecture. As a result, I&apos;ve built everything from
            SaaS startups, consumer apps, video games, and more.
          </p>
        </div>
        <Button text="See Full Resume" href="#" />
      </div>
    </Section>
  );
};

export default Hero;
