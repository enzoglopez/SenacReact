"use client";
import { useState } from "react";

export default function aulaUseState() {
  // const [contador, setContador] = useState(0); atividade - 1
  
  // const [texto, setTexto] = useState(true); atividade - 2
  
  // const [inputTexto, setInputTexto] = useState(""); atividade - 3
  
  // const [arrayTarefas, setArrayTarefas] = useState(['']); atividade - 4
  // const [tarefa, setTarefa] = useState(''); atividade - 4
  
  // const [contadorAzul, setContadorAzul] = useState(0); atividade - 5
  // const [contadorVermelho, setContadorVermelho] = useState(0); atividade - 5
  // const [contadorVerde, setContadorVerde] = useState(0); atividade - 5

  // const [like, setLike] = useState(true);
  // const [contLike, setContLike] = useState(0);

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
    // <div className="w-screen h-screen flex flex-col gap-y-2 bg-gray-100 justify-center items-center">
    //   <h1 className="font-bold text-2xl">Insira a sua atividade: </h1>
    //   <input
    //     className="bg-gray-200 w-lg h-8 indent-2 rounded-md"
    //     type="text"
    //     value={tarefa}
    //     onChange={(e) => setTarefa(e.target.value)}
    //   />
    //   <button
    //     className="bg-blue-300 w-md h-6 text-white rounded-md cursor-pointer"
    //     onClick={() => {
    //       setArrayTarefas([...arrayTarefas, tarefa]);
    //     }}
    //   >
    //     Adicionar
    //   </button>
    //   <ul>
    //     {arrayTarefas.map((tarefa) => (
    //       <li>{tarefa}</li>
    //     ))}
    //   </ul>
    // </div>

    // <div> atividade - 5
    //   <button
    //     onClick={() => {
    //       setContadorAzul(contadorAzul + 1);
    //     }}
    //     className="w-1/4 h-20 rounded-sm text-white bg-blue-600"
    //   >
    //     {contadorAzul}
    //   </button>
    //   <button
    //     onClick={() => {
    //       setContadorVermelho(contadorVermelho + 1);
    //     }}
    //     className="w-1/4 h-20 rounded-sm text-white bg-red-600"
    //   >
    //     {contadorVermelho}
    //   </button>
    //   <button
    //     onClick={() => {
    //       setContadorVerde(contadorVerde + 1);
    //     }}
    //     className="w-1/4 h-20 rounded-sm text-white bg-green-600"
    //   >
    //     {contadorVerde}
    //   </button>
    // </div>

    // <div className="flex items-center justify-center flex-col">
    //   <button onClick={() => { like ? setContLike(contLike + 1) : ''; setLike(like ? false : true)}} className="rounded-md bg-blue-600 text-white w-md h-8">{like ? 'like' : 'dislike'}</button>
    //   <p className="text-center">{contLike}</p>
    // </div>
  );
}
