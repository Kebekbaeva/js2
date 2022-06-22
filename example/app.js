const tabs = document.querySelectorAll(".tabheader__item");
const tabParent = document.querySelector(".tabheader__items");
const tabContent = document.querySelectorAll(".tabcontent");

// console.log(tabs, "tabs")
// console.log(tabParent, "tabParent");
// console.log(tabContent, "tabContent");


const hideTabContent = () => {
    tabContent.forEach((item) => {
        item.style.display = "none";
    });
    tabs.forEach((item) => {
        item.classList.remove("tabheader__item_active");
    });
};

const showTabContent = (i = 0) => {
    tabContent[i].style.display = "block";
    tabs[i].classList.add("tabheader__item_active")
}
hideTabContent()
showTabContent()

tabParent.addEventListener("click", (event) => {
    const target = event.target;
    // console.log(target);

    if (target.classList.contains("tabheader__item")) {
        tabs.forEach((item, i) => {
            if (target === item) {
                console.log(i);
                hideTabContent();
                showTabContent(i);
            };
        });
    };
});

// HW1 // auto slider

let slideIndex = 0;
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    if (n > tabs.length && n > tabContent.length) {
        slideIndex += 1;
    };
    if (n < 0) {
        slideIndex = tabs.length && slideIndex == tabContent.length;
    };
    for (let slide of tabs) {
        slide.classList.remove("tabheader__item_active");
    };
    tabs[n].classList.add("tabheader__item_active");

    for (let slide of tabContent) {
        slide.style.display = "none";
    };
    tabContent[slideIndex].style.display = "block";
};

let timer = setInterval(function () {
    {
        slideIndex++;
        if (slideIndex > 3) {
            slideIndex = 0;
        };
    };
    showSlides(slideIndex);
}, 2000);


// HW2 modal is scroll
const modal = document.querySelector(".modal");
const modalTrigger = document.querySelector(".btn_white");
const closeModalBtn = document.querySelector(".modal__close")
console.log(modalTrigger);


function openModal() {
  modal.classList.add("show");
  modal.classList.remove("hide");
  document.body.style.overflow = "hidden";

  clearInterval(modalTimeout);
}

function closeModal() {
  modal.classList.add("hide");
  modal.classList.remove("show");
  document.body.style.overflow = "";
}

modalTrigger.addEventListener("click", openModal)

modal.addEventListener("click", (event) => {
  if (
    event.target === modal ||
    event.target.classList.contains("modal__close")
  ) {
    closeModal();
  };
});


function openModalScroll() {
  const page = document.documentElement;

  if (page.scrollTop + page.clientHeight >= page.scrollHeight) {
    openModal();

    window.removeEventListener("scroll", openModalScroll);
  }
}

window.addEventListener("scroll", openModalScroll);
const modalTimeout = setTimeout(openModal, 5000);

	
