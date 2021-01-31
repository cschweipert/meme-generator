const form = document
  .getElementById("form")
  .addEventListener("submit", createMeme);

  function createMeme(event) {
    alert('you clicked a button!');
  
    const imageLink = document.getElementById('imglink').value;
    const topText = document.getElementById('toptext').value;
    const bottomText = document.getElementById('bottomtext').value;
  
    let memediv = document.createElement('div');
    memediv.id = 'memediv'
    document.getElementById('output').appendChild(memediv);
  
    let topdiv = document.createElement('div');
    topdiv.id = 'topdiv';
    document.querySelector('#memediv').appendChild(topdiv);

    // var c = document.querySelector('#mainContent');
    // c.appendChild(document.createElement('div'));
  
    let bottomdiv = document.createElement('div');
    bottomdiv.id = 'bottomdiv';
    document.querySelector('#memediv').appendChild(bottomdiv);
  
    let top = document.createElement('h1');
    top.innerHTML = topText;
    top.className = 'text';
    document.getElementById('topdiv').appendChild(top);
  
    let image = document.createElement('img');
    image.src = imageLink;
    image.className = 'image';
    document.getElementById('memediv').appendChild(image);
  
    console.log(image);
  
    let bottom = document.createElement('h1');
    bottom.innerHTML = bottomText;
    bottom.className = 'text';
    document.getElementById('bottomdiv').appendChild(bottom);
  
    event.preventDefault();
  }