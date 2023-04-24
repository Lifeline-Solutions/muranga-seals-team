import React from "react";
import sportpesalogo from "../images/sportpesalogo.png";
import gallery1 from "../images/gallery1-02.png";
import gallery2 from "../images/gallery2-02.png";
import gallery3 from "../images/gallery3-02.png";
import gallery4 from "../images/gallery4-02.png";

const Gallery = () => {
  return (
    <div className="w-[90%] mx-auto mt-24">
      <div className="flex justify-between">
        <h1 className="text-5xl font-semibold">Gallery</h1>
        <h1 className="text-2xl font-semibold">See All</h1>
      </div>
      <div className="flex gap-4 mt-12">
        <div className="w-3/5 flex flex-col h-[500px] ">
          <img src={gallery1} alt="celebrating" className="h-[290px]" />
          <div className="flex gap-2 justify-between my-2 items-center">
            <img
              src={gallery2}
              alt="celebrating"
              className="w-[420px] h-[200px]"
            />
            <img
              src={gallery3}
              alt="celebrating"
              className="w-[420px] h-[200px]"
            />
          </div>
        </div>
        <div className="w-1/5 h-[500px] ">
          <img src={gallery3} alt="celebrating" className=" h-[500px]" />
        </div>
        <div className="w-1/5 h-[500px] flex justify-between flex-col gap-2 ">
          <img src={gallery4} alt="gallery4" className="h-[245px]" />
          <img src={gallery4} alt="celebrating" className="h-[245px]" />
        </div>
      </div>

      <h1 className=" mt-24 text-md text-gray-500 w-[80%] mx-auto text-center font-semibold">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
        mollitia, molestiae quas vel sint commodi repudiandae consequuntur
        voluptatum laborum numquam blanditiis harum quisquam eius sed odit
        fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
        accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut
        molestias architecto voluptate aliquam nihil, eveniet aliquid culpa
      </h1>

      <div className="flex gap-8  justify-center mt-12">
        <img
          src={sportpesalogo}
          alt="sportpesalogo"
          className="w-[250px] h-[100px]"
        />
        <img
          src={sportpesalogo}
          alt="sportpesalogo"
          className="w-[250px] h-[100px]"
        />
        <img
          src={sportpesalogo}
          alt="sportpesalogo"
          className="w-[250px] h-[100px]"
        />
      </div>
    </div>
  );
};

export default Gallery;
