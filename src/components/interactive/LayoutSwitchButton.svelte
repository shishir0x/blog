<script lang="ts">
  import { onMount } from 'svelte';
  import { siteConfig } from '@/config';
  
  export let currentLayout: 'list' | 'grid' = 'list';
  
  let mounted = false;
  let isSmallScreen = false;
  
  function checkScreenSize() {
    isSmallScreen = window.innerWidth < 1200;
    if (isSmallScreen) {
      currentLayout = 'list';
    }
  }

  onMount(() => {
    mounted = true;
    checkScreenSize();
    
    const savedLayout = localStorage.getItem('postListLayout');
    if (savedLayout && (savedLayout === 'list' || savedLayout === 'grid')) {
      currentLayout = savedLayout;
    } else {
    }
    
    window.addEventListener('resize', checkScreenSize);
    
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  });
  
  function switchLayout() {
    if (!mounted || isSmallScreen) return;
    
    currentLayout = currentLayout === 'list' ? 'grid' : 'list';
    localStorage.setItem('postListLayout', currentLayout);
    
    const event = new CustomEvent('layoutChange', {
      detail: { layout: currentLayout }
    });
    window.dispatchEvent(event);
  }
  
  onMount(() => {
    const handleCustomEvent = (event: any) => {
      currentLayout = event.detail.layout;
    };

    window.addEventListener('layoutChange', handleCustomEvent);

    return () => {
      window.removeEventListener('layoutChange', handleCustomEvent);
    };
  });

  onMount(() => {
    const handleLayoutInit = () => {
      const postListContainer = document.getElementById('post-list-container');
      if (postListContainer) {
        const isGridMode = postListContainer.classList.contains('grid-mode');
        currentLayout = isGridMode ? 'grid' : 'list';
      }
    };

    setTimeout(handleLayoutInit, 100);

    return () => {
    };
  });
</script>

{#if mounted && siteConfig.postListLayout.allowSwitch && !isSmallScreen}
  <button 
    aria-label="切换文章列表布局" 
    class="btn-plain scale-animation rounded-lg h-11 w-11 active:scale-90 flex items-center justify-center" 
    on:click={switchLayout}
    title={currentLayout === 'list' ? '切换到网格模式' : '切换到列表模式'}
  >
      {#if currentLayout === 'list'}
        
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/>
        </svg>
    {:else}
      
      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M3 3h7v7H3V3zm0 11h7v7H3v-7zm11-11h7v7h-7V3zm0 11h7v7h-7v-7z"/>
      </svg>
    {/if}
  </button>
{/if}
