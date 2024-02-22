let boxs = document.querySelectorAll(".box");
let restBtn = document.querySelector(".rest-btn");
let newbtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; //playerX, PlayerO

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const restGame = () => {
    turnO=true;
    enabledBoxs();
    msgContainer.classList.add("hide");

}

boxs.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO){
            box.innerText = "O";
            turnO = false;
        
        }
        else{
            box.innerText = "X";
            turnO=true;
        }
        box.disabled=true;

        checkWinner();
    });
});

const disabledBoxs = () => {
    for(let box of boxs){
        box.disabled=true;
    }
}

const enabledBoxs = () => {
    for(let box of boxs){
        box.disabled=false;
        box.innerText="";
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulation, Winner is ${winner}`;
    msgContainer.classList.remove("hide"); 
    disabledBoxs();
}

const checkWinner = () => {
    for(pattern of winPatterns){
        let pos1 = boxs[pattern[0]].innerText;
        let pos2 = boxs[pattern[1]].innerText;
        let pos3 = boxs[pattern[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){
                console.log("Winner", pos1);
                showWinner(pos1);
            }
        }
    }
}


newbtn.addEventListener("click", restGame);
restBtn.addEventListener("click", restGame);


