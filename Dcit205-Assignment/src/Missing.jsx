




const Missing = () => {
  return(
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden ">
    <div className="w-full p-6 m-auto bg-black rounded-md ring-2 ring-indigo-600 lg:max-w-xl">
      <h1 className="text-3xl font-semibold text-left text-white uppercase">
        Missing Grade Form
      </h1>
      <form className="mt-4">
        <div className="mb-2">
          <label>
            <span className="text-white">Your Name</span>
            <input
              type="text"
              name="name"
              className="

          w-full
          text-black
          block px-1 py-2 mt-2
          border-gray-300
          rounded-md
          shadow-sm
          focus:border-indigo-300
          focus:ring
          focus:ring-indigo-200
          focus:ring-opacity-50
        "
              placeholder="Enter a valid name"
            />
          </label>
        </div>
        <div className="mb-2">
          <label>
            <span className="text-white">ID Number</span>
            <input
              name="Id"
              type="text"
              className="
              text-black
          block
          w-full
          mt-2 px-1 py-2
          border-gray-300
          rounded-md
          shadow-sm
          focus:border-indigo-300
          focus:ring
          focus:ring-indigo-200
          focus:ring-opacity-50
        "
              placeholder="Enter a valid Id number"
            />
          </label>
        </div>
        <div className="mb-2">
          <label>
            <span className="text-white">Course Name</span>
            <input
              name="name"
              type="text"
              className="
              text-black
          block
          w-full
          mt-2 px-1 py-2
          border-gray-300
          rounded-md
          shadow-sm
          focus:border-indigo-300
          focus:ring
          focus:ring-indigo-200
          focus:ring-opacity-50
        "
              placeholder="Subject with missing grade"
            />
          </label>
        </div>
        <div className="mb-2">
          <label>
            <span className="text-white">Name of Lecturer</span>
            <input
              name="name"
              type="text"
              className="
          block
          text-black
          w-full
          mt-2 px-1 py-2
          border-gray-300
          rounded-md
          shadow-sm
          focus:border-indigo-300
          focus:ring
          focus:ring-indigo-200
          focus:ring-opacity-50
        "
              placeholder="Mr. Enoch Lartey"
            />
          </label>
        </div>
        <div className="mb-2">
          <label>
            <span className="text-white">Explanation field</span>
            <textarea
              name="message"
              className="
          block
          text-black
          w-full
          mt-2 px-1 py-1
          border-gray-300
          rounded-md
          focus:border-indigo-300
          focus:ring
          focus:ring-indigo-200
          focus:ring-opacity-50
        "
        placeholder="Explain to us your how and why"
            ></textarea>
          </label>
        </div>

        <div className="mb-6">
          <button
            type="submit"
            className="
          h-10
          px-5
          text-indigo-100
          bg-indigo-700
          rounded-lg
          transition-colors
          duration-150
          focus:shadow-outline
          hover:bg-indigo-800
        "
          >
            Submit
          </button>
        </div>
        <div></div>
      </form>
    </div>
  </div>
  );
};

export default Missing;