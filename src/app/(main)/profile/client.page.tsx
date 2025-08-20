'use client';

import { Container } from '@/components/ui/Container';
import { FadeIn } from '@/components/ui/FadeIn';
import ProfileUserInfoCard from '@/components/profile/ProfileUserInfoCard';
import ProfileSidebar from '@/components/profile/ProfileSidebar';
import { useState } from 'react';
import { UserData } from '@/types/user';
import ProfileContentCard from '@/components/profile/ProfileContentCard';
import { ActiveMenu } from '@/data/constants/profileMenu';

interface ProfileClientPageProps {
  user: UserData;
}

export default function ProfileClientPage({ user }: ProfileClientPageProps) {
  const [activeMenu, setActiveMenu] = useState<ActiveMenu>('profileSettings');

  return (
    <Container className="mt-16 sm:mt-20">
      <div className="grid grid-cols-1 gap-x-12 gap-y-16 lg:grid-cols-3">
        <aside className="lg:col-span-1">
          <FadeIn>
            <ProfileUserInfoCard className="hidden lg:block" email={user.email} name={user.name} />
            <ProfileSidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
          </FadeIn>
        </aside>
        <main className="lg:col-span-2">
          <FadeIn>
            {/*TODO activeMenu 바뀌면 다시 렌더링 되게끔*/}
            <ProfileContentCard activeMenu={activeMenu} />
          </FadeIn>
        </main>
      </div>
    </Container>
  );
}
