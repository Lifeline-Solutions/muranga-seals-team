import React from "react";
import teamphoto from "../images/team-photo.jpeg";
const TheClub = () => {
  return (
    <>
      <div className="h-[200px] bg-black/90 text-white text-7xl p-8 font-bold">
        Our Club
      </div>

      <div className="flex justify-between my-4 bg-gray-100 mx-auto w-[95%] p-4">
        <div className="flex flex-col gap-4 text-3xl">
          <h1 className="text-5xl font-bold">Our Team Members</h1>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,</p>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,</p>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,</p>

          <button className="w-[40%] bg-[#F4E721] p-4 text-3xl ">
            Read More
          </button>
        </div>

        <div>
          <img src={teamphoto} alt="logo" className="w-[500px] h-[500px]" />
        </div>
      </div>

      <div className="flex justify-between my-4 bg-gray-100 mx-auto w-[95%] p-4">
        <div>
          <img src={teamphoto} alt="logo" className="w-[500px] h-[500px]" />
        </div>
        <div className="flex flex-col gap-4 text-3xl">
          <h1 className="text-5xl font-bold">Our Management</h1>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,</p>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,</p>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,</p>

          <button className="w-[40%] bg-[#F4E721] p-4 text-3xl ">
            Read More
          </button>
        </div>
      </div>

      <div className="flex justify-between my-4 bg-gray-100 mx-auto w-[95%] p-4">
        <div className="flex flex-col gap-4 text-3xl">
          <h1 className="text-5xl font-bold">Our Sponsors and Partners</h1>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,</p>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,</p>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,</p>

          <button className="w-[40%] bg-[#F4E721] p-4 text-3xl ">
            Read More
          </button>
        </div>

        <div>
          <img src={teamphoto} alt="logo" className="w-[500px] h-[500px]" />
        </div>
      </div>

      <div className="flex justify-between my-4 bg-gray-100 mx-auto w-[95%] p-4">
        <div>
          <img src={teamphoto} alt="logo" className="w-[500px] h-[500px]" />
        </div>
        <div className="flex flex-col gap-4 text-3xl">
          <h1 className="text-5xl font-bold">Our Academy</h1>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,</p>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,</p>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,</p>

          <button className="w-[40%] bg-[#F4E721] p-4 text-3xl ">
            Read More
          </button>
        </div>
      </div>

      <div className="flex justify-between my-4 bg-gray-100 mx-auto w-[95%] p-4">
        <div className="flex flex-col gap-4 text-3xl">
          <h1 className="text-5xl font-bold">Our Club Products</h1>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,</p>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,</p>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,</p>

          <button className="w-[40%] bg-[#F4E721] p-4 text-3xl ">
            Read More
          </button>
        </div>

        <div>
          <img src={teamphoto} alt="logo" className="w-[500px] h-[500px]" />
        </div>
      </div>
    </>
  );
};

export default TheClub;
