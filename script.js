let music = new Audio('music.mp3');
let audioTurn = new Audio('ting.mp3');
let gameOver = new Audio('gameover.mp3');
let turn = "X";
let isGameOver = false;

let changeTurn = function changeTurn() {
    return turn === "X" ? "O" :"X"
    
}
let checkWin = function checkWin(){
    let boxText = document.getElementsByClassName('boxtext');
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    wins.forEach(e =>{
    if((boxText[e[0]].innerText === boxText[e[1]].innerText) &&
        (boxText[e[2]].innerText === boxText[e[1]].innerText) &&
        (boxText[e[0]].innerText !== "") ) {
        document.querySelector('.info').innerText = boxText[e[0]].innerText + 'Won';
        isGameOver = true;
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '20vw'
// music.play();

    }
    })
}

let boxes = document.querySelectorAll('.box');
Array.from(boxes).forEach(element => {
    let boxText = element.querySelector('.boxtext');
    element.addEventListener('click',function(){
    if(boxText.innerText === ''){
        boxText.innerText = turn;
        turn = changeTurn();
        audioTurn.play();
        checkWin();
        if(!isGameOver){
        document.querySelector(".info").innerText = "Turn for  " + turn;}

}


    })
});


reset.addEventListener('click',function(){
    let boxText = document.querySelectorAll('.boxtext');
    Array.from(boxText).forEach(
        element =>{
            element.innerText = "" ;
        });
        turn = "X"
        isGameOver = false
        if(!isGameOver){
            document.querySelector(".info").innerText = "Turn for  " + turn;}
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '0vw'

})



    
