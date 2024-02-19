Telegram.WebApp.ready();
const mainButton = window.Telegram.WebApp.MainButton;
mainButton.text = "ПРОДОЛЖИТЬ";
mainButton.enable();
mainButton.show();

mainButton.onClick(function(){
    var firstName = document.getElementById('first_name').value;
    var lastName = document.getElementById('last_name').value;
    var middleName = document.getElementById('middle_name').value;

    let fio = [{
        name: firstName,
        surname: lastName,
        middleName: middleName
    }]
    Telegram.WebApp.sendData(JSON.stringify(fio));
});
