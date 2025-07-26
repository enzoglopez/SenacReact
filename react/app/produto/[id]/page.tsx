export default async function produto({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  const produto = await response.json();
  return (
    <div className="flex h-screen w-full bg-gray-100">
      
      <div className="m-4 w-full rounded-xl flex gap-x-24 p-6 bg-white shadow-lg">
        <div className="p-3 w-6/12 flex flex-col gap-y-5">
          <div className="flex flex-col gap-y-1">
            <h1 className="font-bold text-3xl">{produto.title}</h1>
            <span className="text-2xl text-green-500 font-semibold">
              $ {produto.price}
            </span>
            <span className="text-gray-400">{produto.category}</span>
          </div>
          <hr className="bg-gray-200 border-0 h-1 rounded-2xl" />
        <div className="p-3 flex gap-y-3 flex-col">
          <h1 className="font-bold text-2xl">Sobre este produto:</h1>
          <p>{produto.description}</p>
        </div>
        </div>
        <div className="w-1/2 h-1/2 rounded-xl flex items-center justify-center shadow-md">
          <img className="size-82" src={produto.image} />
        </div>
      </div>
    </div>
  );
}
