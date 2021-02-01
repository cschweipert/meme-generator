const form = document
  .getElementById('form')
  .addEventListener('submit', createMeme);

let imageLink;
let topText;
let bottomText;

// const imageLink = document.getElementById('imglink').value;
// const topText = document.getElementById('toptext').value;
// const bottomText = document.getElementById('bottomtext').value;

function myReset() {
  form.reset();
}

let obj = {};
let arr = [];

function createMeme(event) {
  // alert('you clicked a button!');

  // const imageLink = document.getElementById('imglink').value;
  // const topText = document.getElementById('toptext').value;
  // const bottomText = document.getElementById('bottomtext').value;

  imageLink = document.getElementById('imglink').value;
  topText = document.getElementById('toptext').value;
  bottomText = document.getElementById('bottomtext').value;

  obj.imageLink = imageLink;
  obj.topText = topText;
  obj.bottomText = bottomText;

  localStorage.setItem('imageLink', imageLink);
  localStorage.setItem('topText', topText);
  localStorage.setItem('bottomText', bottomText);

  let useLink = localStorage.getItem('imageLink');

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
  image.src = useLink;
  image.className = 'image';

  let bottom = memediv.appendChild(document.createElement('h1'));
  bottom.id = 'bottom';
  bottom.innerHTML = obj.bottomText;
  bottom.className = 'text';

  let deleteButton = memediv.appendChild(document.createElement('button'));
  deleteButton.className = 'delete-button';
  deleteButton.innerHTML = 'x';
  deleteButton.addEventListener('click', deleteMeme);

  event.preventDefault();
}

function deleteMeme(event) {
  // alert('you deleted a meme');

  let output = document.querySelector('#output');
  let del = document.getElementById('memediv');
  output.removeChild(del);
}
