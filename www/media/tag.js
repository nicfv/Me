const tag = document.createElement('div');
const link = document.createElement('a');

tag.style.position = 'absolute';
tag.style.top = '10px';
tag.style.right = '10px';
tag.style.color = 'black';
tag.style.background = 'whitesmoke';
tag.style.padding = '10px';
tag.style.font = 'bold 10px monospace';
// tag.style.transition = 'max-width 0.5s linear';
// tag.style.overflow = 'hidden';
// tag.style.whiteSpace = 'nowrap';
// tag.style.maxWidth = '20px';
// tag.addEventListener('mouseenter', () => tag.style.maxWidth = '100%');
// tag.addEventListener('mouseleave', () => tag.style.maxWidth = '20px');
tag.addEventListener('mouseenter', () => {
    tag.textContent = 'Made by ';
    tag.appendChild(link);
});
tag.addEventListener('mouseleave', () => {
    tag.removeChild(link);
    tag.textContent = '\u2190';
});
tag.addEventListener('contextmenu', e => e.preventDefault());

function linkReset() {
    link.style.color = 'blue';
    link.style.textDecoration = 'none';
}
linkReset();
link.addEventListener('mouseenter', () => link.style.textDecoration = 'underline');
link.addEventListener('mouseleave', () => linkReset());
link.addEventListener('mousedown', () => link.style.color = 'red');
link.addEventListener('mouseup', () => linkReset());

tag.textContent = '\u2190';
link.textContent = 'Nicolas Ventura';
link.href = 'https://nicfv.com/';
link.target = '_blank';

document.body.appendChild(tag);
