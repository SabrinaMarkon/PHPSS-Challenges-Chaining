// client-side js
// run by the browser each time your view template is loaded

// by default, you've got jQuery,
// add other scripts at the bottom of index.html

$(function() {
  //console.log('hello world :o');
  
  $.get('/dreams', function(dreams) {
    dreams.forEach(function(dream) {
      $('<li></li>').text(dream).appendTo('ul#dreams');
    });
  });

});

//robot.wakeUp().findTrash().pickupTrash().changeBabyDiapers().makeDinner().shutDown();

function chainCommands(commands) {
  
  for ( i = 0; i < commands.length; i++ ) {
    //console.log(commands[i]);
    
    // get the function name for the command:
    var commandname = commands[i];
    // execute it:
    commandname();
  }
  
}

function wakeUp() {
  console.log('Woke up');
}

function findTrash() {
  console.log('Found trash');
}

function pickupTrash() {
  console.log('Picked up trash');
}

function changeBabyDiapers() {
  console.log('Changed baby\'s diapers');
}

function makeDinner() {
  console.log('Made dinner');
}

function shutDown() {
  console.log('Shut down for the day');
}

var robot = {};

var commands = [];

