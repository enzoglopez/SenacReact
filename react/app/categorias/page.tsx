import { Suspense } from "react";
import Loading from "../loading";
import Categories from "@/components/aula api 26-07/category";

export default async function categorias() {
  return (
    <div className="h-screen w-full bg-gray-100">
      <h1 className="pl-8 pt-4 font-bold text-xl">Categorias</h1>
      <div className="flex flex-col gap-y-5 p-8 pt-4">
        <Suspense fallback={<Loading/>}>
          <Categories/>
        </Suspense>
      </div>
    </div>
  );
}
