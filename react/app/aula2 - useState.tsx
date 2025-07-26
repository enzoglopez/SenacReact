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

    // <div className="flex items-center justify-center w-screen h-screen">
    //   <button className="w-1/4 h-20 text-white bg-blue-500 rounded-sm" onClick={() => { setContador(contador + 1) }}>{contador}</button>
    // </div>

    //atividade - 2

    // <div className="flex flex-col items-center justify-center w-screen h-screen">
    //   <h1 className={`font-bold text-3xl ${texto ? "block" : "hidden"}`}>
    //     oioioioioioioi
    //   </h1>
    //   <button
    //     className="w-1/5 h-10 text-white bg-blue-500 rounded-sm"
    //     onClick={() => {
    //       setTexto(texto ? false : true);
    //     }}
    //   >
    //     {texto ? "Esconder" : "Aparecer"}
    //   </button>
    // </div>

    // atividade - 3

    // <div className="flex flex-col items-center justify-center w-screen h-screen bg-gray-100">
    //   <input placeholder="oioi" value={inputTexto} onChange={e => setInputTexto(e.target.value) } className="w-1/4 h-8 bg-gray-200 rounded-sm indent-2 outline-0" type="text" />
    //   <p>{inputTexto == "" ? 'Digite seu nome' : `Olá! ${inputTexto}`}</p>
    // </div>

    // atividade - 4
    // <div className="flex flex-col items-center justify-center w-screen h-screen bg-gray-100 gap-y-2">
    //   <h1 className="text-2xl font-bold">Insira a sua atividade: </h1>
    //   <input
    //     className="h-8 bg-gray-200 rounded-md w-lg indent-2"
    //     type="text"
    //     value={tarefa}
    //     onChange={(e) => setTarefa(e.target.value)}
    //   />
    //   <button
    //     className="h-6 text-white bg-blue-300 rounded-md cursor-pointer w-md"
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
    //     className="w-1/4 h-20 text-white bg-blue-600 rounded-sm"
    //   >
    //     {contadorAzul}
    //   </button>
    //   <button
    //     onClick={() => {
    //       setContadorVermelho(contadorVermelho + 1);
    //     }}
    //     className="w-1/4 h-20 text-white bg-red-600 rounded-sm"
    //   >
    //     {contadorVermelho}
    //   </button>
    //   <button
    //     onClick={() => {
    //       setContadorVerde(contadorVerde + 1);
    //     }}
    //     className="w-1/4 h-20 text-white bg-green-600 rounded-sm"
    //   >
    //     {contadorVerde}
    //   </button>
    // </div>

    // <div className="flex flex-col items-center justify-center">
    //   <button onClick={() => { like ? setContLike(contLike + 1) : ''; setLike(like ? false : true)}} className="h-8 text-white bg-blue-600 rounded-md w-md">{like ? 'like' : 'dislike'}</button>
    //   <p className="text-center">{contLike}</p>
    // </div>
  );
}
