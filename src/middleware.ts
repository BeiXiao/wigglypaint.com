import { defineMiddleware } from 'astro/middleware';

export const onRequest = defineMiddleware(async (context, next) => {
  const url = new URL(context.request.url);
  const pathname = url.pathname;

  // Redirect lowercase zh-hant to canonical zh-Hant (including subpaths)
  if (pathname.startsWith('/zh-hant')) {
    url.pathname = pathname.replace(/^\/zh-hant/, '/zh-Hant');
    return Response.redirect(url, 301);
  }

  return next();
});