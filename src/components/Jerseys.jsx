import React, { useState, useRef } from "react";
import jersey1 from "./images/jersey1.png";
import jersey2 from "./images/jersey2.png";
import jersey3 from "./images/jersey3.png";
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
          "service_8nuxsw3",
          "template_o7408va",
          form.current,
          "6M-rV1iiaVqa5DANh"
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
              className="bg-[#E06F24] text-white px-4 py-2 rounded-lg"
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
            <img src={jersey1} alt="jersey" className="w-96 h-96 mx-auto" />
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
                <label htmlFor="name">Select Color</label>
                <select
                  className="w-[250px] border border-gray-300 rounded-lg py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-600"
                  onChange={(e) => setColor(e.target.value)}
                  value={color}
                  name="color"
                >
                  <option value=" ">Select Color</option>
                  <option value="Red">Red</option>
                  <option value="Blue">Blue</option>
                  <option value="Green">Green</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full text-white bg-[#E06F24] border border-transparent rounded-lg py-2.5 px-4  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-600"
            >
              Buy Now
            </button>
          </form>
        </div>
      )}
      <h1 className="text-center font-bold uppercase text-5xl">Buy Jersey</h1>

      <div className="flex  justify-center gap-24 mt-12 w-[90%] mx-auto">
        <div
          className="relative hover:scale-105 transition-all duration-500 p-4 w-[400px] cursor-pointer h-[300px] border-dashed border-dashed border-2 border-gray-500 flex"
          onClick={() => setShowModal(true)}
        >
          <img
            src={jersey2}
            alt="jersey"
            className="w-[250px] h-[250px] absolute top-12 right-56"
          />
          <div className="flex flex-col font-semibold gap-4 ml-40">
            <p>Authentic Away Shirt</p>
            <p>Team Jersey</p>
            <p>Short sleeve</p>
            <p>10% discount off</p>
            <p>On membership</p>
            <p>Medium</p>
          </div>
        </div>
        <div
          className="relative cursor-pointer hover:scale-105 transition-all duration-500  p-4 w-[500px] h-[500px] border-dashed border-dashed border-2 border-gray-500 flex"
          onClick={() => setShowModal(true)}
        >
          <img
            src={jersey1}
            alt="jersey"
            className=" absolute top-0 right-56 w-96 h-96"
          />
          <div className="flex font-semibold flex-col gap-4 ml-64">
            <p>Authentic Away Shirt</p>
            <p>Team Jersey</p>
            <p>Short sleeve</p>
            <p>10% discount off</p>
            <p>On membership</p>
            <p>Medium</p>
          </div>
        </div>
        <div
          className="relative cursor-pointer hover:scale-105 transition-all duration-500 p-4 w-[400px] h-[300px] border-dashed border-dashed border-2 border-gray-500 flex"
          onClick={() => setShowModal(true)}
        >
          <img
            src={jersey3}
            alt="jersey"
            className="w-[250px] h-[250px] absolute top-12 right-56"
          />
          <div className="flex font-semibold flex-col gap-4 ml-40">
            <p>Authentic Away Shirt</p>
            <p>Team Jersey</p>
            <p>Short sleeve</p>
            <p>10% discount off</p>
            <p>On membership</p>
            <p>Medium</p>
          </div>
        </div>
      </div>

      <div className="flex mt-12">
        <p className="w-1/2  p-4 text-end  bg-[#E06F24] text-white pr-16 text-2xl  ">
          Breaking News
        </p>
        <p className="w-1/2 bg-gray-200 p-4 text-start  pl-16 text-2xl ">
          Latest News
        </p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Jerseys;
