// Select elements
const heartCountEl = document.getElementById('heartCount');
const coinCountEl = document.getElementById('coinCount');
const copyCountEl = document.getElementById('copyCount');
const historyContainer = document.querySelector('.flex-1'); 
const clearHistoryBtn = document.getElementById('clearHistoryBtn');

let heartCount = 0;
let coinCount = 100;
let copyCount = 0;

//  Handle Heart Click (Toggle system)
document.querySelectorAll('.absolute.top-3.right-3').forEach(heartBtn => {
  heartBtn.addEventListener('click', () => {
    const heartIcon = heartBtn.querySelector("i");

    if (!heartBtn.classList.contains("text-red-500")) {
      heartCount++;
      heartBtn.classList.remove("text-gray-400");
      heartBtn.classList.add("text-red-500");
      heartIcon.classList.replace("fa-light", "fa-solid");
    } else {
      heartCount--;
      heartBtn.classList.remove("text-red-500");
      heartBtn.classList.add("text-gray-400");
      heartIcon.classList.replace("fa-solid", "fa-light");
    }

    heartCountEl.textContent = heartCount;
  });
});

// 📋 Handle Copy Button Click
document.querySelectorAll('.border.border-gray-300').forEach(copyBtn => {
  copyBtn.addEventListener('click', (e) => {
    const number = e.target.closest('.bg-white').querySelector('.text-3xl').textContent;
    navigator.clipboard.writeText(number).then(() => {
      alert(`Copied: ${number}`);
      copyCount++;
      copyCountEl.textContent = copyCount;
    });
  });
});

// Handle Call Button Click
document.querySelectorAll('.bg-green-600').forEach(callBtn => {
  callBtn.addEventListener('click', (e) => {
    const card = e.target.closest('.bg-white');
    const serviceName = card.querySelector('.text-lg').textContent;
    const number = card.querySelector('.text-3xl').textContent;

    if (coinCount < 20) {
      alert("Not enough coins to make a call!");
      return;
    }

    coinCount -= 20;
    coinCountEl.textContent = coinCount;

    alert(`Calling ${serviceName} at ${number}`);

    const currentTime = new Date().toLocaleTimeString();
    const historyItem = document.createElement('div');
    historyItem.classList.add('flex', 'justify-between', 'items-center', 'text-lg', 'text-black',);
      historyItem.innerHTML = `
      <div class="flex justify-between items-center w-full">
        <div>
          <div>${serviceName}</div>
          <div class="text-gray-600 font-semibold">${number}</div>
        </div>
        <div class="text-black font-semibold">${currentTime}</div>
      </div>
    `;
    historyContainer.appendChild(historyItem);
  });

});

// 🧹 Clear History
clearHistoryBtn.addEventListener('click', () => {
  historyContainer.innerHTML = '';
});
