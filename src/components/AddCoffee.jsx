import Swal from 'sweetalert2'

const AddCoffee = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.coffeeName.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const coffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    console.log(coffee);
    fetch("http://localhost:5000/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(coffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Good job!",
            text: "Coffee Added Successfully",
            icon: "success",
          });
          form.reset();
        }
      });
  };
  return (
    <section className="p-6  text-gray-50">
      <form
        onSubmit={handleAddCoffee}
        className="container flex flex-col mx-auto space-y-12"
      >
        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-900">
          <div className="space-y-2 col-span-full lg:col-span-1">
            <p className="font-bold text-3xl">Add Coffee</p>
          </div>
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="firstname" className="text-sm">
                Coffee Name
              </label>
              <input
              required
                name="coffeeName"
                type="text"
                placeholder="Coffee Name"
                className="w-full rounded-md focus:ring py-3 pl-3 focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="lastname" className="text-sm">
                Quantity
              </label>
              <input
              required
                name="quantity"
                type="text"
                placeholder="Enter Quantity"
                className="w-full rounded-md py-3 pl-3 focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="firstname" className="text-sm">
                Supplier
              </label>
              <input
              required
                name="supplier"
                type="text"
                placeholder="Enter Coffee Supplier"
                className="w-full rounded-md focus:ring py-3 pl-3 focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="lastname" className="text-sm">
                Taste
              </label>
              <input
              required
                name="taste"
                type="text"
                placeholder="Enter Coffee Taste"
                className="w-full rounded-md py-3 pl-3 focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="firstname" className="text-sm">
                Category
              </label>
              <input
              required
                name="category"
                type="text"
                placeholder="Enter Coffee Category"
                className="w-full rounded-md focus:ring py-3 pl-3 focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="lastname" className="text-sm">
                Details
              </label>
              <input
              required
                name="details"
                type="text"
                placeholder="Enter Coffee Details"
                className="w-full rounded-md py-3 pl-3 focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700"
              />
            </div>
            <div className="w-full col-span-6">
              <label className="text-sm">Photo URL</label>
              <input
              required
                name="photo"
                type="text"
                placeholder="Enter Photo URL"
                className="w-full rounded-md py-3 pl-3 focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700"
              />
            </div>
            <div className="col-span-6 mt-6">
              <input
              
                className="btn btn-accent  btn-block"
                type="submit"
                value="Add Coffee"
              />
            </div>
          </div>
        </fieldset>
      </form>
    </section>
  );
};

export default AddCoffee;
