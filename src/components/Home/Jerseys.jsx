import React, { useState, useRef } from "react";
import MsealAway from "../images/Mseal-Away-kit.png";
import MsealHome from "../images/Mseal-Home-kit.png";
import { ToastContainer, toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import "react-toastify/dist/ReactToastify.css";

const Jerseys = () => {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name !== "" && number !== "" && size !== "" && color !== "") {
      toast.success(
        "Your order has been placed successfully , you will be contacted shortly",
        {
          position: "top-center",
          autoClose: 4500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }
      );
      emailjs
        .sendForm(
          "service_h7l8hup",
          "template_13744me",
          form.current,
          "d7b_3OQfip7DSHKsX"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      setTimeout(() => {
        setShowModal(false);
        setColor("");
        setName("");
        setNumber("");
        setSize("");
      }, 5000);
    } else {
      toast.error("Please fill all the fields", {
        position: "top-center",
        autoClose: 4500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <div className="mt-24">
      {showModal && (
        <div className="fixed kulim-park bg-white shadow-xl h-[800px] my-auto w-[800px] inset-0 bg-opacity-95 z-10 flex flex-col items-center justify-center  mx-auto transition-all duration-500">
          <div className="flex justify-end w-full p-4">
            <button
              className="bg-[#F4E721] text-white px-4 py-2 rounded-lg"
              onClick={() => setShowModal(false)}
            >
              X
            </button>
          </div>
          <form
            ref={form}
            className="space-y-4 md:space-y-6"
            onSubmit={handleSubmit}
          >
            <img src={MsealHome} alt="jersey" className="w-96 h-96 mx-auto" />
            <div className="flex gap-4 my-4">
              <div className="flex flex-col gap-4">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  placeholder="Enter your name"
                  id="name"
                  className="w-[250px] border border-gray-300 rounded-lg py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-600"
                />
              </div>
              <div className="flex flex-col gap-4">
                <label htmlFor="number">Your phone number</label>
                <input
                  type="text"
                  name="contact"
                  onChange={(e) => setNumber(e.target.value)}
                  value={number}
                  id="number"
                  placeholder="Enter your phone number"
                  className="w-[250px] border border-gray-300 rounded-lg py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-600"
                />
              </div>
            </div>

            <div className="flex gap-4 my-4">
              <div className="flex flex-col gap-4">
                <label htmlFor="name">Select Size</label>
                <select
                  className="w-[250px] border border-gray-300 rounded-lg py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-600"
                  onChange={(e) => setSize(e.target.value)}
                  value={size}
                  name="size"
                >
                  <option value=" ">Select Size</option>
                  <option value="Small">Small</option>
                  <option value="Medium">Medium</option>
                  <option value="Large">Large</option>
                  <option value="X-Large">X-Large</option>
                </select>
              </div>
              <div className="flex flex-col gap-4">
                <label htmlFor="name">SELECT KIT</label>
                <select
                  className="w-[250px] border border-gray-300 rounded-lg py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-600"
                  onChange={(e) => setColor(e.target.value)}
                  value={color}
                  name="color"
                >
                  <option value=" ">Select Kit</option>
                  <option value="Home">Home</option>
                  <option value="Away">Away</option>
                  <option value="Third Kit">Third Kit</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full text-white bg-[#F4E721] border border-transparent rounded-lg py-2.5 px-4  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-600"
            >
              Buy Now
            </button>
          </form>
        </div>
      )}
      <h1 className="text-center font-bold uppercase text-5xl">Buy Jersey</h1>

      <div className="flex  justify-center gap-24 mt-12 w-[80%] mx-auto">
        <div
          className="relative cursor-pointer hover:scale-105 transition-all duration-500  w-[300px] h-[300px] border-dashed border-dashed border-2 border-gray-500 flex"
          onClick={() => setShowModal(true)}
        >
          <img
            src={MsealAway}
            alt="jersey"
            className=" h-[300px] absolute top-4 right-48"
          />

          <div className="flex flex-col  justify-between   items-end gap-4 ">
            <div className="flex flex-col gap-2 ml-40">
              <p className="font-bold text-xl">Authentic Away </p>
              <p>Team Jersey</p>
              <p className="font-bold text-xl">1500 KES</p>
              <p>Short Sleeve</p>

              <p>Medium</p>
            </div>
            <button className="bg-[#F4E721] w-[65%] text-black font-bold py-2 px-4 rounded">
              Buy Now
            </button>
          </div>
        </div>
        <div
          className="relative cursor-pointer hover:scale-105 transition-all duration-500  p-4 w-[400px] h-[400px] border-dashed border-dashed border-2 border-gray-500 flex"
          onClick={() => setShowModal(true)}
        >
          <img
            src={MsealHome}
            alt="jersey"
            className="w-[300px] absolute top-0 right-56 w-96 h-96"
          />
          <div className="flex flex-col  justify-between   items-end gap-4 ">
            <div className="flex flex-col gap-2 ml-56">
              <p className="font-bold text-xl">Authentic Away </p>
              <p>Team Jersey</p>
              <p className="font-bold text-xl">1500 KES</p>
              <p>Short Sleeve</p>

              <p>Medium</p>
            </div>
            <button className="bg-[#F4E721] w-[50%] text-black font-bold py-2 px-4 rounded">
              Buy Now
            </button>
          </div>
        </div>
        <div
          className="relative cursor-pointer hover:scale-105 transition-all duration-500  w-[300px] h-[300px] border-dashed border-dashed border-2 border-gray-500 flex"
          onClick={() => setShowModal(true)}
        >
          <img
            src={MsealAway}
            alt="jersey"
            className=" h-[300px] absolute top-4 right-48"
          />

          <div className="flex flex-col  justify-between   items-end gap-4 ">
            <div className="flex flex-col gap-2 ml-40">
              <p className="font-bold text-xl">Alternative Shirt</p>
              <p>Team Jersey</p>
              <p className="font-bold text-xl">1500 KES</p>
              <p>Short Sleeve</p>

              <p>Medium</p>
            </div>
            <button className="bg-[#F4E721] w-[65%] text-black font-bold py-2 px-4 rounded">
              Buy Now
            </button>
          </div>
        </div>
      </div>

      <div className="flex mt-12">
        <p className="w-1/2  p-4 text-end  bg-[#F4E721] font-bold pr-16 text-2xl  ">
          Breaking News
        </p>
        <p className="w-1/2 bg-gray-200 p-4 text-start font-bold  pl-16 text-2xl ">
          Latest News
        </p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Jerseys;
