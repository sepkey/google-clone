'use client';
import { IoIosSearch } from 'react-icons/io';
import { FaMicrophone } from 'react-icons/fa';
import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function HomeSearch() {
  const [input, setInput] = useState('');
  const [randomSearchLoading, setRandomSearchLoading] = useState(false);
  const router = useRouter();
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!input.trim()) return;
    router.push(`/search/web?searchTerm=${input}`);
  }
  async function randomSearch() {
    setRandomSearchLoading(true);
    const response = await fetch(
      'https://random-word-api.vercel.app/api?words=1'
    )
      .then((res) => res.json())
      .then((data) => data[0]);

    if (!response) return;
    router.push(`/search/web?searchTerm=${response}`);
    setRandomSearchLoading(false);
  }
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex w-full mt-5 mx-auto max-w-[90%] border border-gray-200  px-5 py-3 rounded-full hover:shadow-md transition-shadow focus-within:shadow-md sm:max-w-xl lg:max-w-2xl"
      >
        <IoIosSearch className="text-xl text-gray-500 mr-3" />
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          className="flex-grow focus:outline-none"
        />
        <FaMicrophone className="text-lg" />
      </form>
      <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 justify-center mt-8">
        <button onClick={handleSubmit} className="btn">
          Google Search
        </button>
        <button
          onClick={randomSearch}
          className="btn flex items-center justify-center disabled:opacity-80"
          disabled={randomSearchLoading}
        >
          {randomSearchLoading ? (
            <Image
              className="h-6 text-center"
              src="spinner.svg"
              alt="loading..."
              width="300"
              height="300"
            />
          ) : (
            'I am Feeling Lucky'
          )}
        </button>
      </div>
    </>
  );
}
