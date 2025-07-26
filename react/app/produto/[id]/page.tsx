export default async function produto({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  const produto = await response.json();
  return (
    <div className="flex w-full h-screen bg-gray-100">
      <div className="flex w-full p-6 m-4 bg-white shadow-lg rounded-xl gap-x-24">
        <div className="flex flex-col w-6/12 p-3 gap-y-5">
          <div className="flex flex-col gap-y-1">
            <h1 className="text-3xl font-bold">{produto.title}</h1>
            <span className="text-2xl font-semibold text-green-500">
              $ {produto.price}
            </span>
            <span className="text-gray-400">{produto.category}</span>
          </div>
          <hr className="h-1 bg-gray-200 border-0 rounded-2xl" />
          <div className="flex flex-col p-3 gap-y-3">
            <h1 className="text-2xl font-bold">Sobre este produto:</h1>
            <p>{produto.description}</p>
          </div>
        </div>
        <div className="flex items-center justify-center w-1/2 shadow-md h-1/2 rounded-xl">
          <img className="size-82" src={produto.image} />
        </div>
      </div>
    </div>
  );
}
