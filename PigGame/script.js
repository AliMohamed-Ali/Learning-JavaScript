/*
Game Rulles:
The game of Pig is a very simple jeopardy dice game in which two players race to reach 100 points. Each turn, a player repeatedly rolls a die until either a 1 is rolled or the player holds and scores the sum of the rolls (i.e. the turn total). At any time during a player's turn, the player is faced with two decisions:

roll - If the player rolls a
1: the player scores nothing and it becomes the opponent's turn.
2 - 6: the number is added to the player's turn total and the player's turn continues.
hold - The turn total is added to the player's score and it becomes the opponent's turn.


 */

var score , roundScore,activePlayer,gamePlaying,prevScore;
init();

//onclic of the roledice 
document.querySelector('.btn--roll').addEventListener('click',()=>{
    if(gamePlaying){
        //1-Random number 
    var dice = Math.floor(Math.random()*6)+1
    //2-Display the result
    var diceDom = document.querySelector('.dice');
    diceDom.style.display = 'block';
    diceDom.src = 'dice-'+dice+'.png';

    //3-update the round score if it is not 1 
    if(dice !== 1){
        //add score 
        roundScore += dice;
        document.querySelector('#current--'+activePlayer).textContent = roundScore;
        prevScore = dice
        console.log(prevScore)


    }else{
        //Next player
        nextPlayer();
    }
    }

});
document.querySelector('.btn--hold').addEventListener('click',function(){
    if(gamePlaying){
        //Add current score to glopal score 
    score[activePlayer] += roundScore;
    //update ui
    document.querySelector('#score--'+activePlayer).textContent = score[activePlayer];
    //check if a player won
    if(score[activePlayer]>= 100){
        document.querySelector('.player--'+activePlayer).classList.add('player--winner')
        document.querySelector('.player--'+activePlayer).classList.remove('active')
        document.getElementById('name--'+activePlayer).textContent = 'Winner!'
        document.querySelector('.dice').style.display = 'none';
        gamePlaying=false
    }else{
        //Next player
        nextPlayer();
    }
    }
});


function nextPlayer(){
    activePlayer === 0 ? activePlayer=1 : activePlayer=0;
    roundScore = 0 ;
    document.getElementById('current--1').textContent = '0';
    document.getElementById('current--0').textContent = '0';
    document.querySelector('.player--0').classList.toggle('player--active');
    document.querySelector('.player--1').classList.toggle('player--active');
    document.querySelector('.dice').style.display = 'none';

};


function init(){
    score =[0,0];
    roundScore = 0;
    activePlayer=0;
    gamePlaying = true;
    //display the dice 
    document.querySelector('.dice').style.display = 'none';
    //zero the result and curent
    document.getElementById('score--0').textContent = '0';
    document.getElementById('score--1').textContent = '0';
    document.getElementById('current--1').textContent = '0';
    document.getElementById('current--0').textContent = '0';
    document.getElementById('name--0').textContent = 'Player 1'
    document.getElementById('name--1').textContent = 'Player 2'

    document.querySelector('.player--0').classList.remove('player--winner')
    document.querySelector('.player--1').classList.remove('player--winner')
    document.querySelector('.player--0').classList.remove('player--active')
    document.querySelector('.player--1').classList.remove('player--active')
    document.querySelector('.player--0').classList.add('player--active')

}

document.querySelector('.btn--new').addEventListener('click',init);


/*
your 3 challanges
change the game to follow these rules:
1-a player looses his entire score when he rolls two 6 in arow .after that
it's the next player's turn .(hint:always save the previous dice roll in separate varible)
2-add an input field to the html.where the players can set the winner score
-add another dice to the game ,the player losses his current score when one of the is 1
*/