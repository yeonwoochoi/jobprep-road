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
            원하는 업종과 직무를 선택하면, 해당 분야 기업들의 공통된 채용 요구사항을 분석해
            3개월 분량의 맞춤형 학습 로드맵을 자동으로 생성해드립니다.
          </p>
        </FadeIn>
      </Container>
    </RootLayout>
  )
}
