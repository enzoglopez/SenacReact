import CadastrarComponent from "../components/CadastrarComponent";

export default function Cadastro() {
  return (
    <div className="bg-gray-200 w-full h-screen flex flex-col items-center justify-center">
      <div className="bg-blue-100 p-10 rounded-xl shadow-xl flex flex-col gap-y-5">
        <h1 className="font-bold text-2xl text-center">
          Bem-vindo ao Cadastro!
        </h1>
        <CadastrarComponent />
      </div>
    </div>
  );
}
