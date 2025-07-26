"use client";

import { useState } from "react";
import Link from "next/link";

type props = {
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  id: number
};

export default function ProductCard({
  title,
  price,
  description,
  category,
  image,
  id
}: props) {
  const [show, setShow] = useState(false);
  return (
    <div className="bg-white p-5 flex flex-col size-92 h-fit shadow-md gap-y-3 rounded-2xl">
      <img className="h-30 self-center" src={image} />
      <h1 className="font-bold text-2xl line-clamp-1">{title}</h1>
      <span className="text-gray-400 text-md">
        {category.charAt(0).toUpperCase() + category.slice(1)}
      </span>
      <span className="text-green-400 font-bold text-xl">$ {price}</span>
      <div className="w-full">
        <p className={`${show ? "line-clamp-none" : "line-clamp-2"}`}>
          {description}
        </p>
      </div>
      <div className="flex gap-x-2">
        <button
          onClick={() => {
            setShow(show ? false : true);
          }}
          className="cursor-pointer active:bg-blue-600 w-1/2 h-10 rounded-md text-white bg-blue-500"
        >
          {show ? "Ver Menos" : "Ver Mais"}
        </button>
        <Link className="w-1/2" href={`/produto/${id}`}>
          <button className="cursor-pointer w-full h-10 rounded-md text-white active:bg-green-600 bg-green-500">
            Comprar
          </button>
        </Link>
      </div>
    </div>
  );
}
