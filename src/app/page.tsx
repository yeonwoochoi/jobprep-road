import RootLayout from "@/components/ui/RootLayout";
import Container from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";

export default function Home() {
  return (
    <RootLayout>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-balance text-neutral-950 sm:text-7xl">
            취준로드 -
            <br className="hidden sm:inline" /> 맞춤형 취업 준비 로드맵
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            원하는 직무 기준, 공통 채용 요구 분석 후
            3개월 학습 로드맵 제공해 드립니다.
          </p>
        </FadeIn>
      </Container>
    </RootLayout>
  )
}
