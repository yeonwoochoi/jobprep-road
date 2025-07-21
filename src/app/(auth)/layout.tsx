import { ReactNode } from "react";
import { Metadata } from "next";
import LanguageToggleButton from "@/components/ui/LanguageToggleButton";
import { GridPattern } from "@/components/ui/GridPattern";

export const metadata: Metadata = {
  title: '로그인 - 취준로드',
};

export default function Layout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <div className="flex h-screen flex-col">
      <header className="flex items-center justify-end p-6">
        <LanguageToggleButton />
      </header>
      <main className="my-auto">
        <GridPattern
          className="absolute inset-x-0 -top-14 -z-10 h-full w-full mask-[linear-gradient(to_bottom_left,white_40%,transparent_50%)] fill-neutral-50 stroke-neutral-950/5"
          yOffset={-96}
          interactive
        />
        {children}
      </main>
    </div>
  );
}
