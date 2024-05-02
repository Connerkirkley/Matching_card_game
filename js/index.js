// $(document).ready(function() {










// let GameStart = function(gameBoard) {
//     let gridCol = gameBoard.length;
//     let gridRow = gameBoard[1].length;
//     $('body').append('<div class="top-screen"></div>')

//     $('body').append(`<div class="grid" style="display:grid;grid-template-columns:repeat(${gridCol}, 20px);grid-template-rows:repeat(${gridRow}, 50px)"></div>`);

//     let x = 1;
//     for (let i of gameBoard) {
//         let y = 1;
//         for (let j of i) {
//             $(".grid").append(`<div class="card" id="${j}" style="grid-column: ${x} / ${x + 1}; grid-row: ${y} / ${y + 1};"></div>`);
//             y++;
//         }
//         x++;
//     }
// };



// GameStart()

// })






let cardList



let cardMaker = function(numberOfPairs, operator) {
    let arr = [];
    for (let i = 1; i <= numberOfPairs; i++){
        arr.push(i);
        arr.push(i);
    }

    arr.sort(() => Math.random() - 0.5);

    switch(operator){
        case "1":
            cardList = [[],[],[],[]]
        break;

        case "2":

        break;


        case "3":
            
        break;
    }

    console.log(`${bestFormat}`);
    console.log(arr);


}


cardMaker(8);