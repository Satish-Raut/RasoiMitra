import { useContext, useState } from "react";
import Festivals from "../Components/utils/contextApi";

export const Contact = () => {
  const [details, setDetails] = useState({
    name: "",
    email: "",
    message: "",
  });

  const {festivalName} = useContext(Festivals);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handelFormSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("contactDetails", JSON.stringify(details));

    console.log("Details saved in localStorage ✅");
    console.log(details);

    setDetails({ name: "", email: "", message: "" });
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-6 flex-col space-y-10">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md transition-transform transform hover:scale-105">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Contact Me
        </h1>
        <form onSubmit={handelFormSubmit} className="flex flex-col space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            className="border-2 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all"
            autoComplete="off"
            value={details.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            className="border-2 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all"
            autoComplete="off"
            value={details.email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Enter Your Message"
            className="border-2 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all resize-none"
            rows={4}
            value={details.message}
            onChange={handleChange}
          ></textarea>

          <button
            type="submit"
            className="bg-gray-800 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 cursor-pointer"
          >
            Send 🚀
          </button>
        </form>
      </div>

      {festivalName && <p className="text-3xl font-bold text-white bg-gray-800 p-4 rounded-4xl" >
        {festivalName}
      </p>}
    </div>
  );
};
