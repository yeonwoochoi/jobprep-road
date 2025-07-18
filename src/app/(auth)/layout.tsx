import { ReactNode } from "react";
import "@/styles/tailwind.css";
import { Metadata } from "next";
import LanguageToggleButton from "@/components/ui/LanguageToggleButton";

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
        {children}
      </main>
    </div>
  );
}
