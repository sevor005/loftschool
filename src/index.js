/* ДЗ 2 - работа с массивами и объеектами */

/*
 Задание 1:

 Напишите аналог встроенного метода forEach для работы с массивами
 Посмотрите как работает forEach и повторите это поведение для массива, который будет передан в параметре array
 */
function forEach(array, fn){
  for(let i = 0; i < array.length; i++) {
    fn(array[i], i, array);
  }
}

/*
 Задание 2:

 Напишите аналог встроенного метода map для работы с массивами
 Посмотрите как работает map и повторите это поведение для массива, который будет передан в параметре array
 */
function map(array, fn) {
  let newArrays = [];

  for(let i = 0; i < array.length; i++) {
    let arrays = fn(array[i], i, array);
    newArrays.push(arrays);
  }

  return newArrays;
}

/*
 Задание 3:

 Напишите аналог встроенного метода reduce для работы с массивами
 Посмотрите как работает reduce и повторите это поведение для массива, который будет передан в параметре array
 */
function reduce(array, fn, initial) {
  let result;

  if(initial) {
    result = initial;
    for(let i = 0; i < array.length; i++) {
      result = fn(result, array[i], i, array);
    }

  } else {
    result = array[0];
    for(let i = 1; i < array.length; i++) {
      result = fn(result, array[i], i, array);
    }
  }

  return result;
}

/*
 Задание 4:

 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистр и вернуть в виде массива

 Пример:
   upperProps({ name: 'Сергей', lastName: 'Петров' }) вернет ['NAME', 'LASTNAME']
 */
function upperProps(obj) {
  var newArray = [];

  for(var upperName in obj) {
    newArray.push(upperName.toUpperCase());
  }

  return newArray;
}

/*
 Задание 5 *:

 Напишите аналог встроенного метода slice для работы с массивами
 Посмотрите как работает slice и повторите это поведение для массива, который будет передан в параметре array
 */
function slice(array, from = 0, to = array.length) {
  var newArray = [];

  if(to < 0) {
    to = to + array.length;
  }
  
  if(to > array.length) {
    to = array.length;
  }

  if(from < 0) {
    from = from + array.length;
  }

  if(from < 0) {
    from = 0;
  }

  for(let i = from; i < to; i++) {
    newArray.push(array[i]);
  }

  return newArray;
}

/*
 Задание 6 *:

 Функция принимает объект и должна вернуть Proxy для этого объекта
 Proxy должен перехватывать все попытки записи значений свойств и возводить это значение в квадрат
 */
function createProxy(obj) {
}

export {
    forEach,
    map,
    reduce,
    upperProps,
    slice,
    createProxy
};
