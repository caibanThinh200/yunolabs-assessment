"use client";

import Button from "@/components/ui/Button";
import Image from "next/image";
import { useRouter } from "next/navigation";

const CARDS = [
  {
    title: "Student care programs",
    description:
      "Simplify meal planning with our centralized meal catering programs. We deliver nutritious and delicious meals tailored to your establishment's needs.",
    type: "primary",
    color: "#FF9E1B",
    image: "/images/process-1.jpeg",
    programs: [
      {
        title: "Centralised Meal Catering Programs",
        description:
          "Get nutritious and delicious tailored meals for your establishment",
        href: "/",
      },
      {
        title: "Food discovery workshop",
        description:
          "We make discovering nutrition and eating healthy into fun experiences",
        href: "/",
      },
    ],
  },
  {
    title: "SUBSCRIPTION MEALS",
    description:
      "Experience the ease of healthy eating with our subscription meal service. Enjoy chef-crafted meals tailored to your dietary needs.",
    type: "outline", //
    color: "",
    image: "/images/process-2.jpeg",
    programs: [
      {
        title: "Home Subscription Meals",
        description:
          "Get ready-to-eat or prepared DIY meals delivered straight to your home",
        href: "/",
      },
    ],
  },
  {
    title: "CORPORATE EVENTS",
    type: "primary",
    color: "#FFB92E",
    image: "/images/process-3.jpeg",
    description:
      "Experience the difference with our premium catering services. We specialize in crafting delicious and nutritious meals, from corporate lunches to interactive cooking classes.",
    programs: [
      {
        title: "Culinary Classes",
        description:
          "Learn to prepare restaurant quality feasts from professional chefs",
        href: "/",
      },
      {
        title: "Events",
        description: "Buffets for corporate events",
        href: "/",
      },
    ],
  },
];

const VerticalCards = () => {
  const router = useRouter();
  return (
    <div className="container mx-auto py-20">
      <div className="grid gap-20">
        {CARDS.map((card, index) => (
          <div
            key={index}
            style={
              card?.type === "primary"
                ? { backgroundColor: card.color }
                : {
                    backgroundColor: "transparent",
                    border: "1px solid black",
                  }
            }
            className="p-8 rounded-xl drop-shadow-xl relative items-center"
          >
            <div className="absolute inset-0 size-full">
              <Image
                className="size-full object-cover"
                src={
                  card?.type === "primary"
                    ? "/svg/background-1.svg"
                    : "/svg/background-2.svg"
                }
                width={1376}
                height={522}
                alt={"shape"}
              />
            </div>
            <div className="flex flex-col lg:flex-row gap-10 relative z-10">
              <div className="flex flex-col gap-10 lg:w-1/2">
                <h2 className="uppercase">{card.title}</h2>
                <p className="font-aeonik">{card.description}</p>
                <div className="grid lg:grid-cols-2 gap-2">
                  {card.programs.map((program, index) => (
                    <div
                      key={index}
                      className="flex flex-col gap-5 justify-between"
                    >
                      <div className="flex flex-col gap-5">
                        <Image
                          src={"/svg/cube.svg"}
                          alt="cube"
                          width={50}
                          height={50}
                        />
                        <div className="flex flex-col gap-5">
                          <h3>{program.title}</h3>
                          <p className="font-aeonik">{program.description}</p>
                        </div>
                      </div>
                      <div>
                        <Button
                          type="outline"
                          onClick={() => router.push(program.href)}
                        >
                          Learn More
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:w-1/2">
                <Image
                  className="size-full rounded-xl object-cover"
                  alt={card.title}
                  src={card.image}
                  width={300}
                  height={300}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VerticalCards;
