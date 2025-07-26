import GetProducts from "@/components/aula api 26-07/products";
import { Suspense } from "react";
import LoadingCard from "./loadingCard";

export default function aula4() {
  return (
    <div className="h-full w-full flex flex-col bg-gray-100">
      <h1 className="pl-8 pt-4 font-bold text-xl">Produtos</h1>
      <div className="p-8 pt-4 w-full flex flex-wrap gap-5">
        <Suspense fallback={<LoadingCard />}>
          <GetProducts />
        </Suspense>
      </div>
    </div>
  );
}
