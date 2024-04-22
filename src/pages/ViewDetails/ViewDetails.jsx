import { useLoaderData } from "react-router-dom";


const ViewDetails = () => {
    const loadedCoffee = useLoaderData();
    const { name, category, photo,} = loadedCoffee;
    return (
        <div className=" mt-8 border shadow-md p-6 space-y-4 sm:p-10 dark:bg-gray-50 dark:text-gray-800">
      <div className="flex justify-evenly w-full space-x-2 sm:space-x-4">
        <img
          className="flex-shrink-0 object-cover w-20 h-20 dark:border- rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500"
          src={photo}
          alt="Polaroid camera"
        />

        <div className="space-y-1">
          <h3 className="text-lg font-semibold leading-snug sm:pr-8">{name}</h3>
          <p className="text-sm dark:text-gray-600">{category}</p>
        </div>
      </div>
    </div>
    );
};

export default ViewDetails;