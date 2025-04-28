// @/ts/components/menu/menuStates.ts

// === IMPORTS ===
import type { MenuElements } from '@/ts/interfaces/MenuElements';

// === FUNCTIONS ===

  /** == isHoverInMenu ==
   * Checks if any menu element (button, nav, link) is hovered.
   * @param elements - The menu elements.
   * @returns True if any element is hovered.
   */
  export const isHoverInMenu = (elements: MenuElements): boolean => {
    const { menuButton, menuNav, navLinks } = elements;
    if (!menuButton || !menuNav || navLinks.length === 0) return false;
  
    const buttonHover = menuButton.matches(':hover');
    const navHover = menuNav.matches(':hover');
    const linkHover = Array.from(navLinks).some(link => link.matches(':hover'));
  
    return buttonHover || navHover || linkHover;
  };
  
  /** == isFocusInMenu ==
   * Checks if any menu element (button, nav, link) is focused.
   * @param elements - The menu elements.
   * @returns True if any element is focused.
   */
  export const isFocusInMenu = (elements: MenuElements): boolean => {
    const { menuButton, menuNav, navLinks } = elements;
    if (!menuButton || !menuNav || navLinks.length === 0) return false;
  
    const activeElement = document.activeElement;
    const buttonFocus = menuButton === activeElement;
    const navFocus = menuNav === activeElement;
    const linkFocus = Array.from(navLinks).some(link => link === activeElement);
  
    return buttonFocus || navFocus || linkFocus;
  };
  
  /** == updateMenuState ==
   * Updates menu visibility and button icon rotation based on hover or focus states.
   * @param elements - The menu elements.
   */
  export const updateMenuState = (elements: MenuElements): void => {
    const { menuButton, menuNav, buttonIcon, navLinks } = elements;
    if (!menuButton || !menuNav || !buttonIcon || navLinks.length === 0) return;
  
    if (isHoverInMenu(elements) || isFocusInMenu(elements)) {
      buttonIcon.style.transform = 'rotateY(180deg)';
      menuNav.style.visibility = 'visible';
      menuNav.style.transform = 'translateX(0)';
    } else {
      buttonIcon.style.transform = 'rotateY(0deg)';
      menuNav.style.transform = 'translateX(100%)';
    }
  };
  