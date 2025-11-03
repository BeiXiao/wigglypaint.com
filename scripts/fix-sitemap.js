#!/usr/bin/env node

// 简单的构建后脚本：将sitemap-0.xml重命名为sitemap.xml并删除索引文件
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.join(__dirname, '..', 'dist');
const sitemap0Path = path.join(distDir, 'sitemap-0.xml');
const sitemapIndexPath = path.join(distDir, 'sitemap-index.xml');
const sitemapPath = path.join(distDir, 'sitemap.xml');

try {
    // 检查sitemap-0.xml是否存在
    if (fs.existsSync(sitemap0Path)) {
        // 复制sitemap-0.xml为sitemap.xml
        fs.copyFileSync(sitemap0Path, sitemapPath);
        console.log('✅ Created sitemap.xml');

        // 删除索引文件
        if (fs.existsSync(sitemapIndexPath)) {
            fs.unlinkSync(sitemapIndexPath);
            console.log('✅ Removed sitemap-index.xml');
        }

        // 可选：删除sitemap-0.xml
        fs.unlinkSync(sitemap0Path);
        console.log('✅ Removed sitemap-0.xml');

        console.log('🎉 Sitemap optimization complete!');
    } else {
        console.log('❌ sitemap-0.xml not found');
    }
} catch (error) {
    console.error('❌ Error processing sitemap:', error.message);
    process.exit(1);
}