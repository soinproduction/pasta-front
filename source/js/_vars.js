export default {
  windowEl: window,
  documentEl: document,
  htmlEl: document.documentElement,
  bodyEl: document.body,
  activeClass: 'active',
  activeClassMode: 'mode',
  header: document.querySelector('header'),
  footer: document.querySelector('footer'),

  mainSliders: document.querySelectorAll('.about-slider'),



  shareParent: document.querySelector('.share'),
  parentSliders: document.querySelectorAll(".blog-slider"),
  burger: document.querySelectorAll('.burger'),
  mobileMenu: document.querySelector('.mobile'),
  overlay: document.querySelector('[data-overlay]'),
  modals: [...document.querySelectorAll('[data-popup]')],
  modalsMode: [...document.querySelectorAll('[data-mode-modal]')],
  modalsButton: [...document.querySelectorAll("[data-btn-modal]")],
}
