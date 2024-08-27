export default function BlankPage() {
  return (
    <div className="flex flex-col">
      <div className="flex align-middle flex-row justify-center">
        <img className="h-12 w-auto" src="/logo.svg" alt="logo" />
        <h1 className="text-2xl ml-2 mt-3 font-extrabold text-green-600">
          Latam Bioenergy
        </h1>
      </div>
      <h1 className="font-bold text-xl text-center">
        Bienvenido al Helpdesk de Latam Bioenergy!
      </h1>
    </div>
  );
}
