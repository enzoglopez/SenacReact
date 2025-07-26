import Link from "next/link";

export default function Nav() {
  return (
    <div className="p-6 w-1/6 h-auto bg-blue-950 flex flex-col gap-y-5">
      <h1 className="text-white text-2xl font-bold">Menu</h1>
      <ul className="p-3 text-white text-xl flex flex-col gap-y-3">
        <Link href={"/"}>
          <li>Inicio</li>
        </Link>
        <Link href={"/categorias"}>
          <li>Categorias</li>
        </Link>
      </ul>
    </div>
  );
}
