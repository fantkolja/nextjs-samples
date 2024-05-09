import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

export const Header = () => {
  return (
    <div className="z-10 max-w-5xl w-full items-center justify-end font-mono text-sm lg:flex">
      <div
        className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
        <Link
          className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
          href="/"
        >
          By{" "}
          <Image
            src="/zdtu-white.svg"
            alt="ZDTU Logo"
            width={120}
            height={36}
            priority
          />
        </Link>
      </div>
    </div>
  );
};
