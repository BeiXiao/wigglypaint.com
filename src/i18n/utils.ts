import { ui, defaultLang } from './ui';

export function getLangFromUrl(url: URL) {
    const [, raw] = url.pathname.split('/');
    // Normalize common alias slugs
    const lang = raw === 'zh-hant' ? 'zh-Hant' : raw;
    if (lang in ui) return lang as keyof typeof ui;
    return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
    return function t(key: keyof typeof ui[typeof defaultLang]) {
        return ui[lang][key] || ui[defaultLang][key];
    }
}