const fs = require('fs');

const css = fs.readFileSync('assets/css/redesign-2026.css', 'utf8');

const targets = [
  'slider__maintitle',
  'slider__subtitle',
  'hz-title',
  'categories__content--title',
  'ab-title',
  'counterup__title',
  'why-title',
  'sec-title',
  'breadcrumb__content--title',
  'hz-cart-title',
  'contact__section--heading__maintitle',
  'contact__form--title',
  'contact__info--content__title',
  'shipping__content--title',
  'product__details--info__title',
  'hz-404__title',
  'counterup__banner--number',
  'section-block'
];

targets.forEach(t => {
  const found = css.includes(t);
  console.log(`${t.padEnd(35)} : ${found ? 'FOUND in redesign-2026.css' : 'NOT directly in redesign-2026.css'}`);
});
