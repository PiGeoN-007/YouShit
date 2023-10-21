const URL = "https://rickandmortyapi.com/api/character"

const main = document.querySelector("main")

const renderBtn = document.querySelector('#renderBtn')

const showBtn = document.querySelector('#showBtn')


/*

ДЗ: 
1. Создать два дива внутри дива Character, один див будет для картинки, второй для
   информации о персонаже

2. Отобразить картинку, отобразить информацию: имя, статус (живой или не живой)

3. Если перс живой, то блок будет зеленым иначе красным

*/





renderBtn.addEventListener("click", () => {
    
    fetch(URL) // метод позволяющий сделать запрос на API
    .then(response => response.json()) // получаем Promise (pending)
    .then(data => renderCharacter(data.results) )

    showBtn.style.display = "block"


    
    const renderCharacter = (characters) => {
    characters.filter(character => character.status === "Alive").map(character => {

        main.innerHTML += 
        `
        <div class="character">
            <div class="character__img">
            
                <img src="${character.image}" alt="">
            </div>
            <div class="character__info">
                <h2>${character.name}</h2>
                <div class="character__round-wrapper>
                    <div class= "round" style="${character.status === "Alive" ? "background: green;" : "background: red;"}"></div> 
                    <p style="margin-bottom: 20px">${character.status}</p>
                </div>
                <p>${character.species}</p>
            </div>
        </div>
        `
    })

    showBtn.addEventListener("click",() => {
                
    })

}
})







// задача: вывести лишь те числа которые больше 4

// map - метод перебора массивов, возвращает новый массив 

// let arr = [1, 2, 3, 4, 5]

// const arr3 = arr.forEach(num => {
//     return num * 2;
// }) // undefined

// console.log(arr3);

// const arr2 = arr.map(num => {
//     return num * 2
// }) // new Array

// console.log(arr2);