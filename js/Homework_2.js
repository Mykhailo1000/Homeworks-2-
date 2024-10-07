//?Створити змінні для зберігання температури за Цельсієм та Фаренгейтом. Перевести температуру з Цельсія у Фаренгейти за допомогою формули та вивести результат в консоль.
let tempCelsius = 25;
let tempFahrenheit = (tempCelsius * 9 / 5) + 32;
console.log(`Температура в Фаренгейтах: ${tempFahrenheit}`);

//?Створити змінну для зберігання кількості днів у місяці. Обчислити кількість годин та хвилин у цьому місяці за допомогою оператора множення та вивести результат в консоль.
let daysInMonth = 30;
let hoursInMonth = daysInMonth * 24;
let minutesInMonth = hoursInMonth * 60;
console.log(`Годин у місяці: ${hoursInMonth}, Хвилин у місяці: ${minutesInMonth}`);

//?Створити змінні для зберігання рівня здоров'я та енергії гравця в грі. Зменшити рівень здоров'я та енергії гравця за допомогою операторів віднімання та вивести результат в консоль.
let playerHealth = 100;
let playerEnergy = 80;
playerHealth -= 20;
playerEnergy -= 15;
console.log(`Рівень здоров'я: ${playerHealth}, Рівень енергії: ${playerEnergy}`);

//?Створити змінну для зберігання суми покупки в магазині. Застосувати знижку в розмірі 10% до цієї суми за допомогою оператора множення та вивести результат в консоль.
let purchaseAmount = 200;
let discount = 0.10;
let finalAmount = purchaseAmount * (1 - discount);
console.log(`Сума покупки зі знижкою: ${finalAmount}`);

//?Створити змінну для зберігання числа з плаваючою комою. Використати метод Math.floor() для округлення числа до меншого та вивести результат в консоль.
let floatNumber = 5.7;
let flooredNumber = Math.floor(floatNumber);
console.log(`Округлене число: ${flooredNumber}`);

//?Створити змінну для зберігання рядка, який містить числа з плаваючою комою. Використати метод parseFloat() для перетворення рядка у десяткове число та вивести результат в консоль.
let floatString = "3.14";
let parsedFloat = parseFloat(floatString);
console.log(`Десяткове число: ${parsedFloat}`);

//?Створити змінну для зберігання рядка, який містить ціле число. Використати метод parseInt() для перетворення рядка у ціле число та вивести результат в консоль.
let intString = "42";
let parsedInt = parseInt(intString);
console.log(`Ціле число: ${parsedInt}`);

//?Створити змінну для зберігання числа. Використати метод Math.sqrt() для обчислення квадратного кореня числа та вивести результат в консоль.
let number = 16;
let squareRoot = Math.sqrt(number);
console.log(`Квадратний корінь: ${squareRoot}`);

//?Створити змінні для зберігання цілочисельного значення та рядка з числом у вигляді рядка. Використати метод parseInt() для перетворення рядка у ціле число та вивести результат в консоль. Потім використати метод toString() для перетворення цілочисельного значення у рядок та вивести результат в консоль.
let intValue = 10;
let strNumber = "5";
let convertedInt = parseInt(strNumber);
console.log(`Перетворене ціле число: ${convertedInt}`);
let convertedStr = intValue.toString();
console.log(`Цілочисельне значення як рядок: ${convertedStr}`);
