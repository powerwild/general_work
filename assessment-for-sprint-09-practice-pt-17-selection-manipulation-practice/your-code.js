/*
Write JavaScript to accomplish all of the tasks below. Do not change any code in
the HTML or CSS files
*/

// Problem One
// Select the first square using its id. Add a button inside the square with the
// number 1 on it.

const boxOne = document.getElementById('problem-one');
boxOne.innerHTML = '<button>1</button>';

// Problem Two
// Select the second square using class names. Change the background color to
// orange, the text color white, and the border to 5px dashed black.

const boxTwo = document.querySelector('.two');
boxTwo.style.backgroundColor = 'orange';
boxTwo.style.color = 'white';
boxTwo.style.border = '5px dashed black';


// Problem 3
// Select all of the squares that have a class of "plus", and double their
// width. Increase the size of the font as well.
// HINT: Check the CSS file or use your Dev Tools to find the original width and
// font-size, and then double those sizes.

const plusBoxes = [...document.querySelectorAll('.plus')];
plusBoxes.forEach(el => {
    el.style.width = '100px';
    el.style.fontSize = '60px';
})

// Problem 4
// Select the fourth box. Give it an id of "problem-four". Remove the class of
// "square" and add a class "round". As a result, the item should turn a
// different color and shape due to code in the css file.

const boxFour = document.querySelector('.square.four');
boxFour.id = 'problem-four';
boxFour.removeAttribute('class');
boxFour.setAttribute('class', 'round');

// Problem 5
// Use JavaScript to remove boxes 5, 6, and 7. Can you remove multiple boxes at
// once? Think about what element selectors you could use? How could you
// manipulate attributes so that you could remove them all at once? What other
// approaches can you think of?
// NOTE: There are many possible approaches to this. Try 2-3 approaches and
// evaluate which one achieves the goal in the best way.

document.querySelector('.square.two').id = 'square-two';
const someBoxes = [...document.querySelectorAll('#root .square')];
someBoxes.filter((el, i) => {
    if (i === 3 || i === 4 || i === 5) el.remove();
})
