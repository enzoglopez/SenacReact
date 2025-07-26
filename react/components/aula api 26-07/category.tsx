import Link from "next/link";

export default async function Categories() {
  const response = await fetch("https://fakestoreapi.com/products/categories");
  const categories = await response.json();
  let id = 1;
  return (
    <>
      {categories.map((category: string) => (
        <Link
          href={`categorias/${id}`}
          key={id++}
          className="p-4 w-full bg-white rounded-lg"
        >
          <h1 className="font-bold text-blue-700">
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </h1>
        </Link>
      ))}
    </>
  );
}
