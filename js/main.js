
// When someone hits the button in the switch, remove the current state class (on/off), and apply the opposite class (on/off)

document.addEventListener('DOMContentLoaded', function() {
  var lightSwitch = document.querySelector('button');
  var body = document.querySelector('body');
  var status = document.querySelector('.status');

  lightSwitch.addEventListener('click', function(e) {
    if (lightSwitch.className === 'switch on') {
      lightSwitch.className = 'switch off';
      body.className = 'dark';
      status.innerHTML = "Hey, who turned off the lights?";
    } else {
      lightSwitch.className = 'switch on';
      body.className = 'light';
      status.innerHTML = "It's so bright in here!"
    }
  });
});
