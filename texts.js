"use strict";

const texts = {
  a: {
    title: `Бухорода ҳали бунақаси бўлмаган!`,
    text: `
      Бошланғич тўловсиз, 66 ойга бўлиб тўлаш евазига хонадон егасига айланинг! <br><br>
      Катта аксия атига 100 та уй учун. Бундай имкониятни ўтказиб юбормаслик учун 25-июн куни бепул онлайн тақдимотда иштирок етинг!
    `,
    buttonText: `Бепул тақдимотга қатнашиш`
  },
  b: {
    title: `Buxoro shahridan oyiga 3-4 mln soʻmdan toʻlab uyli boʻling!`,
    text: `
      Boshlangʻich toʻlovsiz, foizlarsiz, kafillarsiz, kreditsiz, uzoq muddatga boʻlib toʻlashga katta aksiyada xonadon xarid qiling! <br><br>
      Aksiyada xonadon xarid qilish uchun 25-iyun kuni yopiq telegram kanalimizda boʻladigan onlayn taqdimotda qatnashing!
    `,
    buttonText: `Aksiyada qatnashish`
  },
  c: {
    title: `Ҳечқандай бошланғич тўловсиз уйли бўлинг!`,
    text: `
      Бухоро шаҳридан фоиз ва пеняларсиз 66 ойга бўлиб тўлашга ишончли компаниядан хонадон харид қилишни хоҳлайсизми? <br><br>
      У ҳолда 25-июн куни бўлиб ўтадиган бепул онлайн тақдимотда қатнашинг ва аксия иштирокчисига айланинг!
    `,
    buttonText: `Бепул қатнашиш`
  },
  d: {
    title: `Bunday imkoniyat atiga 100 ta xonadon uchun!`,
    text: `
      Buxoro shahridan boshlangʻich toʻlovsiz, foiz va penyalarsiz, bitta dona passport bilan katta aksiyada 66 oyga boʻlib toʻlashga xonadon xarid qiling! <br><br>
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
