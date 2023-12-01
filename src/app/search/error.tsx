'use client';

import { useEffect } from 'react';

type Props = { error: Error; reset: () => void };
export default function Error({ error, reset }: Props) {
  useEffect(() => {
    console.log('Fuck Mamreza', error);
  }, [error]);

  return (
    <div className="flex flex-col justify-center items-center pt-10">
      <h1 className="text-2xl mb-4">Something went wrong</h1>
      <button className="text-blue-500" onClick={reset}>
        Try again
      </button>
    </div>
  );
}
