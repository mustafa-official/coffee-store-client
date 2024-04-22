import { useLoaderData } from "react-router-dom";
import CoffeCard from "../../components/CoffeCard";
import { useState } from "react";

const Home = () => {
  const allCoffee = useLoaderData();
  const [coffees, setCoffees] = useState(allCoffee);
  return (
    <div>
      <h3 className="text-3xl text-center mt-5">
        Total Coffee: {coffees.length}
      </h3>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-6 mt-6">
        {coffees.map((coffee) => (
          <CoffeCard coffees={coffees} setCoffees={setCoffees} key={coffee._id} coffee={coffee}></CoffeCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
