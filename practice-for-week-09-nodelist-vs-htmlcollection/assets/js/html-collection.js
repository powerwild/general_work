export default () => {
  const bodyChildElements = document.body.children; // HTMLCollection [div]
  // console.log(bodyChildElements[0].children);

  const div = bodyChildElements[0];
  div.innerText = "Goodbye";
  const divChildElements = div.children; // HTMLCollection [span]
  const helloWorld = div.innerText; // Hello World! Yes!    <-- NOT Hello World!
  const span = divChildElements[0]; // <span>Yes!</span>
  // debugger
};
