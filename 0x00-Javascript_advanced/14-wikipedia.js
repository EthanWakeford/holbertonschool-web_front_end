function createElement(data) {
  let par = document.createElement('p');
  let text = document.createTextNode(data);

  par.appendChild(text);
  document.body.appendChild(par);
}

function queryWikipedia(callback) {
  const req = new XMLHttpRequest();
  req.open('get', 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*')
  req.onreadystatechange = () {
    callback(req.responseText);
  }
  req.send();
}

queryWikipedia(createElement);
