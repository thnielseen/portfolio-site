// @/ts/interfaces/MenuElements.ts

/** == Interface Menu Elements ===
 * Describes the structure of menu elements required for state checks.
 */
export interface MenuElements {
    menuButton: HTMLElement | null;
    menuNav: HTMLElement | null;
    buttonIcon: HTMLElement | null;
    navLinks: NodeListOf<HTMLAnchorElement>;
  }