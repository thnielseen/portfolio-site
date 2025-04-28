import '@/scss/style.scss';

// === IMPORTS ===
import { setNavClass } from './ts/utils/setNavClass';

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
} else {
  console.log('All elements found');
  console.log(menuNav);
  console.log(menuButton);
}

// === INIT STATE ===
let currentScreen: 'large' | 'small' | 'nav' = setNavClass(menuNav);
console.log('Initial screen size:', currentScreen);

// === LISTEN TO RESIZE ===
window.addEventListener('resize', () => {
  currentScreen = setNavClass(menuNav);
  console.log('Screen size changed:', currentScreen);
});
