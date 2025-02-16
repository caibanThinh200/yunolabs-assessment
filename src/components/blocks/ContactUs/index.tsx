import Button from "@/components/ui/Button";
import Image from "next/image";

const ContactUs = () => {
  return (
    <div className="container mx-auto py-20">
      <div className="bg-dark-lemon relative rounded-32 py-32 z-10 px-10">
        <div className="absolute inset-0 size-full">
          <Image
            className="size-full object-cover"
            src={"/svg/background-1.svg"}
            width={1376}
            height={522}
            alt={"shape"}
          />
        </div>
        <div className="flex flex-col gap-10 items-center relative z-10">
          <div>
            <h1 className="text-white uppercase text-center">Contact Us Now</h1>
          </div>
          <div>
            <p className="text-white text-lg font-aeonik lg:w-5/6 text-center mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>
          </div>
          <div>
            <Button className="uppercase bg-white text-dark-lemon font-bold">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
