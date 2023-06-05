import Section from "./Section";

const Hobbies = () => {
  return (
    <div className="my-12">
      <Section title="100. Hobbies" id="hobbies">
        <div className="flex flex-col items-center gap-4 text-lg">
          <p className="max-w-xl">
            Outside of the tech world, here’s a non-comprehensive list of things
            I enjoy:
          </p>
          <p className="max-w-xl">
            Being active & playing basketball (fun fact: I grew up playing with
            and against 5+ active NBA players); reading any-and-everything (ask
            me my favorite books); doing poorly in League of Legends & Apex
            Legends; cooking, especially for my partner.
          </p>
        </div>
      </Section>
    </div>
  );
};

export default Hobbies;
