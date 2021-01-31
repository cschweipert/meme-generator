const form = document
  .getElementById("form")
  .addEventListener("submit", createMeme);

  let arr = [];

  function createMeme(event) {
    alert('you clicked a button!');

    const imageLink = document.getElementById('imglink').value;
    const topText = document.getElementById('toptext').value;
    const bottomText = document.getElementById('bottomtext').value;

    arr.push(imageLink);
    console.log(arr);
  

    let output = document.querySelector('#output');
  
    let memediv = output.appendChild(document.createElement('div'));
    memediv.id = 'memediv'
    
    let topdiv = memediv.appendChild(document.createElement('div'));
    topdiv.id = 'topdiv';

    let image = memediv.appendChild(document.createElement('img'));
    image.src = imageLink;
    image.className = 'image';
    
    console.log(image);
  
  
    let bottomdiv = document.createElement('div');
    bottomdiv.id = 'bottomdiv';
    document.querySelector('.image').appendChild(bottomdiv);
  
    let top = document.createElement('h1');
    top.innerHTML = topText;
    top.className = 'text';
    document.getElementById('topdiv').appendChild(top);
  
    
    let bottom = document.createElement('h1');
    bottom.innerHTML = bottomText;
    bottom.className = 'text';
    document.querySelector('.image').appendChild(bottom);
  
    event.preventDefault();
  }