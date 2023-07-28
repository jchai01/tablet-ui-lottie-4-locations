let workstations = document.querySelector('#workstations');
let pantry = document.querySelector('#pantry');
let meeting = document.querySelector('#meeting');
let lounge = document.querySelector('#lounge');
let toilets = document.querySelector('#toilets');

workstations.addEventListener('click', function() {
  window.location.href = "feedback.html?l=1";
});

pantry.addEventListener('click', function() {
  window.location.href = "feedback.html?l=2";
});

meeting.addEventListener('click', function() {
  window.location.href = "feedback.html?l=3";
});

lounge.addEventListener('click', function() {
  window.location.href = "feedback.html?l=4";
});

toilets.addEventListener('click', function() {
  window.location.href = "feedback.html?l=5";
});
