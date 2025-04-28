// @/ts/components/menu/menuStates.ts

// === IMPORTS ===
import type { MenuElements } from '@/ts/interfaces/MenuElements';

let isMenuClickedOpen = false;
let allowHover = true;
let isClickTransitioning = false;

/**
 * Opens the menu by click interaction.
 * @param elements - The set of menu elements.
 * @returns {void}
 */
export const openMenuClicked = (elements: MenuElements): void => {
  const { menuButton, menuNav, buttonIcon } = elements;
  if (!menuButton || !menuNav || !buttonIcon) return;

  isMenuClickedOpen = true;
  allowHover = false;

  buttonIcon.style.transform = 'rotateY(180deg)';
  menuNav.style.visibility = 'visible';
  menuNav.style.transform = 'translateX(0)';
  menuButton.setAttribute('aria-expanded', 'true');
  menuNav.setAttribute('aria-hidden', 'false');
};

/**
 * Closes the menu and disables hover temporarily to prevent accidental reopen.
 * @param elements - The set of menu elements.
 * @returns {void}
 */
export const closeMenu = (elements: MenuElements): void => {
  const { menuButton, menuNav, buttonIcon } = elements;
  if (!menuButton || !menuNav || !buttonIcon) return;

  isMenuClickedOpen = false;
  allowHover = false;

  buttonIcon.style.transform = 'rotateY(0deg)';
  menuNav.style.transform = 'translateX(100%)';
  menuButton.setAttribute('aria-expanded', 'false');
  menuNav.setAttribute('aria-hidden', 'true');

  isClickTransitioning = true;
  setTimeout(() => {
    isClickTransitioning = false;
    allowHover = true;
  }, 600);
};

/**
 * Checks if the menu is currently clicked open.
 * @returns {boolean}
 */
export const getMenuClickedState = (): boolean => {
  return isMenuClickedOpen;
};

/**
 * Checks if hover is currently allowed.
 * @returns {boolean}
 */
export const getAllowHoverState = (): boolean => {
  return allowHover;
};

/**
 * Checks if a click transition (delay) is ongoing.
 * @returns {boolean}
 */
export const getClickTransitioningState = (): boolean => {
  return isClickTransitioning;
};


/**
 * Toggles the menu open or closed depending on current clicked state.
 * @param elements - The set of menu elements.
 * @returns {void}
 */
export const toggleMenuClicked = (elements: MenuElements): void => {
    if (getMenuClickedState()) {
      closeMenu(elements);
    } else {
      openMenuClicked(elements);
    }
  };