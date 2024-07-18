import { Link } from "react-router-dom";
const HomePage: React.FC = function () {
  return (
    <section className="w-full h-screen p-4 py-12 pt-14 bg-neutral-500 text-white md:pt-20 md:px-8 lg:flex lg:items-center lg:gap-20 lg:px-20 lg:py-0">
      <div className="text-center md:text-left md:max-w-[80%] lg:w-[80%]">
        <h1 className="text-3xl font-bold mb-7">AIDOT</h1>
        <p className="text-lg font-medium">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates
          possimus maxime facere repellendus saepe commodi aut incidunt error
          modi asperiores sint ullam deserunt dicta voluptatum vero hic, dolore,
          aliquam eum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Expedita natus, dolor quo aliquam odio veritatis accusantium maiores,
          molestiae vitae reprehenderit esse quis corporis et unde quidem sequi,
          sint fugiat iure?
        </p>
        <Link
          to="chat"
          className="mt-7 inline-block rounded bg-gray-50 text-neutral-500 py-2 px-8"
        >
          {" "}
          Chat{" "}
        </Link>
      </div>
      <div className="hidden lg:block lg:w-[500px] object-cover h-[350px] rounded">
        {/* <img
          src="https://images.pexels.com/photos/6519905/pexels-photo-6519905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="first-aid"
          className="w-full object-cover h-[350px] rounded"
        /> */}
      </div>
    </section>
  );
};

export default HomePage;
