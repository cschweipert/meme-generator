const form = document
  .getElementById('form')
  .addEventListener('submit', createMeme);

let obj = {};
let arr = [];

function createMeme(event) {
  alert('you clicked a button!');

  const imageLink = document.getElementById('imglink').value;
  const topText = document.getElementById('toptext').value;
  const bottomText = document.getElementById('bottomtext').value;
  let id = 0;

  obj.id = id + 1;
  obj.imageLink = imageLink;
  obj.topText = topText;
  obj.bottomText = bottomText;

  arr.push(obj);
  console.log(arr);

  let output = document.querySelector('#output');

  let memediv = output.appendChild(document.createElement('div'));
  memediv.id = 'memediv';

  let top = memediv.appendChild(document.createElement('h1'));
  top.id = 'top';
  top.innerHTML = obj.topText;
  top.className = 'text';

  let image = memediv.appendChild(document.createElement('img'));
  image.src = obj.imageLink;
  image.className = 'image';

  let bottom = memediv.appendChild(document.createElement('h1'));
  bottom.id = 'bottom';
  bottom.innerHTML = obj.bottomText;
  bottom.className = 'text';

  event.preventDefault();
}
