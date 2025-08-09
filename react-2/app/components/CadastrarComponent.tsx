"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { usuarioProps } from "../types";
import { Salvar } from "../(services)/usuario";

export default function CadastrarComponent({
  id,
  nome = "",
  email = "",
  imagem_perfil = "",
}: usuarioProps) {
  const [usuarioId, setUsuarioId] = useState(id);
  const [usuarioNome, setUsuarioNome] = useState(nome);
  const [usuarioEmail, setUsuarioEmail] = useState(email);
  const [usuarioImagem, setUsuarioImagem] = useState(imagem_perfil);
  const rota = useRouter();

  async function Deletar() {
    await fetch(`${process.env.NEXT_PUBLIC_API_ROUTE}/usuario`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: usuarioId }),
    });
    rota.push("/");
  }

  async function Submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = {
      id: usuarioId,
      nome: usuarioNome,
      email: usuarioEmail,
      imagem_perfil: usuarioImagem,
    };

    try {
      const method = usuarioId ? "PUT" : "POST";
      await Salvar(form, method);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <form onSubmit={Submit} className="flex flex-col gap-y-2">
        <label className="font-semibold">Nome:</label>
        <input
          onChange={(e) => setUsuarioNome(e.target.value)}
          className="h-10 bg-white rounded-md w-80 indent-2"
          placeholder="Digite o seu nome completo"
          name="usuarioNome"
          type="text"
          value={usuarioNome}
        />
        <label className="font-semibold">Email:</label>
        <input
          onChange={(e) => setUsuarioEmail(e.target.value)}
          className="h-10 bg-white rounded-md w-80 indent-2"
          placeholder="Digite o seu email"
          name="usuarioEmail"
          type="email"
          value={usuarioEmail}
        />
        <label className="font-semibold">Imagem:</label>
        <input
          onChange={(e) => setUsuarioImagem(e.target.value)}
          className="h-10 bg-white rounded-md w-80 indent-2"
          placeholder="Insira uma imagem em um link"
          name="usuarioImagem"
          type="text"
          value={usuarioImagem}
        />
        <button
          className="bg-blue-600 h-10 w-40 cursor-pointer text-white rounded-sm self-center"
          type="submit"
        >
          {usuarioId ? "Editar" : "Cadastrar"}
        </button>
        {usuarioId && (
          <button
            onClick={Deletar}
            type="button"
            className="bg-red-600 h-10 w-40 cursor-pointer text-white rounded-sm self-center"
          >
            Excluir
          </button>
        )}
      </form>
    </div>
  );
}
