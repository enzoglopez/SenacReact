import { usuarioProps } from "../types";

export async function Salvar(form: usuarioProps, method: string) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_ROUTE}/usuario`, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
  });
}