import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-center h-16 sm:h-20 w-full sm:pt-2 pt-4 border-t mt-5 flex sm:flex-row flex-col justify-between items-center px-3 space-y-3 sm:mb-0 mb-3 border-gray-500">
      <div className="text-blue-500 font-extrabold">
        Expence.AI
        <a
          href="https://replicate.com/"
          target="_blank"
          rel="noreferrer"
          className="font-normal hover:underline text-gray-400 transition hover:text-gray-300 underline-offset-2"
        >
          <span className=" px-2">|</span>Get Sign In to our Newsletter
        </a>
      </div>
      <div className="flex w-3/5 text-center md:text-left text-gray-500 space-x-4 pb-4 sm:pb-0">
        Expense Analyzer: Effortlessly track, analyze, and optimize your
        expenses using AI.
      </div>
    </footer>
  );
}
