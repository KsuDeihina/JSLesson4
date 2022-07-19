
var a = +prompt("Введите колическтво примеров")

for(let i = 1; i <= a; i++){
    function random2(){
        return Math.floor((Math.random() * 100) + 1);
    }
    var num1 = random2()
    var num2 = random2()
    
       
    
    function random1(){
        return Math.floor((Math.random() * 4) + 1);
    }
    var b = random1()


    if(b == 1){
        let primer = +prompt(num1 + " + " + num2 + " = ?");
        let answer = (num1 + num2) == primer ? 'Ваш ответ верный - ' + primer : 'Ваш ответ неверный - ' + primer + ". Правильный ответ - " + (num1 + num2);
        alert(answer)   
    } else if (b == 2){
        let primer = +prompt(num1 + " - " + num2 + " = ?");
        let answer = (num1 - num2) == primer ? 'Ваш ответ верный - ' + primer : 'Ваш ответ неверный - ' + primer + ". Правильный ответ - " + (num1 - num2);
        alert(answer)
    } else if (b == 3){
        let primer = +prompt(num1 + " * " + num2 + " = ?");
        let answer = (num1 * num2) == primer ? 'Ваш ответ верный - ' + primer : 'Ваш ответ неверный - ' + primer + ". Правильный ответ - " + (num1 * num2);
        alert(answer)
    } else{
        let primer = +prompt(num1 + " / " + num2 + " = ?");
        let answer = (num1 / num2) == primer ? 'Ваш ответ верный - ' + primer : 'Ваш ответ неверный - ' + primer + ". Правильный ответ - " + (num1 / num2);
        alert(answer)
    }
}


