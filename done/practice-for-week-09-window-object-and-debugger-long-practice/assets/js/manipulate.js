export function changeTitle() {
    // Change the title of the page to "(Your name)'s Portfolio"
    document.title = 'Caseys Portfolio';
    return;
}

export function changeHeader() {
    // Change the name in the h1 of the page to your name
    document.body.children[0].children[0].innerText = "I am Casey Spears";
    return;
}

export function changeAboutMe() {
    /* Update the first paragraph in the About Me section with a small
     passage about yourself */
    document.body.children[1].children[1].innerText = "I am learning to be a Software Engineer at App Academy."
}
