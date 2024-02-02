// JS fragment import example
import * as functions from "./modules/functions.js";
functions.isWebp();
/* Добавление loaded для HTML после полной загрузки страницы */
functions.addLoadedClass();

const tabsBtnsEl = document.querySelectorAll(".services__btn");
const tabsTabInfoEl = document.querySelectorAll(".services__item");
let activeTabBtnEl = null;
let activeTabEl = null;

tabsBtnsEl[0].classList.add("services__btn--active");
tabsTabInfoEl[0].classList.add("services__item--active");

for (let i = 0; i < tabsBtnsEl.length; i++) {
  tabsBtnsEl[i].addEventListener("click", () => {
    if (activeTabBtnEl) {
      activeTabBtnEl.classList.remove("services__btn--active");
      activeTabEl.classList.remove("services__item--active");
    }
    if (tabsBtnsEl[0].classList.contains("services__btn--active")) {
      tabsBtnsEl[0].classList.remove("services__btn--active");
      tabsTabInfoEl[0].classList.remove("services__item--active");
    }
    tabsBtnsEl[i].classList.add("services__btn--active");
    tabsTabInfoEl[i].classList.add("services__item--active");
    activeTabBtnEl = tabsBtnsEl[i];
    activeTabEl = tabsTabInfoEl[i];
  });
}
