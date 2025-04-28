// @/ts/components/menu/initMenu.ts

// === IMPORTS ===
import { setNavClass } from '@/ts/utils/setNavClass';
import { setupSmallScreenEvents } from '@/ts/components/menu/menuEvents';

// === FUNCTIONS ===

/**
 * Initializes the menu system by:
 * - Finding required DOM elements
 * - Checking if elements exist
 * - Setting initial navigation class based on screen size
 * - Setting up event listeners if screen is small
 * - Listening for window resize events to adjust menu behavior
 *
 * If any critical element is missing, the initialization will abort.
 *
 * @returns {void}
 */
export const initMenu = (): void => {
  // === GET ELEMENTS ===
  const menuButton = document.getElementById('menuButton') as HTMLElement | null;
  const menuNav = document.getElementById('menuNav') as HTMLElement | null;
  const buttonIcon = document.querySelector('.button__icon') as HTMLElement | null;
  const navLinks = document.querySelectorAll('.js-link') as NodeListOf<HTMLAnchorElement>;

  // === CHECK ELEMENTS ===
  const missingElements: string[] = [];
  if (!menuButton) missingElements.push('menuButton');
  if (!menuNav) missingElements.push('menuNav');
  if (!buttonIcon) missingElements.push('buttonIcon');
  if (navLinks.length === 0) missingElements.push('navLinks');

  if (missingElements.length > 0) {
    console.error('One or more elements missing:', missingElements.join(', '));
    return;
  }

  console.log('All menu elements found');
  const menuElements = { menuButton, menuNav, buttonIcon, navLinks };

  // === INIT SCREEN SETUP ===
  let currentScreen: 'large' | 'small' | 'nav' = setNavClass(menuNav);
  let eventsSet = false;

  if (currentScreen === 'small') {
    setupSmallScreenEvents(menuElements);
    eventsSet = true;
  }

  // === RESIZE LISTENER ===
  window.addEventListener('resize', () => {
    const screen = setNavClass(menuNav);
    console.log('Changed screen:', screen);

    if (screen === 'small' && !eventsSet) {
      setupSmallScreenEvents(menuElements);
      eventsSet = true;
    }
  });
};

