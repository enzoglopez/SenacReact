import { Suspense } from "react";
import Loading from "../loading";
import Categories from "@/components/aula api 26-07/category";

export default async function categorias() {
  return (
    <div className="w-full h-screen bg-gray-100">
      <h1 className="pt-4 pl-8 text-xl font-bold">Categorias</h1>
      <div className="flex flex-col p-8 pt-4 gap-y-5">
        <Suspense fallback={<Loading />}>
          <Categories />
        </Suspense>
      </div>
    </div>
  );
}
