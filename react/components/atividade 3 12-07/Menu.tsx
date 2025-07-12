export default function Menu() {
  return (
    <div className="md:w-1/8 h-auto bg-blue-600 flex flex-col gap-y-3">
      <h1 className="font-bold text-white text-2xl p-4">Menu</h1>
      <li className="list-none flex flex-col">
        <ul className="hover:bg-blue-500 w-full p-3 rounded-md cursor-pointer text-white text-xl">
          Início
        </ul>
        <ul className="hover:bg-blue-500 w-full p-3 rounded-md cursor-pointer text-white text-xl">
          Usuários
        </ul>
        <ul className="hover:bg-blue-500 w-full p-3 rounded-md cursor-pointer text-white text-xl">
          Sair
        </ul>
      </li>
    </div>
  );
}
