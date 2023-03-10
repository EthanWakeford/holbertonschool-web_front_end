function changeMode(size, weight, transform, background, color) {
  return () => {
    document.body.style.fontSize = size;
    document.body.style.fontWeight = weight;
    document.body.style.textTransform = transform;
    document.body.style.backgroundColor = background;
    document.body.style.color = color;
  }
}

function main() {
  spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
  darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
  screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

  let par = document.createElement('p');
  let node = document.createTextNode('Welcome Holberton!');
  par.appendChild(node);
  document.body.appendChild(par);

  let spookyButton = document.createElement('button');
  node = document.createTextNode('Spooky');
  spookyButton.appendChild(node);
  document.body.appendChild(spookyButton);
  spookyButton.onclick = () => {spooky()};

  let darkButton = document.createElement('button');
  node = document.createTextNode('Dark mode');
  darkButton.appendChild(node);
  document.body.appendChild(darkButton);
  darkButton.onclick = () => {darkMode()};

  let screamButton = document.createElement('button');
  node = document.createTextNode('Scream mode');
  screamButton.appendChild(node);
  document.body.appendChild(screamButton);
  screamButton.onclick = () => {screamMode()};
}

main();
