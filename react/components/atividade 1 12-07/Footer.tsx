type props = {
  texto: string;
};

export default function Footer({ texto }: props) {
  return (
    <div className="flex justify-center items-center relative bottom-0 w-full h-16 bg-gray-300">
      <p className="text-gray-500">{texto}</p>
    </div>
  );
}
