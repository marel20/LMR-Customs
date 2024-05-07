//step 1: get DOM
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 3000;
let timeAutoNext = 7000;

nextDom.onclick = function(){
    showSlider('next');    
}

prevDom.onclick = function(){
    showSlider('prev');    
}
let runTimeOut;
let runNextAuto = setTimeout(() => {
    next.click();
}, timeAutoNext)
function showSlider(type){
    let  SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
    if(type === 'next'){
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    }else{
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        next.click();
    }, timeAutoNext)
}

//navbar
const hamburger = document.getElementById('hamburger');
hamburger.addEventListener('click', function(e) {
    const ul = document.querySelector('nav > ul');
    ul.classList.toggle('menu-slide');
    hamburger.classList.toggle('cross');
});

// btn-up
window.addEventListener('scroll', btnUp)

function btnUp() {
    const nav = document.getElementById('nav')
if(window.scrollY > nav.offsetHeight + 2100) {
    this.document.getElementById('up').style.display = 'block';
} else {
    document.getElementById('up').style.display = 'none';
}
}

//accordion
const accordionHeaders = document.querySelectorAll('.accordion-header');
const accordionContents = document.querySelectorAll('.accordion-content');

accordionHeaders.forEach(header => {
  header.addEventListener('click', function() {
    const accordionItem = this.parentElement;
    const isOpen = accordionItem.classList.contains('open');
    closeAllAccordionItems();
    if (!isOpen) {
      accordionItem.classList.add('open');
      const content = accordionItem.querySelector('.accordion-content');
      content.style.display = 'block';
    }
  });
});

function closeAllAccordionItems() {
  accordionContents.forEach(content => {
    content.style.display = 'none';
    content.parentElement.classList.remove('open');
  });
}

// modal services
document.addEventListener("DOMContentLoaded", function() {
    const modals = document.querySelectorAll(".modalServices");
    const verMasBtns = document.querySelectorAll(".btn-cards");

    verMasBtns.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            openModal(modals[index]);
        });
    });

    modals.forEach(modal => {
        modal.querySelector(".close").addEventListener("click", () => {
            closeModal(modal);
        });

        // Agregar event listener para cerrar modal al hacer clic fuera de él
        window.addEventListener("click", (event) => {
            if (event.target === modal) {
                closeModal(modal);
            }
        });
    });
});

function openModal(modal) {
    modal.style.display = "block";
    setTimeout(() => {
        modal.style.opacity = "1";
    }, 10);
}

function closeModal(modal) {
    modal.style.opacity = "0";
    setTimeout(() => {
        modal.style.display = "none";
    }, 500);
}
