// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    i18n: {
        locales: ['en', 'zh', 'ja', 'ko'],
        defaultLocale: 'en',
        routing: {
            prefixDefaultLocale: false  // 英文版本直接在根路径 /
        }
    }
});
