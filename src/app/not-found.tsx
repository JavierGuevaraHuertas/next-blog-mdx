import Link from "next/link";

const NotFound = () => {
  return (
    <div className="grid gap-4 h-screen place-content-center">
      <h1 className="text-center text-3xl">404</h1>
      <Link
        href="/"
        className="bg-black text-white py-2 px-4 rounded-md hover:bg-slate-700"
      >
        Volver al inicio
      </Link>
    </div>
  );
};
export default NotFound;