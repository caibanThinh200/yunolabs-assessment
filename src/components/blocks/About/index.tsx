interface AboutUsProps {}

const AboutUs: React.FC<AboutUsProps> = (props) => {
  return (
    <div className="container mx-auto py-20">
      <div className="flex justify-between flex-col lg:flex-row">
        <div className="lg:w-1/2">
          <h2 className="text-crayola uppercase">About Us</h2>
        </div>
        <div className="lg:w-1/2">
          <p className="2xl:text-lg font-aeonik">
            We're passionate about bringing delicious and enriching food
            experiences to everyone. We provide wholesome lunches for student
            cares and kindergartens, cater to corporate events, and offer
            engaging food discovery workshops for all ages.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
