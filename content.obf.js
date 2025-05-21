// ==UserScript==
// @name         Freelance.ru Reply Obfuscated
// @namespace    http://tampermonkey.net/
// @version      1.0.0-obf
// @description  Автоотклик (обфусцированная версия)
// @match        https://freelance.ru/project/*
// @grant        none
// ==/UserScript==

(async function m1() {

  function w1(s, t = 5000) {
    return new Promise((res, rej) => {
      const i = 100;
      let w = 0;
      const tm = setInterval(() => {
        const el = document.querySelector(s);
        if (el) {
          clearInterval(tm);
          res(el);
        } else if (w > t) {
          clearInterval(tm);
          rej(new Error('Timeout'));
        }
        w += i;
      }, i);
    });
  }

  try {
    const h1 = await w1('div.project-info > h4');
    let f1 = h1.textContent || '';
    let h2 = f1.split(',')[0];
    h2 = h2.replace(/[\s\u00A0]+/g, ' ').trim();
    const r1 = `Здравствуйте! Готов взяться за выполнение задания: ${h2}.`;
    const r2 = document.querySelector('#startdiscussionform-message');
    if (r2) {
      r2.value = r1;
      r2.dispatchEvent(new Event('input', { bubbles: true }));
    }
  } catch (e) {}
})();
