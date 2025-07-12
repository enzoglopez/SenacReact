export default function ComponenteMap() {
  const lista = [1,2,3,4,5];
  return(
    lista.map((item) => {
      <div key={item}>
        {item}
      </div>
    })
  );
}