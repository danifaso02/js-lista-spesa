"use: strict";

// Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.

const shoppingList = ["Pasta", "Riso", "Fiesta","Pomodori", "Aglio" ];

const List = document.getElementById("shopping-list");

let currentIndex = 0;

while(currentIndex <= shoppingList.length -1){

    let item = document.createElement("li");

    item.innerHTML = shoppingList[currentIndex];

    List.append(item);

    currentIndex++;
}