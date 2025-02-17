import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md flex justify-between items-center p-4">
      <h1 className="text-lg font-bold">PBRU - CN</h1>
      <Link href="/login">
        <button className="bg-green-500 text-white px-4 py-2 rounded-md">Log in</button>
      </Link>
    </nav>
  );
};

export default Navbar;
