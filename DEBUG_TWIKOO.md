# Twikoo Comment Section Language Switch Debugging Guide

## 🔍 How to Test Comment Section Language Switch

### Step 1: Open an Article Page
1. Open an article page containing a comment section in your browser
2. Open the browser developer tools (F12)
3. Switch to the Console tab

### Step 2: Check Initialization Logs
You should see logs similar to the following:
```
[Twikoo] initTwikoo called, checking requirements...
[Twikoo] Initialization config: { envId: "...", lang: "zh-CN", ... }
[Twikoo] Initialization complete
[Twikoo] site-lang-change listener registered
```

### Step 3: Switch Language
1. Click the language switcher in the navbar (e.g., "Chinese" -> "EN")
2. Observe the console output

**Expected Logs**:
```
[Twikoo] Detected site-lang-change event, detail: { lang: "en" }
[Twikoo] Switched to new language: en
[Twikoo] Starting to re-initialize comment component
[Twikoo] initTwikoo called, checking requirements...
[Twikoo] Initialization config: { envId: "...", lang: "en", ... }
[Twikoo] Initialization complete
```

### Step 4: Check Comment Section UI
- The comment box should clear and reload
- All button text (Send, Preview, Cancel, etc.) should switch to the new language
- Time formatting should change according to the language (e.g., "1 day ago" / "1天前")

## 🐛 Common Troubleshooting

### Issue 1: Cannot see [Twikoo] logs
**Reason**: Console filter might be enabled
**Solution**: Ensure the console is not filtering out the keyword "Twikoo"

### Issue 2: No response after switching language
**Checklist**:
1. Is there a "Detected site-lang-change event" log in the console?
   - ✅ Yes: Proceed to next step
   - ❌ No: The language switcher might not have triggered the event properly

2. Is there a "Comment element not found" error?
   - ✅ Yes: Confirm you are on an article page, not the homepage or archive page
   - ❌ No: Proceed to next step

3. Is there a "Twikoo library not loaded" error?
   - ✅ Yes: Check network connection and Twikoo CDN
   - ❌ No: Proceed to next step

4. Do you see the "Starting to re-initialize comment component" log?
   - ✅ Yes: But comment section didn't change, might be an internal Twikoo issue
   - ❌ No: Check if setTimeout was blocked

### Issue 3: Comment section disappears after switching language
**Reason**: Twikoo initialization failed
**Solution**:
1. Check if `envId` configuration is correct
2. Check network connection to Twikoo servers
3. Check the console for Twikoo errors

### Issue 4: Comment section doesn't work after Swup page transition
**Check**:
1. Is there a "Swup page transition, checking if initialization is needed" log?
2. Is there a "Found comment element in new page, re-initializing" log?

If not, Swup hooks might not be registered correctly.

## 🧪 Manual Testing Commands

Execute the following commands in the console for manual testing:

### 1. Check if Twikoo is loaded
```javascript
console.log(typeof twikoo);  // Should output "object"
```

### 2. Check if comment element exists
```javascript
console.log(document.getElementById("tcomment"));  // Should output <div id="tcomment">
```

### 3. Check current language setting
```javascript
console.log(localStorage.getItem('site-lang'));  // Outputs current language code
```

### 4. Manually trigger language switch
```javascript
// Switch to English
localStorage.setItem('site-lang', 'en');
window.dispatchEvent(new CustomEvent('site-lang-change', { detail: { lang: 'en' } }));

// Switch back to Chinese
localStorage.setItem('site-lang', 'zh_CN');
window.dispatchEvent(new CustomEvent('site-lang-change', { detail: { lang: 'zh_CN' } }));
```

### 5. Manually re-initialize comment section
```javascript
if (window.__reinitTwikoo) {
  window.__reinitTwikoo();
} else {
  console.error("__reinitTwikoo function is undefined");
}
```

### 6. Check if event listeners are registered
```javascript
console.log('Listener registered:', window.__twikooLangListenerRegistered);  // Should output true
console.log('Handler:', typeof window.__twikooLangChangeHandler);  // Should output "function"
```

## 📊 Diagnostic Flowchart

```
User clicks language switcher
        ↓
LanguageSwitch.svelte saves to localStorage
        ↓
Triggers site-lang-change event
        ↓
Twikoo listener captures event → Any logs?
        ↓                   ↓ No
    Yes                 Check if listener is registered
        ↓
Delay 150ms (wait for localStorage update)
        ↓
Check comment element → Exists?
        ↓           ↓ No
    Yes         Might not be on article page
        ↓
Check twikoo library → Loaded?
        ↓            ↓ No
    Yes         Check network and CDN
        ↓
Call initTwikoo()
        ↓
Clear comment section innerHTML
        ↓
Create config with new language
        ↓
Call twikoo.init(config)
        ↓
Comment section re-renders (new language) ✅
```

## 🎯 Quick Verification Checklist

Execute the following steps for quick verification:

- [ ] Open article page, see comment section
- [ ] F12 to open console
- [ ] See "[Twikoo] Initialization complete" log
- [ ] Switch language (e.g., Chinese → English)
- [ ] See "[Twikoo] Detected site-lang-change event" log
- [ ] See "[Twikoo] Switched to new language: en" log
- [ ] See "[Twikoo] Starting to re-initialize comment component" log
- [ ] Comment section UI shows English
- [ ] Switch back to Chinese
- [ ] Comment section UI shows Chinese

If all the above pass, the comment section language sync feature works normally! ✅

## 🔧 Advanced Debugging

### Enable verbose logging
Add more logs in the getTwikooLang() function in Twikoo.astro:

```javascript
function getTwikooLang() {
  const siteLang = localStorage.getItem('site-lang') || 'zh-CN';
  console.log('[Twikoo] Raw site-lang:', siteLang);
  
  const normalized = siteLang.toLowerCase();
  console.log('[Twikoo] Normalized:', normalized);
  
  let result = 'zh-CN';
  if (normalized.startsWith('en')) result = 'en';
  else if (normalized === 'zh_cn' || normalized === 'zh-cn') result = 'zh-CN';
  // ... other language mappings
  
  console.log('[Twikoo] Final lang:', result);
  return result;
}
```

### Check Twikoo version
```javascript
// Execute in console
console.log(twikoo.version);  // Check Twikoo version
```

### View Twikoo config
```javascript
// View actual config after initialization
console.log(window.__twikooConfig);  // If you stored the config
```

---

**Tip**: If the issue persists, please provide a screenshot of the complete console logs so we can pinpoint the problem more accurately.
