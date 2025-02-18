// components/Navbar.js
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md flex justify-between items-center p-2 z-50"> {/* เพิ่ม z-50 */}
      <Link href="/">
        <Image
          src="/logo.png" // เปลี่ยนเป็น path จริงของ logo
          alt="PBRU-CN Logo"
          width={75}  // ปรับขนาดตามต้องการ
          height={100} // ปรับขนาดตามต้องการ
          priority
          className="cursor-pointer"
        />
      </Link>
      <Link href="/login">
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Log in
          </button>
      </Link>
    </nav>
  );
};

export default Navbar;