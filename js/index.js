$(document).ready(function() {






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
                cardList = [[arr[0], arr[1], arr[2], arr[3]],[arr[4], arr[5], arr[6], arr[7]],[arr[8], arr[9], arr[10], arr[11]],[arr[12], arr[13], arr[14], arr[15]]];
            break;
    
            case "2":
                cardList = [[arr[0], arr[1], arr[2], arr[3]], [arr[4], arr[5], arr[6], arr[7]], [arr[8], arr[9], arr[10], arr[11]], [arr[12], arr[13], arr[14], arr[15]], [arr[16], arr[17], arr[18], arr[19]], [arr[20], arr[21], arr[22], arr[23]], [arr[24], arr[25], arr[26], arr[27]], [arr[28], arr[29], arr[30], arr[31]]]
            break;
    
            case "3":
                cardList = [[arr[0], arr[1], arr[2], arr[3], arr[4], arr[5], arr[6], arr[7]],[arr[8], arr[9], arr[10], arr[11], arr[12], arr[13], arr[14], arr[15]],[arr[16], arr[17], arr[18], arr[19], arr[20], arr[21], arr[22], arr[23]],[arr[24], arr[25], arr[26], arr[27], arr[28], arr[29], arr[30], arr[31]],[arr[32], arr[33], arr[34], arr[35], arr[36], arr[37], arr[38], arr[39]],[arr[40], arr[41], arr[42], arr[43], arr[44], arr[45], arr[46], arr[47]],[arr[48], arr[49], arr[50], arr[51], arr[52], arr[53], arr[54], arr[55]],[arr[56], arr[57], arr[58], arr[59], arr[60], arr[61], arr[62], arr[63]],]
            break;
        }
        console.log(arr);
        GameStart(cardList)
    
    
    }



let GameStart = function(gameBoard) {
    
    let gridCol = gameBoard.length;
    let gridRow = gameBoard[1].length;
    $('body').append('<div class="top-screen"></div>')

    $('body').append(`<div class="grid" style="display:grid;grid-template-columns:repeat(${gridCol}, 20px);grid-template-rows:repeat(${gridRow}, 50px)"></div>`);

    let x = 1;
    for (let i of gameBoard) {
        let y = 1;
        for (let j of i) {
            $(".grid").append(`<div class="card" id="${j}" style="grid-column: ${x} / ${x + 1}; grid-row: ${y} / ${y + 1};">${j}</div>`);
            y++;
        }
        x++;
    }

};

let killAllDivs = function() {
    $('div').remove()
    console.log('15')
};


GameStart()

})