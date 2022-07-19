let a = prompt('Введите имя')
let b = +prompt('Введите год рождения')
let c = +prompt('Введите нынешний год')

function age(b, c){
    return c - b;
}
alert(a + ", Ваш возраст " + age(b, c));

