import { createElement, render } from './libreria.js';

/* const header = createElement('header', {
  id: 'main-header',
  className: 'main-header',
}); */

const Logo = createElement('img', {
  class: 'logo',
  alt: 'Logo',
  src: 'https://app.ed.team/static/images/logo/isotipo-color.svg',
});

const LI_Inicio = createElement(
  'li',
  {
    class: 'main-nav__item',
  },
  ['<a href="/">Inicio</a>']
);

const LI_Nosotros = createElement(
  'li',
  {
    class: 'main-nav__item',
  },
  ['<a href="/">Nosotros</a>']
);

const LI_Contacto = createElement(
  'li',
  {
    class: 'main-nav__item',
  },
  ['<a href="/">Contacto</a>']
);

const UL = createElement(
  'ul',
  {
    class: 'main-nav__list',
  },
  [LI_Inicio, LI_Nosotros, LI_Contacto]
);

const Nav = createElement(
  'nav',
  {
    class: 'main-nav',
  },
  [UL]
);

const LogoCompleto = createElement(
  'div',
  {
    class: 'logo-container',
  },
  [Logo, '<a href="/">EDteam</a>']
);

const Header = createElement(
  'header',
  {
    class: 'main-header',
  },
  [LogoCompleto, Nav]
);

const CONTAINER = createElement(
  'div',
  {
    class: 'container',
  },
  [Header]
);

render(CONTAINER, document.getElementById('root'));
