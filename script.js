'use strict';

let score = 20;
let secretNumber =Math.trunc( Math.random()*20 +1);
let highScore = 0;

function dispplayMessage (message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', () => {
    const guess = Number(document.querySelector('.guess').value) ;
    

    if (!guess) {
        // document.querySelector('.message').textContent = '⛔ there is no number';
        dispplayMessage('⛔ there is no number')
    }else if(guess === secretNumber){
        // document.querySelector('.message').textContent = '🎉 correct number';
        dispplayMessage("🎉 correct number");
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;
        
        if(score > highScore){
            highScore =score;
            document.querySelector('.highscore').textContent = highScore;
        }
       
    }else if(guess !== secretNumber){
        if(score >1){
            // document.querySelector('.message').textContent = guess > secretNumber ?'📈 Too high!' : '📉 Too low!';
            dispplayMessage( guess > secretNumber ?'📈 Too high!' : '📉 Too low!')
         score --;
         document.querySelector('.score').textContent = score; 
         }else{
            //  document.querySelector('.message').textContent = '💥 you lost the game:('
            dispplayMessage("💥 you lost the game:(")
             document.querySelector('.score').textContent = 0;
         }
    }
    // else if (guess > secretNumber){
    //     if(score >1){
    //        document.querySelector('.message').textContent = '📈 Too high!';
    //     score --;
    //     document.querySelector('.score').textContent = score; 
    //     }else{
    //         document.querySelector('.message').textContent = '💥 you lost the game:('
    //         document.querySelector('.score').textContent = 0;
    //     }
        
    // }else if (guess < secretNumber){
    //     if(score >1){
    //         document.querySelector('.message').textContent = '📉 Too low!';
    //      score --;
    //      document.querySelector('.score').textContent = score; 
    //      }else{
    //          document.querySelector('.message').textContent = '💥 you lost the game:(';
    //          document.querySelector('.score').textContent = 0;
    //      }
    // }
});




document.querySelector('.again').addEventListener('click', () => {
    score = 20;
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = "?";
    secretNumber = Math.trunc( Math.random()*20 +1);     document.querySelector('.guess').value  = '';
    
    // document.querySelector('.message').textContent = 'Start guessing...';
    dispplayMessage("Start guessing...")
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    
})

