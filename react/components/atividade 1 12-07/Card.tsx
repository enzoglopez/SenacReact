type props = {
  titulo: string;
  descricao: string;
  horizontal: boolean;
};

export default function Card({ titulo, descricao, horizontal }: props) {
  if (horizontal) {
    return (
      <div className="rounded-2xl shadow-lg bg-white lg:max-w-4xl w-full h-32 sm:h-52 p-3">
        <h1 className="font-bold text-xl">{titulo}</h1>
        <p className="text-base">{descricao}</p>
      </div>
    );
  } else {
    return (
      <div className="rounded-2xl shadow-lg bg-white lg:w-3xs w-44 h-56 sm:w-52 sm:h-64 lg:h-80 p-3">
        <h1 className="font-bold text-xl">{titulo}</h1>
        <p className="text-base">{descricao}</p>
      </div>
    );
  }
}