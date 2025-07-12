import React from "react";

type props = {
  titulo: string;
  children: React.ReactNode;
  acao: () => void;
};

export default function Popup({ titulo, children, acao }: props) {
  return (
    <div className="shadow-lg w-96 h-46 flex flex-col p-8 justify-center bg-white rounded-md gap-y-2">
      <h1 className="text-blue-600 font-bold text-2xl">{titulo}</h1>
      {children}
      <button className=" bg-blue-500 text-white rounded-sm h-10 w-1/2 cursor-pointer" onClick={acao}>
        Executar ação
      </button>
    </div>
  );
}
