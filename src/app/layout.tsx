import { ReactNode } from "react";
import "@/styles/tailwind.css";
import { Metadata } from "next";
import RootLayout from "@/components/ui/RootLayout";
import { LanguageProvider } from "@/contexts/LanguageContext";

export const metadata: Metadata = {
  title: {
    template: '취준로드',
    default: '취준로드 - 취준생 업종·직무 기반 맞춤 커리큘럼 자동 생성 서비스',
  },
}

export default function Layout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html className="h-full bg-neutral-950 text-base antialiased">
      <body className="flex min-h-full flex-col">
        <LanguageProvider>
          <RootLayout>
            {children}
          </RootLayout>
        </LanguageProvider>
      </body>
    </html>
  );
}
