import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeCard = ({ coffee, setCoffees, coffees }) => {
  const { name, category, photo, _id } = coffee;

  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log("deleted");
        fetch(`http://localhost:5000/coffee/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              const remaining = coffees.filter((cof) => cof._id !== id);
              setCoffees(remaining);
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
  return (
    <div className="w-full border shadow-md p-6 space-y-4 sm:p-10 dark:bg-gray-50 dark:text-gray-800">
      <div className="flex justify-between w-full space-x-2 sm:space-x-4">
        <img
          className="flex-shrink-0 object-cover w-20 h-20 dark:border- rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500"
          src={photo}
          alt="Polaroid camera"
        />

        <div className="space-y-1">
          <h3 className="text-lg font-semibold leading-snug sm:pr-8">{name}</h3>
          <p className="text-sm dark:text-gray-600">{category}</p>
        </div>
        <div className="join join-vertical space-y-2">
          <Link to={`/viewDetails/${_id}`}>
            <button className="btn w-full join-item ">View</button>
          </Link>
          <Link to={`/update/${_id}`}>
            <button className="btn w-full join-item">Edit</button>
          </Link>
          <button onClick={() => handleDelete(_id)} className="btn join-item ">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeCard;

CoffeCard.propTypes = {
  coffee: PropTypes.object,
  setCoffees: PropTypes.func,
  coffees: PropTypes.array,
};
