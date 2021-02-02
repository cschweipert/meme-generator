window.onload = function () {
    const form = document.getElementById('form');
    const output = document.getElementById('output');
    
    //get it from localStorage
    let savedMemes = JSON.parse(localStorage.getItem('memes')) || [];
    for (let i = 0; i < savedMemes.length; i++) {
      let memediv = document.createElement('div');
      memediv.id = 'memediv';
  
      let top = memediv.appendChild(document.createElement('h1'));
      top.id = 'top';
      top.innerHTML = savedMemes[i].topText;
      top.className = 'text';
      
      let image = memediv.appendChild(document.createElement('img'));
      image.src = savedMemes[i].imageLink;
      image.className = 'image';
  
      let bottom = memediv.appendChild(document.createElement('h1'));
      bottom.id = 'bottom';
      bottom.innerHTML = savedMemes[i].bottomText;
      bottom.className = 'text';
  
      let deleteButton = memediv.appendChild(document.createElement('button'));
      deleteButton.className = 'delete-button';
      deleteButton.innerHTML = 'x';
      deleteButton.addEventListener('click', deleteMeme);
  
      output.appendChild(memediv);
    }
  
    form.addEventListener('submit', function (event) {
      event.preventDefault();
  
      const imageLink = document.getElementById('imglink').value;
      const topText = document.getElementById('toptext').value;
      const bottomText = document.getElementById('bottomtext').value;
  
      let output = document.querySelector('#output');
  
      let memediv = output.appendChild(document.createElement('div'));
      memediv.id = 'memediv';
  
      let top = memediv.appendChild(document.createElement('h1'));
      top.id = 'top';
      top.innerHTML = topText;
      top.className = 'text';
  
      let image = memediv.appendChild(document.createElement('img'));
      image.src = imageLink;
      image.className = 'image';
  
      let bottom = memediv.appendChild(document.createElement('h1'));
      bottom.id = 'bottom';
      bottom.innerHTML = bottomText;
      bottom.className = 'text';
  
      let deleteButton = memediv.appendChild(document.createElement('button'));
      deleteButton.className = 'delete-button';
      deleteButton.innerHTML = 'x';
      deleteButton.addEventListener('click', deleteMeme);
  
      form.reset();
        
      //save it to localStorage
      savedMemes.push({
        imageLink: imageLink,
        topText: topText,
        bottomText: bottomText,
      });
      localStorage.setItem('memes', JSON.stringify(savedMemes));
    });
  };

  function deleteMeme(event) {
    // alert('you deleted a meme');
  
    let output = document.querySelector('#output');
    let del = document.getElementById('memediv');
    output.removeChild(del);
  }
  