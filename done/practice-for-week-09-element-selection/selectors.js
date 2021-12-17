const select = () => {
    /* Write queries for each of the following */

    /* Section 1 */
    // 1. Get all seeded fruit elements
    console.log(document.body.querySelectorAll('.seed'))

    // 2. Get all seedless fruit elements
    console.log(document.body.querySelectorAll('.seedless'))

    // 3. Get first seedless fruit element
    console.log(document.body.querySelector('.seedless'));

    /* Section 2 */
    // 4. Get inner span with text "you"
    console.log(document.getElementsByTagName('span')[0]);

    // 5. Get all children of element "wrapper"
    console.log(document.getElementById('wrapper').children);

    // 6. Get all odd number list items in the list
    console.log(document.getElementsByClassName('odd'));

    // 7. Get all even number list items in the list
    console.log(document.body.querySelectorAll('ol :not(.odd)'));

    /* Section 3 */
    // 8. Get all tech companies without a class name
    console.log(document.getElementById('three').children[1].querySelector(':not(a[class])').innerText);

    // 9. Get "Amazon" list element
    console.log(document.getElementsByClassName('shopping')[0]);

    // 10. Get all unicorn list elements (not the image element)
    console.log(document.getElementsByClassName('unicorn'));
}

window.onload = select;
