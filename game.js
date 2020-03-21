const startbtn=document.getElementById("btn");
const ROCK="ROCK";
const SCISSOR="SCISSOR";
const PAPER="PAPER";
let gamerunning=false;
const DEFAULT_VALUE=ROCK;
const PLAYER_WIN="PLAYER WIN";
const COMPUTER_WIN="COMPUTER WIN";
const DRAW="DRAW";



const getUserValue= () => { // using arrow function ainsted of function

    const SELECTION=prompt(`${ROCK} , ${SCISSOR} or ${PAPER}`).toUpperCase();
    if(SELECTION!==ROCK && SELECTION!==SCISSOR && SELECTION!==PAPER)
    {
        alert(`Invalid choice we have taken ${DEFAULT_VALUE} as default value`);
       return DEFAULT_VALUE;
    }
     return SELECTION;
};


const getComputerValue=() => {  // using arrow function ainsted of function
    const randomValue=Math.random();
    if(randomValue<0.34)
    {
        return ROCK;
    }
    else if(randomValue<0.67)
    {
        return PAPER;
    }
    else{
        return SCISSOR;
    }
};

// const add=(a,b) => a+b;

// both are one and the samething but first one is good approach than second one

// const add=function(a,b){
//     return a+b;
// }

const winner=(cChoice,pChoice) =>   //using arrow function insted of function()
   
 cChoice===pChoice? 
 DRAW : 
 (cChoice==ROCK && pChoice==PAPER) || 
 (cChoice==SCISSOR && pChoice==ROCK) ||
 (cChoice==PAPER && pChoice==SCISSOR) ?
  PLAYER_WIN:COMPUTER_WIN;

//Using terniary method insted of if else. In ternirary method therr is np ned of curly braces and return statemnet

    // if(cChoice==pChoice)
    // {
    //       return DRAW;
    // }
    // else if((cChoice==ROCK && pChoice==PAPER) || (cChoice==SCISSOR && pChoice==ROCK || (cChoice==PAPER && pChoice==SCISSOR)))
    // {
    //      return PLAYER_WIN;
    // }
    // else
    // {
    //      return COMPUTER_WIN;
    // }




startbtn.addEventListener('click',() => { // using arrow function ainsted of function

    if(gamerunning)
    {
        return;
    }
    gamerunning=true;
console.log("Game is starting...");
const userchoice=getUserValue();
const computerchoice=getComputerValue();
const gameResult=winner(computerchoice,userchoice);
console.log(`Your choice is ${userchoice}`);
console.log(`Computer choice is ${computerchoice }`);
console.log(gameResult);
});