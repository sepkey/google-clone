'use client';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { IoIosSearch } from 'react-icons/io';
import { IoCameraOutline } from 'react-icons/io5';

type Tab = 'All' | 'Images';
export default function SearchHeaderOptions() {
  const pathName = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get('searchTerm');
  function selectTab(tab: Tab) {
    router.push(
      `/search/${tab === 'Images' ? 'image' : 'web'}/?searchTerm=${searchTerm}`
    );
  }
  return (
    <div className="flex space-x-2 select-none border-b w-full justify-center lg:justify-start lg:pl-52 text-gray-700 text-sm">
      <div
        onClick={() => selectTab('All')}
        className={`flex items-center space-x-1 border-b-4 border-transparent active:text-blue-500 cursor-pointer pb-3 px-2 ${
          pathName === '/search/web' && '!text-blue-600 !border-blue-600'
        }`}
      >
        <IoIosSearch className="text-md" />
        <p>All</p>
      </div>
      <div
        onClick={() => selectTab('Images')}
        className={`flex items-center space-x-1 border-b-4 border-transparent active:text-blue-500 cursor-pointer pb-3 px-2 ${
          pathName === '/search/image' && '!text-blue-600 !border-blue-600'
        }`}
      >
        <IoCameraOutline className="text-md" />
        <p>Images</p>
      </div>
    </div>
  );
}
