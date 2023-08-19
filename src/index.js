import SlimSelect from 'slim-select'

const RegistrBTN = document.querySelector(".RegistTxt");
const EnterTxt = document.querySelector("h1");
const EnterBtn = document.querySelector(".enter-btn");
const UnderBtnTxr = document.querySelector(".underBtnTxr");
const RegistrForm = document.querySelector(".registration");
const ContRegistrForm = document.querySelector(".ContinueRegistration");

RegistrBTN.addEventListener('click', OnRegistrBtnClick);
EnterBtn.addEventListener('click', OnEnterButtonClick);

function OnRegistrBtnClick (e){
    e.preventDefault();
    if (RegistrBTN.textContent === "Увійти") {
        EnterTxt.textContent = "ВХІД В АКАУНТ";
        RegistrBTN.textContent = "Зареєструватися";
        EnterBtn.textContent = "Увійти";
        UnderBtnTxr.textContent = "Вперше тут?";
    } else if (RegistrBTN.textContent === "Зареєструватися"){
        EnterTxt.textContent = "РЕЄСТРАЦІЯ";
        RegistrBTN.textContent = "Увійти";
        EnterBtn.textContent = "Продовжити";
        UnderBtnTxr.textContent = "Маєш акаунт?";
    }
  
}

function OnEnterButtonClick(e) {
    e.preventDefault();
    RegistrForm.style.display = "none";
    ContRegistrForm.style.display = "flex";
}
