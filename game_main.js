//will run when document is loaded
document.addEventListener("DOMContentLoaded", function(){

// Get the modal
var modal = document.getElementById('myModal-1');

// Get the button that opens the modal
var myBtn = document.getElementById("1-myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function() {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
// 2 modal*************************************

var modal = document.getElementById('myModal-2');
var btn = document.getElementById("myBtn-3");

btn.onclick = function() {
    modal.style.display = "block";
}
//close
span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function() {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//field value
function printvalue() {
  var name = document.form1.name.value;
  alert("Welcome  " + name);
}

function alertFail() {
  alert("Wrong try again")
}

function alertSucess() {
  alert("You are RIGHT!!!")
}
//CHOOSES A RANDON # BTW 1 & 3
function randomizer() {
  return Math.floor((Math.randon() * 3) + 1)
}

function hint() {
    var x = document.createElement("INPUT");
    x.setAttribute("type", "button");
    x.setAttribute("value", "Equal Rights Party");
    document.body.appendChild(x);
}

  //reset game**********************************
function myFunction() {
  var x = document.getElementById("myReset").value;
  document.getElementById("button").innerHTML = x;
}

//^^^^^^^^^^^^^^^^^functions^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  var firstBtn = document.querySelector("#myBtn-1")
  var secondChoice = document.querySelector("#choice-2")
  var thirdChoice = document.querySelector("#choice-3")
  var answer = randomizer

  console.log(answer);

  firstBtn.addEventListener("click", function(event) {
    if(anwser => 1){
      alertSucess()
    } else {
      alertFail()
    }
  })

  secondChoice.addEventListener("click", function(event) {
    if(anwser =>2){
      alertFail()
    } else {
      alertFail()
    }
  })

  thirdChoice.addEventListener("click", function(event) {
    if(anwser => 3){
      alertFail()
    } else {
      alertFail()
    }
  })

// #2***************************************************************
function alertFail() {
  alert("You are wrong try again")
}

function alertSucess() {
  alert("You are RIGHT!!!")
}

//CHOOSES A RANDON # BTW 1 & 3
function randomizer() {
  return Math.floor((Math.randon() * 3) + 1)
}

function hint2() {
    var x = document.createElement("INPUT");
    x.setAttribute("type", "button");
    x.setAttribute("value", "first woman to command a U.S. Navy warship at sea");
    document.body.appendChild(x);
}

//will run when document is loaded
document.addEventListener("DOMContentLoaded", function(){

  var firstAnswer = document.querySelector("#answer-1")
  var secondAnswer = document.querySelector("#answer-2")
  var thirdAnswer = document.querySelector("#myBtn-3")
  var answer = randomizer


  console.log(answer);

  firstAnswer.addEventListener("click", function(event) {
    if(anwser => 1){
      alertFail()
    } else {
      alertFail()
    }
  })

  secondAnswer.addEventListener("click", function(event) {
    if(anwser =>2){
      alertFail()
    } else {
      alertFail()
    }
  })

  thirdAnswer.addEventListener("click", function(event) {
    if(anwser => 3){
      alertSucess()
    } else {
      alertFail()
    }
  })

})
//***************************************************************************************
  // game

  var memory_array = ['Vagina','Vagina','Sex','Sex','Moody','Moody','Happy','Happy','Love','Love','Penis','Penis'];
  var memory_values = [];
  var memory_tile_ids = [];
  var tiles_flipped = 0;

  Array.prototype.memory_tile_shuffle = function(){
   var i = this.length, j, temp;
    while(--i > 0){
    j = Math.floor(Math.random() * (i+1));
    temp = this[j];
    this[j] = this[i];
    this[i] = temp;
   }
  }

  function newBoard(){
   tiles_flipped = 0;
    var output = '';

///shuffle cards
  memory_array.memory_tile_shuffle();
  //4 loop////looping all of the cards
  for(var i = 0; i < memory_array.length; i++){
  ///adding all of the div's
    output += '<div id="tile_'+i+'" onclick="memoryFlipTile(this,\''+memory_array[i]+'\')"></div>'
  //^^^^^gives each div an id tile_= tile 1, stile 2 and so on ^^memoryFlipTile -responible for flip over & this. = represent the div
      document.getElementById('memory_board').innerHTML = output;
  }
};

  function memoryFlipTile(tile,val){

    if(tile.innerHTML == "" && memory_values.length < 2){

      tile.style.background = '#FFF';

      tile.innerHTML = val;

    if(memory_values.length == 0){

      memory_values.push(val);

      memory_tile_ids.push(tile.id);

    } else if(memory_values.length == 1){

      memory_values.push(val);

      memory_tile_ids.push(tile.id);

        if(memory_values[0] == memory_values[1]){

          tiles_flipped += 2;

  // Clear both arrays

        memory_values = [];
      	memory_tile_ids = [];
  // Check to see if the whole board is cleared
          if(tiles_flipped == memory_array.length){
  	       alert("GREAT JOB!!! YOU HAVE A GOOD MEMORY!!");
  	        document.getElementById('memory_board').innerHTML = "";
  	         newBoard();
        }
       } else {
            function flip2Back(){
    // Flip the 2 tiles back over
              var tile_1 = document.getElementById(memory_tile_ids[0]);
              var tile_2 = document.getElementById(memory_tile_ids[1]);

    // tile_1.style.background = 'url(tile_bg.jpg) no-repeat';
    	          tile_1.innerHTML = "";
    // tile_2.style.background = 'url(tile_bg.jpg) no-repeat';

    	          tile_2.innerHTML = "";
      // Clear both arrays
                memory_values = [];
                memory_tile_ids = [];
           }

  setTimeout(flip2Back, 700);
          }
      }
   }
 }
})


// game ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
