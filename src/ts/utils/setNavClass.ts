// @/ts/utils/setNavClass.ts

/**
 * Updates the navigation element's class and visibility based on screen size.
 * If the element still has a "nav" class, it will be removed first.
 *
 * @param menuNav - The navigation HTMLElement or null.
 * @returns "large" if screen is desktop, "small" if screen is mobile, or "nav" if menuNav is missing.
 */
export const setNavClass = (menuNav: HTMLElement | null): 'large' | 'small' | 'nav' => {
  if (!menuNav) return 'nav';

  const currentClasses = menuNav.classList;

  // Remove initial "nav" class if present
  if (currentClasses.contains('nav')) {
    currentClasses.remove('nav');
  }

  const isLargeScreen = window.matchMedia('(min-width: 1050px)').matches;

  if (isLargeScreen) {
    if (currentClasses.contains('menu__nav')) {
      currentClasses.remove('menu__nav');
    }
    currentClasses.add('header__nav');
    menuNav.style.visibility = 'visible';
    menuNav.style.transform = 'none';
    return 'large';
  } else {
    if (currentClasses.contains('header__nav')) {
      currentClasses.remove('header__nav');
    }
    currentClasses.add('menu__nav');
    menuNav.style.visibility = 'hidden';
    menuNav.style.transform = 'translateX(100%)';
    return 'small';
  }
};
