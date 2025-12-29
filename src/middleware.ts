import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'fa'],
  defaultLocale: 'en',
  localePrefix: 'always' // برای سئو و رزومه مهاجرتی بهتر است همیشه لوکال در آدرس باشد
});

export const config = {
  matcher: ['/', '/(fa|en)/:path*']
};