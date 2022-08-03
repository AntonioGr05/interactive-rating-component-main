
let numberConteiner = document.querySelector('.rating-state__numbers-container');
let selectionnumber = document.querySelector('.thankyou-state__result--numbers');
let submitBtn = document.querySelector('.rating-state__buttom');
let ratingstate = document.querySelector('.rating-state');
let thankyoustate = document.querySelector('.thankyou-state');

numberConteiner.addEventListener('click', (event)=>{
    let numberSelected = event.target.innerText;
    selectionnumber.innerText = numberSelected;
    if (numberSelected > 0 || numberSelected <= 5) {
        submitBtn.addEventListener('click', () =>{
            ratingstate.style.display = 'none';
            thankyoustate.style.display = 'flex';
        });
    }
    
});