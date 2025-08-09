import db from "@/app/api/db";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = await params;
  try {
    const [row] = await db.query<any>("SELECT * FROM usuarios WHERE id = ?", [
      id,
    ]);
    return new Response(JSON.stringify(row[0]));
  } catch (err) {
    console.error(err);
  }
}