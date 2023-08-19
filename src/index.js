const RegistrBTN = document.querySelector(".RegistTxt");
const EnterTxt = document.querySelector("h1");
const EnterBtn = document.querySelector(".enter-btn");
const UnderBtnTxr = document.querySelector(".underBtnTxr");

RegistrBTN.addEventListener('click', OnRegistrBtnClick)

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