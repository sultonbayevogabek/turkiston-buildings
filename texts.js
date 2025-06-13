"use strict";

const texts = {
  a: {
    title: `Buxoroda hali bunaqasi <br> boʻlmagan!`,
    text: `
      Boshlang‘ich toʻlovsiz, 66 oyga boʻlib toʻlash evaziga xonadon egasiga aylaning! Katta aksiya atigi 100 ta uy uchun!
       Bunday imkoniyatni oʻtkazib yubormaslik uchun 25-iyun kuni soat 21:00 da onlayn taqdimotda ishtirok eting!
    `,
    buttonText: `Taqdimotga qatnashish`
  },
  b: {
    title: `Buxoro shahridan oyiga 3-4 mln soʻmdan toʻlab uyli boʻling!`,
    text: `
      Boshlangʻich toʻlovsiz, foizlarsiz, kafillarsiz, kreditsiz, uzoq muddatga boʻlib toʻlashga katta aksiyada xonadon xarid qiling! 
      Aksiyada xonadon xarid qilish uchun 25-iyun kuni yopiq telegram kanalimizda boʻladigan onlayn taqdimotda qatnashing!
    `,
    buttonText: `Aksiyada qatnashish`
  },
  c: {
    title: `Hechqanday boshlangʻich toʻlovsiz uyli boʻling!`,
    text: `
      Buxoro shahridan kredit va penyalarsiz 66 oyga boʻlib toʻlashga ishonchli kompaniyadan xonadon xarid qilishni xohlaysizmi? 
      U holda 25-iyun kuni soat 21:00 da boʻlib oʻtadigan onlayn taqdimotda qatnashing va aksiya ishtirokchisiga aylaning!
    `,
    buttonText: `Taqdimotga qatnashish`
  },
  d: {
    title: `Bunday imkoniyat atiga 100 ta xonadon uchun!`,
    text: `
      Buxoro shahridan boshlangʻich toʻlovsiz, foiz va penyalarsiz, bitta dona passport bilan katta aksiyada 66 oyga boʻlib toʻlashga xonadon xarid qiling!
      25-iyun kuni 21:00 da yopiq telegram kanalimizda, boʻladigan onlayn taqdimotda qatnashing! Taqdimotda qatnashish uchun pastdagi 
      “Taqdimotda qatnashish” tugmasini bosing!
    `,
    buttonText: `Taqdimotda qatnashish`
  },
};

const url = window.location.href;

const title = document.querySelector("[data-title]");
const text = document.querySelector("[data-text]");
const button = document.querySelector("[data-btn]");

['a', 'b', 'c', 'd'].forEach(key => {
  if (url.includes(key + '/')) {
    title.innerHTML = texts[key].title;
    text.innerHTML = texts[key].text;
    button.innerHTML = texts[key].buttonText;
  }
})
