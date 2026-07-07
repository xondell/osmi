import { getTranslations } from 'next-intl/server';
import SmoothScroll from '@/components/SmoothScroll';
import LanguageSwitch from '@/components/LanguageSwitch';
import LandingContent from '@/components/LandingContent';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Hero' });
  return {
    title: `osmi | ${t('headline')}`,
  };
}

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  
  return (
    <SmoothScroll>
      <LanguageSwitch />
      <LandingContent locale={locale} />
    </SmoothScroll>
  );
}
