"use client";
import { useState } from "react";
import { text } from "stream/consumers";

export default function aulaUseState() {
  // const [contador, setContador] = useState(0); atividade - 1

  // const [texto, setTexto] = useState(true); atividade - 2

  // const [inputTexto, setInputTexto] = useState(""); atividade - 3

  const [tarefas, setTarefas] = useState([]);

  return (
    // atividade - 1

    // <div className="w-screen h-screen flex justify-center items-center">
    //   <button className="w-1/4 h-20 rounded-sm bg-blue-500 text-white" onClick={() => { setContador(contador + 1) }}>{contador}</button>
    // </div>

    //atividade - 2

    // <div className="w-screen h-screen flex flex-col justify-center items-center">
    //   <h1 className={`font-bold text-3xl ${texto ? "block" : "hidden"}`}>
    //     oioioioioioioi
    //   </h1>
    //   <button
    //     className="w-1/5 h-10 rounded-sm bg-blue-500 text-white"
    //     onClick={() => {
    //       setTexto(texto ? false : true);
    //     }}
    //   >
    //     {texto ? "Esconder" : "Aparecer"}
    //   </button>
    // </div>

    // atividade - 3

    // <div className="w-screen h-screen flex flex-col bg-gray-100 justify-center items-center">
    //   <input placeholder="oioi" value={inputTexto} onChange={e => setInputTexto(e.target.value) } className="bg-gray-200 w-1/4 h-8 indent-2 outline-0 rounded-sm" type="text" />
    //   <p>{inputTexto == "" ? 'Digite seu nome' : `Olá! ${inputTexto}`}</p>
    // </div>

    // atividade - 4
    <div className="w-screen h-screen flex flex-col bg-gray-100 justify-center items-center">
      <h1 className="font-bold text-2xl">Insira a sua atividade: </h1>
    </div>
  );
}
