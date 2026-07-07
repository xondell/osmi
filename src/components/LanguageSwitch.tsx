'use client';

import { usePathname, useRouter } from '@/i18n/routing';
import { useLocale } from 'next-intl';

export default function LanguageSwitch() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleLocaleChange = (nextLocale: 'ru' | 'en' | 'ro') => {
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <div className="fixed top-6 md:top-8 right-6 md:right-8 z-50 mix-blend-difference text-white text-xs tracking-widest font-mono flex gap-3">
      {(['ru', 'en', 'ro'] as const).map((lang, index, array) => (
        <span key={lang} className="flex items-center gap-3">
          <button
            onClick={() => handleLocaleChange(lang)}
            className={`uppercase cursor-pointer transition-all ${
              locale === lang ? 'font-bold opacity-100 border-b border-white pb-0.5' : 'opacity-60 border-b border-transparent hover:opacity-100 pb-0.5'
            }`}
          >
            {lang}
          </button>
          {index < array.length - 1 && <span className="opacity-20">/</span>}
        </span>
      ))}
    </div>
  );
}
