import ProductCardSkeleton from "@/components/aula api 26-07/productCardSkeleton";

export default function LoadingCard() {
  const cards = [];
  for (let i = 0; i <= 7; i++) {
    cards.push(<ProductCardSkeleton key={i} />);
  }
  return cards;
}
