window.addEventListener("DOMContentLoaded", () => {
  const circleButton = document.querySelector('#make-circle-blue');
  const blueCircle = document.querySelector('#blue-border-circle');
  if (document.cookie) document.querySelector('#fav-cookie').value = document.cookie.split('=')[1];
  circleButton.addEventListener('click', e => {
    e.stopPropagation();
    blueCircle.setAttribute('class', 'blue-fill');
  })
  const checkBox = document.querySelector('#will-not-check');
  checkBox.addEventListener('click', e => {
    e.preventDefault();
  })
  const noBananas = document.querySelector('#change-bananas-status');
  function noMoreBananas(e) {
    document.querySelector('#bananas-div').innerHTML = 'No Bananas Today!';
    const newPic = document.querySelector('#bananas-image-div');
    newPic.innerHTML = '<img src=./images/no-bananas.png>';
    noBananas.removeEventListener('click', noMoreBananas);
  }
  noBananas.addEventListener('click', noMoreBananas);
  const cookieButton = document.querySelector('#store-cookie');
  cookieButton.addEventListener('click', e => {
    const cookie = document.querySelector('#fav-cookie').value;
    document.cookie = `favCookie=${cookie}; max-age=1800`;
  })

  const pieButton = document.querySelector('#save-pie');
  pieButton.addEventListener('click', e => {
    if ([...document.querySelectorAll('.pie-list li')].length < 5) {
      if (document.querySelector('#pie-type').value) {
        const pie = document.querySelector('#pie-type');
        document.querySelector('.pie-list').innerHTML += `<li>${pie.value}</li>`;
        pie.value = '';
      }
    }
  })

  const iceCream = document.querySelector('#save-ice-cream');
  const newFav = document.querySelector('#fav-ice-cream');
  if (localStorage.getItem('favIceCream')) newFav.value = localStorage.getItem('favIceCream');
  iceCream.addEventListener('click', e => {
    localStorage.setItem('favIceCream', `${newFav.value}`);
    newFav.value = '';
  })

  const appleButton = document.querySelector('#add-apple');
  const orangeButton = document.querySelector('#add-orange');
  const emptyButton = document.querySelector('#reset-basket');
  const basket = document.querySelector('#fruit-storage');
  const quantity = document.querySelector('#total-fruit');
  let totalFruit = 0;
  document.querySelector('#fruit-buttons-div')
    .addEventListener('click', e => {
      if (totalFruit < 25 && e.target !== emptyButton) {
        if (e.target === appleButton) basket.innerHTML += `A`;
        else if (e.target === orangeButton) basket.innerHTML += `O`;
        totalFruit += 1;
        quantity.innerHTML = `${totalFruit}`;
      }
      if (e.target === emptyButton) {
        basket.innerHTML = null;
        totalFruit = 0;
        quantity.innerHTML = `${totalFruit}`;
      }
    })

    const bubbleButton = document.querySelector('#bubble-maker');
    bubbleButton.addEventListener('click', e => {
      e.stopPropagation();
    })

    const resultArea = document.querySelector('#results-area');
    const fetchButton = document.querySelector('#dictionary-fetch');
    async function fetching(e) {
      const wordFetch = await fetch('https://api.dictionaryapi.dev/api/v2/entries/en/dictionary');
      const wordBody = await wordFetch.json();
      const ul = document.createElement('ul');
      ul.innerHTML += `<li>Word: ${wordBody[0]['word']}</li>`;
      ul.innerHTML +=  `<li>Origin: ${wordBody[0].origin}</li>`;
      ul.innerHTML +=  `<li>Definition: ${wordBody[0].meanings[0].definitions[0].definition}</li>`;
      ul.innerHTML +=  `<li>Example: ${wordBody[0].meanings[0].definitions[0].example}</li>`;
      resultArea.append(ul);
      fetchButton.removeEventListener('click', fetching);
    }
    fetchButton.addEventListener('click', fetching);
});
