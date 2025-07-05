type props = {
  color: "azul" | "vermelho" | "verde";
  titulo: string;
};

export default function ButtonReact({ color, titulo }: props) {
  let buttonColor = "";

  switch (color) {
    case "azul":
      buttonColor = "bg-blue-600";
      break;
    case "vermelho":
      buttonColor = "bg-red-600";
      break;
    case "verde":
      buttonColor = "bg-green-600";
      break;
  }

  return (
    <div>
      <button className={`${buttonColor}`}>{titulo}</button>
    </div>
  );
}
