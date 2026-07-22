import { sidebarLayoutConfig } from "../config";
import type {
  SidebarLayoutConfig,
  WidgetComponentConfig,
  WidgetComponentType,
} from "../types/config";


export const WIDGET_COMPONENT_MAP = {
  profile: "../components/content/Profile.astro",
  announcement: "../components/widget/Announcement.astro",
  categories: "../components/widget/Categories.astro",
  tags: "../components/widget/Tags.astro",
  toc: "../components/widget/TOC.astro",
  advertisement: "../components/widget/Advertisement.astro",
  "music-player": "../components/widget/Music.astro",
  custom: null,
} as const;


export class WidgetManager {
  private config: SidebarLayoutConfig;
  private enabledComponents: WidgetComponentConfig[];

  constructor(config: SidebarLayoutConfig = sidebarLayoutConfig) {
    this.config = config || sidebarLayoutConfig;
    this.enabledComponents = this.getEnabledComponents();
  }

  
  getConfig(): SidebarLayoutConfig {
    return this.config;
  }

  
  private getEnabledComponents(): WidgetComponentConfig[] {
    if (!this.config || !this.config.components) {
      console.warn('[WidgetManager] Config or components is undefined, returning empty array');
      return [];
    }
    return this.config.components
      .filter((component) => component.enable)
      .sort((a, b) => a.order - b.order);
  }

  
  getComponentsByPosition(position: "top" | "sticky"): WidgetComponentConfig[] {
    return this.enabledComponents.filter(
      (component) => component.position === position
    );
  }

  
  getAnimationDelay(component: WidgetComponentConfig, index: number): number {
    if (component.animationDelay !== undefined) {
      return component.animationDelay;
    }

    if (this.config.defaultAnimation.enable) {
      return (
        this.config.defaultAnimation.baseDelay +
        index * this.config.defaultAnimation.increment
      );
    }

    return 0;
  }

  
  getComponentClass(component: WidgetComponentConfig, _index: number): string {
    const classes: string[] = [];

    if (component.class) {
      classes.push(component.class);
    }

    if (component.responsive?.hidden) {
      component.responsive.hidden.forEach((device) => {
        switch (device) {
          case "mobile":
            classes.push("hidden", "md:block");
            break;
          case "tablet":
            classes.push("md:hidden", "lg:block");
            break;
          case "desktop":
            classes.push("lg:hidden");
            break;
        }
      });
    }

    return classes.join(" ");
  }

  
  getComponentStyle(component: WidgetComponentConfig, index: number): string {
    const styles: string[] = [];

    if (component.style) {
      styles.push(component.style);
    }

    const animationDelay = this.getAnimationDelay(component, index);
    if (animationDelay > 0) {
      styles.push(`animation-delay: ${animationDelay}ms`);
    }

    return styles.join("; ");
  }

  
  isCollapsed(component: WidgetComponentConfig, itemCount: number): boolean {
    if (!component.responsive?.collapseThreshold) {
      return false;
    }
    return itemCount >= component.responsive.collapseThreshold;
  }

  
  getComponentPath(componentType: WidgetComponentType): string | null {
    return WIDGET_COMPONENT_MAP[componentType];
  }

  
  shouldShowSidebar(deviceType: "mobile" | "tablet" | "desktop"): boolean {
    if (!this.config.enable) {
      return false;
    }

    const layoutMode = this.config.responsive.layout[deviceType];
    return layoutMode === "sidebar";
  }

  
  getBreakpoints() {
    return this.config.responsive.breakpoints;
  }

  
  updateConfig(newConfig: Partial<SidebarLayoutConfig>): void {
    this.config = { ...this.config, ...newConfig };
    this.enabledComponents = this.getEnabledComponents();
  }

  
  addComponent(component: WidgetComponentConfig): void {
    this.config.components.push(component);
    this.enabledComponents = this.getEnabledComponents();
  }

  
  removeComponent(componentType: WidgetComponentType): void {
    this.config.components = this.config.components.filter(
      (component) => component.type !== componentType
    );
    this.enabledComponents = this.getEnabledComponents();
  }

  
  toggleComponent(componentType: WidgetComponentType, enable: boolean): void {
    const component = this.config.components.find(
      (c) => c.type === componentType
    );
    if (component) {
      component.enable = enable;
      this.enabledComponents = this.getEnabledComponents();
    }
  }

  
  reorderComponent(componentType: WidgetComponentType, newOrder: number): void {
    const component = this.config.components.find(
      (c) => c.type === componentType
    );
    if (component) {
      component.order = newOrder;
      this.enabledComponents = this.getEnabledComponents();
    }
  }

  
  isSidebarComponent(componentType: WidgetComponentType): boolean {
    return true;
  }
}


export const widgetManager = new WidgetManager();


export function getComponentConfig(
  componentType: WidgetComponentType
): WidgetComponentConfig | undefined {
  const config = widgetManager.getConfig();
  if (!config || !config.components) {
    return undefined;
  }
  return config.components.find((c) => c.type === componentType);
}


export function isComponentEnabled(
  componentType: WidgetComponentType
): boolean {
  const config = getComponentConfig(componentType);
  return config?.enable ?? false;
}


export function getEnabledComponentTypes(): WidgetComponentType[] {
  const enabledComponents = widgetManager
    .getComponentsByPosition("top")
    .concat(widgetManager.getComponentsByPosition("sticky"));
  return enabledComponents.map((c) => c.type);
}
