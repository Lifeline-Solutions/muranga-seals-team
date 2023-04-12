import React from "react";
import sportpesa from "./images/sportpesa.jpeg";
const LatestYoutube = () => {
  return (
    <div className="w-[90%] mt-12 mx-auto">
      <div className="flex text-3xl font-bold justify-between ">
        <h1>Latest Youtube Videos</h1>

        <h1>See All</h1>
      </div>
      <div className="flex gap-4  mt-12 justify-between">
        <div className="w-1/3 flex flex-col">
          <img src={sportpesa} alt="sportpesa" className="w-full h-[350px]" />
          <h1 className="font-bold text-2xl my-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia,
          </h1>
          <p className="text-gray-500 font-bold">
            Provident similique accusantium nemo autem. Veritatis obcaecati
            tenetur iure eius earum ut molestias architecto voluptate aliquam
            nihil, eveniet aliquid culpa officia
          </p>
        </div>
        <div className="w-1/3 flex flex-col">
          <img src={sportpesa} alt="sportpesa" className="w-full h-[350px]" />
          <h1 className="font-bold text-2xl my-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia,
          </h1>
          <p className="text-gray-500 font-bold">
            Provident similique accusantium nemo autem. Veritatis obcaecati
            tenetur iure eius earum ut molestias architecto voluptate aliquam
            nihil, eveniet aliquid culpa officia
          </p>
        </div>
        <div className="w-1/3 flex flex-col">
          <img src={sportpesa} alt="sportpesa" className="w-full h-[350px]" />
          <h1 className="font-bold text-2xl my-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia,
          </h1>
          <p className="text-gray-500 font-bold">
            Provident similique accusantium nemo autem. Veritatis obcaecati
            tenetur iure eius earum ut molestias architecto voluptate aliquam
            nihil, eveniet aliquid culpa officia
          </p>
        </div>
      </div>
    </div>
  );
};

export default LatestYoutube;
