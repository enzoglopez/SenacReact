import GetProductsCategories from "@/components/aula api 26-07/productsCategories";
import { Suspense } from "react";
import LoadingCard from "@/app/loadingCard";

export default async function ProductCategory({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  var category = "";
  switch (id) {
    case "1":
      category = "electronics";
      break;
    case "2":
      category = "jewelery";
      break;
    case "3":
      category = "men's clothing";
      break;
    case "4":
      category = "women's clothing";
      break;
  }
  return (
    <div className="h-full w-full flex flex-col bg-gray-100">
      <h1 className="pl-8 pt-4 font-bold text-xl">Produtos</h1>
      <div className="p-8 pt-4 w-full flex flex-wrap gap-5">
        <Suspense fallback={<LoadingCard />}>
          <GetProductsCategories category={category} />
        </Suspense>
      </div>
    </div>
  );
}
