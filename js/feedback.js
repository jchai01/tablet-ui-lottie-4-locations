setTimeout(
    () => {
        window.location.replace("home.html");
    }, 5000
);

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

// get param value for location
const l = urlParams.get('l')

let veryPoor = document.querySelector('#very-poor');
let poor = document.querySelector('#poor');
let neutral = document.querySelector('#neutral');
let good = document.querySelector('#good');
let excellent = document.querySelector('#excellent');

lottie.loadAnimation({
  container: veryPoor, // the dom element that will contain the animation
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: '../tablet_assets/lottie-icons/very-poor.json' // the path to the animation json
});

lottie.loadAnimation({
  container: poor, 
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: '../tablet_assets/lottie-icons/poor.json'
});

lottie.loadAnimation({
  container: neutral,
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: '../tablet_assets/lottie-icons/neutral.json'
});

lottie.loadAnimation({
  container: good,
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: '../tablet_assets/lottie-icons/good.json'
});

lottie.loadAnimation({
  container: excellent,
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: '../tablet_assets/lottie-icons/excellent.json'
});

veryPoor.addEventListener('click', async () => {
    data = {} // empty data required to trigger the server to read query string.

    window.location.href = "thankyou.html";
    
    // send location as l, rating as r
    await fetch('http://localhost:1234/submit?l=' + l + '&r=1', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    .then((response) => {
      console.log(response)
    });
});

poor.addEventListener('click', async () => {
    data = {}
    window.location.href = "thankyou.html";
    await fetch('http://localhost:1234/submit?l=' + l + '&r=2', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    .then((response) => {
      console.log(response)
    });
});


neutral.addEventListener('click', async () => {
    data = {}
    window.location.href = "thankyou.html";
    await fetch('http://localhost:1234/submit?l=' + l + '&r=3', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    .then((response) => {
      console.log(response)
    });
});

good.addEventListener('click', async () => {
    data = {}
    window.location.href = "thankyou.html";
    await fetch('http://localhost:1234/submit?l=' + l + '&r=4', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    .then((response) => {
      console.log(response)
    });
});

excellent.addEventListener('click', async () => {
    data = {}
    window.location.href = "thankyou.html";
    await fetch('http://localhost:1234/submit?l=' + l + '&r=5', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    .then((response) => {
      console.log(response)
    });
});

