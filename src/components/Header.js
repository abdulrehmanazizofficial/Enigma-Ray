import { SettingsModal } from './SettingsModal.js';
import { t, getLang, setLang } from '../lib/i18n.js';

export function Header(navigate) {
    const header = document.createElement('header');
    header.className = 'w-full flex flex-col z-50 sticky top-0';


    // 2. Main Navigation Bar
    const navBar = document.createElement('div');
    navBar.className = 'w-full h-16 bg-black flex items-center justify-between px-4 md:px-6 border-b border-white/5 backdrop-blur-md bg-opacity-95';

    const leftPart = document.createElement('div');
    leftPart.className = 'flex items-center gap-8';

    // Logo
    const logoContainer = document.createElement('div');
    logoContainer.className = 'cursor-pointer hover:scale-105 transition-transform flex items-center gap-2.5';
    logoContainer.innerHTML = `
        <div class="w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center bg-black/60 border border-purple-500/30 shadow-lg shadow-purple-500/20">
            <img src="/icon.png" alt="Enigma Ray" class="w-full h-full object-cover" />
        </div>
        <div class="hidden sm:flex items-center gap-1.5">
            <span class="text-sm font-extrabold tracking-tight text-white">
                Enigma<span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400">Ray</span>
            </span>
            <span class="text-[10px] font-semibold px-1.5 py-0.2 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300">
                Gen
            </span>
        </div>
    `;

    const menu = document.createElement('nav');
    menu.className = 'hidden lg:flex items-center gap-6 text-[13px] font-bold text-secondary';
    const items = [
        { label: t('nav.image'),   page: 'image' },
        { label: t('nav.video'),   page: 'video' },
        { label: t('nav.lipsync'), page: 'lipsync' },
        { label: t('nav.cinema'),  page: 'cinema' },
        { label: t('nav.workflows'), page: 'workflows' },
        { label: t('nav.agents'),  page: 'agents' },
        { label: t('nav.mcpcli'),  page: 'mcp-cli' },
    ];

    items.forEach(({ label, page }, idx) => {
        const link = document.createElement('a');
        link.textContent = label;
        link.className = `hover:text-white transition-all cursor-pointer relative group ${idx === 0 ? 'text-white' : ''}`;

        if (idx === 0) {
            const dot = document.createElement('div');
            dot.className = 'absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full';
            link.appendChild(dot);
        }

        link.onclick = () => {
            Array.from(menu.children).forEach(child => child.classList.remove('text-white'));
            link.classList.add('text-white');
            navigate(page);
        };

        menu.appendChild(link);
    });

    leftPart.appendChild(logoContainer);
    leftPart.appendChild(menu);

    const rightPart = document.createElement('div');
    rightPart.className = 'flex items-center gap-3';

    // GitHub Star Button
    const starBtn = document.createElement('a');
    starBtn.href = 'https://github.com/abdulrehmanazizofficial/Enigma-Ray';
    starBtn.target = '_blank';
    starBtn.rel = 'noopener noreferrer';
    starBtn.className = 'flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-purple-500/40 bg-gradient-to-r from-purple-500/10 via-indigo-500/10 to-cyan-500/10 hover:from-purple-500/25 hover:to-cyan-500/25 text-white/90 hover:text-white transition-all duration-200 group shadow-sm shadow-purple-500/20';
    starBtn.title = 'Star Enigma Ray on GitHub';
    starBtn.innerHTML = `
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" class="text-yellow-400 group-hover:scale-110 transition-transform">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
        <span class="text-[12px] font-bold tracking-tight">Star</span>
        <span class="text-[11px] font-semibold px-1.5 py-0.2 rounded-full bg-white/10 text-white/80">★</span>
    `;
    rightPart.appendChild(starBtn);

    const settingsBtn = document.createElement('button');
    settingsBtn.className = 'flex items-center gap-2 px-3 py-1.5 rounded-md border border-white/10 bg-white/5 text-[13px] font-bold text-white/80 hover:text-white hover:bg-white/10 hover:border-white/20 transition-colors';
    settingsBtn.title = t('web.settingsTitle');
    settingsBtn.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="3"/>
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
        </svg>
        <span>${t('nav.settings')}</span>
    `;
    settingsBtn.onclick = () => {
        document.body.appendChild(SettingsModal());
    };

    // Language toggle button
    const langBtn = document.createElement('button');
    const currentLang = getLang();
    langBtn.className = 'flex items-center px-3 py-1.5 rounded-md border border-white/10 bg-white/5 text-[13px] font-bold text-white/80 hover:text-white hover:bg-white/10 hover:border-white/20 transition-colors';
    langBtn.title = currentLang === 'zh-CN' ? t('web.switchToEn') : t('web.switchToZh');
    langBtn.textContent = currentLang === 'zh-CN' ? 'EN' : '中文';
    langBtn.onclick = () => setLang(currentLang === 'zh-CN' ? 'en' : 'zh-CN');

    rightPart.appendChild(langBtn);
    rightPart.appendChild(settingsBtn);

    navBar.appendChild(leftPart);
    navBar.appendChild(rightPart);

    header.appendChild(navBar);

    return header;
}
