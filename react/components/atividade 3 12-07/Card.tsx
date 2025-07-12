export default function Card(pessoa: {nome: string; email: string }) {
  return (
    <div className="w-full flex flex-col gap-y-5">
        <div
          className="hover:bg-blue-50 w-full rounded-md h-30 p-5 bg-white shadow-md"
        >
          <h1 className="font-bold text-xl">{pessoa.nome}</h1>
          <p className="text-gray-500">{pessoa.email}</p>
          <a href="#" className="text-sm text-blue-500 underline">
            Ver detalhes
          </a>
        </div>
    </div>
  );
}
