<script lang="ts">
import { DARK_MODE, LIGHT_MODE, SYSTEM_MODE } from "@/constants/constants";
import Icon from "@iconify/svelte";
import {
	getStoredTheme,
	setTheme,
	applyThemeToDocument,
} from "@/utils/setting-utils";
import type { LIGHT_DARK_MODE } from "@/types/config.ts";
import { onMount } from 'svelte';
import I18nKey from "@i18n/i18nKey";
import { i18n } from "@i18n/translation";

let mode: LIGHT_DARK_MODE = $state(LIGHT_MODE);
let displayedMode: LIGHT_DARK_MODE = $state(LIGHT_MODE);

let lightModeLabel = $state(i18n(I18nKey.lightMode));
let darkModeLabel = $state(i18n(I18nKey.darkMode));
let systemModeLabel = $state(i18n(I18nKey.systemMode));

function switchScheme(newMode: LIGHT_DARK_MODE) {
	mode = newMode;
	setTheme(newMode);
}

function updateDisplayedMode() {
	if (mode === SYSTEM_MODE) {
		const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
		displayedMode = isSystemDark ? DARK_MODE : LIGHT_MODE;
	} else {
		displayedMode = mode;
	}
}

function updateLabels() {
	lightModeLabel = i18n(I18nKey.lightMode);
	darkModeLabel = i18n(I18nKey.darkMode);
	systemModeLabel = i18n(I18nKey.systemMode);
}

onMount(() => {
	const storedTheme = getStoredTheme();
	mode = storedTheme;
	updateDisplayedMode();
	
	if (storedTheme !== SYSTEM_MODE) {
		const currentTheme = document.documentElement.classList.contains('dark') ? DARK_MODE : LIGHT_MODE;
		if (storedTheme !== currentTheme) {
			applyThemeToDocument(storedTheme);
		}
	}
	
	if (storedTheme === SYSTEM_MODE) {
		const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
		const handleSystemChange = () => {
			updateDisplayedMode();
		};
		mediaQuery.addEventListener('change', handleSystemChange);
	}
	
	const handleContentReplace = () => {
		const newTheme = getStoredTheme();
		mode = newTheme;
		updateDisplayedMode();
	};
	
	if ((window as any).swup && (window as any).swup.hooks) {
		(window as any).swup.hooks.on('content:replace', handleContentReplace);
	} else {
		document.addEventListener('swup:enable', () => {
			if ((window as any).swup && (window as any).swup.hooks) {
				(window as any).swup.hooks.on('content:replace', handleContentReplace);
			}
		});
	}
	
	const handleThemeChange = () => {
		if (mode !== SYSTEM_MODE) {
			const newTheme = getStoredTheme();
			mode = newTheme;
			updateDisplayedMode();
		} else {
			updateDisplayedMode();
		}
	};
	
	window.addEventListener('theme-change', handleThemeChange);
	
	const handleLangChange = () => {
		updateLabels();
	};
	
	window.addEventListener('site-lang-change', handleLangChange);
	
	return () => {
		window.removeEventListener('theme-change', handleThemeChange);
		window.removeEventListener('site-lang-change', handleLangChange);
	};
});
</script>

<div class="relative z-50" role="menu" tabindex="-1">
    <button aria-label="Light/Dark Mode" role="menuitem" class="relative btn-plain scale-animation rounded-lg h-11 w-11 active:scale-90" id="scheme-switch">
        <div class="absolute" class:opacity-0={displayedMode !== LIGHT_MODE}>
            <Icon icon="material-symbols:wb-sunny-outline-rounded" class="text-[1.25rem]"></Icon>
        </div>
        <div class="absolute" class:opacity-0={displayedMode !== DARK_MODE}>
            <Icon icon="material-symbols:dark-mode-outline-rounded" class="text-[1.25rem]"></Icon>
        </div>
    </button>
    <div id="theme-mode-panel" class="absolute transition float-panel-closed top-11 -right-2 pt-5 z-50">
        <div class="card-base float-panel p-2">
            <button class="flex transition whitespace-nowrap items-center !justify-start w-full btn-plain scale-animation rounded-lg h-9 px-3 font-medium active:scale-95 mb-0.5"
                    class:current-theme-btn={mode === LIGHT_MODE}
                    onclick={() => switchScheme(LIGHT_MODE)}
            >
                <Icon icon="material-symbols:wb-sunny-outline-rounded" class="text-[1.25rem] mr-3"></Icon>
                {lightModeLabel}
            </button>
            <button class="flex transition whitespace-nowrap items-center !justify-start w-full btn-plain scale-animation rounded-lg h-9 px-3 font-medium active:scale-95 mb-0.5"
                    class:current-theme-btn={mode === DARK_MODE}
                    onclick={() => switchScheme(DARK_MODE)}
            >
                <Icon icon="material-symbols:dark-mode-outline-rounded" class="text-[1.25rem] mr-3"></Icon>
                {darkModeLabel}
            </button>
            <button class="flex transition whitespace-nowrap items-center !justify-start w-full btn-plain scale-animation rounded-lg h-9 px-3 font-medium active:scale-95"
                    class:current-theme-btn={mode === SYSTEM_MODE}
                    onclick={() => switchScheme(SYSTEM_MODE)}
            >
                <Icon icon="material-symbols:brightness-auto-outline-rounded" class="text-[1.25rem] mr-3"></Icon>
                {systemModeLabel}
            </button>
        </div>
    </div>
</div>