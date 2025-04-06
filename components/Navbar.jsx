'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation'; // ✅ Add this

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const { data: session } = useSession();
  const router = useRouter(); // ✅ Initialize router

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleLogout = async () => {
    await signOut({ redirect: false }); // prevent NextAuth auto-redirect
    router.push('/'); // ✅ Redirect to homepage after logout
  };

  return (
    <header className="sticky top-0 z-50 flex justify-between items-center px-6 py-4 bg-white dark:bg-gray-900 shadow-md">
      {/* Logo - Kept original design */}
      <Link href="/" className="flex items-center space-x-2">
        <Image src="/logo.png" alt="Logo" width={40} height={40} />
        <span className="font-bold text-xl text-orange-500">PgBuddy</span>
      </Link>

      {/* Desktop Nav */}
      <nav className="hidden md:flex gap-6 items-center">
        <Link href="/" className="hover:text-orange-500 font-medium transition">Home</Link>
        <Link href="/about" className="hover:text-orange-500 font-medium transition">About</Link>
        <Link href="/contact" className="hover:text-orange-500 font-medium transition">Contact</Link>
        <Link href="/roomList" className="hover:text-orange-500 font-medium transition">PGs</Link>

        {session && (
            <button
            onClick={() => {
              setMenuOpen(false);
              router.push("/user/register");
            }}
            className="text-sm px-4 py-2 bg-green-500 text-white rounded-full w-fit hover:bg-green-600 transition"
          >
            Register
          </button>
        )}

        {session ? (
          <>
            <span className="text-sm text-gray-700 dark:text-gray-200 font-medium">{session.user?.name}</span>
            <button
              onClick={handleLogout} // ✅ Use custom handler
              className="text-sm font-medium px-4 py-2 rounded-full border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition"
            >
              Logout
            </button>
          </>
        ) : (
          <button
            onClick={() => signIn('google', { callbackUrl: '/' })}
            className="text-sm font-medium px-4 py-2 rounded-full bg-orange-500 text-white hover:bg-orange-600 transition"
          >
            Login
          </button>
        )}

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="ml-4 bg-gray-200 dark:bg-gray-700 p-2 rounded-full transition"
        >
          {darkMode ? '🌙' : '☀️'}
        </button>
      </nav>

      {/* Hamburger for Mobile */}
      <div
        className="md:hidden flex flex-col justify-center items-end cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <div className={`w-6 h-0.5 bg-black dark:bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
        <div className={`w-6 h-0.5 bg-black dark:bg-white my-1 transition-opacity duration-300 ${menuOpen ? 'opacity-0' : 'opacity-100'}`} />
        <div className={`w-6 h-0.5 bg-black dark:bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
      </div>

      {/* Side Drawer */}
      <div className={`fixed top-0 right-0 h-full w-2/3 max-w-sm bg-white dark:bg-gray-900 shadow-2xl transform transition-transform duration-300 ${menuOpen ? 'translate-x-0' : 'translate-x-full'} z-50`}>
        <div className="flex flex-col p-6 pt-16 space-y-6 text-lg">
          <Link href="/" onClick={() => setMenuOpen(false)} className="hover:text-orange-500 transition">Home</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)} className="hover:text-orange-500 transition">About</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)} className="hover:text-orange-500 transition">Contact</Link>
          <Link href="/roomList" onClick={() => setMenuOpen(false)} className="hover:text-orange-500 transition">PGs</Link>

          {session && (
            // <Link
            //   href="user/register"
            //   onClick={() => setMenuOpen(false)}
            //   className="text-sm px-4 py-2 bg-green-500 text-white rounded-full w-fit hover:bg-green-600 transition"
            // >
            //   Register
            // </Link>
            <button
  onClick={() => {
    setMenuOpen(false);
    router.push("/user/register");
  }}
  className="text-sm px-4 py-2 bg-green-500 text-white rounded-full w-fit hover:bg-green-600 transition"
>
  Register
</button>
          )}

          {session ? (
            <>
              <span className="text-sm text-gray-700 dark:text-gray-200 font-medium">{session.user?.name}</span>
              <button
                onClick={() => {
                  setMenuOpen(false);
                  handleLogout(); // ✅ Use custom logout
                }}
                className="text-orange-500 font-medium hover:underline"
              >
                Logout
              </button>
            </>
          ) : (
            <button
              onClick={() => {
                signIn('google', { callbackUrl: '/' });
                setMenuOpen(false);
              }}
              className="bg-orange-500 text-white px-4 py-2 rounded-full w-fit hover:bg-orange-600 transition"
            >
              Login
            </button>
          )}

          <button
            onClick={() => {
              setDarkMode(!darkMode);
              setMenuOpen(false);
            }}
            className="text-left text-orange-500"
          >
            {darkMode ? 'Switch to Light Mode ☀️' : 'Switch to Dark Mode 🌙'}
          </button>
        </div>
      </div>

      {/* Backdrop */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </header>
  );
}
