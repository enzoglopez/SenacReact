export default function ProductCardSkeleton() {
  return (
    <div className="bg-white p-5 flex flex-col size-92 h-fit shadow-md gap-y-3 rounded-2xl">
      <div className="h-30 w-full bg-gray-300 rounded-md self-center" />
      <h1 className="w-full h-8 rounded-md bg-gray-200"></h1>
      <span className="w-1/4 h-4 rounded-sm bg-gray-100"></span>
      <span className="w-1/5 h-4 rounded-sm bg-green-100"></span>
      <div className="w-full h-20 bg-gray-200 rounded-sm"></div>
      <div className="flex gap-x-2">
        <button className="cursor-pointer active:bg-blue-600 w-1/2 h-10 rounded-md text-white bg-blue-500"></button>
        <button className="cursor-pointer w-1/2 h-10 rounded-md text-white active:bg-green-600 bg-green-500"></button>
      </div>
    </div>
  );
}
