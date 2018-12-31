const items = [...document.querySelector('.stack__list').children];

setInterval(() => {
  const index = Math.floor(Math.random() * 6);
  const highlited = document.querySelector('.stack__item[highlited]');
  highlited && highlited.removeAttribute('highlited');
  index <= 3 && items[index].setAttribute('highlited', ''); 
}, 5000)