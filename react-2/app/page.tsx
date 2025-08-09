import Link from "next/link";
import { usuarioProps } from "./types";

export default async function Index() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_ROUTE}/usuario`);
  const usuarios: usuarioProps[] = await response.json();

  return (
    <div className="w-full h-screen flex flex-col bg-gray-200 gap-y-5 items-center">
      <Link
        className="w-1/6 h-10 mt-4 bg-blue-600 text-white rounded-sm text-center flex items-center justify-center"
        href={"/cadastro"}
      >
        Cadastro
      </Link>
      {usuarios.length != 0 ? (
        usuarios.map((item) => (
          <div
            key={item.id}
            className="w-1/2 bg-blue-100 rounded-full border-2 border-sky-400 flex gap-x-4 p-2"
          >
            <img
              src={item.imagem_perfil}
              className="border-2 border-sky-400 rounded-full size-24"
            />
            <div className="flex flex-col gap-y-2">
              <h1 className="font-bold text-2xl h-6">{item.nome}</h1>
              <span className="text-gray-400">{item.email}</span>
              <Link
                className="w-40 text-center bg-blue-600 cursor-pointer text-white rounded-sm"
                href={`/editar/${item.id}`}
              >
                Editar
              </Link>
            </div>
          </div>
        ))
      ) : (
        <h1>Nenhuma usuário cadastrado</h1>
      )}
    </div>
  );
}
