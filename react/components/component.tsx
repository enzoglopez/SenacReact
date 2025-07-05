type info = {
  nome: string;
  idade: number;
};

export default function Component({ nome, idade }: info) {
  return (
    <div>
      <h1>olá {nome}</h1>
      <p>sua idade é {idade}</p>
    </div>
  );
}
