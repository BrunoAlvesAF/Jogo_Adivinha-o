let randomNumber = Math.floor(Math.random()*100) + 1;
const numberInput = document.getElementById('game');
const enviarBtn = document.getElementById('enviar') 
const message = document.getElementById('message');
const txtSpan = document.getElementById('leq');
const restartBtn = document.getElementById('restart');

let leq = 0;

enviarBtn.addEventListener("click", function(){
    const user = parseInt(numberInput.value)

    if(isNaN(user) || user < 1 || user > 100){
        message.textContent = "Digite um número entre 1 a 100"
        return;
    }

    leq++
    txtSpan.textContent = leq;

    if(user === randomNumber){
        message.textContent = `Parabéns! Você acertou em ${leq} tentativas`
        message.style.color = "green"
        enviarBtn.disabled = true;
        restartBtn.style.display = "block"
    } else if(user < randomNumber) {
        message.textContent = "Tente outro número maior"
        message.style.color = "blue"
        numberInput.value = "";
    } else {
        message.textContent = "tente um número menor"
        message.style.color = "red"
        numberInput.value = "";
    }

    
    numberInput.focus();

});


    //função para reiniciar o jogo
    restartBtn.addEventListener("click", function(){
        randomNumber = Math.floor(Math.random() * 100) + 1;
        leq = 0;
        txtSpan.textContent = leq;
        message.textContent = "";
        restartBtn.disabled = false;
        numberInput.value = "";
        enviarBtn.disabled = false; //Habilitar o botão novamente
        restartBtn.style.display = "none";
    
});