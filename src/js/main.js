Telegram.WebApp.ready();
let menuBtns = document.getElementById("main-sections");
let faqPage = document.getElementById("faq-menu")
let aboutPage = document.getElementById("abouts")

let weare = document.getElementById("abouts")

let BackButton = window.Telegram.WebApp.BackButton;
BackButton.hide();

function loadMenu() {
    menuBtns.style.opacity = 0;
    setTimeout(function() {
        menuBtns.style.display = "none";
      }, 500);
    aboutPage.style.display = "block";
    setTimeout(function() {
        aboutPage.style.opacity = 1;
      }, 10);
    if (!BackButton.isVisible) {
        BackButton.show();
    }
}

BackButton.onClick(function() {
    loadMain();
})

function setViewportData() {
    $('.whoweare').attr('style', '' + (Telegram.WebApp.isExpanded ? 'opacity: 1;' : 'opacity: 0;'));
    $('.hr-opacity').attr('style', '' + (Telegram.WebApp.isExpanded ? 'opacity: 1;' : 'opacity: 0;'));
    $('.about-text-opacity').attr('style', '' + (Telegram.WebApp.isExpanded ? '-webkit-text-fill-color: #fff; margin-bottom: 20px; margin-top: 20px;' : '-webkit-text-fill-color: transparent; margin-bottom: 15px; margin-top: 15px;'));
    $('.about-text').attr('style', '' + (Telegram.WebApp.isExpanded ? 'margin-bottom: 20px; margin-top: 20px;' : 'margin-bottom: 15px; margin-top: 15px;'));
    // $('.whoweare').attr('style', '' + (Telegram.WebApp.isExpanded ? 'transition: visibility 1s, opacity 0.5s ease-out;' : 'transition: visibility 1s, opacity 0.5s ease-out;'));
}

window.Telegram.WebApp.onEvent('viewportChanged', setViewportData);
setViewportData();
