import GetProducts from "@/components/aula api 26-07/products";
import { Suspense } from "react";
import LoadingCard from "./loadingCard";

export default function aula4() {
  return (
    <div className="flex w-full h-full bg-gray-100 f lex-col">
      <h1 className="pt-4 pl-8 text-xl font-bold">Produtos</h1>
      <div className="flex flex-wrap w-full gap-5 p-8 pt-4">
        <Suspense fallback={<LoadingCard />}>
          <GetProducts />
        </Suspense>
      </div>
    </div>
  );
}
