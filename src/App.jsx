import { useState } from "react";

import "./App.css";
import { useLoaderData } from "react-router-dom";
import CoffeeCard from "./CoffeeCard";

function App() {
  const loadcoffeeAll = useLoaderData();
  const [coffeeAll, setCoffeeAll] = useState(loadcoffeeAll);
  return (
    <div className="m-20">
      <h1 className="text-3xl text-purple-500">
        Cool and Hot Coffee {coffeeAll.length}
      </h1>
      <div className="grid md:grid-cols-2 gap-4">
        {coffeeAll.map((coffee) => (
          <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            coffeeAll={coffeeAll}
            setCoffeeAll={setCoffeeAll}
          ></CoffeeCard>
        ))}
      </div>
    </div>
  );
}

export default App;
