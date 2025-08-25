import { FadeInStagger } from '@/components/ui/FadeIn'
import { SectionIntro } from '@/components/ui/SectionIntro'
import LocaleText from '@/components/common/LocaleText'
import { MessageKey } from '@/locale/message'
import { dynamicFetch } from '@/lib/api'
import { ProfileData } from '@/types/profile'
import { Container } from '@/components/ui/Container'
import ProfileErrorActions from '@/components/profile/ProfileErrorActions'
import sampleUserDataJson from '@/data/mocks/userProfileMockData.json'
import { ProfileDataProvider } from '@/contexts/ProfileDataContext'
import ProfileClientPage from '@/app/(main)/profile/client.page'

export default async function Page() {
  // TODO: 실제 API 연동 시 주석 해제
  // const result = await dynamicFetch<UserData>('/api/user/me');

  // JSON 파일을 타입 단언(as)을 통해 UserData 타입으로 사용합니다.
  const result = { status: 'success', data: sampleUserDataJson as ProfileData }

  if (result.status === 'error' || !result.data) {
    return (
      <Container className="mt-16 sm:mt-20">
        <p className="text-3xl font-bold">
          <LocaleText keyOrLocaleData={MessageKey.PROFILE_FETCH_ERROR} />
        </p>
        <ProfileErrorActions />
      </Container>
    )
  }

  const profileData = result.data

  return (
    <FadeInStagger className="mt-0 sm:mt-8 lg:mt-16">
      <ProfileDataProvider initialData={profileData}>
        <SectionIntro title={<LocaleText keyOrLocaleData={MessageKey.PROFILE_HEADER_TITLE} />}>
          <LocaleText keyOrLocaleData={MessageKey.PROFILE_HEADER_DESCRIPTION} />
        </SectionIntro>
        <ProfileClientPage />
      </ProfileDataProvider>
    </FadeInStagger>
  )
}
