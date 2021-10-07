// Task 1
// Напишите pure функцию t1, которая принимает два аргумента и выводит в .out-1 cумму всех целых чисел от первого аргумента(включительно) до второго(включительно). Функция запускается по кнопке .b-1. 

function t1(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

document.querySelector('.b-1').addEventListener('click', function () {
  document.querySelector('.out-1').textContent = t1(10, 100);
});




// Task 2
// Напишите pure функцию t2, которая принимает два аргумента и выводит в .out-2 больше число. Используйте Math.max. Функция запускается по кнопке .b-2. 

function t2(a, b) {
  return Math.max(a, b);
}

document.querySelector('.b-2').addEventListener('click', function () {
  document.querySelector('.out-2').textContent = t2(10, 100);
});





// Task 3.
// Напишите pure функцию t3 ( принимает 3 аргумента), которая делит число a на b и результат выводит в out-3. Если b равно нулю, то в out-3 выводится аргумент c. Функция запускается по кнопке .b-3. 


function t3(a, b, c) {
  if (b === 0) {
    return c;
  } else if (a === 0) {
    return c;
  } else {
    return a / b;
  }
}

document.querySelector('.b-3').addEventListener('click', function () {
  document.querySelector('.out-3').textContent = t3(20, 100, 12);
});


// Task 4
// Давайте напишем pure функцию t4, которая выводит переданный ей массив (как аргумент arr) в блок (переданный как аргумент block) через пробел. Функция запускается по кнопке .b-4. 


function t4(block, [...arr]) {
  const arrspace = arr.join(' ');
  block.textContent = arrspace;
}

document.querySelector('.b-4').addEventListener('click', function () {
  t4(document.querySelector('.out-4'), [10, 20, 30, 40, 50]);
});


// Task 5
// Давайте напишем pure функцию t5, которая проверяет наличие элемента класс которой передан ей как аргумент (например '.out-5') на странице и возвращает true или false. Функция запускается по кнопке .b-5. 

function t5(className) {
  const docSelector = document.querySelector(className);
  if (docSelector) {
    document.querySelector('.out-5').textContent = 'true';
  } else {
    document.querySelector('.out-5').textContent = 'false';
  }
}

document.querySelector('.b-5').addEventListener('click', function () {
  t5('.out-5');
});


// Task 6
// Давайте напишем pure функцию t6, которая получает массив и возвращает его развернутым на 180 градусов ( чистый аналог reverse ). Функция запускается по кнопке .b-6. Для проверки - выводите результат на страницу, через пробел.


function t6(...arr) {
  arr = arr.reverse().join(' ');
  document.querySelector('.out-6').textContent = arr;
}

document.querySelector('.b-6').addEventListener('click', function () {
  t6(10, 35, 54, 21);
});



// Task 7
// Давайте напишем функцию t7, которая позволяет выводить текст переданный ей в качестве аргумента text в блок block. При этом переданный текст с помощью trim очищается от пробелов до и после и переводится в нижний регистр. Ваша задача модицифировать функцию и запуск так, чтобы она стала pure.

const out7 = document.querySelector('.out-7');

function t7(block, text) {
  block.textContent = text.trim().toLowerCase();
}

document.querySelector('.b-7').addEventListener('click', function () {
  t7(out7, ' HelLO wORLd       ');
});


// Task 8
// Давайте напишем pure функцию t8, которая получает массив a8 и год year и проверяет что все года массива больше или равны year - возвращает true, false. Запускатеся при нажатии t8. Результат работы должен быть виден в out-8.

let a8 = [1998, 2000, 1999, 2002, 2005];
let year = 1998;

function t8(arr, year) {
  return arr.every((item) => {
    return item >= year;
  });
}

document.querySelector('.b-8').addEventListener('click', function () {
  document.querySelector('.out-8').textContent = t8(a8, year);
});


// Task 9
// Метод push мутирует массив. Давайте напишем pure функцию t9 которая принимает массив и число в качестве аргумента и возвращает новый массив равный исходному с добавленным в него числом ( добавленным в конце массива). Запускаться функция дожна при нажатии  на кнопку b-9. Для проверки - выводите результат на страницу через пробел. 

function t9() {
  
}

// Task 10
// Метод push мутирует массив. Давайте напишем pure функцию t10 которая принимает массив и любое количество чисел в качестве аргументов и возвращает новый массив равный исходному с добавленными в него числами ( добавленным в конце массива). Запускаться функция дожна при нажатии  на кнопку b-10. Для проверки - выводите результат на страницу через пробел. 