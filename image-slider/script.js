/*
Attempting to make an image slider with the fewest divs, css, js.
This fun (dumb) approach using array push, shift, unshift and pop so that
the slider translateX css val is always the 0th index of 'positions' array
whether we are moving forward or backward.
 */
const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');

// accumulate an array of x translation positions
let positions = [0];
for (let i = 0; i < images.length - 1; i++) {
    let val = positions[i];
    val -= slides.offsetWidth;
    positions.push(val);
}

function handleClick(event) {
    const eventTargetAction = event.target.closest('[data-action]');
    if (!eventTargetAction) return;

    const action = eventTargetAction.dataset.action;

    if (action === 'next') {
        // rotate the translation positions array forward
        const first = positions.shift();
        positions.push(first);
    }

    if (action === 'prev') {
        // rotate the translation positions array backward
        const last = positions.pop();
        positions.unshift(last);
    }

    // update the transform on the slides div with the new Oth value
    slides.style.transform = `translateX(${positions[0]}px)`;
}

document.addEventListener('click', handleClick);
