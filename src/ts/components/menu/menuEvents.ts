// @/ts/components/menu/menuStates.ts

// === IMPORTS ===
import type { MenuElements } from '@/ts/interfaces/MenuElements';
import { closeMenu, toggleMenuClicked} from './menuActions';
import { updateMenuState, isFocusInMenu } from './menuStates';

// === FUNCTIONS ===

/** == setupSmallScreenEvents ==
 * Sets up all event listeners needed for menu behavior on small screens.
 * @param elements - The set of menu elements.
 * @returns {void}
 */
export const setupSmallScreenEvents = (elements: MenuElements): void => {
  const { menuButton, menuNav, navLinks } = elements;

  if (!menuButton || !menuNav) return;

  // Hover and focus on the menu button
  menuButton.addEventListener('mouseenter', () => updateMenuState(elements));
  menuButton.addEventListener('mouseleave', () => updateMenuState(elements));
  menuButton.addEventListener('focus', () => updateMenuState(elements));
  menuButton.addEventListener('blur', () => updateMenuState(elements));

  // Click toggles menu
  menuButton.addEventListener('click', (event) => {
    event.preventDefault();
    toggleMenuClicked(elements);
  });

  // Hover and focus on nav links
  navLinks.forEach(link => {
    link.addEventListener('mouseenter', () => updateMenuState(elements));
    link.addEventListener('mouseleave', () => updateMenuState(elements));
    link.addEventListener('focus', () => updateMenuState(elements));
    link.addEventListener('blur', () => updateMenuState(elements));
    link.addEventListener('click', () => closeMenu(elements));
  });

  // Hover on menu itself
  menuNav.addEventListener('mouseenter', () => updateMenuState(elements));
  menuNav.addEventListener('mouseleave', () => updateMenuState(elements));

  // Escape key closes the menu
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeMenu(elements);
    }
  });

  // Clicking outside closes the menu
  document.addEventListener('click', (event) => {
    const target = event.target as HTMLElement;
    if (menuButton && menuNav && !menuButton.contains(target) && !menuNav.contains(target)) {
      closeMenu(elements);
    }
  });

  // Focus leaving menu closes it
  document.addEventListener('focusout', () => {
    setTimeout(() => {
      if (!isFocusInMenu(elements)) {
        closeMenu(elements);
      }
    }, 10);
  });
};
