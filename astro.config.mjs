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
                    th: 'th'
                }
            },
            entryLimit: 50000  // 设置更高的限制，避免分割成多个sitemap
        })
    ],
    i18n: {
        locales: ['en', 'zh', 'ja', 'ko', 'th'],
        defaultLocale: 'en',
        routing: {
            prefixDefaultLocale: false  // 英文版本直接在根路径 /
        }
    }
});
