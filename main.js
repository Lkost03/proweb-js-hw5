let user = {}

for(let i = 1; i <= 10; i++) {
    let name = prompt('Введите ваше имя')
    let age = +prompt('Введите ваш возраст')

    user[i] = {
        name: name,
        age: +age,
    }
}

for(let key in user) {
    console.log(`Пользователь - ${key}`);
    console.log(`Ваше имя - ${user[key].name}`);
    console.log(`Ваш возраст - ${user[key].age}`);
}
console.log(user);
