const div = document.createElement("div");

const sassText = 'sass',
      esText   = 'es6 syntax'

div.innerHTML = `it works with ${sassText} and ${esText}`;

document.body.appendChild(div);