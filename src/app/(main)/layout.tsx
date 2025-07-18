import { ReactNode } from "react";
import "@/styles/tailwind.css";
import { Metadata } from "next";
import MainLayout from "@/components/ui/MainLayout";

export const metadata: Metadata = {
  title: {
    template: '취준로드',
    default: '취준로드 - 취준생 업종·직무 기반 맞춤 커리큘럼 자동 생성 서비스',
  },
}

export default function Layout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <div className="h-full bg-neutral-950 text-base">
      <div className="flex min-h-full flex-col">
        <MainLayout>
          {children}
        </MainLayout>
      </div>
    </div>
  );
}
