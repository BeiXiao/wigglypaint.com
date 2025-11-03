// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import fs from 'fs';
import path from 'path';

// https://astro.build/config
export default defineConfig({
    site: 'https://wigglypaint.com',
    integrations: [
        sitemap({
            // 不使用i18n配置，避免创建索引文件
            entryLimit: 50000,
            changefreq: 'weekly',
            priority: 0.7,
            customPages: [
                // 添加静态页面和重要资源
                'https://wigglypaint.com/wiggly.html'
            ]
        })
    ],
    i18n: {
        locales: ['en', 'zh', 'zh-Hant', 'ja', 'ko', 'ms', 'id', 'vi', 'es', 'th', 'pt', 'pl', 'de', 'fr'],
        defaultLocale: 'en',
        routing: {
            prefixDefaultLocale: false  // 英文版本直接在根路径 /
        }
    }
});
