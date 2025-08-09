import db from "@/app/api/db";

export async function GET() {
  try {
    const [rows] = await db.query<any>("SELECT * FROM usuarios");

    if (rows.length === 0) {
      return new Response(JSON.stringify({ erro: "Usuário não encontrado" }));
    }

    return new Response(JSON.stringify(rows));
  } catch (err) {
    return new Response(JSON.stringify({ erro: err }));
  }
}

export async function POST(request: Request) {
  const { nome, email, imagem_perfil } = await request.json();

  try {
    const [cadastro] = await db.query<any>(
      "INSERT INTO usuarios (nome,email,imagem_perfil) VALUES (?,?,?)",
      [nome, email, imagem_perfil]
    );
    return Response.json({
      id: cadastro.insertId,
      nome,
      email,
      imagem_perfil,
    });
  } catch (err) {
    return new Response(JSON.stringify({ erro: err }));
  }
}

export async function PUT(request: Request) {
  const { id, nome, email, imagem_perfil } = await request.json();
  try {
    await db.query(
      "UPDATE usuarios SET nome = ?, email = ?, imagem_perfil = ? WHERE id = ?",
      [nome, email, imagem_perfil, id]
    );
    return Response.json({ sucesso: true });
  } catch (err) {
    console.error(err);
  }
}

export async function DELETE(request: Request) {
  const { id } = await request.json();
  try {
    await db.query("DELETE FROM usuarios WHERE id = ?", [id])
    return Response.json({ sucesso: true })
  } catch (err) {
    console.error(err)
  }
}