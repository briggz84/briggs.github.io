const backgrounds = [
    "https://i.giphy.com/26BROrSHlmyzzHf3i.webp",
    "https://i.giphy.com/z2POQZ2t8s5Gzp4C7r.webp",
    //"https://i.giphy.com/3bc8pP1rVdfgN1uoMV.webp",
    "https://i.giphy.com/dB66K4Kywc8gPVh6A7.webp",
    //"https://i.giphy.com/cjojgtiigyloyCg3r9.webp",
    "https://i.giphy.com/jHd42rXmqDbJatVILS.webp",
    "https://i.giphy.com/NXEuPHCOiJujANVznL.webp",
    "https://i.giphy.com/qsk5nSgvBFa1IDnado.webp",
    "https://i.giphy.com/QAbHzYf8EhhU7yluFb.webp",
];

const randomBg = backgrounds[Math.floor(Math.random() * backgrounds.length)];

document.querySelector('.ascii-text').style.backgroundImage = `url(${randomBg})`;

const namespace = 'al2qPsqUVtRPWxHi';
const key = 'T7p1OOrVXOCkZgT5';

function fetchCompletionCount() {
  fetch(`https://abacus.jasoncameron.dev/get/${namespace}/${key}`)
    .then(res => res.json())
    .then(data => {
      document.getElementById("completionCount").innerHTML = 
        `<pre>Total completions: ${data.value}</pre>`;
    })
    .catch(err => {
      console.error("Failed to fetch count", err);
      document.getElementById("completionCount").textContent = 
        "Completion data unavailable";
    });
}

function incrementCompletionCount() {
  fetch(`https://abacus.jasoncameron.dev/hit/${namespace}/${key}`)
    .then(res => {
      if (!res.ok) {
        throw new Error(`Failed to increment count: ${res.status}`);
      }
      return res.json();
    })
    .then(data => {
      console.log('Increment success:', data);
      fetchCompletionCount();
    })
    .catch(err => {
      console.error('Increment error:', err);
    });
}

function showFireworks() {
    document.getElementById("fireworks").style.display = "block";
}

document.addEventListener('DOMContentLoaded', fetchCompletionCount);