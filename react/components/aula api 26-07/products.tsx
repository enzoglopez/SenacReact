import ProductCard from "./productCard";

type prodtuctProps = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

export default async function GetProducts() {
  const response = await fetch("https://fakestoreapi.com/products");
  const productProp: prodtuctProps[] = await response.json();
  return (
    <>
      {productProp.map((produto) => (
        <ProductCard
          key={produto.id}
          title={produto.title}
          price={produto.price}
          category={produto.category}
          description={produto.description}
          image={produto.image}
          id={produto.id}
        />
      ))}
    </>
  );
}
