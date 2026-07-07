'use client';

import { usePathname, useRouter } from '@/i18n/routing';
import { useLocale } from 'next-intl';

export default function LanguageSwitch() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLocale = () => {
    const nextLocale = locale === 'ru' ? 'en' : 'ru';
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <button
      onClick={toggleLocale}
      className="fixed top-8 right-8 z-50 mix-blend-difference text-white uppercase text-sm tracking-widest hover:opacity-70 transition-opacity font-mono"
    >
      {locale === 'ru' ? 'EN' : 'RU'}
    </button>
  );
}
