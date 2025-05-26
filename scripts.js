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

document.addEventListener('DOMContentLoaded', fetchCompletionCount);