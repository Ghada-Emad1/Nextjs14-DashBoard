'use client'
import {  useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <main className="flex h-full flex-col items-center justify-center">
      <h2 className="text-center">SomeThing Went Wrong!</h2>
      <button
        onClick={() => reset()}
        className="mt-4 rounded-lg px-4 py-2 bg-blue-500 text-sm text-white transition-colors hover:bg-blue-400"
      >
        Try Again
      </button>
    </main>
  );
}
