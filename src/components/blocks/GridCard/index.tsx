const CARDS = [
  {
    title: "Tailored to nutritional needs",
    description:
      "We craft delicious meals tailored to your nutritional needs, balancing carbs, proteins, and iron for healthier options.",
    color: "#F2E9DB", // Background color for the card
    titleColor: "#E35205", // Color for the title text
  },
  {
    title: "Balancing carbs, proteins, iron",
    description:
      "Enjoy healthier options with meals carefully balanced for carbs, proteins, and iron to support your nutritional needs.",
    color: "#FFB92E", // Background color for the card
    titleColor: "#F2E9DB", // Color for the title text
  },
  {
    title: "Healthier options",
    description:
      "Experience healthier options with meals expertly crafted to balance carbs, proteins, and iron, meeting your unique nutritional needs.",
    color: "#E35205", // Background color for the card
    titleColor: "#F2E9DB", // Color for the title text
  },
];

export default function GridCard() {
  return (
    <div className="container mx-auto py-20">
      <div className="grid lg:grid-cols-3 gap-4">
        {CARDS.map((card, index) => (
          <div
            key={index}
            className="p-8 rounded-32 drop-shadow-xl flex flex-col gap-20 justify-between items-center"
            style={{ backgroundColor: card.color }}
          >
            <h2 style={{ color: card.titleColor }} className="uppercase">
              {card.title}
            </h2>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
