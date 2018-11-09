/* Задание со звездочкой */

/*
 Создайте страницу с кнопкой.
 При нажатии на кнопку должен создаваться div со случайными размерами, цветом и позицией на экране
 Необходимо предоставить возможность перетаскивать созданные div при помощи drag and drop
 Запрещено использовать сторонние библиотеки. Разрешено пользоваться только тем, что встроено в браузер
 */

/*
 homeworkContainer - это контейнер для всех ваших домашних заданий
 Если вы создаете новые html-элементы и добавляете их на страницу, то дабавляйте их только в этот контейнер

 Пример:
   const newDiv = document.createElement('div');
   homeworkContainer.appendChild(newDiv);
 */
const homeworkContainer = document.querySelector('#homework-container');

/*
 Функция должна создавать и возвращать новый div с классом draggable-div и случайными размерами/цветом/позицией
 Функция должна только создавать элемент и задвать ему случайные размер/позицию/цвет
 Функция НЕ должна добавлять элемент на страницу. На страницу элемент добавляется отдельно

 Пример:
   const newDiv = createDiv();
   homeworkContainer.appendChild(newDiv);
 */
function createDiv() {
  let newDiv = document.createElement('div');
  newDiv.classList.add('draggable-div');

  const homePageHeight = window.outerHeight;
  const homePageWidth = window.outerWidth;

  newDiv.style.backgroundColor = 'rgb('+ randomDiv(0,255) +', '+ randomDiv(0,255) +', ' + randomDiv(0,255) +')';
  newDiv.style.width = randomDiv(0, homePageWidth) + 'px';
  newDiv.style.height = randomDiv(0, homePageHeight) + 'px';
  newDiv.style.position = 'absolute';
  newDiv.style.left = (randomDiv(0, homePageWidth) + 'px');
  newDiv.style.top = (randomDiv(0, homePageHeight) + 'px');

  function randomDiv(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  return newDiv;
}

/*
 Функция должна добавлять обработчики событий для перетаскивания элемента при помощи drag and drop

 Пример:
   const newDiv = createDiv();
   homeworkContainer.appendChild(newDiv);
   addListeners(newDiv);
 */
function addListeners(target) {
}

let addDivButton = homeworkContainer.querySelector('#addDiv');

addDivButton.addEventListener('click', function() {

  const div = createDiv();
  // homeworkContainer.createElement('newDiv');
  // назначить обработчики событий мыши для реализации D&D
  addListeners(div);
  // можно не назначать обработчики событий каждому div в отдельности, а использовать делегирование
  // или использовать HTML5 D&D - https://www.html5rocks.com/ru/tutorials/dnd/basics/
});

export {
    createDiv
};
