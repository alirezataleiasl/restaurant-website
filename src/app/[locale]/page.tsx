import { useTranslations } from 'next-intl';

export default function HomePage() {
  const t = useTranslations('HomePage');

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-[#fcfcfc]">
      <div className="space-y-6 text-center">
        {/* عنوان: باید با فونت Playfair (Serif) نمایش داده شود */}
        <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl uppercase tracking-tighter text-[#111]">
          {t('title')}
        </h1>
        
        {/* توضیحات: باید با فونت Vazirmatn (Sans) نمایش داده شود */}
        <p className="font-sans text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto italic">
          {t('description')}
        </p>

        <div className="mt-10 pt-10 border-t border-gray-200">
          <p className="text-sm text-gray-400 uppercase tracking-widest font-sans">
            وضعیت تست: سیستم دو زبانه فعال است
          </p>
        </div>
      </div>
    </main>
  );
}
