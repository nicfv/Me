// Create elements
const tag = document.createElement('div');
const link = document.createElement('a');

// Style the tag
tag.style.display = 'block';
tag.style.width = 'max-content';
tag.style.height = 'max-content';
tag.style.position = 'absolute';
tag.style.top = '10px';
tag.style.right = '10px';
tag.style.color = 'black';
tag.style.background = 'whitesmoke';
tag.style.padding = '10px';
tag.style.font = 'bold 10px monospace';
tag.textContent = '\u2190';

// Set event listeners (expand the tag)
tag.addEventListener('mouseenter', () => {
    tag.textContent = 'Made by ';
    tag.appendChild(link);
});
tag.addEventListener('mouseleave', () => {
    tag.removeChild(link);
    tag.textContent = '\u2190';
});
tag.addEventListener('contextmenu', e => e.preventDefault());

// Reset the link styling
function linkReset() {
    link.style.color = 'blue';
    link.style.textDecoration = 'none';
}
linkReset();

// Set event listeners for the link
link.addEventListener('mouseenter', () => link.style.textDecoration = 'underline');
link.addEventListener('mouseleave', () => linkReset());
link.addEventListener('mousedown', () => link.style.color = 'red');
link.addEventListener('mouseup', () => linkReset());

// Set the text and attributes of the link
link.style.cursor = 'pointer';
link.style.background = 'transparent';
link.textContent = 'Nicolas Ventura';
link.title = 'Visit my website';
link.href = 'https://nicfv.com/';

// Append the tag onto the document body
document.body.appendChild(tag);
