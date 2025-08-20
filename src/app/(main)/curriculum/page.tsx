import { cookies } from 'next/headers';
import { Metadata } from 'next';
import { Locale } from '@/locale';
import { generatePageMetadata } from '@/_meta/metadata-utils';

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies();
  const lang = (cookieStore.get('lang' as any)?.value as Locale) || 'ko';
  return generatePageMetadata('curriculum', lang);
}

export default function Page() {
  return <div>List</div>;
}
