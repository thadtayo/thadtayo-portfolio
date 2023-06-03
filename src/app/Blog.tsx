import Button from "./Button";
import Section from "./Section";

const Blog = () => {
  return (
    <div className="h-[20vh] my-12">
      <Section title="11. Blog">
        <div className="flex flex-col items-center gap-4">
          <p className="max-w-xl">
            I love talking, even when no one’s listening (just ask my cats).
            Sometimes interesting stuff comes out. Check out my blog where I
            capture those interesting snippets.
          </p>
          <Button text="Read My Blog" href="#" />
        </div>
      </Section>
    </div>
  );
};

export default Blog;
