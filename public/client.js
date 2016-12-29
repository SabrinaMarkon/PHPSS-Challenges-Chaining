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

clearCommands();

});

var commands = [];

function clearCommands() {
  document.getElementById('showchain').innerHTML = '';
  document.getElementById('output').innerHTML = '';
  commands = [];
}

function addCommand(command) {
  //alert(command);
  var div = document.getElementById('showchain');
  if (div.innerHTML !== '') {
    div.innerHTML = div.innerHTML + '.';
  }
  div.innerHTML = div.innerHTML + command + '()';
  commands.push(command);
}

function chainCommands(commands) {
  
    clearCommands();
    
    for ( i = 0; i < commands.length; i++ ) {
    //console.log(commands[i]);
    // get the function name for the command:
    var commandname = commands[i];
    // // execute it:
    window[commandname]();

  }
}

function wakeUp() {
  console.log('Woke up');
  var output = document.getElementById('output');
  output.innerHTML = output.innerHTML + 'Woke up<br>';
}

function findTrash() {
  console.log('Found trash');
  var output = document.getElementById('output');
  output.innerHTML = output.innerHTML + 'Found trash<br>';
}

function pickupTrash() {
  console.log('Picked up trash');
  var output = document.getElementById('output');
  output.innerHTML = output.innerHTML + 'Picked up trash<br>';
}

function changeBabyDiapers() {
  console.log('Changed baby\'s diapers');
  var output = document.getElementById('output');
  output.innerHTML = output.innerHTML + 'Changed baby\'s diapers<br>';
}

function makeDinner() {
  console.log('Made dinner');
  var output = document.getElementById('output');
  output.innerHTML = output.innerHTML + 'Made dinner<br>';  
}

function shutDown() {
  console.log('Shut down for the day');
  var output = document.getElementById('output');
  output.innerHTML = output.innerHTML + 'Shut down for the day<br>';  
}


