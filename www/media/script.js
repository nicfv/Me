// Configure MathJax to allow inline $math$
window.MathJax = {
    tex: {
        inlineMath: [['$', '$'], ['\\(', '\\)']],
        processEscapes: true,
    },
};

// Highlight code blocks
window.hljs.highlightAll();

function slugify(str = '') {
    return str
        .normalize()
        .toLowerCase()
        .trim()
        .replaceAll(/[^a-z0-9\s-]/g, '')
        .replaceAll(/\s+/g, '-')
        .replaceAll(/-+/g, '-');
}

// Add slugs to all header elements
const toc = document.getElementById('toc');
document.querySelectorAll('h1,h2,h3,h4,h5,h6').forEach(element => {
    const slug = slugify(element.textContent);
    const depth = +(element.tagName.match(/\d/)[0]);
    element.setAttribute('id', slug);
    if (toc) {
        const tocLink = document.createElement('a');
        toc.appendChild(tocLink);
        tocLink.textContent = element.textContent;
        tocLink.style.marginLeft = `${depth}rem`;
        tocLink.setAttribute('href', `#${slug}`);
    }
});
