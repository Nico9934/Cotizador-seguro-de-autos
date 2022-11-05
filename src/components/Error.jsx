import useCotizador from "../hooks/useCotizador";

const Error = () => {
  const { error } = useCotizador();

  return (
    <div className="border-red-500 border bg-red-100 text-red-600 py-3 text-center">
      <p>{error}</p>
    </div>
  );
};

export default Error;
