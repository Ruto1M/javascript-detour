//a function returns it's element by it's id
function $(id){
    return document.getElementById(id);
}
//initialize GUI
window.onload=function(){
    $('counter_scr').value=0
}

//counter variable
let counter = 0;

//update textbox
    function UpdateCounterScr(){
        $('counter_scr').value = counter;
    }
// increment operation
$('increment').addEventListener('click', function(){
    counter++;
    if(counter >= 99){
        counter = 99;
    }
    UpdateCounterScr();
});
//decrement operation
$('decrement').addEventListener('click', function(){
    counter--;
    if (counter <= 0)
        counter = 0;
    UpdateCounterScr();
});