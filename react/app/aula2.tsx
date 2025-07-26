// "use client"; // ter interação
// // import ButtonReact from "@/components/button";
// // import Header from "@/components/Header";
// // import Footer from "@/components/Footer";
// // import Card from "@/components/Card";
// // import Popup from "@/components/Popup";
// // import Card from "@/components/atividade 3 12-07/Card";
// // import Menu from "@/components/atividade 3 12-07/Menu";
// import { use, useState } from "react";

// // function Parent({children}:{children:React.ReactNode}) {
// //   return (
// //     <div>
// //       {children}
// //     </div>
// //   );
// // }

// export default function aula2() {
//   // const lista = [
//   //   {
//   //     id: 1,
//   //     nome: "Ana",
//   //     email: "ana@email.com"
//   //   },
//   //   {
//   //     id: 2,
//   //     nome: "Roberta",
//   //     email: "roberta@email.com"
//   //   }
//   // ];
//   type usuario = {
//     usuario: string;
//     idade: number;
//   }

//   const [usuario, setUsuario] = useState<usuario>();
//   const [contador, setContador] = useState(0);

//   return (
//     <div className="flex items-center justify-center w-screen h-screen bg-gray-100">
//       <button
//         onClick={() => {
//           setContador(contador + 1);
//         }}
//         className="w-full h-10 bg-blue-500"
//       >
//         {contador}
//       </button>
//     </div>

//     // <Menu />
//     // <div className="flex flex-col w-full p-6 gap-y-4">
//     //   <h1 className="text-2xl font-bold">Usuários</h1>
//     //   {
//     //     lista.map((pessoa) => (
//     //       <Card key={pessoa.id} nome={pessoa.nome} email={pessoa.email}/>
//     //     ))
//     //   }
//     // </div>

//     //   <Parent>
//     //     <div>teste</div>
//     //   </Parent>

//     //     <>
//     //       <Header />
//     //       <div className="flex flex-col items-center w-full h-full bg-gray-100 md:mt-12 sm:justify-center">
//     //         <div className="flex justify-center w-full py-8 gap-x-8">
//     //           <Card
//     //             titulo="Componente 1"
//     //             descricao="Esse é o primeiro cartão"
//     //             horizontal={false}
//     //           />
//     //           <Card
//     //             titulo="Componente 2"
//     //             descricao="Esse é o segundo cartão"
//     //             horizontal={false}
//     //           />
//     //           <Card
//     //             titulo="Componente 3"
//     //             descricao="Esse é o terceiro cartão"
//     //             horizontal={false}
//     //           />
//     //         </div>
//     //         <div className="flex flex-col items-center justify-center w-full px-8 gap-y-8">
//     //           <Card
//     //             titulo="Componente 4 em horizontal"
//     //             descricao="Esse é o quarto cartão em horizontal"
//     //             horizontal={true}
//     //           />
//     //           <Card
//     //             titulo="Componente 5 em horizontal"
//     //             descricao="Esse é o quinto cartão em horizontal"
//     //             horizontal={true}
//     //           />
//     //         </div>
//     //       </div>
//     //       <Footer texto="@ 2025 Minha Empresa - Todos os direitos reservados" />
//     //     </>

//     // <div className="flex items-center justify-center w-full h-full bg-gray-100">
//     //   <Popup
//     //     titulo="Bem-vindo!"
//     //     acao={() => {
//     //       alert("Funçaõ do botão");
//     //     }}
//     //   >
//     //     <p className="">isso é um children</p>
//     //   </Popup>
//     // </div>
//   );
// }
