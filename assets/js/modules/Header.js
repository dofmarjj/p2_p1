import { qs } from '../dom-helpers';

class Header {
  constructor() {
    this.hamburger = qs('.hamburger');
    this.navMenu = qs('.nav-menu');
    this.header = qs('.header');
    this._run();
  }

  _run() {
    try {
      this._registerEventListeners();
    } catch (e) {
      console.error(e); // eslint-disable-line
    }
  }

  _registerEventListeners() {
    if (this.hamburger) {
      this.hamburger.addEventListener('click', () => this._handleHamburgerMenu());
    }

    if (this.header) {
      window.addEventListener('scroll', () => this._handleStickyHeader());
    }
  }

  _handleHamburgerMenu() {
    this.hamburger.classList.toggle('is-active');
    this.navMenu.classList.toggle('nav-menu--opened');
  }

  _handleStickyHeader() {
    const offsetHeader = this.header.offsetTop;
    if (window.scrollY >= offsetHeader) {
      this.header.classList.add('header--bg-black');
    }
    if (window.scrollY <= offsetHeader) {
      this.header.classList.remove('header--bg-black');
    }
  }
}

export default Header;
