import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex flex-row xs:flex-row justify-between items-center w-full mt-3 border-b pb-7 sm:px-4 px-2 border-gray-500 gap-2">
      <Link href="/" className="flex space-x-2  items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffffff"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-candlestick-chart"
        >
          <path d="M9 5v4" />
          <rect width="4" height="6" x="7" y="9" rx="1" />
          <path d="M9 15v2" />
          <path d="M17 3v2" />
          <rect width="4" height="8" x="15" y="5" rx="1" />
          <path d="M17 13v3" />
          <path d="M3 3v18h18" />
        </svg>
        <h1 className="sm:text-3xl text-xl font-bold ml-2 tracking-tight ">
          Expense.AI
        </h1>
      </Link>
      <a
        className="flex max-w-fit items-center justify-center space-x-2 rounded-full border border-blue-600 text-white px-5 py-2 text-sm shadow-md hover:bg-blue-500 bg-blue-600 font-medium transition"
        href="https://github.com/Nutlope/roomGPT"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FireLogo />
        <p>Get Started</p>
      </a>
    </header>
  );
}

function FireLogo({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#ffffff"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="lucide lucide-rocket"
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
}
