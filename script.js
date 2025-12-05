document.addEventListener('DOMContentLoaded', () => {
    let lyricsContainer = document.getElementById('lyrics-container');
    let item = "bottles"; // The item being counted
    let liquid = "milk"; // The liquid
    let location = "fridge"; // The location

    for (let i = 99; i >= 0; i--) {
        const p = document.createElement('p');
        let currentItemText = item;
        let nextItemText = item;

        // Handle singular/plural for "1"
        if (i === 1) {
            currentItemText = item.slice(0, -1); // Remove 's' for singular
        }
        if (i - 1 === 1) {
            nextItemText = item.slice(0, -1);
        }

        // Apply color styling based on the count
        if (i >= 25) {
            p.classList.add('green');
        } else if (i >= 10 && i <= 24) {
            p.classList.add('yellow');
        } else if (i >= 1 && i <= 9) {
            p.classList.add('red');
        }

        if (i > 0) {
            p.innerHTML = `
                ${i} ${currentItemText} of ${liquid} on/in the ${location}, ${i} ${currentItemText} of ${liquid}!<br>
                Take one down, pass it around...<br>
                ${i - 1 === 0 ? 'No more' : (i - 1)} ${i - 1 === 0 ? item : nextItemText} of ${liquid} on/in the ${location}!
            `;
        } else {
            p.classList.add('zero-message');
            p.innerHTML = `
                ‼️ There's no more ${item} of ${liquid} on/in the ${location}, there's no more ${item} of ${liquid}. 😢 Help me now, 🏃‍♂️ to the store to get/buy 99 new ${item} of ${liquid}.
            `;
        }
        lyricsContainer.appendChild(p);
    }
});


