import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <p className="mb-2 text-sm uppercase tracking-[0.3em] text-gray-400">404</p>
      <h1 className="text-4xl font-bold text-white">Sahifa topilmadi</h1>
      <p className="mt-4 max-w-md text-gray-300">
        Siz izlayotgan sahifa mavjud emas yoki ko’chirilgan. Asosiy sahifaga qaytib keling.
      </p>
      <Link
        to="/"
        className="mt-6 inline-block rounded-full bg-white px-5 py-3 font-medium text-[#08080C] transition hover:bg-gray-200"
      >
        Bosh sahifaga qaytish
      </Link>
    </section>
  );
};

export default NotFound;
