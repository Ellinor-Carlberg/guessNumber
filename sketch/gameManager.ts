// explanation of the TS files.
// gameManager = initial typescript file with the main content. Functions from the other gamePhase-files is called from this file. 
// gamePhase0 = start page, game has not started.
// gamePhase1 = game menu, game has not started.
// gamePhase2 = game mode, game is running.
// gamePhase3 = game results, game has ended. 

window.addEventListener("load", init);

function init(): void {



let gamePhase: number = 1
let phase0 : any = document.querySelector(".phase-0")
let phase1 : any = document.querySelector(".phase-1")
let phase2 : any = document.querySelector(".phase-2")
let phase3 : any = document.querySelector(".phase-3")

if (gamePhase === 0){
  phase0.style.display = "block"
  phase1.style.display = "none"
  phase2.style.display = "none"
  phase3.style.display = "none"
  console.log("gamePhase:" +gamePhase)
}
if (gamePhase === 1){
  phase0.style.display = "none"
  phase1.style.display = "block"
  phase2.style.display = "none"
  phase3.style.display = "none"
  console.log("gamePhase:" +gamePhase)
}
if (gamePhase === 2){
  phase0.style.display = "none"
  phase1.style.display = "none"
  phase2.style.display = "block"
  phase3.style.display = "none"
  console.log("gamePhase:" +gamePhase)
}
if (gamePhase === 3){
  phase0.style.display = "none"
  phase1.style.display = "none"
  phase2.style.display = "none"
  phase3.style.display = "block"
  console.log("gamePhase:" +gamePhase)
}

setupEventListenersClick();

  const guessSpan: number = 20; //make the user choose this with a range or dropdown

  // let instructions = new Instructions()
  let numberGenerator = new NumberGenerator();
  let rng = numberGenerator.random(guessSpan);
  console.log(rng);


}

function setupEventListenersClick() {
    toggleInstructions();
    submitPlayerName();
    
}

//Function when user click on submit 
function submitPlayerName() {
  let submitNamePlayerButton: any = document.querySelector(".submitPlayerName")
  let phase0 : any = document.querySelector(".phase-0")
  let phase1 : any = document.querySelector(".phase-1")

  submitNamePlayerButton.addEventListener("click", function() {
    //insert if/else statement
    //if the player enters their name --> function for gamePhase === 1
   /*  gamePhase = 1;
    console.log("gamePhase:" +gamePhase)
    phase0.style.display = "none"
    phase1.style.display = "block" */
    //else display a red border around the input field
  })
}

function toggleInstructions() {
    let toggleBtn: any = document.querySelector(".toggle-btn");
    let content: any = document.querySelector(".instructions .content");
    let open: Boolean = false;
    
    toggleBtn.addEventListener("click", function() {
      if (!open) {
        content.style.display = "block";
        open = true;
      } else if (open) {
        content.style.display = "none";
        open = false;
      }
    }); 
  }