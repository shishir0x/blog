# Language Sync Issue Fix Report

## 📋 Issue Summary

Previously, the following language synchronization issues existed:
1. ✅ **Navbar Links** - Working normally
2. ✅ **Reading Word Count/Time** - Working normally
3. ❌ **Comment Component (Twikoo)** - Does not update after language switch
4. ❌ **Theme Switch Button** - Button text does not respond to language switch
5. ❌ **Wallpaper Setting Button** - Button text does not respond to language switch
6. ❌ **Color Setting Panel** - Title text does not respond to language switch

## 🔧 Fix Solution

### Core Principle
All components uniformly listen to the `site-lang-change` custom event, which triggers when the user switches languages. Through Svelte 5's `$state` reactivity system, the UI updates automatically.

### Modified Files

#### 1. **LightDarkSwitch.svelte** (Theme Switch Button)
**Changes**:
- Added reactive label variables: `lightModeLabel`, `darkModeLabel`, `systemModeLabel`
- Added `updateLabels()` function to update all labels
- Listened to the `site-lang-change` event in `onMount`
- Replaced `i18n()` calls in the template with reactive variables

**Key Code**:
```typescript
// Reactive labels
let lightModeLabel = $state(i18n(I18nKey.lightMode));
let darkModeLabel = $state(i18n(I18nKey.darkMode));
let systemModeLabel = $state(i18n(I18nKey.systemMode));

// Update function
function updateLabels() {
	lightModeLabel = i18n(I18nKey.lightMode);
	darkModeLabel = i18n(I18nKey.darkMode);
	systemModeLabel = i18n(I18nKey.systemMode);
}

// Listen to event
window.addEventListener('site-lang-change', handleLangChange);
```

#### 2. **WallpaperSwitch.svelte** (Wallpaper Switch Button)
**Changes**:
- Added reactive label variables: `bannerModeLabel`, `overlayModeLabel`, `noneModeLabel`
- Added `updateLabels()` function
- Listened to the `site-lang-change` event in `onMount`
- Replaced `i18n()` calls in the template with reactive variables

**Key Code**:
```typescript
// Reactive labels
let bannerModeLabel = $state(i18n(I18nKey.wallpaperBannerMode));
let overlayModeLabel = $state(i18n(I18nKey.wallpaperOverlayMode));
let noneModeLabel = $state(i18n(I18nKey.wallpaperNoneMode));

// Listen to event
window.addEventListener('site-lang-change', handleLangChange);
```

#### 3. **DisplaySettings.svelte** (Color Setting Panel)
**Changes**:
- Added reactive label variable: `themeColorLabel`
- Added `updateLabels()` function
- Listened to the `site-lang-change` event in `onMount`
- Replaced `i18n()` calls in the template with reactive variables

**Key Code**:
```typescript
// Reactive label
let themeColorLabel = $state(i18n(I18nKey.themeColor));

// Listen to event
onMount(() => {
	window.addEventListener('site-lang-change', handleLangChange);
	return () => {
		window.removeEventListener('site-lang-change', handleLangChange);
	};
});
```

#### 4. **Twikoo.astro** (Comment Component)
**Changes**:
- Removed complex `twikoo-lang-change` event listener and retry logic
- Simplified to directly listening to the `site-lang-change` event
- Optimized element lookup and initialization flow

**Key Code**:
```javascript
// Listen to main event: site-lang-change (general language switch event)
window.addEventListener('site-lang-change', function(e) {
  console.log("[Twikoo] Detected site-lang-change event");
  
  setTimeout(() => {
    const commentEl = document.getElementById("tcomment");
    if (!commentEl || typeof twikoo === "undefined") {
      return;
    }
    initTwikoo();
  }, 100);
});
```

#### 5. **LanguageSwitch.svelte** (Language Switcher)
**Changes**:
- Removed triggering of the `twikoo-lang-change` event
- Standardized to use the `site-lang-change` event

**Before**:
```typescript
window.dispatchEvent(new CustomEvent('site-lang-change', { detail: { lang: code } }));
setTimeout(() => {
  window.dispatchEvent(new CustomEvent('twikoo-lang-change', { detail: { lang: code } }));
}, 50);
```

**After**:
```typescript
window.dispatchEvent(new CustomEvent('site-lang-change', { detail: { lang: code } }));
```

## 🎯 How It Works

### Event Flow
1. User clicks the language switcher to select a new language
2. `LanguageSwitch.svelte` saves to localStorage and triggers the `site-lang-change` event
3. All components listening to this event are notified:
   - Navbar (Layout.astro inline script)
   - Theme switch button (LightDarkSwitch.svelte)
   - Wallpaper switch button (WallpaperSwitch.svelte)
   - Color setting panel (DisplaySettings.svelte)
   - Comment component (Twikoo.astro)
   - Search box (Search.svelte)
4. Each component calls `updateLabels()` to fetch translated text again
5. Svelte's reactivity system automatically updates the DOM

### Reactivity Principle
Using Svelte 5's `$state` rune:
```typescript
let label = $state(i18n(I18nKey.someKey));
// When label changes, the DOM updates automatically
```

## ✅ Testing Checklist

Please test the following scenarios to verify the fix:

### Basic Functionality Testing
- [ ] After switching languages, navbar link text updates immediately
- [ ] After switching languages, theme switch button text (Light/Dark/System) updates immediately
- [ ] After switching languages, wallpaper switch button text (Banner/Overlay/None) updates immediately
- [ ] After switching languages, color setting panel title text updates immediately
- [ ] After switching languages, comment component language updates immediately
- [ ] After switching languages, reading time/word count text updates immediately

### Cross-Page Testing
- [ ] Switch language on homepage, navigate to article page, all text displays in correct language
- [ ] Switch language on article page, comment component language updates correctly
- [ ] Switch language on archive page, return to homepage, language remains consistent

### Multi-Tab Testing
- [ ] Switch language on Tab A
- [ ] Switch to Tab B, language automatically syncs (via storage event)

### Page Refresh Testing
- [ ] Refresh page after switching languages, language setting is retained
- [ ] All components display the correct language

## 🔍 Debugging Info

If you encounter issues, please check the browser console:

### Twikoo Comments
```
[Twikoo] Detected site-lang-change event
[Twikoo] Found comment element, starting re-initialization
[Twikoo] Initialization config: { lang: "zh-CN", ... }
```

### Other Components
All Svelte components automatically update upon receiving the `site-lang-change` event and do not require additional logging.

## 📝 Technical Details

### Why use $state instead of $derived?
- `$state` is used for mutable state and can be modified in event handlers
- `$derived` is used for derived values, suitable for values calculated from other states
- Our labels need to be manually updated in events, so we use `$state`

### Why does Twikoo need a delay?
- DOM updates might take a little time
- 100ms delay ensures the element has been rendered
- If the element doesn't exist (not on a comment page), it fails silently

### Importance of Cleanup Functions
```typescript
return () => {
  window.removeEventListener('site-lang-change', handleLangChange);
};
```
- Prevents memory leaks
- Automatically called when Svelte components unmount
- Removes event listeners that are no longer needed

## 🎉 Expected Outcome

After the fix, the user experience should be:
1. **Instant Response**: After switching languages, all text updates immediately without refreshing
2. **Global Sync**: Language remains consistent across all pages and all components
3. **Persistence**: Language selection is saved in localStorage, preserved across sessions
4. **Cross-Tab**: Language automatically syncs between multiple open tabs

## 📚 Related Files

### Core Files
- `src/components/interactive/LightDarkSwitch.svelte` - Theme switch
- `src/components/interactive/WallpaperSwitch.svelte` - Wallpaper switch
- `src/components/interactive/DisplaySettings.svelte` - Color settings
- `src/components/interactive/LanguageSwitch.svelte` - Language switcher
- `src/components/comment/Twikoo.astro` - Comment component

### Support Files
- `src/i18n/translation.ts` - i18n translation system
- `src/layouts/Layout.astro` - Page layout and inline language manager
- `src/scripts/lang-manager.ts` - Language manager (deprecated, logic moved to Layout.astro)

## 🚀 Deployment Instructions

After making changes:
1. Run `pnpm install` to ensure dependencies are fine
2. Run `pnpm dev` to test locally
3. Complete all items in the testing checklist above
4. Run `pnpm build` to build the production version
5. Deploy to the production environment

---

**Fix Date**: 2025-11-01  
**Fixed By**: GitHub Copilot  
**Impact Scope**: Internationalization support for frontend UI components
