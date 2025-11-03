// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    site: 'https://wigglypaint.com',
    integrations: [
        sitemap({
            i18n: {
                defaultLocale: 'en',
                locales: {
                    en: 'en',
                    zh: 'zh-CN',
                    ja: 'ja',
                    ko: 'ko',
                    es: 'es',
                    th: 'th'
                }
            },
            entryLimit: 50000,  // 设置更高的限制，避免分割成多个sitemap
            changefreq: 'weekly',
            priority: 0.7,
            customPages: [
                // 添加静态页面和重要资源
                'https://wigglypaint.com/wiggly.html'
            ]
        })
    ],
    i18n: {
        locales: ['en', 'zh', 'ja', 'ko', 'es', 'th'],
        defaultLocale: 'en',
        routing: {
            prefixDefaultLocale: false  // 英文版本直接在根路径 /
        }
    }
});
