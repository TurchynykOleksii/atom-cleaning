// JS fragment import example
import * as functions from "./modules/functions.js";
functions.isWebp();
/* Добавление loaded для HTML после полной загрузки страницы */
functions.addLoadedClass();

const tabsBtnsEl = document.querySelectorAll(".services__btn");
const tabsTabInfoEl = document.querySelectorAll(".services__item");
let activeTabBtnEl = null;
let activeTabEl = null;
const burgerEl = document.querySelector(".header__burger-btn");
const mobileMenuEl = document.querySelector(".mobile__wrap");
const lessMoreBtnEl = document.querySelectorAll(".services__more");
const showChar = 643;

burgerEl.addEventListener("click", () => {
  mobileMenuEl.classList.toggle("show-menu");
  if (mobileMenuEl.classList.contains("show-menu")) {
    mobileMenuEl.style.top = "0";
  } else {
    mobileMenuEl.style.top = "-100%";
  }
});

function showLessText(text) {
  let moreText = text.textContent.slice(0, showChar);
  let lessText = text.textContent.slice(showChar);

  return [moreText, lessText];
}
lessMoreBtnEl.forEach((btn) => {
  let res = showLessText(btn.previousElementSibling);
  const [moreText, lessText] = res;
  btn.previousElementSibling.classList.add("hide-text");
  btn.previousElementSibling.innerHTML = `${moreText}...`;

  btn.addEventListener("click", () => {
    if (!btn.previousElementSibling.classList.contains("hide-text")) {
      btn.textContent = "...more";
      btn.previousElementSibling.classList.add("hide-text");
      btn.previousElementSibling.innerHTML = `${moreText}...`;
    } else {
      btn.textContent = "...less";
      btn.previousElementSibling.classList.remove("hide-text");
      btn.previousElementSibling.innerHTML = `${moreText}${lessText}`;
    }
  });
});

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
