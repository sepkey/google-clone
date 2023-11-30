'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import { FormEvent, useState } from 'react';
import { FaMicrophone } from 'react-icons/fa';
import { IoIosSearch } from 'react-icons/io';
import { RxCross2 } from 'react-icons/rx';

export default function SearchBox() {
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get('searchTerm');
  const [term, setTerm] = useState(searchTerm || '');
  const router = useRouter();
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!term.trim()) return;
    router.push(`/search/web?searchTerm=${term.trim()}`);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex border border-gray-200 rounded-full shadow-lg px-6 py-3 ml-10 mr-5 flex-grow max-w-3xl items-center"
    >
      <input
        type="text"
        className="w-full focus:outline-none "
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <RxCross2
        className="text-2xl text-gray-500 cursor-pointer sm:mr-2 "
        onClick={() => setTerm('')}
      />
      <FaMicrophone className="hidden sm:inline-flex text-4xl pl-4 border-l-2 border-gray-300 mr-3" />
      <IoIosSearch
        onClick={handleSubmit}
        className="text-2xl hidden sm:inline-flex text-blue-500 cursor-pointer"
      />
    </form>
  );
}
