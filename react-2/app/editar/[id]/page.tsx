import { usuarioProps } from "@/app/types";
import CadastrarComponent from "@/app/components/CadastrarComponent";

export default async function Editar({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_ROUTE}/usuario/${id}`
  );
  const usuario: usuarioProps = await response.json();
  return (
    <div className="bg-gray-200 w-full h-screen flex flex-col items-center justify-center">
      <div className="bg-blue-100 p-10 rounded-xl shadow-xl flex flex-col gap-y-5">
        <CadastrarComponent
          id={usuario.id}
          nome={usuario.nome}
          email={usuario.email}
          imagem_perfil={usuario.imagem_perfil}
        />
      </div>
    </div>
  );
}
