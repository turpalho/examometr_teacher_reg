Telegram.WebApp.ready();
const mainButton = window.Telegram.WebApp.MainButton;
mainButton.text = "ПРОДОЛЖИТЬ";
mainButton.enable();
mainButton.show();

// mainButton.onClick(function(){
//     var firstName = document.getElementById('first_name').value;
//     var lastName = document.getElementById('last_name').value;
//     var middleName = document.getElementById('middle_name').value;

//     let fio = {
//         name: firstName,
//         surname: lastName,
//         middleName: middleName
//     }
//     window.Telegram.WebApp.sendData("firstName");
// })

Telegram.WebApp.onEvent('mainButtonClicked', function(){
    tg.sendData("some string that we need to send"); 
    //при клике на основную кнопку отправляем данные в строковом виде
 });

// let BackButton = window.Telegram.WebApp.BackButton;
// BackButton.hide();

// function loadMenu() {
//     menuBtns.style.opacity = 0;
//     setTimeout(function() {
//         menuBtns.style.display = "none";
//       }, 500);
//     aboutPage.style.display = "block";
//     setTimeout(function() {
//         aboutPage.style.opacity = 1;
//       }, 10);
//     if (!BackButton.isVisible) {
//         BackButton.show();
//     }
// }

// BackButton.onClick(function() {
//     loadMain();
// })

// Telegram.WebApp.onEvent('mainButtonClicked', function(){
//     tg.sendData("some string that we need to send");
//     //при клике на основную кнопку отправляем данные в строковом виде
//  });

// // window.Telegram.WebApp.onEvent('viewportChanged', setViewportData);
// // setViewportData();

function handleRegistration() {
    var firstName = document.getElementById('first_name').value;
    var lastName = document.getElementById('last_name').value;
    var middleName = document.getElementById('middle_name').value;

    let fio = {
        name: firstName,
        surname: lastName,
        middleName: middleName
    }
    window.Telegram.WebApp.sendData("firstName");
}
