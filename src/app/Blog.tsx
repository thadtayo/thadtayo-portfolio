import Button from "./Button";
import Section from "./Section";

const Blog = () => {
  return (
    <div className="my-48">
      <Section title="11. Blog" id="blog">
        <div className="flex flex-col items-center gap-4">
          <p className="max-w-xl text-lg">
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
