import Button from "@/components/ui/Button";

interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
  return (
    <section className="container py-5 mx-auto">
      <div className="relative w-full lg:min-h-[500px] rounded-2xl overflow-hidden p-10">
        <div
          className="absolute bg-blend-overlay bg-opacity-50 bg-black/50 bg-no-repeat bg-cover bg-center inset-0 size-full"
          style={{ backgroundImage: "url('/images/hero.png')" }}
        />
        <div className="lg:mt-48 lg:w-1/2 relative z-10 flex-col flex gap-10">
          <h1 className="uppercase text-eggshell leading-normal flex flex-col gap-3">
            <span className="p-1 bg-crayola w-fit">Effortless</span>
            <span className="p-1 bg-crayola w-fit">Catering for</span>
            <span className="p-1 bg-crayola w-fit">Every Event</span>
          </h1>
          <p className="text-white text-lg font-aeonik">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          </p>
          <div>
            <Button className="uppercase bg-eggshell text-persimmon font-bold">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
