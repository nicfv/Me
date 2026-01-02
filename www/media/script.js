document.querySelectorAll('h1,h2,h3,h4,h5,h6').forEach(element => element.setAttribute('id', element.textContent.toLowerCase().replaceAll(/\s+/g, '-')));
