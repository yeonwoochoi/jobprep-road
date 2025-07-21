import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import LocaleText from "@/components/common/LocaleText";
import { MessageKey } from "@/locale/message";
import { GridPattern } from "@/components/ui/GridPattern";

export default function NotFound() {
  return (
    <div className="flex flex-col h-screen relative isolate items-center justify-center text-center pb-20">
      <GridPattern
        className="absolute inset-x-0 -top-14 -z-10 h-full w-full mask-[linear-gradient(to_bottom_left,white_40%,transparent_50%)] fill-neutral-50 stroke-neutral-950/5"
        yOffset={-96}
        interactive
      />
      <FadeIn>
        <p className="font-semibold text-base text-neutral-900">
          <LocaleText messageKey={MessageKey.NOT_FOUND_TITLE}/>
        </p>
        <h1 className="mt-4 font-medium text-5xl sm:text-7xl tracking-tight text-balance">
          <LocaleText messageKey={MessageKey.NOT_FOUND_SUBTITLE}/>
        </h1>
        <p className="mt-6 text-lg font-medium text-pretty text-neutral-500 sm:text-xl/8">
          <LocaleText messageKey={MessageKey.NOT_FOUND_DESCRIPTION}/>
        </p>
        <Button href="/" className="text-lg w-[150px] h-12 mt-6">
          <LocaleText messageKey={MessageKey.NOT_FOUND_HOME_BUTTON}/>
        </Button>
      </FadeIn>
    </div>
  )
}