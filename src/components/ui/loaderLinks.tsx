"use client";
import { useTransition, useState } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { createPortal } from "react-dom";

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////

export function LoaderLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [progress, setProgress] = useState(0);
  const [isPending, startTransition] = useTransition();

  //////////////////////////////////////////////////////////////////////////////////////////////////////////

  const handleClick = () => {
    setProgress(20);

    setTimeout(() => setProgress(60), 50);
    setTimeout(() => setProgress(95), 100);

    startTransition(() => {
      router.push(href);
    });
  };

  //////////////////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <button
      type="button"
      aria-label="Navigate"
      onClick={handleClick}
      className={`${cn(className)} cursor-pointer`}
      disabled={isPending}
    >
      {children}

      {isPending &&
        createPortal(
          <div className="fixed top-0 left-0 w-full h-[3px] rounded-full bg-transparent z-[9999]">
            <div
              className="h-full bg-gradient-to-tr from-orange-500 via-orange-600 to-orange-700 rounded-r-full transition-all duration-300 ease-in-out"
              style={{ width: `${progress}%` }}
            />
          </div>,
          document.body,
        )}
    </button>
  );
}
