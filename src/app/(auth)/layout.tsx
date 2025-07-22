import { ReactNode } from "react";
import LanguageToggleButton from "@/components/ui/LanguageToggleButton";
import { GridPattern } from "@/components/ui/GridPattern";
import { FadeIn } from "@/components/ui/FadeIn";

export default function Layout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <div className="flex h-screen flex-col">
      <header className="flex items-center justify-end p-6">
        <LanguageToggleButton/>
      </header>
      <main className="my-auto">
        <GridPattern
          className="absolute inset-x-0 -top-14 -z-10 h-full w-full mask-[linear-gradient(to_bottom_left,white_40%,transparent_50%)] fill-neutral-50 stroke-neutral-950/5"
          yOffset={-96}
          interactive
        />
        <div className="flex flex-col flex-1 items-center justify-center pb-24">
          <FadeIn>
            <div className="w-full sm:w-lg px-8">
              {children}
            </div>
          </FadeIn>
        </div>
      </main>
    </div>
  );
}
